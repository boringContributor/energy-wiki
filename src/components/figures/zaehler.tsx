"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

import { FigureShell } from "./ui";

interface MeterType {
  id: string;
  name: string;
  sparte: "Strom" | "Gas" | "Wasser";
  claim: string;
  desc: string;
  facts: { k: string; v: string }[];
  tone: string;
  art: "ferraris" | "digital" | "gateway" | "gas" | "wasser" | "wandler";
}

const METERS: MeterType[] = [
  {
    id: "ferraris",
    name: "Ferraris-Zähler",
    sparte: "Strom",
    claim: "Der schwarze Kasten mit der Drehscheibe",
    desc: "Ein Induktionszähler: Der durchfließende Strom treibt eine Aluminiumscheibe an, deren Umdrehungen ein mechanisches Zählwerk weiterdrehen. Robust, wartungsarm, seit Jahrzehnten im Einsatz – aber ohne jede Kommunikationsfähigkeit. Bis Ende 2032 sollen alle ausgetauscht sein.",
    facts: [
      { k: "Zählwerke", v: "eines (Eintarif)" },
      { k: "Ablesung", v: "vor Ort, meist einmal im Jahr" },
      { k: "Datenspeicher", v: "keiner" },
      { k: "Preisobergrenze", v: "nicht geregelt, Bestandsgerät" },
    ],
    tone: "var(--recht)",
    art: "ferraris",
  },
  {
    id: "zweitarif",
    name: "Zweitarifzähler",
    sparte: "Strom",
    claim: "Zwei Zählwerke, zwei Preise",
    desc: "Trennt Hochtarif (HT) und Niedertarif (NT) – klassisch bei Nachtspeicherheizungen und Wärmepumpen. Die Umschaltung steuert eine Rundsteuerempfänger- oder Schaltuhr. Auf der Rechnung erscheinen zwei Zählerstände mit eigenen Arbeitspreisen.",
    facts: [
      { k: "Zählwerke", v: "zwei (HT und NT)" },
      { k: "OBIS", v: "1.8.1 (HT) und 1.8.2 (NT)" },
      { k: "Typisch bei", v: "Nachtspeicher, Wärmepumpe" },
      { k: "Umschaltung", v: "Rundsteuersignal oder Schaltuhr" },
    ],
    tone: "var(--markt)",
    art: "digital",
  },
  {
    id: "mme",
    name: "Moderne Messeinrichtung (mME)",
    sparte: "Strom",
    claim: "Digital, aber offline",
    desc: "Ein digitaler Zähler mit Display, der Werte der letzten 24 Monate vorhält – Tages-, Wochen-, Monats- und Jahreswerte. Er kann seine Daten aber nicht von selbst versenden: Ohne Smart-Meter-Gateway wird weiterhin vor Ort abgelesen. Seit 2020 ist er der Standard beim Zählerwechsel.",
    facts: [
      { k: "Zählwerke", v: "meist Eintarif, Zweitarif möglich" },
      { k: "Speicher", v: "24 Monate historische Werte" },
      { k: "Kommunikation", v: "keine – nur optische Schnittstelle" },
      { k: "Preisobergrenze", v: "25 € im Jahr" },
    ],
    tone: "var(--messung)",
    art: "digital",
  },
  {
    id: "imsys",
    name: "Intelligentes Messsystem (iMSys)",
    sparte: "Strom",
    claim: "Moderne Messeinrichtung plus Gateway",
    desc: "Erst das Smart-Meter-Gateway macht aus dem digitalen Zähler ein „Smart Meter“: Es liest die Messeinrichtung aus, verschlüsselt die Werte nach BSI-Schutzprofil und verteilt sie an Lieferant, Netzbetreiber und Kunde. Voraussetzung für dynamische Tarife und für die Steuerung nach § 14a EnWG.",
    facts: [
      { k: "Messung", v: "viertelstündlich, fernauslesbar" },
      { k: "Pflicht ab", v: "6.000 kWh im Jahr, PV ab 7 kW, § 14a-Anlagen" },
      { k: "Anspruch", v: "auf Wunsch Einbau binnen vier Monaten" },
      { k: "Preisobergrenze", v: "gestaffelt, je nach Fall rund 20–140 € im Jahr" },
    ],
    tone: "var(--accent)",
    art: "gateway",
  },
  {
    id: "zweirichtung",
    name: "Zweirichtungszähler",
    sparte: "Strom",
    claim: "Misst in beide Richtungen",
    desc: "Pflicht, sobald eine Erzeugungsanlage einspeist – etwa eine PV-Anlage. Zwei getrennte Register erfassen Bezug aus dem Netz und Einspeisung ins Netz. Eine Rückwärtsdrehung wie beim alten Ferraris-Zähler ist ausgeschlossen; sie wäre auch nicht zulässig.",
    facts: [
      { k: "Register", v: "1.8.0 Bezug, 2.8.0 Einspeisung" },
      { k: "Typisch bei", v: "Photovoltaik, Batteriespeicher, BHKW" },
      { k: "Marktlokationen", v: "häufig zwei an einem Zähler" },
      { k: "Balkonkraftwerk", v: "Übergangsweise auch rückwärtslaufende Altzähler geduldet" },
    ],
    tone: "var(--strom)",
    art: "digital",
  },
  {
    id: "wandler",
    name: "Wandlerzähler",
    sparte: "Strom",
    claim: "Für Ströme, die nicht durch den Zähler passen",
    desc: "Ab etwa 63 Ampere wird der Strom nicht mehr direkt gemessen, sondern über Stromwandler heruntergeteilt. Der Zähler zeigt dann nur einen Bruchteil an – der Wandlerfaktor steht auf dem Gerät und muss bei jeder Ablesung mitmultipliziert werden.",
    facts: [
      { k: "Einsatz ab", v: "rund 63 A Anschlussleistung" },
      { k: "Rechnen", v: "Zählerstand × Wandlerfaktor" },
      { k: "Typisch bei", v: "Gewerbe, Industrie, große Ladeparks" },
      { k: "Fehlerquelle", v: "vergessener Wandlerfaktor in der Abrechnung" },
    ],
    tone: "var(--waerme)",
    art: "wandler",
  },
  {
    id: "gas",
    name: "Balgengaszähler",
    sparte: "Gas",
    claim: "Zählt Volumen, nicht Energie",
    desc: "Der Standardzähler im Haushalt (Baugröße G4 oder G6). Zwei Messkammern füllen und entleeren sich abwechselnd; jede Füllung dreht das Zählwerk weiter. Gemessen wird in Kubikmetern – die Umrechnung in Kilowattstunden übernimmt erst die Abrechnung.",
    facts: [
      { k: "Einheit", v: "m³ (Betriebskubikmeter)" },
      { k: "Baugrößen", v: "G4 (6 m³/h), G6 (10 m³/h)" },
      { k: "Umrechnung", v: "m³ × Zustandszahl × Brennwert = kWh" },
      { k: "Eichfrist", v: "in der Regel 8 Jahre" },
    ],
    tone: "var(--gas)",
    art: "gas",
  },
  {
    id: "wasser",
    name: "Wasserzähler",
    sparte: "Wasser",
    claim: "Flügelrad im Rohr",
    desc: "Ein Flügelrad wird vom durchströmenden Wasser gedreht und treibt ein Rollenzählwerk an. Die Baugröße richtet sich nach dem Spitzendurchfluss – Qn 2,5 ist der Hausanschluss-Standard. Zunehmend werden funkauslesbare Ultraschallzähler verbaut.",
    facts: [
      { k: "Einheit", v: "m³ (1 m³ = 1.000 Liter)" },
      { k: "Baugröße", v: "Qn 2,5 im Einfamilienhaus" },
      { k: "Eichfrist", v: "6 Jahre (Kaltwasser), 5 Jahre (Warmwasser)" },
      { k: "Besonderheit", v: "Abwassermenge wird meist daraus abgeleitet" },
    ],
    tone: "var(--wasser)",
    art: "wasser",
  },
];

export function ZaehlerTypen() {
  const [activeId, setActiveId] = useState(METERS[2].id);
  const active = METERS.find((m) => m.id === activeId)!;

  return (
    <FigureShell
      title="Zählertypen im Überblick"
      hint="Auswählen und vergleichen"
      interactive
      footer="Nicht jeder digitale Zähler ist ein Smart Meter: Erst mit Smart-Meter-Gateway wird aus einer modernen Messeinrichtung ein intelligentes Messsystem. Die Preisobergrenzen stehen im Messstellenbetriebsgesetz und wurden mit der Novelle 2025 angepasst."
    >
      <div className="grid gap-4 @2xl:grid-cols-[minmax(0,15rem)_1fr]">
        <ul className="flex gap-2 overflow-x-auto pb-1 @2xl:flex-col @2xl:overflow-visible @2xl:pb-0">
          {METERS.map((m) => (
            <li key={m.id} className="shrink-0 @2xl:shrink">
              <button
                type="button"
                onClick={() => setActiveId(m.id)}
                aria-pressed={m.id === activeId}
                className={cn(
                  "w-full whitespace-nowrap rounded-lg border px-3 py-2 text-left text-xs transition-colors @2xl:whitespace-normal",
                  m.id === activeId
                    ? "border-transparent bg-surface-2 font-medium text-fg"
                    : "border-transparent text-fg-muted hover:bg-surface-2/60 hover:text-fg",
                )}
                style={
                  m.id === activeId
                    ? { boxShadow: `inset 3px 0 0 ${m.tone}` }
                    : undefined
                }
              >
                {m.name}
              </button>
            </li>
          ))}
        </ul>

        <div className="rounded-xl border border-border-base bg-surface-2 p-4 @md:p-5">
          <div className="flex flex-wrap items-start gap-4">
            <MeterGlyph art={active.art} tone={active.tone} />
            <div className="min-w-0 flex-1">
              <span
                className="inline-block rounded px-1.5 py-0.5 text-2xs font-semibold uppercase tracking-[0.08em]"
                style={{
                  background: `color-mix(in srgb, ${active.tone} 12%, transparent)`,
                  color: active.tone,
                }}
              >
                {active.sparte}
              </span>
              <p className="mt-2 text-base font-semibold text-fg">
                {active.name}
              </p>
              <p className="text-sm text-fg-subtle">{active.claim}</p>
            </div>
          </div>

          <p className="mt-4 text-sm leading-6 text-fg-muted">{active.desc}</p>

          <dl className="mt-4 grid gap-x-6 gap-y-2 border-t border-border-base pt-4 @md:grid-cols-2">
            {active.facts.map((f) => (
              <div key={f.k} className="text-xs">
                <dt className="text-fg-subtle">{f.k}</dt>
                <dd className="mt-0.5 font-medium text-fg-muted">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </FigureShell>
  );
}

function MeterGlyph({ art, tone }: { art: MeterType["art"]; tone: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  return (
    <span
      className="flex size-16 shrink-0 items-center justify-center rounded-xl"
      style={{
        background: `color-mix(in srgb, ${tone} 10%, transparent)`,
        color: tone,
      }}
    >
      <svg viewBox="0 0 48 48" className="size-9" aria-hidden>
        <rect x="7" y="6" width="34" height="36" rx="4" {...common} />
        {art === "ferraris" && (
          <>
            <rect x="13" y="12" width="22" height="7" rx="1" {...common} />
            <ellipse cx="24" cy="30" rx="11" ry="4.5" {...common} />
            <line x1="24" y1="25.5" x2="24" y2="34.5" {...common} />
          </>
        )}
        {art === "digital" && (
          <>
            <rect x="13" y="13" width="22" height="9" rx="1.5" {...common} />
            <line x1="16" y1="18" x2="31" y2="18" {...common} />
            <circle cx="18" cy="31" r="2.5" {...common} />
            <line x1="24" y1="31" x2="34" y2="31" {...common} />
            <line x1="24" y1="36" x2="30" y2="36" {...common} />
          </>
        )}
        {art === "gateway" && (
          <>
            <rect x="13" y="12" width="22" height="8" rx="1.5" {...common} />
            <path d="M17 34a7 7 0 0 1 14 0" {...common} />
            <path d="M20.5 34a3.5 3.5 0 0 1 7 0" {...common} />
            <circle cx="24" cy="34" r="0.9" fill="currentColor" stroke="none" />
          </>
        )}
        {art === "gas" && (
          <>
            <rect x="13" y="13" width="22" height="8" rx="1.5" {...common} />
            <circle cx="19" cy="31" r="5" {...common} />
            <circle cx="30" cy="31" r="5" {...common} />
          </>
        )}
        {art === "wasser" && (
          <>
            <circle cx="24" cy="24" r="12" {...common} />
            <path d="M24 16c3 4 5 6.5 5 9a5 5 0 0 1-10 0c0-2.5 2-5 5-9Z" {...common} />
          </>
        )}
        {art === "wandler" && (
          <>
            <rect x="13" y="13" width="22" height="8" rx="1.5" {...common} />
            <circle cx="18" cy="32" r="4.5" {...common} />
            <circle cx="30" cy="32" r="4.5" {...common} />
            <line x1="10" y1="32" x2="38" y2="32" {...common} />
          </>
        )}
      </svg>
    </span>
  );
}

/* ------------------------------------------------------------------ *
 * Zählerstandsarten
 * ------------------------------------------------------------------ */

const READING_KINDS = [
  {
    code: "MSB",
    title: "Ablesung durch den Messstellenbetreiber",
    text: "Ein Mitarbeiter oder die Fernauslesung liefert den Wert. Der verlässlichste Fall – und bei intelligenten Messsystemen der Normalfall.",
    tone: "var(--accent)",
  },
  {
    code: "KUN",
    title: "Selbstablesung durch den Kunden",
    text: "Der Kunde meldet den Stand per Karte, Portal oder App. Der Versorger prüft ihn gegen die Historie auf Plausibilität.",
    tone: "var(--gas)",
  },
  {
    code: "EST",
    title: "Verbrauchsschätzung",
    text: "Wenn kein Wert vorliegt, wird der Verbrauch nach dem Vorjahr hochgerechnet. Der Grund muss auf der Rechnung stehen.",
    tone: "var(--waerme)",
  },
];

const ESTIMATE_REASONS = [
  { n: "1", text: "Fehlende Daten bei der Selbstablesung" },
  { n: "2", text: "Kein Zutritt zur Messeinrichtung möglich" },
  { n: "3", text: "Verbrauchszuordnung wegen unterjähriger Preisänderung" },
];

export function Zaehlerstandsarten() {
  return (
    <FigureShell
      title="Woher der Zählerstand kommt"
      hint="Und warum das auf der Rechnung steht"
      footer="§ 40 Abs. 2 EnWG verlangt, dass jeder Zählerstand gekennzeichnet ist. Eine Schätzung ist zulässig, aber begründungspflichtig – und sie ist der häufigste Auslöser für Rückfragen im Kundenservice."
    >
      <ul className="grid gap-3 @md:grid-cols-3">
        {READING_KINDS.map((k) => (
          <li
            key={k.code}
            className="rounded-xl border border-border-base bg-surface-2 p-4"
          >
            <span
              className="inline-block rounded px-1.5 py-0.5 font-mono text-2xs font-semibold"
              style={{
                background: `color-mix(in srgb, ${k.tone} 12%, transparent)`,
                color: k.tone,
              }}
            >
              {k.code}
            </span>
            <p className="mt-2.5 text-sm font-medium text-fg">{k.title}</p>
            <p className="mt-1 text-xs leading-5 text-fg-muted">{k.text}</p>
          </li>
        ))}
      </ul>

      <div className="mt-4 rounded-xl border border-border-base p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-fg-subtle">
          Schlüssel für den Grund einer Schätzung
        </p>
        <ul className="mt-3 space-y-2">
          {ESTIMATE_REASONS.map((r) => (
            <li key={r.n} className="flex items-baseline gap-3 text-sm">
              <span className="flex size-5 shrink-0 items-center justify-center rounded bg-surface-2 font-mono text-2xs font-semibold text-fg-muted">
                {r.n}
              </span>
              <span className="text-fg-muted">{r.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </FigureShell>
  );
}
