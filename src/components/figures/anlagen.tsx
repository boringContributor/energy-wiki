"use client";

import { useMemo, useState } from "react";

import type { Locale } from "@/lib/i18n";

import { fmt } from "./i18n";
import { cn } from "@/lib/utils";

import { FigureShell, ResultRow, Segmented, Slider, L, tf, tr, type FigureProps } from "./ui";

/* ------------------------------------------------------------------ *
 * Photovoltaik
 * ------------------------------------------------------------------ */

const ERTRAG: Record<string, { label: string; kwh: number }> = {
  sued: { label: "Süd, 30°", kwh: 1000 },
  suedost: { label: "Südost/Südwest", kwh: 930 },
  ostwest: { label: "Ost-West", kwh: 850 },
  flach: { label: "Flachdach", kwh: 900 },
};

export function PvRechner({ locale }: FigureProps) {
  const { num, euro } = fmt(locale);
  const [kwp, setKwp] = useState(9);
  const [lage, setLage] = useState("sued");
  const [speicher, setSpeicher] = useState<"ohne" | "mit">("ohne");
  const [strompreis, setStrompreis] = useState(37);
  const [verbrauch, setVerbrauch] = useState(4000);

  const m = useMemo(() => {
    const ertrag = kwp * ERTRAG[lage].kwh;

    /* Self-consumption share against the load-to-yield ratio. The exponent
       flattens the curve the way real households behave: doubling the array
       does not halve the share, and a battery roughly doubles it until the
       household simply cannot absorb more. */
    const ratio = ertrag > 0 ? verbrauch / ertrag : 0;
    const base = 0.32 * Math.pow(ratio, 0.45);
    const roh = Math.min(
      speicher === "mit" ? base * 2.05 : base,
      speicher === "mit" ? 0.75 : 0.5,
    );
    const eigen = Math.min(
      ertrag * roh,
      verbrauch * (speicher === "mit" ? 0.85 : 0.6),
    );
    const quote = ertrag > 0 ? eigen / ertrag : 0;
    const einspeisung = ertrag - eigen;
    const verguetung = 7.7; // ct/kWh, Überschusseinspeisung bis 10 kWp
    const ersparnis = (eigen * strompreis) / 100;
    const erloes = (einspeisung * verguetung) / 100;
    const invest = kwp * (speicher === "mit" ? 2000 : 1400);
    const nutzen = ersparnis + erloes;
    return {
      ertrag,
      eigen,
      einspeisung,
      quote,
      ersparnis,
      erloes,
      nutzen,
      invest,
      jahre: nutzen > 0 ? invest / nutzen : Infinity,
      autarkie: verbrauch > 0 ? eigen / verbrauch : 0,
    };
  }, [kwp, lage, speicher, strompreis, verbrauch]);

  return (
    <FigureShell
      locale={locale}
      title={tr(locale, "Was eine PV-Anlage bringt")}
      hint={tr(locale, "Ertrag, Eigenverbrauch, Einspeisung")}
      interactive
      footer="Modellrechnung mit der Einspeisevergütung für Überschusseinspeisung bis 10 kWp (7,70 ct/kWh ab August 2026, 20 Jahre garantiert). Der eigene Strom ist rund fünfmal so viel wert wie der eingespeiste – deshalb entscheidet die Eigenverbrauchsquote über die Wirtschaftlichkeit, nicht die Anlagengröße."
    >
      <div className="grid gap-4 @md:grid-cols-2">
        <Slider
          label={tr(locale, "Anlagengröße")}
          value={kwp}
          onChange={setKwp}
          min={2}
          max={30}
          step={0.5}
          display={`${num(kwp, 1)} kWp`}
        />
        <Slider
          label={tr(locale, "Stromverbrauch im Haushalt")}
          value={verbrauch}
          onChange={setVerbrauch}
          min={1500}
          max={12000}
          step={100}
          display={`${num(verbrauch)} kWh`}
        />
        <Slider
          label={tr(locale, "Strompreis (brutto)")}
          value={strompreis}
          onChange={setStrompreis}
          min={20}
          max={50}
          step={0.5}
          display={`${num(strompreis, 1)} ct/kWh`}
        />
        <div className="space-y-3">
          <Segmented
            label={tr(locale, "Dachausrichtung")}
            options={Object.entries(L(locale, ERTRAG)).map(([value, v]) => ({
              value,
              label: v.label,
            }))}
            value={lage}
            onChange={setLage}
          />
          <Segmented
            label={tr(locale, "Batteriespeicher")}
            options={[
              { value: "ohne", label: tr(locale, "ohne") },
              { value: "mit", label: tr(locale, "mit Speicher") },
            ]}
            value={speicher}
            onChange={setSpeicher}
          />
        </div>
      </div>

      <div className="mt-6">
        <div className="flex h-10 overflow-hidden rounded-lg">
          <span
            className="flex items-center justify-center text-2xs font-semibold text-white transition-[width] duration-300"
            style={{
              width: `${(m.eigen / m.ertrag) * 100}%`,
              background: "var(--anlage)",
            }}
          >
            {m.eigen / m.ertrag > 0.14 && tr(locale, "Eigenverbrauch")}
          </span>
          <span
            className="flex items-center justify-center text-2xs font-semibold text-white transition-[width] duration-300"
            style={{
              width: `${(m.einspeisung / m.ertrag) * 100}%`,
              background: "var(--strom)",
            }}
          >
            {m.einspeisung / m.ertrag > 0.14 && tr(locale, "Einspeisung")}
          </span>
        </div>
        <div className="mt-2 flex justify-between text-2xs text-fg-subtle">
          <span>
            {num(m.eigen, 0)} kWh selbst genutzt ·{" "}
            {num(m.quote * 100, 0)} % Eigenverbrauchsquote
          </span>
          <span>{num(m.einspeisung, 0)} kWh ins Netz</span>
        </div>
      </div>

      <dl className="mt-5 divide-y divide-border-base border-y border-border-base text-sm">
        <Row label={tr(locale, "Jahresertrag")} value={`${num(m.ertrag, 0)} kWh`} />
        <Row
          label={tr(locale, "Ersparnis durch Eigenverbrauch")}
          value={euro(m.ersparnis, 0)}
        />
        <Row label={tr(locale, "Einspeisevergütung 7,70 ct/kWh")} value={euro(m.erloes, 0)} />
        <Row
          label={tr(locale, "Autarkiegrad")}
          value={`${num(Math.min(m.autarkie, 1) * 100, 0)} %`}
        />
      </dl>

      <ResultRow
        label={tr(locale, "Wirtschaftlicher Nutzen im Jahr")}
        value={euro(m.nutzen, 0)}
        hint={tf(locale, "Bei rund {0} Investition amortisiert sich die Anlage in etwa {1} Jahren.", euro(m.invest, 0), num(m.jahre, 1))}
      />
    </FigureShell>
  );
}

/* ------------------------------------------------------------------ *
 * Wärmepumpe gegen Gasheizung
 * ------------------------------------------------------------------ */

export function WaermepumpeRechner({ locale }: FigureProps) {
  const { num, euro } = fmt(locale);
  const [bedarf, setBedarf] = useState(15000);
  const [jaz, setJaz] = useState(3.6);
  const [wpPreis, setWpPreis] = useState(24);
  const [gasPreis, setGasPreis] = useState(11);

  const KESSEL = 0.92; // Nutzungsgrad eines Gas-Brennwertkessels
  const strom = bedarf / jaz;
  const wpKosten = (strom * wpPreis) / 100;
  const gasMenge = bedarf / KESSEL;
  const gasKosten = (gasMenge * gasPreis) / 100;
  const diff = gasKosten - wpKosten;
  const breakEven = (wpPreis * KESSEL) / gasPreis;

  return (
    <FigureShell
      locale={locale}
      title={tr(locale, "Wärmepumpe oder Gasheizung?")}
      hint={tr(locale, "Betriebskosten im Jahr")}
      interactive
      footer="Nur die Energiekosten, ohne Anschaffung, Wartung und Förderung. Die Jahresarbeitszahl ist die entscheidende Größe: Sie sagt, wie viele Kilowattstunden Wärme aus einer Kilowattstunde Strom werden. Typisch sind 3,2 bis 3,8 für Luft-Wasser- und 4,0 bis 4,5 für Sole-Wasser-Wärmepumpen."
    >
      <div className="grid gap-4 @md:grid-cols-2">
        <Slider
          label={tr(locale, "Heizwärmebedarf im Jahr")}
          value={bedarf}
          onChange={setBedarf}
          min={4000}
          max={40000}
          step={500}
          display={`${num(bedarf)} kWh`}
        />
        <Slider
          label={tr(locale, "Jahresarbeitszahl (JAZ)")}
          value={jaz}
          onChange={setJaz}
          min={2}
          max={5.5}
          step={0.1}
          display={num(jaz, 1)}
        />
        <Slider
          label={tr(locale, "Wärmepumpentarif")}
          value={wpPreis}
          onChange={setWpPreis}
          min={15}
          max={40}
          step={0.5}
          display={`${num(wpPreis, 1)} ct/kWh`}
        />
        <Slider
          label={tr(locale, "Gaspreis")}
          value={gasPreis}
          onChange={setGasPreis}
          min={5}
          max={20}
          step={0.5}
          display={`${num(gasPreis, 1)} ct/kWh`}
        />
      </div>

      <div className="mt-6 space-y-3">
        <Bar
          locale={locale}
          label={tr(locale, "Wärmepumpe")}
          sub={tf(locale, "{0} kWh Strom bei JAZ {1}", num(strom, 0), num(jaz, 1))}
          value={wpKosten}
          max={Math.max(wpKosten, gasKosten)}
          color="var(--anlage)"
        />
        <Bar
          locale={locale}
          label={tr(locale, "Gas-Brennwertkessel")}
          sub={tf(locale, "{0} kWh Gas bei 92 % Nutzungsgrad", num(gasMenge, 0))}
          value={gasKosten}
          max={Math.max(wpKosten, gasKosten)}
          color="var(--gas)"
        />
      </div>

      <div
        className="mt-5 flex flex-wrap items-baseline justify-between gap-2 rounded-xl px-4 py-3"
        style={{
          background: diff >= 0 ? "var(--anlage-soft)" : "var(--waerme-soft)",
        }}
      >
        <span className="text-sm font-medium text-fg">
          {tr(
            locale,
            diff >= 0
              ? "Die Wärmepumpe ist günstiger"
              : "Die Gasheizung ist günstiger",
          )}
        </span>
        <span
          className="font-mono text-lg font-semibold tabular-nums"
          style={{ color: diff >= 0 ? "var(--anlage)" : "var(--waerme)" }}
        >
          {tf(locale, "{0} im Jahr", euro(Math.abs(diff), 0))}
        </span>
      </div>

      <p className="mt-3 text-xs leading-6 text-fg-subtle">
        {tf(
          locale,
          "Bei diesen Preisen liegt der Kipppunkt bei einer JAZ von {0}. Darüber lohnt sich die Wärmepumpe, darunter der Kessel.",
          num(breakEven, 2),
        )}
      </p>
    </FigureShell>
  );
}

/* ------------------------------------------------------------------ *
 * Wärmepumpen-Bauarten
 * ------------------------------------------------------------------ */

interface WpType {
  id: string;
  name: string;
  quelle: string;
  claim: string;
  desc: string;
  jaz: string;
  aufwand: string;
  facts: { k: string; v: string }[];
  tone: string;
}

const WP_TYPES: WpType[] = [
  {
    id: "luft-wasser",
    name: "Luft-Wasser-Wärmepumpe",
    quelle: "Außenluft",
    claim: "Der Normalfall im Bestand",
    desc: "Zieht Wärme aus der Außenluft und gibt sie an das Heizwasser ab. Günstig in der Anschaffung, ohne Erdarbeiten, dafür bei Frost am wenigsten effizient – genau dann, wenn am meisten Wärme gebraucht wird.",
    jaz: "3,2 – 3,8",
    aufwand: "gering",
    facts: [
      { k: "Aufstellung", v: "außen oder Split innen/außen" },
      { k: "Genehmigung", v: "keine, aber Schallschutz beachten" },
      { k: "Fördermindest-JAZ", v: "3,0" },
      { k: "Typisch bei", v: "Sanierung, Reihenhaus, Neubau" },
    ],
    tone: "var(--anlage)",
  },
  {
    id: "sole-wasser",
    name: "Sole-Wasser-Wärmepumpe",
    quelle: "Erdreich",
    claim: "Erdwärme über Sonde oder Kollektor",
    desc: "Nutzt die konstante Temperatur des Erdreichs – über eine Tiefenbohrung (Erdsonde) oder flächig verlegte Kollektoren. Deutlich effizienter als Luft, weil die Quelltemperatur im Winter nicht einbricht.",
    jaz: "4,0 – 4,5",
    aufwand: "hoch",
    facts: [
      { k: "Erschließung", v: "Bohrung 40–100 m oder Flächenkollektor" },
      { k: "Genehmigung", v: "wasserrechtliche Anzeige nötig" },
      { k: "Fördermindest-JAZ", v: "3,8" },
      { k: "Typisch bei", v: "Neubau mit Grundstück" },
    ],
    tone: "var(--waerme)",
  },
  {
    id: "wasser-wasser",
    name: "Wasser-Wasser-Wärmepumpe",
    quelle: "Grundwasser",
    claim: "Die effizienteste, aber selten möglich",
    desc: "Fördert Grundwasser aus einem Saugbrunnen, entzieht ihm Wärme und leitet es in einen Schluckbrunnen zurück. Höchste Effizienz, weil Grundwasser ganzjährig 8 bis 12 °C hat – setzt aber die passende Hydrogeologie voraus.",
    jaz: "4,5 – 5,0",
    aufwand: "hoch",
    facts: [
      { k: "Erschließung", v: "zwei Brunnen" },
      { k: "Genehmigung", v: "wasserrechtliche Erlaubnis" },
      { k: "Fördermindest-JAZ", v: "3,8" },
      { k: "Risiko", v: "Wasserqualität, Verockerung" },
    ],
    tone: "var(--wasser)",
  },
  {
    id: "luft-luft",
    name: "Luft-Luft-Wärmepumpe",
    quelle: "Außenluft",
    claim: "Heizt und kühlt über die Luft",
    desc: "Überträgt die Wärme direkt auf die Raumluft statt auf Heizwasser – technisch eine umkehrbare Klimaanlage. Braucht kein Heizungsrohrnetz, kann im Sommer kühlen, macht aber kein Warmwasser.",
    jaz: "3,0 – 4,0",
    aufwand: "gering",
    facts: [
      { k: "Warmwasser", v: "nein, separat nötig" },
      { k: "Kühlen", v: "ja, das ist der Hauptvorteil" },
      { k: "Typisch bei", v: "Wohnung, Büro, Passivhaus" },
      { k: "Förderung", v: "meist nicht förderfähig" },
    ],
    tone: "var(--gas)",
  },
  {
    id: "warmwasser",
    name: "Brauchwasserwärmepumpe",
    quelle: "Kellerluft",
    claim: "Nur für Warmwasser",
    desc: "Ein Speicher mit kleiner Wärmepumpe, der die Wärme aus der Kellerluft zieht. Ersetzt keine Heizung, sondern den Elektro-Boiler – und passt gut zu einer PV-Anlage, weil er den Überschuss speichern kann.",
    jaz: "2,5 – 3,5",
    aufwand: "sehr gering",
    facts: [
      { k: "Leistung", v: "typisch 1,5 – 2 kW" },
      { k: "Nebeneffekt", v: "entfeuchtet und kühlt den Keller" },
      { k: "Passt zu", v: "PV-Überschuss, [[energiemanagement]]" },
      { k: "Speicher", v: "200 – 300 Liter" },
    ],
    tone: "var(--strom)",
  },
];

export function WaermepumpenTypen({ locale }: FigureProps) {
  const [activeId, setActiveId] = useState(WP_TYPES[0].id);
  const active = L(locale, WP_TYPES.find((t) => t.id === activeId)!);

  return (
    <FigureShell
      locale={locale}
      title={tr(locale, "Bauarten von Wärmepumpen")}
      hint={tr(locale, "Wärmequelle und Abgabemedium im Namen")}
      interactive
      footer="Der Name folgt immer demselben Schema: erst die Wärmequelle, dann das Medium, an das die Wärme abgegeben wird. „Sole-Wasser“ heißt also: Wärme aus dem Erdreich über eine Solelösung, abgegeben an das Heizwasser."
    >
      <div className="grid gap-4 @2xl:grid-cols-[minmax(0,15rem)_1fr]">
        <ul className="flex gap-2 overflow-x-auto pb-1 @2xl:flex-col @2xl:overflow-visible @2xl:pb-0">
          {L(locale, WP_TYPES).map((t) => (
            <li key={t.id} className="shrink-0 @2xl:shrink">
              <button
                type="button"
                onClick={() => setActiveId(t.id)}
                aria-pressed={t.id === activeId}
                className={cn(
                  "w-full whitespace-nowrap rounded-lg px-3 py-2 text-left text-xs transition-colors @2xl:whitespace-normal",
                  t.id === activeId
                    ? "bg-surface-2 font-medium text-fg"
                    : "text-fg-muted hover:bg-surface-2/60 hover:text-fg",
                )}
                style={
                  t.id === activeId
                    ? { boxShadow: `inset 3px 0 0 ${t.tone}` }
                    : undefined
                }
              >
                {t.name}
              </button>
            </li>
          ))}
        </ul>

        <div className="min-w-0 rounded-xl border border-border-base bg-surface-2 p-5">
          <span
            className="inline-block rounded px-1.5 py-0.5 text-2xs font-semibold uppercase tracking-[0.08em]"
            style={{
              background: `color-mix(in srgb, ${active.tone} 14%, var(--surface))`,
              color: active.tone,
            }}
          >
            Quelle: {active.quelle}
          </span>
          <p className="mt-2.5 text-base font-semibold text-fg">{active.name}</p>
          <p className="text-sm text-fg-subtle">{active.claim}</p>
          <p className="mt-3 text-sm leading-6 text-fg-muted">{active.desc}</p>

          <div className="mt-4 grid gap-3 border-t border-border-base pt-4 @md:grid-cols-2">
            <div className="rounded-lg bg-surface px-3 py-2">
              <p className="text-2xs uppercase tracking-[0.08em] text-fg-subtle">
                Jahresarbeitszahl
              </p>
              <p
                className="mt-0.5 font-mono text-base font-semibold"
                style={{ color: active.tone }}
              >
                {active.jaz}
              </p>
            </div>
            <div className="rounded-lg bg-surface px-3 py-2">
              <p className="text-2xs uppercase tracking-[0.08em] text-fg-subtle">
                Erschließungsaufwand
              </p>
              <p className="mt-0.5 text-base font-semibold text-fg">
                {active.aufwand}
              </p>
            </div>
          </div>

          <dl className="mt-4 grid gap-x-6 gap-y-2.5 @md:grid-cols-2">
            {active.facts.map((f) => (
              <div key={f.k} className="min-w-0 text-xs">
                <dt className="text-fg-subtle">{f.k}</dt>
                <dd className="mt-0.5 font-medium text-fg-muted">
                  {f.v.replace(/\[\[|\]\]/g, "")}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </FigureShell>
  );
}

/* ------------------------------------------------------------------ */

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 py-2.5">
      <dt className="text-fg-muted">{label}</dt>
      <dd className="shrink-0 font-mono tabular-nums text-fg">{value}</dd>
    </div>
  );
}

function Bar({
  locale,
  label,
  sub,
  value,
  max,
  color,
}: {
  locale: Locale;
  label: string;
  sub: string;
  value: number;
  max: number;
  color: string;
}) {
  const { euro } = fmt(locale);
  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-x-3 text-sm">
        <span className="font-medium text-fg">{label}</span>
        <span className="font-mono tabular-nums text-fg">{euro(value, 0)}</span>
      </div>
      <div className="mt-1.5 h-6 overflow-hidden rounded-md bg-surface-2">
        <div
          className="h-full transition-[width] duration-300"
          style={{ width: `${(value / max) * 100}%`, background: color }}
        />
      </div>
      <p className="mt-1 text-2xs text-fg-subtle">{sub}</p>
    </div>
  );
}
