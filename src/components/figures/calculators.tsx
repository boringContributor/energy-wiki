"use client";

import { useMemo, useState } from "react";

import { euro, num } from "@/lib/utils";

import { FigureShell, Legend, ResultRow, Segmented, Slider, StackBar } from "./ui";

/* ------------------------------------------------------------------ *
 * Shared assumptions
 * All figures below are illustrative model values for a typical German
 * household in 2026. Regulated components use the published 2026 rates;
 * procurement, margin and grid fees are realistic averages, not a quote.
 * ------------------------------------------------------------------ */

const KONZESSION_STROM = {
  "25": 1.32,
  "100": 1.59,
  "500": 1.99,
  "500+": 2.39,
} as const;

const KONZESSION_GAS_HEIZ = {
  "25": 0.22,
  "100": 0.27,
  "500": 0.33,
  "500+": 0.4,
} as const;

type Gemeinde = keyof typeof KONZESSION_STROM;

const GEMEINDE_OPTIONS: { value: Gemeinde; label: string }[] = [
  { value: "25", label: "≤ 25 Tsd." },
  { value: "100", label: "≤ 100 Tsd." },
  { value: "500", label: "≤ 500 Tsd." },
  { value: "500+", label: "> 500 Tsd." },
];

const C = {
  beschaffung: "var(--accent)",
  netz: "var(--wasser)",
  umlagen: "var(--markt)",
  steuer: "var(--waerme)",
  konzession: "var(--recht)",
  fix: "var(--strom)",
  mwst: "var(--fg-subtle)",
  wasser: "var(--wasser)",
  abwasser: "var(--gas)",
};

const ct = (v: number) => num(v, 2);

/* ------------------------------------------------------------------ *
 * Strompreis
 * ------------------------------------------------------------------ */

export function StrompreisStack() {
  const [kwh, setKwh] = useState(3500);
  const [gemeinde, setGemeinde] = useState<Gemeinde>("100");
  const [active, setActive] = useState<string | null>(null);

  const model = useMemo(() => {
    const grundpreis = 120; // €/a Vertrieb
    const messung = 20; // €/a grundzuständiger Messstellenbetrieb, mME
    const fix = ((grundpreis + messung) * 100) / kwh;

    const parts = [
      {
        key: "fix",
        label: "Grundpreis & Messstellenbetrieb",
        value: fix,
        color: C.fix,
        note: `${euro(grundpreis + messung, 0)}/Jahr fix`,
      },
      {
        key: "beschaffung",
        label: "Beschaffung & Vertrieb",
        value: 11.8,
        color: C.beschaffung,
      },
      { key: "netz", label: "Netzentgelt (Arbeitsanteil)", value: 8.8, color: C.netz },
      { key: "kwkg", label: "KWKG-Umlage", value: 0.446, color: C.umlagen },
      {
        key: "offshore",
        label: "Offshore-Netzumlage",
        value: 0.941,
        color: C.umlagen,
      },
      {
        key: "bnn",
        label: "Aufschlag besondere Netznutzung",
        value: 1.559,
        color: C.umlagen,
        note: "früher § 19 StromNEV",
      },
      {
        key: "konzession",
        label: "Konzessionsabgabe",
        value: KONZESSION_STROM[gemeinde],
        color: C.konzession,
      },
      { key: "stromsteuer", label: "Stromsteuer", value: 2.05, color: C.steuer },
    ];

    const netto = parts.reduce((s, p) => s + p.value, 0);
    const mwst = netto * 0.19;
    return {
      parts: [
        ...parts,
        { key: "mwst", label: "Umsatzsteuer 19 %", value: mwst, color: C.mwst },
      ],
      netto,
      brutto: netto + mwst,
    };
  }, [kwh, gemeinde]);

  return (
    <FigureShell
      title="Strompreis zerlegt"
      hint="Haushalt, ct/kWh brutto"
      interactive
      footer="Modellwerte für 2026. Regulierte Bestandteile (Umlagen, Stromsteuer, Konzessionsabgabe) sind die veröffentlichten Sätze; Beschaffung, Vertrieb und Netzentgelt sind realistische Durchschnitte und je Anbieter und Netzgebiet verschieden."
    >
      <div className="grid gap-4 @md:grid-cols-2">
        <Slider
          label="Jahresverbrauch"
          value={kwh}
          onChange={setKwh}
          min={800}
          max={12000}
          step={100}
          display={`${num(kwh)} kWh`}
        />
        <Segmented
          label="Gemeindegröße (Konzessionsabgabe)"
          options={GEMEINDE_OPTIONS}
          value={gemeinde}
          onChange={setGemeinde}
        />
      </div>

      <div className="mt-5">
        <StackBar
          parts={model.parts}
          total={model.brutto}
          activeKey={active}
          onHover={setActive}
        />
        <Legend
          parts={model.parts}
          total={model.brutto}
          unit="ct/kWh"
          activeKey={active}
          onHover={setActive}
          format={ct}
        />
      </div>

      <div className="mt-4 grid gap-3 @md:grid-cols-3">
        <Metric label="Netto" value={`${ct(model.netto)} ct/kWh`} />
        <Metric label="Brutto" value={`${ct(model.brutto)} ct/kWh`} accent />
        <Metric
          label="Jahreskosten"
          value={euro((model.brutto * kwh) / 100, 0)}
        />
      </div>
    </FigureShell>
  );
}

/* ------------------------------------------------------------------ *
 * Gaspreis
 * ------------------------------------------------------------------ */

export function GaspreisStack() {
  const [kwh, setKwh] = useState(15000);
  const [co2, setCo2] = useState(65);
  const [gemeinde, setGemeinde] = useState<Gemeinde>("100");
  const [active, setActive] = useState<string | null>(null);

  const model = useMemo(() => {
    const grundpreis = 150;
    const messung = 15;
    const fix = ((grundpreis + messung) * 100) / kwh;
    // BEHG-Emissionsfaktor Erdgas ≈ 0,182 kg CO₂ je kWh
    const co2Ct = (co2 * 0.18216) / 10;

    const parts = [
      {
        key: "fix",
        label: "Grundpreis & Messstellenbetrieb",
        value: fix,
        color: C.fix,
        note: `${euro(grundpreis + messung, 0)}/Jahr fix`,
      },
      { key: "beschaffung", label: "Beschaffung & Vertrieb", value: 4.2, color: C.beschaffung },
      { key: "netz", label: "Netzentgelt (Arbeitsanteil)", value: 1.9, color: C.netz },
      {
        key: "bilanz",
        label: "Bilanzierungsumlage (SLP)",
        value: 0.06,
        color: C.umlagen,
        note: "jährlich neu festgelegt",
      },
      {
        key: "co2",
        label: "CO₂-Preis (BEHG)",
        value: co2Ct,
        color: C.steuer,
        note: `${co2} €/t × 0,182 kg/kWh`,
      },
      { key: "energiesteuer", label: "Energiesteuer (Erdgassteuer)", value: 0.55, color: C.steuer },
      {
        key: "konzession",
        label: "Konzessionsabgabe (Heizgas)",
        value: KONZESSION_GAS_HEIZ[gemeinde],
        color: C.konzession,
      },
    ];

    const netto = parts.reduce((s, p) => s + p.value, 0);
    const mwst = netto * 0.19;
    return {
      parts: [
        ...parts,
        { key: "mwst", label: "Umsatzsteuer 19 %", value: mwst, color: C.mwst },
      ],
      netto,
      brutto: netto + mwst,
    };
  }, [kwh, co2, gemeinde]);

  return (
    <FigureShell
      title="Gaspreis zerlegt"
      hint="Haushalt mit Gasheizung, ct/kWh brutto"
      interactive
      footer="Die Gasspeicherumlage entfällt seit dem 1. Januar 2026 – der Bund trägt diese Kosten. Der CO₂-Preis bewegt sich 2026 in einem Korridor von 55 bis 65 €/t; ab 2028 bildet ihn der europäische Emissionshandel ETS 2 frei am Markt."
    >
      <div className="grid gap-4 @md:grid-cols-2">
        <Slider
          label="Jahresverbrauch"
          value={kwh}
          onChange={setKwh}
          min={2000}
          max={40000}
          step={500}
          display={`${num(kwh)} kWh`}
        />
        <Slider
          label="CO₂-Preis 2026"
          value={co2}
          onChange={setCo2}
          min={55}
          max={65}
          step={1}
          display={`${co2} €/t`}
        />
      </div>
      <div className="mt-4">
        <Segmented
          label="Gemeindegröße (Konzessionsabgabe)"
          options={GEMEINDE_OPTIONS}
          value={gemeinde}
          onChange={setGemeinde}
        />
      </div>

      <div className="mt-5">
        <StackBar
          parts={model.parts}
          total={model.brutto}
          activeKey={active}
          onHover={setActive}
        />
        <Legend
          parts={model.parts}
          total={model.brutto}
          unit="ct/kWh"
          activeKey={active}
          onHover={setActive}
          format={ct}
        />
      </div>

      <div className="mt-4 grid gap-3 @md:grid-cols-3">
        <Metric label="Netto" value={`${ct(model.netto)} ct/kWh`} />
        <Metric label="Brutto" value={`${ct(model.brutto)} ct/kWh`} accent />
        <Metric
          label="Jahreskosten"
          value={euro((model.brutto * kwh) / 100, 0)}
        />
      </div>
    </FigureShell>
  );
}

/* ------------------------------------------------------------------ *
 * Wasserpreis
 * ------------------------------------------------------------------ */

export function WasserpreisStack() {
  const [m3, setM3] = useState(120);
  const [flaeche, setFlaeche] = useState(80);
  const [active, setActive] = useState<string | null>(null);

  const model = useMemo(() => {
    const grundpreis = 90; // €/a, abhängig von der Zählergröße
    const trink = 2.0 * m3;
    const trinkBrutto = (grundpreis + trink) * 1.07; // 7 % ermäßigter Satz
    const schmutz = 2.8 * m3; // kommunale Gebühr, ohne USt
    const nieder = 1.2 * flaeche; // €/m² versiegelte Fläche

    const parts = [
      {
        key: "grund",
        label: "Grundpreis Trinkwasser",
        value: grundpreis,
        color: C.fix,
        note: "nach Zählergröße",
      },
      {
        key: "trink",
        label: "Mengenpreis Trinkwasser",
        value: trink,
        color: C.wasser,
        note: `${num(m3)} m³ × 2,00 €`,
      },
      {
        key: "mwst",
        label: "Umsatzsteuer 7 % (nur Trinkwasser)",
        value: (grundpreis + trink) * 0.07,
        color: C.mwst,
      },
      {
        key: "schmutz",
        label: "Schmutzwassergebühr",
        value: schmutz,
        color: C.abwasser,
        note: "Gebühr, keine USt",
      },
      {
        key: "nieder",
        label: "Niederschlagswassergebühr",
        value: nieder,
        color: C.umlagen,
        note: `${flaeche} m² versiegelt`,
      },
    ];

    const total = parts.reduce((s, p) => s + p.value, 0);
    return { parts, total, trinkBrutto, abwasser: schmutz + nieder };
  }, [m3, flaeche]);

  return (
    <FigureShell
      title="Wasserkosten zerlegt"
      hint="Ein Haushalt, ein Jahr"
      interactive
      footer="Wasser ist die einzige Sparte ohne bundesweiten Markt: Preise und Gebühren setzt der örtliche Versorger bzw. die Kommune. Trinkwasser ist eine Lieferung mit 7 % Umsatzsteuer, Abwasser dagegen meist eine hoheitliche Gebühr ganz ohne Umsatzsteuer."
    >
      <div className="grid gap-4 @md:grid-cols-2">
        <Slider
          label="Trinkwasserverbrauch"
          value={m3}
          onChange={setM3}
          min={20}
          max={300}
          step={5}
          display={`${num(m3)} m³`}
        />
        <Slider
          label="Versiegelte Fläche"
          value={flaeche}
          onChange={setFlaeche}
          min={0}
          max={300}
          step={5}
          display={`${num(flaeche)} m²`}
        />
      </div>

      <div className="mt-5">
        <StackBar
          parts={model.parts}
          total={model.total}
          activeKey={active}
          onHover={setActive}
        />
        <Legend
          parts={model.parts}
          total={model.total}
          unit="€/a"
          activeKey={active}
          onHover={setActive}
          format={(v) => num(v, 2)}
        />
      </div>

      <div className="mt-4 grid gap-3 @md:grid-cols-3">
        <Metric label="Trinkwasser brutto" value={euro(model.trinkBrutto, 0)} />
        <Metric label="Abwasser" value={euro(model.abwasser, 0)} />
        <Metric label="Gesamt pro Jahr" value={euro(model.total, 0)} accent />
      </div>
      <p className="mt-3 text-xs text-fg-subtle">
        Entspricht {euro(model.total / m3, 2)} je m³ – oder{" "}
        {num((model.total / m3 / 1000) * 100, 2)} Cent je Liter.
      </p>
    </FigureShell>
  );
}

/* ------------------------------------------------------------------ *
 * m³ → kWh
 * ------------------------------------------------------------------ */

export function GasUmrechner() {
  const [m3, setM3] = useState(1500);
  const [brennwert, setBrennwert] = useState(11.2);
  const [zustand, setZustand] = useState(0.95);
  const [preis, setPreis] = useState(11);

  const kwh = m3 * zustand * brennwert;

  return (
    <FigureShell
      title="Gaszähler in Kilowattstunden umrechnen"
      hint="Der Zähler misst Volumen, die Rechnung zählt Energie"
      interactive
      footer="Brennwert und Zustandszahl stehen auf jeder Gasrechnung und kommen vom Netzbetreiber. Der Brennwert schwankt mit der Gasqualität (L-Gas rund 8,4–11,2 kWh/m³, H-Gas rund 10–13,1 kWh/m³), die Zustandszahl mit Höhenlage und Anschlussdruck – typisch 0,90 bis 0,98."
    >
      <div className="grid gap-4 @md:grid-cols-2">
        <Slider
          label="Gemessenes Volumen"
          value={m3}
          onChange={setM3}
          min={50}
          max={6000}
          step={10}
          display={`${num(m3)} m³`}
        />
        <Slider
          label="Brennwert"
          value={brennwert}
          onChange={setBrennwert}
          min={8.4}
          max={13.1}
          step={0.1}
          display={`${num(brennwert, 1)} kWh/m³`}
        />
        <Slider
          label="Zustandszahl (z-Zahl)"
          value={zustand}
          onChange={setZustand}
          min={0.85}
          max={1.0}
          step={0.01}
          display={num(zustand, 2)}
        />
        <Slider
          label="Arbeitspreis"
          value={preis}
          onChange={setPreis}
          min={5}
          max={20}
          step={0.1}
          display={`${num(preis, 1)} ct/kWh`}
        />
      </div>

      <div className="mt-6 overflow-x-auto">
        <div className="flex min-w-max items-center gap-3 font-mono text-sm">
          <Chip value={`${num(m3)} m³`} label="Volumen" tone="var(--wasser)" />
          <span className="text-fg-subtle">×</span>
          <Chip value={num(zustand, 2)} label="z-Zahl" tone="var(--markt)" />
          <span className="text-fg-subtle">×</span>
          <Chip
            value={`${num(brennwert, 1)}`}
            label="Brennwert"
            tone="var(--waerme)"
          />
          <span className="text-fg-subtle">=</span>
          <Chip
            value={`${num(kwh, 0)} kWh`}
            label="Abrechnungswert"
            tone="var(--accent)"
            strong
          />
        </div>
      </div>

      <ResultRow
        label="Energiekosten (nur Arbeitspreis)"
        value={euro((kwh * preis) / 100)}
        hint={`1 m³ entspricht hier ${num(zustand * brennwert, 2)} kWh.`}
      />
    </FigureShell>
  );
}

/* ------------------------------------------------------------------ *
 * Abschlag
 * ------------------------------------------------------------------ */

export function AbschlagRechner() {
  const [kwh, setKwh] = useState(3500);
  const [arbeitspreis, setArbeitspreis] = useState(35);
  const [grundpreis, setGrundpreis] = useState(140);
  const [raten, setRaten] = useState(11);
  const [neuerVerbrauch, setNeuerVerbrauch] = useState(3900);

  const jahreskosten = (kwh * arbeitspreis) / 100 + grundpreis;
  const abschlag = jahreskosten / raten;
  const istKosten = (neuerVerbrauch * arbeitspreis) / 100 + grundpreis;
  const gezahlt = abschlag * raten;
  const saldo = istKosten - gezahlt;

  return (
    <FigureShell
      title="Abschlag und Jahresabrechnung"
      hint="Prognose, Raten, Saldo"
      interactive
      footer="§ 13 StromGVV und § 13 GasGVV: Der Abschlag bemisst sich anteilig am Verbrauch des zuletzt abgerechneten Zeitraums. Macht der Kunde glaubhaft, dass sein Verbrauch erheblich geringer ausfällt, ist das angemessen zu berücksichtigen."
    >
      <div className="grid gap-4 @md:grid-cols-2">
        <Slider
          label="Prognose: Verbrauch Vorjahr"
          value={kwh}
          onChange={setKwh}
          min={800}
          max={12000}
          step={100}
          display={`${num(kwh)} kWh`}
        />
        <Slider
          label="Arbeitspreis (brutto)"
          value={arbeitspreis}
          onChange={setArbeitspreis}
          min={15}
          max={60}
          step={0.5}
          display={`${num(arbeitspreis, 1)} ct/kWh`}
        />
        <Slider
          label="Grundpreis je Jahr (brutto)"
          value={grundpreis}
          onChange={setGrundpreis}
          min={0}
          max={400}
          step={10}
          display={euro(grundpreis, 0)}
        />
        <Segmented
          label="Zahl der Abschläge im Jahr"
          options={[
            { value: "11", label: "11 Raten" },
            { value: "12", label: "12 Raten" },
            { value: "4", label: "4 Raten (quartalsweise)" },
          ]}
          value={String(raten)}
          onChange={(v) => setRaten(Number(v))}
        />
      </div>

      <ResultRow
        label="Monatlicher Abschlag"
        value={euro(abschlag)}
        hint={`${euro(jahreskosten, 0)} erwartete Jahreskosten ÷ ${raten} Raten`}
      />

      <div className="mt-6 border-t border-border-base pt-5">
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-fg-subtle">
          Und was steht am Jahresende auf der Rechnung?
        </p>
        <div className="mt-3">
          <Slider
            label="Tatsächlicher Verbrauch im Abrechnungsjahr"
            value={neuerVerbrauch}
            onChange={setNeuerVerbrauch}
            min={800}
            max={12000}
            step={100}
            display={`${num(neuerVerbrauch)} kWh`}
          />
        </div>

        <dl className="mt-4 divide-y divide-border-base border-y border-border-base text-sm">
          <Row label="Tatsächliche Jahreskosten" value={euro(istKosten)} />
          <Row
            label={`Geleistete Abschläge (${raten} × ${euro(abschlag)})`}
            value={`− ${euro(gezahlt)}`}
          />
        </dl>

        <div
          className="mt-4 flex flex-wrap items-baseline justify-between gap-2 rounded-xl px-4 py-3"
          style={{
            background:
              saldo > 0.005 ? "var(--waerme-soft)" : "var(--accent-soft)",
          }}
        >
          <span className="text-sm font-medium text-fg">
            {Math.abs(saldo) < 0.005
              ? "Ausgeglichen"
              : saldo > 0
                ? "Nachzahlung"
                : "Guthaben"}
          </span>
          <span
            className="font-mono text-lg font-semibold tabular-nums"
            style={{
              color: saldo > 0.005 ? "var(--waerme)" : "var(--accent)",
            }}
          >
            {euro(Math.abs(saldo))}
          </span>
        </div>
      </div>
    </FigureShell>
  );
}

/* ------------------------------------------------------------------ *
 * Grundpreis vs. Arbeitspreis
 * ------------------------------------------------------------------ */

export function TarifAnatomie() {
  const [kwh, setKwh] = useState(2500);
  const tarife = [
    { name: "Tarif A · hoher Grundpreis", gp: 240, ap: 28, color: "var(--gas)" },
    { name: "Tarif B · ausgewogen", gp: 140, ap: 32, color: "var(--accent)" },
    { name: "Tarif C · ohne Grundpreis", gp: 0, ap: 38.5, color: "var(--strom)" },
  ];

  const results = tarife
    .map((t) => ({
      ...t,
      jahr: t.gp + (kwh * t.ap) / 100,
      effektiv: (t.gp + (kwh * t.ap) / 100) / kwh,
    }))
    .sort((a, b) => a.jahr - b.jahr);
  const max = Math.max(...results.map((r) => r.jahr));

  return (
    <FigureShell
      title="Warum der günstigste Tarif vom Verbrauch abhängt"
      hint="Grundpreis gegen Arbeitspreis"
      interactive
      footer="Der Grundpreis deckt verbrauchsunabhängige Kosten – Messstellenbetrieb, Abrechnung, Kundenservice, Teile des Netzentgelts. Je kleiner der Verbrauch, desto stärker schlägt er auf den effektiven Preis je Kilowattstunde durch."
    >
      <Slider
        label="Jahresverbrauch"
        value={kwh}
        onChange={setKwh}
        min={500}
        max={9000}
        step={100}
        display={`${num(kwh)} kWh`}
      />

      <ul className="mt-6 space-y-4">
        {results.map((r, i) => (
          <li key={r.name}>
            <div className="flex flex-wrap items-baseline justify-between gap-2 text-sm">
              <span className="flex items-center gap-2 font-medium text-fg">
                {i === 0 && (
                  <span className="rounded bg-accent-soft px-1.5 py-0.5 text-2xs font-semibold uppercase tracking-wide text-accent">
                    günstigster
                  </span>
                )}
                {r.name}
              </span>
              <span className="font-mono tabular-nums text-fg">
                {euro(r.jahr, 0)}
                <span className="ml-2 text-xs text-fg-subtle">
                  {num(r.effektiv, 1)} ct/kWh effektiv
                </span>
              </span>
            </div>
            <div className="mt-1.5 flex h-6 overflow-hidden rounded-md bg-surface-2">
              <div
                className="h-full transition-[width] duration-300"
                style={{
                  width: `${(r.gp / max) * 100}%`,
                  background: r.color,
                  opacity: 0.45,
                }}
                title={`Grundpreis ${euro(r.gp, 0)}`}
              />
              <div
                className="h-full transition-[width] duration-300"
                style={{
                  width: `${(((kwh * r.ap) / 100) / max) * 100}%`,
                  background: r.color,
                }}
                title={`Arbeitspreis ${euro((kwh * r.ap) / 100, 0)}`}
              />
            </div>
            <p className="mt-1 text-2xs text-fg-subtle">
              {euro(r.gp, 0)} Grundpreis · {num(r.ap, 1)} ct/kWh Arbeitspreis
            </p>
          </li>
        ))}
      </ul>
    </FigureShell>
  );
}

/* ------------------------------------------------------------------ *
 * Small building blocks
 * ------------------------------------------------------------------ */

function Metric({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div
      className="rounded-xl border px-3 py-2.5"
      style={{
        borderColor: accent ? "color-mix(in srgb, var(--accent) 30%, transparent)" : "var(--border)",
        background: accent ? "var(--accent-soft)" : "var(--surface-2)",
      }}
    >
      <p className="text-2xs uppercase tracking-[0.08em] text-fg-subtle">
        {label}
      </p>
      <p
        className="mt-0.5 font-mono text-base font-semibold tabular-nums"
        style={{ color: accent ? "var(--accent)" : "var(--fg)" }}
      >
        {value}
      </p>
    </div>
  );
}

function Chip({
  value,
  label,
  tone,
  strong,
}: {
  value: string;
  label: string;
  tone: string;
  strong?: boolean;
}) {
  return (
    <span
      className="rounded-lg border px-3 py-2 text-center"
      style={{
        borderColor: `color-mix(in srgb, ${tone} 35%, transparent)`,
        background: `color-mix(in srgb, ${tone} 9%, transparent)`,
      }}
    >
      <span
        className="block text-sm font-semibold tabular-nums"
        style={{ color: tone, fontWeight: strong ? 700 : 600 }}
      >
        {value}
      </span>
      <span className="mt-0.5 block font-sans text-2xs text-fg-subtle">
        {label}
      </span>
    </span>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 py-2.5">
      <dt className="text-fg-muted">{label}</dt>
      <dd className="shrink-0 font-mono tabular-nums text-fg">{value}</dd>
    </div>
  );
}
