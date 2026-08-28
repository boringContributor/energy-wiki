// Crawls every rendered /en page and flags text that still looks German.
// Catches strings that live in figure JSX rather than in the article bodies,
// which the static translation check cannot see.
//
//   pnpm build && pnpm start &   # or pnpm dev
//   node scripts/scan-en.mjs

const BASE = process.env.BASE ?? "http://localhost:3000";

// Words that only occur in German prose. Umlauts alone are not enough:
// proper nouns like "Bundesnetzagentur" or "Zähler" legitimately survive.
const GERMAN = [
  "aber", "auch", "auf", "aus", "bei", "beim", "dann", "das", "dem", "den",
  "der", "des", "die", "durch", "ein", "eine", "einem", "einen", "einer",
  "eines", "etwa", "für", "gegen", "hat", "ihre", "ist", "kann", "keine",
  "man", "mit", "muss", "nach", "nicht", "nur", "oder", "ohne",
  "rund", "sich", "sie", "sind", "über", "und", "unter", "vom", "von",
  "vor", "wenn", "werden", "wird", "wie", "zum", "zur", "zwischen",
];
const GERMAN_RE = new RegExp(`(^|[^\\p{L}])(${GERMAN.join("|")})([^\\p{L}]|$)`, "iu");

// Words with no English homograph, so a single hit is already conclusive. The
// stopword list above misses them in short labels that contain no function word.
const GERMAN_WORDS = [
  "Monate", "Monaten", "Jahre", "Jahren", "Woche", "Wochen", "Tage", "Tagen",
  "Verbrauch", "Kosten", "Preis", "Preise", "Rechnung", "Kunde", "Kunden",
  "Anlage", "Anlagen", "Zähler", "täglich", "monatlich", "jährlich",
];
const WORD_RE = new RegExp(`(^|[^\\p{L}])(${GERMAN_WORDS.join("|")})([^\\p{L}]|$)`, "iu");

// Terms this wiki deliberately keeps in German (see src/content/translations/README.md).
const KEEP = /^(Marktlokation|Messlokation|Zählpunkt|Grundpreis|Arbeitspreis|Abschlag|Zustandszahl|Brennwert|Netzentgelt|Konzessionsabgabe|Stromsteuer|Energiesteuer|Grundversorgung|Ersatzversorgung|Lieferantenwechsel|Messstellenbetrieb|Formatanpassung)/;

// German names of German documents and rules, quoted inside English sentences.
const INTENTIONAL = [
  "Mitteilung zu den Datenformaten",
  "Gesetz zum Neustart der Digitalisierung der Energiewende",
  "Aufschlag für besondere Netznutzung",
  "allgemeine Preise",
];

async function slugs() {
  const html = await (await fetch(`${BASE}/en/glossar`)).text();
  return [...new Set([...html.matchAll(/\/en\/wissen\/([a-z0-9-]+)/g)].map((m) => m[1]))];
}

function textLines(html) {
  // Everything from the sources block down is citation titles — German
  // documents keep their German names, so that section is not scanned.
  const cut = html.indexOf("Sources &amp; further reading");
  const body = (cut === -1 ? html : html.slice(0, cut))
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ");
  return [...new Set(
    body
      .split(/<[^>]+>/)
      .map((s) =>
        s
          .replace(/&nbsp;/g, " ")
          .replace(/&amp;/g, "&")
          .replace(/&#x27;|&#39;/g, "'")
          .replace(/&quot;/g, '"')
          .replace(/&[a-z]+;/g, " ")
          .trim(),
      )
      .filter((s) => s.length > 3),
  )];
}

const pages = await slugs();
const hits = [];

for (const slug of ["", "glossar", "hero-varianten", ...pages.map((s) => `wissen/${s}`)]) {
  const url = `${BASE}/en/${slug}`;
  const html = await (await fetch(url)).text();
  for (const line of textLines(html)) {
    if (KEEP.test(line)) continue;
    if (INTENTIONAL.some((p) => line.includes(p))) continue;
    if (GERMAN_RE.test(line) || WORD_RE.test(line))
      hits.push({ slug: slug || "home", line });
  }
}

if (hits.length === 0) {
  console.log(`scanned ${pages.length + 1} English pages / no German text found`);
} else {
  const byPage = new Map();
  for (const h of hits) byPage.set(h.slug, [...(byPage.get(h.slug) ?? []), h.line]);
  for (const [slug, lines] of byPage) {
    console.log(`\n${slug}`);
    for (const line of lines) console.log(`  ${line.slice(0, 140)}`);
  }
  console.log(`\n${hits.length} suspicious lines on ${byPage.size} pages`);
  process.exitCode = 1;
}
