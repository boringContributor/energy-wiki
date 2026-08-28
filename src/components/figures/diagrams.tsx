/* Static, server-rendered diagrams. Motion is CSS only and respects
 * prefers-reduced-motion through the utility classes in globals.css. */

function Frame({
  title,
  hint,
  children,
  footer,
}: {
  title: string;
  hint?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <div className="@container overflow-hidden rounded-2xl border border-border-base bg-surface">
      <div className="flex flex-wrap items-baseline gap-x-3 border-b border-border-base bg-surface-2 px-4 py-3 @md:px-5">
        <p className="text-sm font-medium text-fg">{title}</p>
        {hint && <p className="text-xs text-fg-subtle">{hint}</p>}
      </div>
      <div className="p-4 @md:p-5">{children}</div>
      {footer && (
        <div className="border-t border-border-base bg-surface-2 px-4 py-3 text-xs leading-6 text-fg-subtle @md:px-5">
          {footer}
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

export function Wertschoepfungskette() {
  return (
    <Frame
      title="Von der Erzeugung bis zur Steckdose"
      hint="Physischer Weg der Energie"
      footer="Der Lieferant taucht in dieser Kette physisch gar nicht auf: Er kauft die Energiemenge ein, bilanziert sie und rechnet sie mit dem Kunden ab. Transportiert wird sie von Netzbetreibern, gemessen vom Messstellenbetreiber."
    >
      {/* One markup, two readings: a vertical rail while the column is narrow,
          a horizontal one once there is room for five steps side by side.
          Dropping the cards frees the width the labels actually need. */}
      <ol className="relative grid gap-x-3 gap-y-5 @2xl:grid-cols-5">
        <span
          aria-hidden
          className="absolute bottom-5 left-[1.125rem] top-5 w-px bg-[var(--border)] @2xl:hidden"
        />
        <span
          aria-hidden
          className="absolute left-5 right-5 top-[1.125rem] hidden h-px bg-[var(--border)] @2xl:block"
        />
        {CHAIN.map((step) => (
          <li
            key={step.title}
            className="relative flex gap-3.5 @2xl:flex-col @2xl:gap-2.5"
          >
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

export function Marktrollen() {
  return (
    <Frame
      title="Wer ist wer im Energiemarkt"
      hint="Marktrollen und ihre Aufgaben"
      footer="Ein Unternehmen kann mehrere Rollen ausfüllen – ein Stadtwerk ist oft gleichzeitig Lieferant, Verteilnetzbetreiber, grundzuständiger Messstellenbetreiber und Grundversorger. Rechtlich müssen die Bereiche getrennt sein (Entflechtung, „Unbundling“)."
    >
      <ul className="grid gap-3 @md:grid-cols-2">
        {ROLES.map((role) => (
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

export function MaloMelo() {
  return (
    <Frame
      title="Marktlokation und Messlokation"
      hint="Ein Haus, zwei Nummernwelten"
      footer="Faustregel: Die MaLo ist die kaufmännische Adresse für Lieferung und Abrechnung, die MeLo die technische Adresse des Zählers. Eine Marktlokation kann mehrere Messlokationen haben – etwa wenn ein Verbrauch über zwei Zähler erfasst wird."
    >
      <div className="grid gap-4 @xl:grid-cols-2">
        <div className="rounded-xl border border-border-base bg-surface-2 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-markt">
            Marktlokation (MaLo)
          </p>
          <p className="mt-2 text-sm leading-6 text-fg-muted">
            Der Ort, an dem Energie entnommen oder eingespeist wird – aus Sicht
            des Marktes. Alles, was mit Vertrag, Lieferung und Bilanzierung zu
            tun hat, hängt an dieser Nummer.
          </p>
          <p className="mt-4 font-mono text-lg tracking-wider text-fg">
            5 1 2 3 8 0 0 6 1 2 3
          </p>
          <ul className="mt-2 space-y-1 text-xs text-fg-subtle">
            <li>11 Ziffern</li>
            <li>erste Ziffer = vergebende Stelle (BDEW Strom, DVGW Gas)</li>
            <li>letzte Ziffer = Prüfziffer</li>
          </ul>
        </div>

        <div className="rounded-xl border border-border-base bg-surface-2 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-messung">
            Messlokation (MeLo)
          </p>
          <p className="mt-2 text-sm leading-6 text-fg-muted">
            Der Ort, an dem tatsächlich gemessen wird – also der Zählerplatz.
            Messwerte, Zählerwechsel und Messstellenbetrieb hängen an dieser
            Nummer.
          </p>
          <p className="mt-4 break-all font-mono text-sm tracking-wide text-fg">
            DE00056266802AO6G56M11SN51G21M24S
          </p>
          <ul className="mt-2 space-y-1 text-xs text-fg-subtle">
            <li>33 Stellen, beginnt mit dem Ländercode DE</li>
            <li>enthält die Nummer des Netzbetreibers</li>
            <li>früher „Zählpunktbezeichnung“</li>
          </ul>
        </div>
      </div>

      <div className="mt-4 rounded-xl border border-border-base p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-fg-subtle">
          Typische Konstellationen
        </p>
        <ul className="mt-3 space-y-2 text-sm text-fg-muted">
          <li className="flex gap-2">
            <span className="font-mono text-xs text-accent">1 : 1</span>
            <span>Wohnung mit einem Zähler – der Normalfall.</span>
          </li>
          <li className="flex gap-2">
            <span className="font-mono text-xs text-accent">1 : n</span>
            <span>
              Eine Marktlokation, mehrere Zähler – etwa Haupt- und
              Unterzähler, die saldiert werden.
            </span>
          </li>
          <li className="flex gap-2">
            <span className="font-mono text-xs text-accent">2 : 1</span>
            <span>
              Ein Zähler, zwei Marktlokationen – Zweirichtungszähler einer
              PV-Anlage: eine MaLo für den Bezug, eine für die Einspeisung.
            </span>
          </li>
        </ul>
      </div>
    </Frame>
  );
}

/* ------------------------------------------------------------------ *
 * Zähleranatomie
 * ------------------------------------------------------------------ */

export function ZaehlerAnatomie() {
  return (
    <Frame
      title="Was auf dem Zähler steht"
      hint="Moderne Messeinrichtung, digital"
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
            title="OBIS-Kennzahl"
            text="Sagt, welches Register angezeigt wird. 1.8.0 = Bezug gesamt, 1.8.1/1.8.2 = Hoch- und Niedertarif, 2.8.0 = Einspeisung."
          />
          <Callout
            marker="014729,3"
            title="Zählerstand"
            text="Der aufsummierte Zählerstand in kWh. Abgelesen wird nur die schwarze Vorkommazahl."
          />
          <Callout
            marker="1 EMH 0012 3456"
            title="Zählernummer"
            text="Eindeutige Gerätenummer. Steht auf dem Typenschild und wird bei jedem Zählerwechsel neu."
          />
          <Callout
            marker="◎"
            title="Optische Schnittstelle"
            text="Infrarot-Lesekopf für den Messstellenbetreiber – und für Auslesegeräte, die der Kunde selbst anschließt."
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

export function SmartMeterGateway() {
  return (
    <Frame
      title="Aufbau eines intelligenten Messsystems"
      hint="moderne Messeinrichtung + Smart-Meter-Gateway"
      footer="Erst die Kombination aus moderner Messeinrichtung und Smart-Meter-Gateway ergibt ein intelligentes Messsystem (iMSys). Das Gateway ist das sicherheitszertifizierte Herzstück: Es sammelt Messwerte, verschlüsselt sie und gibt jedem Marktteilnehmer nur die Daten, auf die er ein Recht hat."
    >
      <div className="grid gap-3 @xl:grid-cols-[1fr_auto_1fr_auto_1fr] @xl:items-center">
        <Node
          tone="var(--messung)"
          label="LMN"
          title="Moderne Messeinrichtung"
          text="Digitaler Zähler, misst und speichert 24 Monate rückwirkend."
        />
        <Arrow />
        <Node
          tone="var(--accent)"
          label="SMGW"
          title="Smart-Meter-Gateway"
          text="Kommunikationseinheit nach BSI-Schutzprofil. Bildet Tarifanwendungsfälle ab und protokolliert jeden Zugriff."
        />
        <Arrow />
        <div className="space-y-2">
          <Node
            tone="var(--gas)"
            label="WAN"
            title="Externe Marktteilnehmer"
            text="Messstellenbetreiber, Netzbetreiber, Lieferant – jeder erhält nur seinen Ausschnitt."
          />
          <Node
            tone="var(--markt)"
            label="HAN"
            title="Heimnetz"
            text="Der Kunde selbst, Wärmepumpe, Wallbox, Energiemanagement."
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

export function Lieferantenwechsel() {
  return (
    <Frame
      title="Ablauf eines Lieferantenwechsels"
      hint="Was zwischen Unterschrift und erster Rechnung passiert"
      footer="Der Kunde merkt vom Wechsel physisch nichts: Es fließt derselbe Strom durch dasselbe Netz. Was wechselt, ist die Zuordnung der Entnahmestelle zu einem Bilanzkreis – und damit die Frage, wer die Energie beschafft und abrechnet."
    >
      <ol className="relative space-y-5 border-l border-border-base pl-7">
        {SWITCH_STEPS.map((step, i) => (
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

export function Netzebenen() {
  return (
    <Frame
      title="Die sieben Netzebenen"
      hint="Und warum Netzentgelte je Ebene verschieden hoch sind"
      footer="Wer auf einer unteren Ebene entnimmt, nutzt alle darüberliegenden mit – deshalb zahlt ein Haushalt in der Niederspannung das höchste Netzentgelt je Kilowattstunde und ein Industriebetrieb mit Hochspannungsanschluss das niedrigste."
    >
      <ul className="space-y-1.5">
        {LEVELS.map((level, i) => (
          <li key={level.name} className="flex items-center gap-3">
            <span
              className="h-8 shrink-0 rounded-md transition-all"
              style={{
                width: `${level.w}%`,
                background: `color-mix(in srgb, var(--markt) ${8 + i * 4}%, transparent)`,
                borderLeft: "3px solid var(--markt)",
              }}
            />
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-medium text-fg">
                {level.name}
                {level.volt && (
                  <span className="ml-2 font-mono text-xs text-fg-subtle">
                    {level.volt}
                  </span>
                )}
              </span>
              <span className="block text-xs text-fg-subtle">{level.who}</span>
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

export function RechnungAnatomie() {
  return (
    <Frame
      title="Anatomie einer Jahresabrechnung"
      hint="Was gesetzlich draufstehen muss"
      footer="Die Pflichtangaben stehen in § 40 EnWG. Fehlt eine davon, ist die Rechnung angreifbar – ein Grund, warum Abrechnungssysteme so viele Felder mitschleppen."
    >
      <ol className="grid gap-3 @md:grid-cols-2">
        {BILL_PARTS.map((part) => (
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

export function Blindleistung() {
  return (
    <Frame
      title="Wirk-, Blind- und Scheinleistung"
      hint="Das Bierglas-Modell"
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
            title="Wirkleistung"
            text="Was tatsächlich zu Licht, Wärme oder Bewegung wird. Sie steht auf der Stromrechnung als Verbrauch in kWh."
          />
          <Callout
            marker="kvar"
            title="Blindleistung"
            text="Pendelt zwischen Netz und Verbraucher hin und her, verrichtet keine Arbeit, belastet aber Leitungen. Gemessen in kvarh."
          />
          <Callout
            marker="cos φ"
            title="Leistungsfaktor"
            text="Verhältnis von Wirk- zu Scheinleistung. Netzbetreiber verlangen meist mindestens 0,9 – darunter wird Blindarbeit berechnet."
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

export function PortalFunktionen() {
  return (
    <Frame
      title="Was ein Endkundenportal können muss"
      hint="Die acht Klassiker"
      footer="Jede dieser Funktionen spart einen Anruf im Kundenservice. Deshalb misst man Portale in der Praxis nicht an der Zahl der Features, sondern an der Selbstbedienungsquote: dem Anteil der Anliegen, die ohne Mitarbeiter erledigt werden."
    >
      <ul className="grid gap-3 @sm:grid-cols-2 @2xl:grid-cols-4">
        {PORTAL_FEATURES.map((f) => (
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
