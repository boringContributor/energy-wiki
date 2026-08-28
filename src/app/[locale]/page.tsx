import Link from "next/link";
import { notFound } from "next/navigation";

import { CategoryIcon } from "@/components/CategoryIcon";
import { Lottie } from "@/components/lottie/Lottie";
import { GridBackdrop } from "@/components/home/GridBackdrop";
import { articles, articlesInCategory, categories, getArticle } from "@/content";
import { HERO_ANIMATION } from "@/lib/heroAnimation";
import { isLocale, s, t, type Locale } from "@/lib/i18n";
import { stripMarkup } from "@/lib/utils";

const START_HERE = [
  "energiemarkt-ueberblick",
  "tarif",
  "zaehler",
  "photovoltaik",
];

const INTERACTIVE: {
  slug: string;
  label: { de: string; en: string };
  hint: { de: string; en: string };
}[] = [
  {
    slug: "thermische-gasabrechnung",
    label: { de: "m³ → kWh umrechnen", en: "Convert m³ → kWh" },
    hint: { de: "Zustandszahl & Brennwert", en: "State number & calorific value" },
  },
  {
    slug: "strompreis-zusammensetzung",
    label: { de: "Strompreis zerlegen", en: "Break down the power price" },
    hint: { de: "Jede Komponente einzeln", en: "Every component, one by one" },
  },
  {
    slug: "abschlagszahlung",
    label: { de: "Abschlag berechnen", en: "Calculate the instalment" },
    hint: { de: "Verbrauch → Monatsbetrag", en: "Consumption → monthly amount" },
  },
  {
    slug: "dynamischer-tarif",
    label: { de: "Dynamischen Tarif simulieren", en: "Simulate a dynamic tariff" },
    hint: { de: "24 Stunden Börsenpreis", en: "24 hours of spot prices" },
  },
  {
    slug: "photovoltaik",
    label: { de: "PV-Anlage durchrechnen", en: "Model a solar array" },
    hint: { de: "Ertrag, Eigenverbrauch, Amortisation", en: "Yield, self-use, payback" },
  },
  {
    slug: "waermepumpe",
    label: { de: "Wärmepumpe gegen Gas", en: "Heat pump vs. gas" },
    hint: { de: "Jahresarbeitszahl und Kipppunkt", en: "Seasonal performance and break-even" },
  },
];

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;

  const startHere = START_HERE.map((slug) => getArticle(slug)).filter(
    (a): a is NonNullable<typeof a> => Boolean(a),
  );

  return (
    <main id="content">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border-base">
        <GridBackdrop />
        <div className="relative mx-auto grid max-w-[104rem] gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:py-24">
          <div className="ew-rise">
            <h1 className="max-w-2xl text-4xl font-semibold leading-[1.08] tracking-tight text-fg sm:text-5xl lg:text-6xl">
              {l === "de" ? (
                <>
                  Energiewirtschaft,
                  <br />
                  <span className="text-accent">endlich verständlich.</span>
                </>
              ) : (
                <>
                  The German energy market,
                  <br />
                  <span className="text-accent">finally legible.</span>
                </>
              )}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg-muted">
              {l === "de"
                ? "Von der Zustandszahl bis zum dynamischen Tarif: Alles, was man über Strom, Gas, Wasser und Wärme wissen muss, um Software für die deutsche Energiewirtschaft zu bauen – kurz, korrekt und mit Rechenbeispielen."
                : "From calorific values to dynamic tariffs: everything you need to know about power, gas, water and heat to build software for German utilities – concise, correct, with worked examples."}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`/${l}/wissen/energiemarkt-ueberblick`}
                className="rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-accent-fg transition-colors hover:bg-accent-hover"
              >
                {s("startHere", l)} →
              </Link>
              <Link
                href={`/${l}/glossar`}
                className="rounded-lg border border-border-strong bg-surface px-4 py-2.5 text-sm font-medium text-fg transition-colors hover:bg-surface-2"
              >
                {s("glossary", l)} · {articles.length}
              </Link>
            </div>

            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
              <Stat value={String(articles.length)} label={s("articles", l)} />
              <Stat
                value={String(categories.length)}
                label={s("topics", l)}
              />
              <Stat
                value="28"
                label={l === "de" ? "Interaktive Grafiken" : "Interactive figures"}
              />
            </dl>
          </div>

          <div className="relative hidden lg:block">
            <Lottie
              name={HERO_ANIMATION}
              className="mx-auto w-full max-w-xl"
              ariaLabel={
                l === "de"
                  ? "Animierte Darstellung des Energieflusses vom Kraftwerk zum Haushalt"
                  : "Animated depiction of energy flowing from plant to household"
              }
              fallback={<HeroFallback />}
            />
          </div>
        </div>
      </section>

      {/* Start here */}
      <section className="mx-auto max-w-[104rem] px-4 py-14 sm:px-6">
        <SectionHeading
          eyebrow={s("startHere", l)}
          title={
            l === "de"
              ? "Vier Artikel, die den Rest erklären"
              : "Four articles that unlock the rest"
          }
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {startHere.map((a, i) => (
            <Link
              key={a.slug}
              href={`/${l}/wissen/${a.slug}`}
              className="group flex flex-col rounded-2xl border border-border-base bg-surface p-5 transition-all hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[var(--shadow-md)]"
            >
              <span className="font-mono text-2xs text-fg-subtle">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="mt-3 font-medium text-fg group-hover:text-accent">
                {t(a.title, l)}
              </span>
              <span className="mt-2 line-clamp-3 text-sm leading-6 text-fg-muted">
                {stripMarkup(t(a.summary, l))}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Interactive */}
      <section className="border-y border-border-base bg-bg-subtle">
        <div className="mx-auto max-w-[104rem] px-4 py-14 sm:px-6">
          <SectionHeading
            eyebrow={s("interactive", l)}
            title={
              l === "de"
                ? "Zahlen anfassen statt Formeln lesen"
                : "Touch the numbers instead of reading formulas"
            }
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INTERACTIVE.map((item) => (
              <Link
                key={item.slug + item.label.de}
                href={`/${l}/wissen/${item.slug}`}
                className="group flex items-start gap-3 rounded-xl border border-border-base bg-surface p-4 transition-colors hover:border-accent/40"
              >
                <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent transition-transform group-hover:scale-105">
                  <svg
                    viewBox="0 0 20 20"
                    className="size-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    aria-hidden
                  >
                    <path d="M3 13.5 7.5 8l3.5 3.5L17 5" />
                    <path d="M12.8 5H17v4.2" />
                  </svg>
                </span>
                <span>
                  <span className="block text-sm font-medium text-fg">
                    {item.label[l] ?? item.label.de}
                  </span>
                  <span className="mt-0.5 block text-xs text-fg-subtle">
                    {item.hint[l] ?? item.hint.de}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="mx-auto max-w-[104rem] px-4 py-14 sm:px-6">
        <SectionHeading
          eyebrow={s("topics", l)}
          title={
            /* Spelled out from the actual count — the headline used to say
               "seven" while eight categories were rendered below it. */
            l === "de"
              ? `${numeral(categories.length, "de")} Themen, ein Marktbild`
              : `${numeral(categories.length, "en")} topics, one picture of the market`
          }
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((c) => {
            const count = articlesInCategory(c.id).length;
            return (
              <Link
                key={c.id}
                href={`/${l}/thema/${c.id}`}
                className="group relative overflow-hidden rounded-2xl border border-border-base bg-surface p-5 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]"
              >
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-0.5 opacity-60 transition-opacity group-hover:opacity-100"
                  style={{ background: `var(--${c.tone})` }}
                />
                <span
                  className="flex size-10 items-center justify-center rounded-xl"
                  style={{
                    background: `var(--${c.tone}-soft)`,
                    color: `var(--${c.tone})`,
                  }}
                >
                  <CategoryIcon name={c.icon} />
                </span>
                <span className="mt-4 block font-medium text-fg">
                  {t(c.title, l)}
                </span>
                <span className="mt-1.5 block text-sm leading-6 text-fg-muted">
                  {t(c.summary, l)}
                </span>
                <span className="mt-4 block text-2xs uppercase tracking-[0.08em] text-fg-subtle">
                  {count} {s("articles", l)}
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div>
      <p className="text-2xs font-semibold uppercase tracking-[0.12em] text-accent">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="sr-only">{label}</dt>
      <dd>
        <span className="block font-mono text-2xl font-semibold tabular-nums text-fg">
          {value}
        </span>
        <span className="mt-0.5 block text-xs uppercase tracking-[0.08em] text-fg-subtle">
          {label}
        </span>
      </dd>
    </div>
  );
}

/** Shown until the Lottie scene loads, and permanently under reduced motion. */
function HeroFallback() {
  return (
    <svg viewBox="0 0 420 320" className="w-full" aria-hidden>
      <g
        fill="none"
        stroke="var(--border-strong)"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <path d="M70 210v-70M70 140l-22-14M70 140l22-14M70 168l-22-14M70 168l22-14" />
        <path d="M300 214v-46l38-30 38 30v46Z" />
        <path d="M326 214v-28h24v28" />
      </g>
      <path
        d="M92 176h60c14 0 14 22 28 22h44c14 0 14-22 28-22h48"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="2"
        className="ew-flow"
      />
      <circle cx="70" cy="210" r="3.5" fill="var(--accent)" />
      <circle cx="338" cy="214" r="3.5" fill="var(--accent)" />
      <line
        x1="40"
        y1="230"
        x2="400"
        y2="230"
        stroke="var(--border)"
        strokeWidth="1"
      />
    </svg>
  );
}

/** Small numbers spelled out, so a headline can name a count without drifting. */
function numeral(n: number, locale: Locale): string {
  const de = ["null", "Ein", "Zwei", "Drei", "Vier", "Fünf", "Sechs", "Sieben", "Acht", "Neun", "Zehn"];
  const en = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
  return (locale === "de" ? de : en)[n] ?? String(n);
}
