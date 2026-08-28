/* Static, server-rendered diagrams. Motion is CSS only and respects
 * prefers-reduced-motion through the utility classes in globals.css. */

import type { Locale } from "@/lib/i18n";

import { L, tr, type FigureProps } from "./i18n";

function Frame({
  locale,
  title,
  hint,
  children,
  footer,
}: {
  locale: Locale;
  title: string;
  hint?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  title = tr(locale, title);
  hint = hint ? tr(locale, hint) : hint;
  footer = typeof footer === "string" ? tr(locale, footer) : footer;
  return (
    <div className="@container overflow-hidden rounded-2xl border border-border-base bg-surface">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5 border-b border-border-base bg-surface-2 px-5 py-3.5 @xl:px-6">
        <p className="text-sm font-medium text-fg">{title}</p>
        {hint && <p className="text-xs text-fg-subtle">{hint}</p>}
      </div>
      <div className="p-5 @xl:p-6">{children}</div>
      {footer && (
        <div className="border-t border-border-base bg-surface-2 px-5 py-4 @xl:px-6">
          <p className="max-w-[68ch] text-xs leading-6 text-fg-subtle">{footer}</p>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * Wertschöpfungskette
 * ------------------------------------------------------------------ */

const CHAIN = [
  {
    title: "Erzeugung",
    who: "Kraftwerk, Windpark, PV-Anlage",
    tone: "var(--strom)",
    icon: "M6 20V9l6-5 6 5v11M9 20v-6h6v6",
  },
  {
    title: "Übertragungsnetz",
    who: "4 Übertragungsnetzbetreiber",
    tone: "var(--markt)",
    icon: "M12 3v18M6 7l6-4 6 4M6 12l6-4 6 4",
  },
  {
    title: "Verteilnetz",
    who: "rund 850 Verteilnetzbetreiber",
    tone: "var(--gas)",
    icon: "M12 4v6m0 0-5 4m5-4 5 4M4 20h4m8 0h4",
  },
  {
    title: "Messstelle",
    who: "Messstellenbetreiber",
    tone: "var(--messung)",
    icon: "M4 17a8 8 0 1 1 16 0M12 17l4-5",
  },
  {
    title: "Kunde",
    who: "Letztverbraucher",
    tone: "var(--accent)",
    icon: "M5 20v-9l7-6 7 6v9M10 20v-5h4v5",
  },
];

export function Wertschoepfungskette({ locale }: FigureProps) {
  return (
    <Frame
      locale={locale}
      title={tr(locale, "Von der Erzeugung bis zur Steckdose")}
      hint={tr(locale, "Physischer Weg der Energie")}
      footer="Der Lieferant taucht in dieser Kette physisch gar nicht auf: Er kauft die Energiemenge ein, bilanziert sie und rechnet sie mit dem Kunden ab. Transportiert wird sie von Netzbetreibern, gemessen vom Messstellenbetreiber."
    >
      {/* One markup, two readings: a vertical rail while the column is narrow,
          a horizontal one once there is room for five steps side by side.
          Dropping the cards frees the width the labels actually need. */}
      <ol className="relative grid gap-x-6 gap-y-6 @4xl:grid-cols-5">
        <span
          aria-hidden
          className="absolute bottom-5 left-[1.125rem] top-5 w-px bg-[var(--border)] @4xl:hidden"
        />
        {L(locale, CHAIN).map((step, i) => (
          <li
            key={step.title}
            /* min-w-0: grid items default to min-width:auto, which lets long
               German compounds push past their column instead of wrapping. */
            className="relative flex min-w-0 gap-4 @4xl:flex-col @4xl:gap-3"
          >
            {i < CHAIN.length - 1 && (
              <span
                aria-hidden
                className="absolute left-11 top-[1.125rem] hidden h-px w-[calc(100%-2rem)] bg-[var(--border)] @4xl:block"
              />
            )}
            <span
              className="relative z-10 flex size-9 shrink-0 items-center justify-center rounded-lg"
              style={{
                background: `color-mix(in srgb, ${step.tone} 14%, var(--surface))`,
                color: step.tone,
              }}
            >
              <svg
                viewBox="0 0 24 24"
                className="size-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d={step.icon} />
              </svg>
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-medium leading-snug text-fg">
                {step.title}
              </span>
              <span className="mt-0.5 block text-xs leading-5 text-fg-subtle">
                {step.who}
              </span>
            </span>
          </li>
        ))}
      </ol>
    </Frame>
  );
}

/* ------------------------------------------------------------------ *
 * Marktrollen
 * ------------------------------------------------------------------ */

const ROLES = [
  {
    code: "LF",
    name: "Lieferant",
    task: "Verkauft Energie an den Letztverbraucher, beschafft die Mengen, stellt die Rechnung.",
    tone: "var(--accent)",
  },
  {
    code: "VNB",
    name: "Verteilnetzbetreiber",
    task: "Betreibt das örtliche Netz, erhebt Netzentgelte, schaltet an und ab.",
    tone: "var(--gas)",
  },
  {
    code: "ÜNB",
    name: "Übertragungsnetzbetreiber",
    task: "Höchstspannung, Systembilanz, Regelenergie – 50Hertz, Amprion, TenneT, TransnetBW.",
    tone: "var(--markt)",
  },
  {
    code: "MSB",
    name: "Messstellenbetreiber",
    task: "Baut Zähler ein, betreibt und liest sie aus, liefert Messwerte an alle Berechtigten.",
    tone: "var(--messung)",
  },
  {
    code: "BKV",
    name: "Bilanzkreisverantwortlicher",
    task: "Führt den Bilanzkreis, meldet Fahrpläne, trägt Abweichungen zwischen Prognose und Ist.",
    tone: "var(--waerme)",
  },
  {
    code: "GV",
    name: "Grundversorger",
    task: "Der Lieferant mit den meisten Haushaltskunden im Netzgebiet – gesetzlich zur Belieferung verpflichtet.",
    tone: "var(--recht)",
  },
];

export function Marktrollen({ locale }: FigureProps) {
  return (
    <Frame
      locale={locale}
      title={tr(locale, "Wer ist wer im Energiemarkt")}
      hint={tr(locale, "Marktrollen und ihre Aufgaben")}
      footer="Ein Unternehmen kann mehrere Rollen ausfüllen – ein Stadtwerk ist oft gleichzeitig Lieferant, Verteilnetzbetreiber, grundzuständiger Messstellenbetreiber und Grundversorger. Rechtlich müssen die Bereiche getrennt sein (Entflechtung, „Unbundling“)."
    >
      <ul className="grid gap-3 @md:grid-cols-2">
        {L(locale, ROLES).map((role) => (
          <li
            key={role.code}
            className="flex gap-3 rounded-xl border border-border-base bg-surface-2 p-4"
          >
            <span
              className="flex h-8 shrink-0 items-center rounded-lg px-2 font-mono text-xs font-semibold"
              style={{
                background: `color-mix(in srgb, ${role.tone} 12%, transparent)`,
                color: role.tone,
              }}
            >
              {role.code}
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-medium text-fg">
                {role.name}
              </span>
              <span className="mt-0.5 block text-xs leading-5 text-fg-muted">
                {role.task}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </Frame>
  );
}

/* ------------------------------------------------------------------ *
 * MaLo / MeLo
 * ------------------------------------------------------------------ */

export function MaloMelo({ locale }: FigureProps) {
  return (
    <Frame
      locale={locale}
      title={tr(locale, "Marktlokation und Messlokation")}
      hint={tr(locale, "Ein Haus, zwei Nummernwelten")}
      footer="Faustregel: Die MaLo ist die kaufmännische Adresse für Lieferung und Abrechnung, die MeLo die technische Adresse des Zählers. Eine Marktlokation kann mehrere Messlokationen haben – etwa wenn ein Verbrauch über zwei Zähler erfasst wird."
    >
      <div className="grid gap-4 @xl:grid-cols-2">
        <div className="rounded-xl border border-border-base bg-surface-2 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-markt">
            Marktlokation (MaLo)
          </p>
          <p className="mt-2 text-sm leading-6 text-fg-muted">
            {tr(
              locale,
              "Der Ort, an dem Energie entnommen oder eingespeist wird – aus Sicht des Marktes. Alles, was mit Vertrag, Lieferung und Bilanzierung zu tun hat, hängt an dieser Nummer.",
            )}
          </p>
          <p className="mt-4 font-mono text-lg tracking-wider text-fg">
            5 1 2 3 8 0 0 6 1 2 3
          </p>
          <ul className="mt-2 space-y-1 text-xs text-fg-subtle">
            <li>{tr(locale, "11 Ziffern")}</li>
            <li>
              {tr(locale, "erste Ziffer = vergebende Stelle (BDEW Strom, DVGW Gas)")}
            </li>
            <li>{tr(locale, "letzte Ziffer = Prüfziffer")}</li>
          </ul>
        </div>

        <div className="rounded-xl border border-border-base bg-surface-2 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-messung">
            Messlokation (MeLo)
          </p>
          <p className="mt-2 text-sm leading-6 text-fg-muted">
            {tr(
              locale,
              "Der Ort, an dem tatsächlich gemessen wird – also der Zählerplatz. Messwerte, Zählerwechsel und Messstellenbetrieb hängen an dieser Nummer.",
            )}
          </p>
          <p className="mt-4 break-all font-mono text-sm tracking-wide text-fg">
            DE00056266802AO6G56M11SN51G21M24S
          </p>
          <ul className="mt-2 space-y-1 text-xs text-fg-subtle">
            <li>{tr(locale, "33 Stellen, beginnt mit dem Ländercode DE")}</li>
            <li>{tr(locale, "enthält die Nummer des Netzbetreibers")}</li>
            <li>{tr(locale, "früher „Zählpunktbezeichnung“")}</li>
          </ul>
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-border-base p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-fg-subtle">
          {tr(locale, "Typische Konstellationen")}
        </p>
        <ul className="mt-3 space-y-2 text-sm text-fg-muted">
          {L(locale, [
            { ratio: "1 : 1", text: "Wohnung mit einem Zähler – der Normalfall." },
            {
              ratio: "1 : n",
              text: "Eine Marktlokation, mehrere Zähler – etwa Haupt- und Unterzähler, die saldiert werden.",
            },
            {
              ratio: "2 : 1",
              text: "Ein Zähler, zwei Marktlokationen – Zweirichtungszähler einer PV-Anlage: eine MaLo für den Bezug, eine für die Einspeisung.",
            },
          ]).map((c) => (
            <li key={c.ratio} className="flex gap-2">
              <span className="shrink-0 font-mono text-xs text-accent">
                {c.ratio}
              </span>
              <span>{c.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </Frame>
  );
}

/* ------------------------------------------------------------------ *
 * Zähleranatomie
 * ------------------------------------------------------------------ */

export function ZaehlerAnatomie({ locale }: FigureProps) {
  return (
    <Frame
      locale={locale}
      title={tr(locale, "Was auf dem Zähler steht")}
      hint={tr(locale, "Moderne Messeinrichtung, digital")}
      footer="Für die Ablesung zählt nur das Vorkomma: Nachkommastellen sind meist rot abgesetzt oder gar nicht erst angezeigt. Die Zählernummer identifiziert das Gerät, nicht den Anschluss – nach einem Zählerwechsel ändert sie sich, die Messlokations-ID bleibt."
    >
      <div className="grid gap-5 @xl:grid-cols-[minmax(0,20rem)_1fr] @xl:items-center">
        <svg viewBox="0 0 260 200" className="w-full" aria-hidden>
          <rect
            x="10"
            y="10"
            width="240"
            height="180"
            rx="14"
            fill="var(--surface-2)"
            stroke="var(--border-strong)"
            strokeWidth="1.5"
          />
          {/* display */}
          <rect
            x="30"
            y="38"
            width="200"
            height="54"
            rx="6"
            fill="var(--bg)"
            stroke="var(--border)"
          />
          <text
            x="42"
            y="66"
            fontFamily="var(--font-mono)"
            fontSize="11"
            fill="var(--fg-subtle)"
          >
            1.8.0
          </text>
          <text
            x="42"
            y="84"
            fontFamily="var(--font-mono)"
            fontSize="22"
            fill="var(--fg)"
            letterSpacing="1"
          >
            014729
          </text>
          <text
            x="152"
            y="84"
            fontFamily="var(--font-mono)"
            fontSize="16"
            fill="var(--waerme)"
          >
            ,3
          </text>
          <text
            x="196"
            y="84"
            fontFamily="var(--font-mono)"
            fontSize="12"
            fill="var(--fg-subtle)"
          >
            kWh
          </text>
          {/* pulse LED */}
          <circle
            cx="222"
            cy="56"
            r="4"
            fill="var(--accent)"
            className="ew-pulse-soft"
          />
          {/* meter number plate */}
          <rect
            x="30"
            y="106"
            width="126"
            height="26"
            rx="4"
            fill="var(--bg)"
            stroke="var(--border)"
          />
          <text
            x="38"
            y="123"
            fontFamily="var(--font-mono)"
            fontSize="11"
            fill="var(--fg-muted)"
          >
            1 EMH 0012 3456
          </text>
          {/* optical interface */}
          <circle
            cx="196"
            cy="119"
            r="13"
            fill="none"
            stroke="var(--border-strong)"
            strokeWidth="1.5"
          />
          <circle cx="196" cy="119" r="4" fill="var(--border-strong)" />
          {/* seal */}
          <circle cx="46" cy="160" r="9" fill="none" stroke="var(--messung)" strokeWidth="1.5" />
          <text
            x="66"
            y="164"
            fontFamily="var(--font-sans)"
            fontSize="10"
            fill="var(--fg-subtle)"
          >
            Eichmarke · gültig bis 2033
          </text>
        </svg>

        <dl className="space-y-3 text-sm">
          <Callout
            marker="1.8.0"
            title={tr(locale, "OBIS-Kennzahl")}
            text={tr(locale, "Sagt, welches Register angezeigt wird. 1.8.0 = Bezug gesamt, 1.8.1/1.8.2 = Hoch- und Niedertarif, 2.8.0 = Einspeisung.")}
          />
          <Callout
            marker="014729,3"
            title={tr(locale, "Zählerstand")}
            text={tr(locale, "Der aufsummierte Zählerstand in kWh. Abgelesen wird nur die schwarze Vorkommazahl.")}
          />
          <Callout
            marker="1 EMH 0012 3456"
            title={tr(locale, "Zählernummer")}
            text={tr(locale, "Eindeutige Gerätenummer. Steht auf dem Typenschild und wird bei jedem Zählerwechsel neu.")}
          />
          <Callout
            marker="◎"
            title={tr(locale, "Optische Schnittstelle")}
            text={tr(locale, "Infrarot-Lesekopf für den Messstellenbetreiber – und für Auslesegeräte, die der Kunde selbst anschließt.")}
          />
        </dl>
      </div>
    </Frame>
  );
}

function Callout({
  marker,
  title,
  text,
}: {
  marker: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-3">
      <span className="mt-0.5 shrink-0 rounded border border-border-base bg-surface-2 px-1.5 py-0.5 font-mono text-2xs text-accent">
        {marker}
      </span>
      <span className="min-w-0">
        <span className="block font-medium text-fg">{title}</span>
        <span className="mt-0.5 block text-xs leading-5 text-fg-muted">
          {text}
        </span>
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * Smart-Meter-Gateway
 * ------------------------------------------------------------------ */

export function SmartMeterGateway({ locale }: FigureProps) {
  return (
    <Frame
      locale={locale}
      title={tr(locale, "Aufbau eines intelligenten Messsystems")}
      hint={tr(locale, "moderne Messeinrichtung + Smart-Meter-Gateway")}
      footer="Erst die Kombination aus moderner Messeinrichtung und Smart-Meter-Gateway ergibt ein intelligentes Messsystem (iMSys). Das Gateway ist das sicherheitszertifizierte Herzstück: Es sammelt Messwerte, verschlüsselt sie und gibt jedem Marktteilnehmer nur die Daten, auf die er ein Recht hat."
    >
      <div className="grid gap-3 @xl:grid-cols-[1fr_auto_1fr_auto_1fr] @xl:items-center">
        <Node
          tone="var(--messung)"
          label="LMN"
          title={tr(locale, "Moderne Messeinrichtung")}
          text={tr(locale, "Digitaler Zähler, misst und speichert 24 Monate rückwirkend.")}
        />
        <Arrow />
        <Node
          tone="var(--accent)"
          label="SMGW"
          title={tr(locale, "Smart-Meter-Gateway")}
          text={tr(locale, "Kommunikationseinheit nach BSI-Schutzprofil. Bildet Tarifanwendungsfälle ab und protokolliert jeden Zugriff.")}
        />
        <Arrow />
        <div className="space-y-2">
          <Node
            tone="var(--gas)"
            label="WAN"
            title={tr(locale, "Externe Marktteilnehmer")}
            text={tr(locale, "Messstellenbetreiber, Netzbetreiber, Lieferant – jeder erhält nur seinen Ausschnitt.")}
          />
          <Node
            tone="var(--markt)"
            label="HAN"
            title={tr(locale, "Heimnetz")}
            text={tr(locale, "Der Kunde selbst, Wärmepumpe, Wallbox, Energiemanagement.")}
          />
        </div>
      </div>
    </Frame>
  );
}

function Node({
  tone,
  label,
  title,
  text,
}: {
  tone: string;
  label: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-xl border border-border-base bg-surface-2 p-4">
      <span
        className="inline-block rounded px-1.5 py-0.5 font-mono text-2xs font-semibold"
        style={{
          background: `color-mix(in srgb, ${tone} 12%, transparent)`,
          color: tone,
        }}
      >
        {label}
      </span>
      <p className="mt-2 text-sm font-medium text-fg">{title}</p>
      <p className="mt-1 text-xs leading-5 text-fg-muted">{text}</p>
    </div>
  );
}

function Arrow() {
  return (
    <span
      aria-hidden
      className="mx-auto hidden text-fg-subtle @xl:block"
    >
      →
    </span>
  );
}

/* ------------------------------------------------------------------ *
 * Lieferantenwechsel
 * ------------------------------------------------------------------ */

const SWITCH_STEPS = [
  {
    when: "Tag 0",
    title: "Kunde schließt den neuen Vertrag",
    text: "Der neue Lieferant braucht Name, Lieferadresse und die Marktlokations-ID oder Zählernummer.",
  },
  {
    when: "Tag 0–1",
    title: "Anmeldung beim Netzbetreiber",
    text: "Der neue Lieferant meldet die Belieferung an; der Netzbetreiber prüft, ob die Marktlokation zu ihm gehört.",
  },
  {
    when: "Tag 1",
    title: "Abmeldung des alten Lieferanten",
    text: "Der bisherige Lieferant wird informiert und bestätigt oder widerspricht – etwa bei offener Vertragslaufzeit.",
  },
  {
    when: "ab 24 Stunden",
    title: "Wechsel wird wirksam",
    text: "Seit Juni 2025 muss ein Lieferantenwechsel binnen 24 Stunden möglich sein. Physisch ändert sich nichts – nur die Zuordnung im Bilanzkreis.",
  },
  {
    when: "danach",
    title: "Schlussrechnung",
    text: "Der alte Lieferant rechnet bis zum Wechseltag ab; der Zählerstand zum Stichtag kommt vom Messstellenbetreiber oder vom Kunden.",
  },
];

export function Lieferantenwechsel({ locale }: FigureProps) {
  return (
    <Frame
      locale={locale}
      title={tr(locale, "Ablauf eines Lieferantenwechsels")}
      hint={tr(locale, "Was zwischen Unterschrift und erster Rechnung passiert")}
      footer="Der Kunde merkt vom Wechsel physisch nichts: Es fließt derselbe Strom durch dasselbe Netz. Was wechselt, ist die Zuordnung der Entnahmestelle zu einem Bilanzkreis – und damit die Frage, wer die Energie beschafft und abrechnet."
    >
      <ol className="relative space-y-5 border-l border-border-base pl-7">
        {L(locale, SWITCH_STEPS).map((step, i) => (
          <li key={step.title} className="relative">
            <span className="absolute -left-[2.32rem] top-0.5 flex size-6 items-center justify-center rounded-full border border-border-base bg-surface font-mono text-2xs font-semibold text-accent">
              {i + 1}
            </span>
            <p className="font-mono text-2xs uppercase tracking-[0.08em] text-fg-subtle">
              {step.when}
            </p>
            <p className="mt-0.5 text-sm font-medium text-fg">{step.title}</p>
            <p className="mt-1 text-xs leading-6 text-fg-muted">{step.text}</p>
          </li>
        ))}
      </ol>
    </Frame>
  );
}

/* ------------------------------------------------------------------ *
 * Netzebenen
 * ------------------------------------------------------------------ */

const LEVELS = [
  { name: "Höchstspannung", volt: "380 / 220 kV", who: "Übertragungsnetz, Transport über weite Strecken", w: 100 },
  { name: "Umspannung HöS/HS", volt: "", who: "Umspannwerk", w: 84 },
  { name: "Hochspannung", volt: "110 kV", who: "Regionale Verteilung, Industrie", w: 72 },
  { name: "Umspannung HS/MS", volt: "", who: "Umspannwerk", w: 58 },
  { name: "Mittelspannung", volt: "10–30 kV", who: "Stadtteile, große Gewerbebetriebe", w: 46 },
  { name: "Umspannung MS/NS", volt: "", who: "Ortsnetzstation", w: 34 },
  { name: "Niederspannung", volt: "400 / 230 V", who: "Haushalte, kleines Gewerbe", w: 24 },
];

export function Netzebenen({ locale }: FigureProps) {
  return (
    <Frame
      locale={locale}
      title={tr(locale, "Die sieben Netzebenen")}
      hint={tr(locale, "Und warum Netzentgelte je Ebene verschieden hoch sind")}
      footer="Wer auf einer unteren Ebene entnimmt, nutzt alle darüberliegenden mit – deshalb zahlt ein Haushalt in der Niederspannung das höchste Netzentgelt je Kilowattstunde und ein Industriebetrieb mit Hochspannungsanschluss das niedrigste."
    >
      <ul className="space-y-1.5">
        {L(locale, LEVELS).map((level, i) => (
          <li key={level.name} className="flex items-center gap-4">
            {/* The bar scales inside a fixed track. Sizing the bar itself off
                the row let the 100 % level claim the whole width and squeeze
                the label out of the layout entirely. */}
            <span className="w-[34%] max-w-[12rem] shrink-0">
              <span
                className="block h-8 rounded-md"
                style={{
                  width: `${level.w}%`,
                  background: `color-mix(in srgb, var(--markt) ${8 + i * 4}%, transparent)`,
                  borderLeft: "3px solid var(--markt)",
                }}
              />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-medium leading-snug text-fg">
                {level.name}
                {level.volt && (
                  <span className="ml-2 font-mono text-xs text-fg-subtle">
                    {level.volt}
                  </span>
                )}
              </span>
              <span className="mt-0.5 block text-xs leading-5 text-fg-subtle">
                {level.who}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </Frame>
  );
}

/* ------------------------------------------------------------------ *
 * Rechnungsanatomie
 * ------------------------------------------------------------------ */

const BILL_PARTS = [
  {
    n: "1",
    title: "Vertrags- und Kundendaten",
    text: "Vertragskonto, Kundennummer, Lieferadresse, Marktlokations-ID, Zählernummer und Netzbetreibernummer.",
  },
  {
    n: "2",
    title: "Abrechnungszeitraum",
    text: "Der Zeitraum, den die Rechnung abdeckt – meist zwölf Monate, bei Preisänderungen in Teilzeiträume zerlegt.",
  },
  {
    n: "3",
    title: "Zählerstände und Verbrauch",
    text: "Anfangs- und Endstand mit Kennzeichnung, ob abgelesen, vom Kunden gemeldet oder geschätzt.",
  },
  {
    n: "4",
    title: "Preisbestandteile",
    text: "Grundpreis je Zeitraum, Arbeitspreis je kWh, bei Preisänderung mehrere Zeilen mit jeweils eigenem Preis.",
  },
  {
    n: "5",
    title: "Steuern, Abgaben und Umlagen",
    text: "Gesetzlich vorgeschriebene Aufschlüsselung nach § 40 EnWG – wie viel des Preises auf welche Position entfällt.",
  },
  {
    n: "6",
    title: "Abschläge und Saldo",
    text: "Summe der geleisteten Abschlagszahlungen, daraus Nachzahlung oder Guthaben.",
  },
  {
    n: "7",
    title: "Vergleich und Kennzeichnung",
    text: "Verbrauchsvergleich zum Vorjahr, Vergleich mit ähnlichen Kunden und – beim Strom – die Stromkennzeichnung.",
  },
];

export function RechnungAnatomie({ locale }: FigureProps) {
  return (
    <Frame
      locale={locale}
      title={tr(locale, "Anatomie einer Jahresabrechnung")}
      hint={tr(locale, "Was gesetzlich draufstehen muss")}
      footer="Die Pflichtangaben stehen in § 40 EnWG. Fehlt eine davon, ist die Rechnung angreifbar – ein Grund, warum Abrechnungssysteme so viele Felder mitschleppen."
    >
      <ol className="grid gap-3 @md:grid-cols-2">
        {L(locale, BILL_PARTS).map((part) => (
          <li
            key={part.n}
            className="flex gap-3 rounded-xl border border-border-base bg-surface-2 p-3.5"
          >
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-accent-soft font-mono text-2xs font-semibold text-accent">
              {part.n}
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-medium text-fg">
                {part.title}
              </span>
              <span className="mt-0.5 block text-xs leading-5 text-fg-muted">
                {part.text}
              </span>
            </span>
          </li>
        ))}
      </ol>
    </Frame>
  );
}

/* ------------------------------------------------------------------ *
 * Blindleistung
 * ------------------------------------------------------------------ */

export function Blindleistung({ locale }: FigureProps) {
  return (
    <Frame
      locale={locale}
      title={tr(locale, "Wirk-, Blind- und Scheinleistung")}
      hint={tr(locale, "Das Bierglas-Modell")}
      footer="Wirkleistung (kW) verrichtet Arbeit, Blindleistung (kvar) baut die Magnetfelder in Motoren und Transformatoren auf. Beides zusammen belastet das Netz als Scheinleistung (kVA). Haushalte zahlen keine Blindarbeit – Gewerbekunden mit Leistungsmessung schon, sobald sie eine vereinbarte Grenze überschreiten."
    >
      <div className="grid gap-5 @md:grid-cols-[minmax(0,16rem)_1fr] @md:items-center">
        <svg viewBox="0 0 200 160" className="w-full max-w-xs" aria-hidden>
          <line x1="20" y1="130" x2="180" y2="130" stroke="var(--border)" />
          <line x1="20" y1="130" x2="20" y2="20" stroke="var(--border)" />
          {/* Wirkleistung */}
          <line
            x1="20"
            y1="130"
            x2="140"
            y2="130"
            stroke="var(--accent)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <text x="70" y="146" fontSize="10" fill="var(--accent)">
            Wirkleistung P
          </text>
          {/* Blindleistung */}
          <line
            x1="140"
            y1="130"
            x2="140"
            y2="60"
            stroke="var(--markt)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <text x="146" y="98" fontSize="10" fill="var(--markt)">
            Q
          </text>
          {/* Scheinleistung */}
          <line
            x1="20"
            y1="130"
            x2="140"
            y2="60"
            stroke="var(--waerme)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <text x="52" y="88" fontSize="10" fill="var(--waerme)">
            Scheinleistung S
          </text>
          <path
            d="M44 130 A 24 24 0 0 0 40 116"
            fill="none"
            stroke="var(--fg-subtle)"
            strokeWidth="1"
          />
          <text x="48" y="122" fontSize="9" fill="var(--fg-subtle)">
            φ
          </text>
        </svg>

        <dl className="space-y-3 text-sm">
          <Callout
            marker="kW"
            title={tr(locale, "Wirkleistung")}
            text={tr(locale, "Was tatsächlich zu Licht, Wärme oder Bewegung wird. Sie steht auf der Stromrechnung als Verbrauch in kWh.")}
          />
          <Callout
            marker="kvar"
            title={tr(locale, "Blindleistung")}
            text={tr(locale, "Pendelt zwischen Netz und Verbraucher hin und her, verrichtet keine Arbeit, belastet aber Leitungen. Gemessen in kvarh.")}
          />
          <Callout
            marker="cos φ"
            title={tr(locale, "Leistungsfaktor")}
            text={tr(locale, "Verhältnis von Wirk- zu Scheinleistung. Netzbetreiber verlangen meist mindestens 0,9 – darunter wird Blindarbeit berechnet.")}
          />
        </dl>
      </div>
    </Frame>
  );
}

/* ------------------------------------------------------------------ *
 * Endkundenportal
 * ------------------------------------------------------------------ */

const PORTAL_FEATURES = [
  { title: "Zählerstand melden", text: "Foto oder Eingabe, Plausibilitätsprüfung gegen den letzten Stand.", tone: "var(--messung)" },
  { title: "Abschlag anpassen", text: "Selbst erhöhen oder senken, innerhalb der Grenzen des Versorgers.", tone: "var(--waerme)" },
  { title: "Rechnungen und Verträge", text: "Dokumentenarchiv, Tarifdetails, Laufzeiten und Kündigungsfristen.", tone: "var(--accent)" },
  { title: "Umzug melden", text: "Auszugs- und Einzugsdatum, Zählerstände, neue Lieferadresse.", tone: "var(--gas)" },
  { title: "Verbrauch verstehen", text: "Historie, Vergleich zum Vorjahr, bei iMSys bis hin zu Tageswerten.", tone: "var(--markt)" },
  { title: "Stammdaten pflegen", text: "Bankverbindung, Kontaktdaten, Rechnungsversand digital statt Papier.", tone: "var(--wasser)" },
  { title: "Anliegen stellen", text: "Kontaktformular, Statusverfolgung, Rückfragen ohne Telefonwarteschleife.", tone: "var(--recht)" },
  { title: "Produkte kaufen", text: "Tarifwechsel, Zusatzprodukte, Wallbox oder Wärmepumpe direkt beauftragen.", tone: "var(--strom)" },
];

export function PortalFunktionen({ locale }: FigureProps) {
  return (
    <Frame
      locale={locale}
      title={tr(locale, "Was ein Endkundenportal können muss")}
      hint={tr(locale, "Die acht Klassiker")}
      footer="Jede dieser Funktionen spart einen Anruf im Kundenservice. Deshalb misst man Portale in der Praxis nicht an der Zahl der Features, sondern an der Selbstbedienungsquote: dem Anteil der Anliegen, die ohne Mitarbeiter erledigt werden."
    >
      <ul className="grid gap-3 @sm:grid-cols-2 @2xl:grid-cols-4">
        {L(locale, PORTAL_FEATURES).map((f) => (
          <li
            key={f.title}
            className="rounded-xl border border-border-base bg-surface-2 p-3.5"
          >
            <span
              aria-hidden
              className="block h-1 w-6 rounded-full"
              style={{ background: f.tone }}
            />
            <p className="mt-2.5 text-sm font-medium text-fg">{f.title}</p>
            <p className="mt-1 text-xs leading-5 text-fg-muted">{f.text}</p>
          </li>
        ))}
      </ul>
    </Frame>
  );
}

/* ------------------------------------------------------------------ *
 * Anlagen beim Kunden
 * ------------------------------------------------------------------ */

const ANLAGEN = [
  { n: "1", name: "Photovoltaik", text: "Erzeugt Strom auf dem Dach. Ab 2 kW seit Februar 2025 mit Steuerbox und iMSys.", tone: "var(--strom)" },
  { n: "2", name: "Wärmepumpe", text: "Macht aus einer Kilowattstunde Strom drei bis vier Kilowattstunden Wärme.", tone: "var(--anlage)" },
  { n: "3", name: "Batteriespeicher", text: "Verschiebt PV-Strom vom Mittag in den Abend und hebt die Eigenverbrauchsquote.", tone: "var(--markt)" },
  { n: "4", name: "Wallbox", text: "Lädt das Auto mit meist 11 kW. Über 4,2 kW fällt sie unter § 14a EnWG.", tone: "var(--gas)" },
  { n: "5", name: "Zählerplatz", text: "Zweirichtungszähler plus Smart-Meter-Gateway – der Übergabepunkt zum Netz.", tone: "var(--messung)" },
  { n: "6", name: "Warmwasserspeicher", text: "Puffert Wärme und ist damit selbst ein Speicher für PV-Überschuss.", tone: "var(--waerme)" },
];

export function AnlagenUebersicht({ locale }: FigureProps) {
  return (
    <Frame
      locale={locale}
      title={tr(locale, "Was heute alles hinter dem Zähler steht")}
      hint={tr(locale, "Ein Haushalt ist längst kein reiner Verbraucher mehr")}
      footer="Jedes dieser Geräte verändert etwas am Vertragsverhältnis: die PV-Anlage braucht eine zweite Marktlokation, Wärmepumpe und Wallbox fallen unter § 14a EnWG, der Speicher verschiebt den Verbrauch in andere Stunden. Aus dem Letztverbraucher wird ein Prosumer – jemand, der zugleich verbraucht und erzeugt."
    >
      <div className="grid gap-6 @2xl:grid-cols-[minmax(0,22rem)_1fr] @2xl:items-start">
        <svg viewBox="0 0 340 240" className="w-full" aria-hidden>
          {/* Grund */}
          <line x1="10" y1="215" x2="330" y2="215" stroke="var(--border-strong)" strokeWidth="1.5" />
          {/* Haus */}
          <path d="M60 120 L140 62 L220 120" fill="none" stroke="var(--border-strong)" strokeWidth="2" strokeLinejoin="round" />
          <path d="M72 120 V215 M208 120 V215 M72 215 H208" fill="none" stroke="var(--border-strong)" strokeWidth="2" />
          {/* PV auf dem Dach */}
          <path d="M78 116 L140 71 L154 81 L92 126 Z" fill="var(--strom-soft)" stroke="var(--strom)" strokeWidth="2" strokeLinejoin="round" />
          <path d="M99 108 L160 63 M89 101 L150 56" stroke="var(--strom)" strokeWidth="0.9" opacity="0.5" />
          <circle cx="106" cy="94" r="9" fill="var(--surface)" stroke="var(--strom)" strokeWidth="1.5" />
          <text x="106" y="98" fontSize="10" textAnchor="middle" fill="var(--strom)" fontFamily="var(--font-mono)">1</text>
          {/* Wärmepumpe außen */}
          <rect x="234" y="168" width="42" height="34" rx="4" fill="var(--anlage-soft)" stroke="var(--anlage)" strokeWidth="2" />
          <circle cx="255" cy="185" r="9" fill="none" stroke="var(--anlage)" strokeWidth="1.5" />
          <path d="M255 178 v14 M248 185 h14" stroke="var(--anlage)" strokeWidth="1.5" className="ew-spin-slow" style={{ transformOrigin: "255px 185px" }} />
          <circle cx="286" cy="164" r="9" fill="var(--surface)" stroke="var(--anlage)" strokeWidth="1.5" />
          <text x="286" y="168" fontSize="10" textAnchor="middle" fill="var(--anlage)" fontFamily="var(--font-mono)">2</text>
          {/* Speicher */}
          <rect x="86" y="170" width="26" height="36" rx="3" fill="var(--markt-soft)" stroke="var(--markt)" strokeWidth="2" />
          <path d="M92 196 h14 M92 189 h14" stroke="var(--markt)" strokeWidth="1.4" />
          <circle cx="76" cy="164" r="9" fill="var(--surface)" stroke="var(--markt)" strokeWidth="1.5" />
          <text x="76" y="168" fontSize="10" textAnchor="middle" fill="var(--markt)" fontFamily="var(--font-mono)">3</text>
          {/* Wallbox */}
          <rect x="16" y="168" width="22" height="30" rx="3" fill="var(--gas-soft)" stroke="var(--gas)" strokeWidth="2" />
          <path d="M27 198 q0 10 14 10" fill="none" stroke="var(--gas)" strokeWidth="1.6" />
          <circle cx="27" cy="158" r="9" fill="var(--surface)" stroke="var(--gas)" strokeWidth="1.5" />
          <text x="27" y="162" fontSize="10" textAnchor="middle" fill="var(--gas)" fontFamily="var(--font-mono)">4</text>
          {/* Zählerplatz */}
          <rect x="126" y="168" width="28" height="38" rx="3" fill="var(--messung-soft)" stroke="var(--messung)" strokeWidth="2" />
          <path d="M133 186 a7 7 0 0 1 14 0" fill="none" stroke="var(--messung)" strokeWidth="1.5" />
          <circle cx="140" cy="186" r="1.6" fill="var(--messung)" />
          <circle cx="140" cy="158" r="9" fill="var(--surface)" stroke="var(--messung)" strokeWidth="1.5" />
          <text x="140" y="162" fontSize="10" textAnchor="middle" fill="var(--messung)" fontFamily="var(--font-mono)">5</text>
          {/* Warmwasserspeicher */}
          <rect x="170" y="164" width="24" height="42" rx="10" fill="var(--waerme-soft)" stroke="var(--waerme)" strokeWidth="2" />
          <circle cx="182" cy="154" r="9" fill="var(--surface)" stroke="var(--waerme)" strokeWidth="1.5" />
          <text x="182" y="158" fontSize="10" textAnchor="middle" fill="var(--waerme)" fontFamily="var(--font-mono)">6</text>
          {/* Netzanschluss */}
          <path d="M208 140 H300 V215" fill="none" stroke="var(--accent)" strokeWidth="2" className="ew-flow" />
        </svg>

        <ol className="grid gap-3 @md:grid-cols-2 @2xl:grid-cols-1 @4xl:grid-cols-2">
          {L(locale, ANLAGEN).map((a) => (
            <li key={a.n} className="flex min-w-0 gap-3">
              <span
                className="flex size-6 shrink-0 items-center justify-center rounded-full font-mono text-2xs font-semibold"
                style={{
                  background: `color-mix(in srgb, ${a.tone} 16%, var(--surface))`,
                  color: a.tone,
                }}
              >
                {a.n}
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-medium text-fg">{a.name}</span>
                <span className="mt-0.5 block text-xs leading-5 text-fg-muted">{a.text}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </Frame>
  );
}

/* ------------------------------------------------------------------ *
 * Heizsysteme im Vergleich
 * ------------------------------------------------------------------ */

const HEIZUNGEN = [
  { name: "Wärmepumpe", traeger: "Strom", effizienz: 370, effLabel: "JAZ 3,7", co2: "abhängig vom Strommix, sinkend", tone: "var(--anlage)" },
  { name: "Fernwärme", traeger: "Wärmenetz", effizienz: 100, effLabel: "keine eigene Umwandlung", co2: "abhängig vom Erzeugungsmix", tone: "var(--wasser)" },
  { name: "Gas-Brennwert", traeger: "Erdgas", effizienz: 92, effLabel: "92 % Nutzungsgrad", co2: "rund 0,18 kg je kWh", tone: "var(--gas)" },
  { name: "Pelletkessel", traeger: "Holzpellets", effizienz: 88, effLabel: "88 % Nutzungsgrad", co2: "bilanziell nahezu neutral", tone: "var(--strom)" },
  { name: "Ölheizung", traeger: "Heizöl", effizienz: 88, effLabel: "88 % Nutzungsgrad", co2: "rund 0,27 kg je kWh", tone: "var(--waerme)" },
  { name: "Direktstromheizung", traeger: "Strom", effizienz: 99, effLabel: "99 % – aber 1 kWh je kWh", co2: "abhängig vom Strommix", tone: "var(--recht)" },
];

export function Heizungsvergleich({ locale }: FigureProps) {
  const max = Math.max(...HEIZUNGEN.map((h) => h.effizienz));
  return (
    <Frame
      locale={locale}
      title={tr(locale, "Heizsysteme im Vergleich")}
      hint={tr(locale, "Wie viel Wärme aus einer Einheit Energie wird")}
      footer="Der Balken zeigt, wie viele Kilowattstunden Wärme aus einer Kilowattstunde eingekaufter Energie entstehen. Nur die Wärmepumpe kommt über 100 %, weil sie Umweltwärme dazuholt statt Brennstoff zu verbrennen – deshalb ist sie trotz des höheren Strompreises meist günstiger im Betrieb."
    >
      <ul className="space-y-4">
        {L(locale, HEIZUNGEN).map((h) => (
          <li key={h.name}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
              <span className="text-sm font-medium text-fg">{h.name}</span>
              <span className="font-mono text-xs tabular-nums text-fg-muted">
                {h.effizienz} %
              </span>
            </div>
            <div className="mt-1.5 h-5 overflow-hidden rounded-md bg-surface-2">
              <div
                className="h-full"
                style={{ width: `${(h.effizienz / max) * 100}%`, background: h.tone }}
              />
            </div>
            <p className="mt-1 text-2xs text-fg-subtle">
              {h.traeger} · {h.effLabel} · {h.co2}
            </p>
          </li>
        ))}
      </ul>
    </Frame>
  );
}

/* ------------------------------------------------------------------ *
 * Formatwechsel-Zyklus
 * ------------------------------------------------------------------ */

const FOMA_STEPS = [
  { at: 0, label: "Konsultation", sub: "rund 8 Monate vorher", tone: "var(--markt)" },
  { at: 25, label: "Festlegung", sub: "rund 6 Monate vorher", tone: "var(--gas)" },
  { at: 92, label: "Stichtag", sub: "1. April oder 1. Oktober", tone: "var(--waerme)" },
];

export function FormatwechselZyklus({ locale }: FigureProps) {
  return (
    <Frame
      locale={locale}
      title={tr(locale, "Ein Formatwechsel von der Konsultation bis zum Stichtag")}
      hint={tr(locale, "Zweimal im Jahr, immer nach demselben Muster")}
      footer="Um Mitternacht des Stichtags verlieren die alten Versionen ihre Gültigkeit – ohne Übergangszeitraum. Wer nicht umgestellt hat, kann nicht mehr mit dem Markt kommunizieren. Die rund sechs Monate zwischen Festlegung und Stichtag sind das gesamte Fenster, in dem Softwarehersteller entwickeln und ausliefern und Versorger einbauen, testen und schulen müssen."
    >
      {/* Three milestones sit at 1/6, 1/2 and 5/6 of the width, so the
          implementation window spans exactly the last two. */}
      <div className="relative pt-4">
        <div
          aria-hidden
          className="absolute left-1/2 right-[16.6%] top-0 flex h-7 items-center justify-center rounded-md"
          style={{ background: "var(--accent-soft)" }}
        >
          <span className="text-2xs font-semibold uppercase tracking-[0.08em] text-accent">
            {tr(locale, "~6 Monate")}
          </span>
        </div>

        <div className="relative mt-6">
          <div
            aria-hidden
            className="absolute inset-x-[8%] top-1.5 h-px"
            style={{ background: "var(--border-strong)" }}
          />
          <ol className="relative flex">
            {L(locale, FOMA_STEPS).map((step) => (
              <li
                key={step.label}
                className="flex min-w-0 flex-1 flex-col items-center"
              >
                <span
                  aria-hidden
                  className="size-3 rounded-full ring-4"
                  style={{
                    background: step.tone,
                    // @ts-expect-error CSS custom property for the ring colour
                    "--tw-ring-color": "var(--surface)",
                  }}
                />
                <span className="mt-3 text-center text-sm font-medium leading-snug text-fg">
                  {step.label}
                </span>
                <span className="mt-0.5 text-center text-xs leading-5 text-fg-subtle">
                  {step.sub}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <dl className="mt-6 grid gap-3 border-t border-border-base pt-5 @md:grid-cols-3">
        {L(locale, [
          { k: "Betroffene Prozesse", v: "GPKE, MaBiS, WiM, MPES" },
          { k: "Stichtage", v: "1. April und 1. Oktober" },
          { k: "Umsetzungsfenster", v: "rund 6 Monate, keine Übergangsfrist" },
        ]).map((f) => (
          <div key={f.k} className="min-w-0">
            <dt className="text-2xs uppercase tracking-[0.08em] text-fg-subtle">
              {f.k}
            </dt>
            <dd className="mt-0.5 text-sm font-medium text-fg-muted">{f.v}</dd>
          </div>
        ))}
      </dl>
    </Frame>
  );
}
