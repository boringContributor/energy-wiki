"use client";

import { useMemo, useState } from "react";

import { fmt } from "./i18n";

import { FigureShell, Segmented, Slider, L, tf, tr, type FigureProps } from "./ui";

/* ------------------------------------------------------------------ *
 * Dynamischer Tarif
 * ------------------------------------------------------------------ */

/** Day-ahead prices of a typical winter weekday, €/MWh. */
const SPOT = [
  95, 88, 82, 80, 84, 96, 118, 135, 128, 105, 78, 52, 38, 35, 44, 68, 102, 138,
  152, 141, 122, 110, 104, 98,
];

/** Household base load per hour in kWh, roughly an H0 profile. */
const BASE_LOAD = [
  0.22, 0.19, 0.18, 0.18, 0.2, 0.28, 0.42, 0.52, 0.48, 0.42, 0.4, 0.44, 0.52,
  0.44, 0.38, 0.4, 0.52, 0.68, 0.78, 0.74, 0.62, 0.48, 0.36, 0.28,
];

const ADDER = 20; // ct/kWh brutto: Netz, Umlagen, Steuern, Marge
const FIX_TARIF = 32; // ct/kWh brutto im Festpreistarif
const CHARGE_KWH = 11;
const CHARGE_HOURS = 3;

export function DynamischerTarifSimulator({ locale }: FigureProps) {
  const { num, euro } = fmt(locale);
  const [start, setStart] = useState(12);
  const [laden, setLaden] = useState<"an" | "aus">("an");

  const model = useMemo(() => {
    const perHour = CHARGE_KWH / CHARGE_HOURS;
    const window = new Set(
      Array.from({ length: CHARGE_HOURS }, (_, i) => (start + i) % 24),
    );

    const load = BASE_LOAD.map(
      (v, h) => v + (laden === "an" && window.has(h) ? perHour : 0),
    );
    const price = SPOT.map((p) => p / 10 + ADDER); // ct/kWh
    const dyn = load.reduce((s, l, h) => s + l * price[h], 0) / 100;
    const fix = load.reduce((s, l) => s + l * FIX_TARIF, 0) / 100;

    return { window, load, price, dyn, fix, diff: fix - dyn };
  }, [start, laden]);

  const maxPrice = Math.max(...model.price);
  const minPrice = Math.min(...model.price);

  return (
    <FigureShell
      locale={locale}
      title={tr(locale, "Ein Tag im dynamischen Tarif")}
      hint={tr(locale, "Börsenpreis je Stunde + feste Bestandteile")}
      interactive
      footer="Der Arbeitspreis folgt dem Day-Ahead-Markt der Strombörse; Netzentgelte, Umlagen, Steuern und die Marge des Lieferanten bleiben konstant. Deshalb schwankt der Endpreis nie so stark wie die Börse selbst – und wird nur selten negativ."
    >
      <div className="grid gap-4 @md:grid-cols-2">
        <Slider
          label={tr(locale, "Ladestart Elektroauto")}
          value={start}
          onChange={setStart}
          min={0}
          max={23}
          step={1}
          display={`${String(start).padStart(2, "0")}:00 – ${String((start + CHARGE_HOURS) % 24).padStart(2, "0")}:00`}
        />
        <Segmented
          label={tr(locale, "Ladevorgang")}
          options={[
            { value: "an", label: `11 kWh laden` },
            { value: "aus", label: tr(locale, "nur Grundlast") },
          ]}
          value={laden}
          onChange={setLaden}
        />
      </div>

      <div className="mt-6">
        <div className="flex h-44 items-end gap-[3px]">
          {model.price.map((p, h) => {
            const inWindow = laden === "an" && model.window.has(h);
            const height = ((p - minPrice + 4) / (maxPrice - minPrice + 6)) * 100;
            return (
              <div
                key={h}
                className="group relative flex flex-1 flex-col justify-end"
                style={{ height: "100%" }}
              >
                <div
                  className="w-full rounded-t-[3px] transition-all duration-300"
                  style={{
                    height: `${height}%`,
                    background: inWindow
                      ? "var(--accent)"
                      : p > FIX_TARIF
                        ? "var(--waerme)"
                        : "var(--border-strong)",
                    opacity: inWindow ? 1 : 0.75,
                  }}
                />
                <span className="pointer-events-none absolute -top-7 left-1/2 z-10 hidden -translate-x-1/2 whitespace-nowrap rounded bg-fg px-1.5 py-0.5 font-mono text-2xs text-bg group-hover:block">
                  {num(p, 1)} ct
                </span>
              </div>
            );
          })}
        </div>
        <div className="mt-1.5 flex justify-between font-mono text-2xs text-fg-subtle">
          {[0, 6, 12, 18, 23].map((h) => (
            <span key={h}>{String(h).padStart(2, "0")}</span>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-2xs text-fg-subtle">
          <LegendDot color="var(--accent)" label={tr(locale, "Ladefenster")} />
          <LegendDot
            color="var(--waerme)"
            label={tf(locale, "teurer als der Festpreis ({0} ct/kWh)", FIX_TARIF)}
          />
          <LegendDot color="var(--border-strong)" label={tr(locale, "günstiger")} />
        </div>
      </div>

      <div className="mt-6 grid gap-3 @md:grid-cols-3">
        <Cell label={tr(locale, "Dynamischer Tarif")} value={euro(model.dyn)} accent />
        <Cell label={`Festpreis ${FIX_TARIF} ct/kWh`} value={euro(model.fix)} />
        <Cell
          label={model.diff >= 0 ? "Ersparnis an diesem Tag" : "Mehrkosten"}
          value={`${model.diff >= 0 ? "−" : "+"} ${euro(Math.abs(model.diff))}`}
          tone={model.diff >= 0 ? "var(--accent)" : "var(--waerme)"}
        />
      </div>
    </FigureShell>
  );
}

/* ------------------------------------------------------------------ *
 * SLP vs. RLM
 * ------------------------------------------------------------------ */

export function LastprofilChart({ locale }: FigureProps) {
  const { num } = fmt(locale);
  const [mode, setMode] = useState<"slp" | "rlm">("slp");

  const slp = BASE_LOAD;
  // A small workshop: machines start at 06:00, lunch break, hard stop at 17:00.
  const rlm = [
    0.4, 0.4, 0.38, 0.38, 0.4, 0.9, 3.8, 5.2, 5.6, 4.1, 5.9, 5.4, 2.1, 4.8, 5.5,
    5.1, 4.4, 1.2, 0.6, 0.5, 0.45, 0.42, 0.4, 0.4,
  ];
  const data = mode === "slp" ? slp : rlm;
  const max = Math.max(...data);
  const points = data
    .map((v, i) => `${(i / 23) * 100},${100 - (v / max) * 92}`)
    .join(" ");

  return (
    <FigureShell
      locale={locale}
      title={tr(locale, "Standardlastprofil oder gemessener Lastgang?")}
      hint={tr(locale, "Wie der Verbrauch über den Tag verteilt wird")}
      interactive
      footer="Bis 100.000 kWh im Jahr rechnet der Markt mit einem Standardlastprofil (SLP): Der Jahresverbrauch wird nach einer statistischen Kurve auf die Stunden verteilt. Darüber – und bei jedem Kunden mit Leistungsmessung – zählt der tatsächlich gemessene Lastgang (RLM) im Viertelstundentakt."
    >
      <Segmented
        options={[
          { value: "slp", label: tr(locale, "SLP · Haushalt") },
          { value: "rlm", label: tr(locale, "RLM · Betrieb") },
        ]}
        value={mode}
        onChange={setMode}
      />

      <div className="mt-5 overflow-hidden rounded-xl border border-border-base bg-surface-2 p-4">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-40 w-full">
          {[25, 50, 75].map((y) => (
            <line
              key={y}
              x1="0"
              x2="100"
              y1={y}
              y2={y}
              stroke="var(--border)"
              strokeWidth="0.4"
            />
          ))}
          <polyline
            points={points}
            fill="none"
            stroke={mode === "slp" ? "var(--accent)" : "var(--markt)"}
            strokeWidth="1.4"
            strokeLinejoin="round"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
          <polygon
            points={`0,100 ${points} 100,100`}
            fill={mode === "slp" ? "var(--accent)" : "var(--markt)"}
            opacity="0.1"
          />
        </svg>
        <div className="mt-2 flex justify-between font-mono text-2xs text-fg-subtle">
          <span>00:00</span>
          <span>06:00</span>
          <span>12:00</span>
          <span>18:00</span>
          <span>24:00</span>
        </div>
      </div>

      <div className="mt-4 grid gap-3 @md:grid-cols-3">
        <Cell
          label={tr(locale, "Tagesverbrauch")}
          value={`${num(data.reduce((a, b) => a + b, 0), 1)} kWh`}
        />
        <Cell label={tr(locale, "Spitzenlast")} value={`${num(max, 1)} kW`} />
        <Cell
          label={tr(locale, "Messung")}
          value={mode === "slp" ? "1× im Jahr" : "alle 15 Minuten"}
        />
      </div>
    </FigureShell>
  );
}

/* ------------------------------------------------------------------ *
 * CO₂-Preispfad
 * ------------------------------------------------------------------ */

const CO2_PATH = [
  { year: "2021", min: 25, max: 25, kind: "fix" },
  { year: "2022", min: 30, max: 30, kind: "fix" },
  { year: "2023", min: 30, max: 30, kind: "fix" },
  { year: "2024", min: 45, max: 45, kind: "fix" },
  { year: "2025", min: 55, max: 55, kind: "fix" },
  { year: "2026", min: 55, max: 65, kind: "korridor" },
  { year: "2027", min: 55, max: 65, kind: "korridor" },
  { year: "2028", min: 60, max: 95, kind: "markt" },
] as const;

export function Co2PreisPfad({ locale }: FigureProps) {
  const max = 100;
  return (
    <FigureShell
      locale={locale}
      title={tr(locale, "Der CO₂-Preis auf Brennstoffe")}
      hint={tr(locale, "Euro je Tonne CO₂, nationaler Emissionshandel (BEHG)")}
      footer="2021 bis 2025 galten feste Preise. 2026 und 2027 werden die Zertifikate versteigert – innerhalb eines Korridors von 55 bis 65 €/t. Ab 2028 löst der europäische Emissionshandel ETS 2 das nationale System ab, der Preis bildet sich dann frei am Markt; der Balken für 2028 zeigt eine Bandbreite gängiger Prognosen, keinen festgelegten Wert."
    >
      <div className="flex h-48 items-end gap-2 @md:gap-3">
        {L(locale, CO2_PATH).map((p) => {
          const bottom = (p.min / max) * 100;
          const height = ((p.max - p.min) / max) * 100;
          return (
            <div key={p.year} className="flex flex-1 flex-col justify-end">
              <div className="relative w-full" style={{ height: "100%" }}>
                <div
                  className="absolute inset-x-0 bottom-0 rounded-t-md transition-all"
                  style={{
                    height: `${bottom}%`,
                    background:
                      p.kind === "fix"
                        ? "var(--border-strong)"
                        : "var(--waerme)",
                    opacity: p.kind === "markt" ? 0.35 : 1,
                  }}
                />
                {height > 0 && (
                  <div
                    className="absolute inset-x-0 rounded-t-md border-t-2 border-dashed"
                    style={{
                      bottom: `${bottom}%`,
                      height: `${height}%`,
                      background: "var(--waerme-soft)",
                      borderColor: "var(--waerme)",
                    }}
                  />
                )}
                <span className="absolute inset-x-0 text-center font-mono text-2xs text-fg-muted"
                  style={{ bottom: `calc(${bottom + height}% + 4px)` }}>
                  {p.min === p.max ? p.min : `${p.min}–${p.max}`}
                </span>
              </div>
              <span className="mt-2 text-center font-mono text-2xs text-fg-subtle">
                {p.year}
              </span>
            </div>
          );
        })}
      </div>
      <p className="mt-4 text-xs text-fg-subtle">
        {tr(
          locale,
          "Erdgas trägt rund 0,182 kg CO₂ je Kilowattstunde. Bei 65 €/t sind das 1,18 ct/kWh netto – oder 1,41 ct/kWh mit Umsatzsteuer.",
        )}
      </p>
    </FigureShell>
  );
}

/* ------------------------------------------------------------------ *
 * Was ist eine Kilowattstunde?
 * ------------------------------------------------------------------ */

const KWH_THINGS = [
  { icon: "💡", label: "LED-Lampe (9 W)", value: "111 Stunden Licht" },
  { icon: "☕", label: "Kaffeemaschine", value: "rund 10 Kannen" },
  { icon: "🚗", label: "Elektroauto", value: "5–6 Kilometer" },
  { icon: "🧺", label: "Waschmaschine 60 °C", value: "eine knappe Ladung" },
  { icon: "📺", label: "Fernseher (100 W)", value: "10 Stunden" },
  { icon: "🚿", label: "Warmwasser", value: "rund 25 Liter auf 40 °C" },
];

export function KilowattstundeVergleich({ locale }: FigureProps) {
  return (
    <FigureShell
      locale={locale}
      title={tr(locale, "Eine Kilowattstunde – wie viel ist das?")}
      hint={tr(locale, "Anhaltspunkte, keine Messwerte")}
    >
      <ul className="grid gap-3 @md:grid-cols-2 @2xl:grid-cols-3">
        {L(locale, KWH_THINGS).map((thing) => (
          <li
            key={thing.label}
            className="flex items-center gap-3 rounded-xl border border-border-base bg-surface-2 p-3"
          >
            <span aria-hidden className="text-xl">
              {thing.icon}
            </span>
            <span className="min-w-0">
              <span className="block text-xs text-fg-subtle">{thing.label}</span>
              <span className="block text-sm font-medium text-fg">
                {thing.value}
              </span>
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs leading-6 text-fg-subtle">
        {tr(
          locale,
          "Ein Vier-Personen-Haushalt verbraucht rund 4.000 kWh Strom im Jahr, eine Gasheizung im Einfamilienhaus 15.000 bis 25.000 kWh Wärme.",
        )}
      </p>
    </FigureShell>
  );
}

/* ------------------------------------------------------------------ */

function Cell({
  label,
  value,
  accent,
  tone,
}: {
  label: string;
  value: string;
  accent?: boolean;
  tone?: string;
}) {
  return (
    <div
      className="rounded-xl border px-3 py-2.5"
      style={{
        borderColor: accent
          ? "color-mix(in srgb, var(--accent) 30%, transparent)"
          : "var(--border)",
        background: accent ? "var(--accent-soft)" : "var(--surface-2)",
      }}
    >
      <p className="text-2xs uppercase tracking-[0.08em] text-fg-subtle">
        {label}
      </p>
      <p
        className="mt-0.5 font-mono text-base font-semibold tabular-nums"
        style={{ color: tone ?? (accent ? "var(--accent)" : "var(--fg)") }}
      >
        {value}
      </p>
    </div>
  );
}

function LegendDot({ color, label }: { color: string; label: string }) {
  return (
    <span className="flex items-center gap-1.5">
      <span
        aria-hidden
        className="size-2 rounded-sm"
        style={{ background: color }}
      />
      {label}
    </span>
  );
}
