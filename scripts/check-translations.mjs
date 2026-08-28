/**
 * Translation integrity check.
 *
 * 1. Every article has an English body.
 * 2. Numbers that carry a unit mean the same in both languages. German and
 *    English formats collide head-on — "1.000" is a thousand in German and one
 *    in English — so each side is parsed with its own rules and the values
 *    compared.
 * 3. Wiki-link targets match, so no link was dropped during translation.
 */
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const ART = "src/content/articles";
const TR = "src/content/translations";

// Ambiguous single letters (A, V, W) are left out: they match German words.
const UNIT = String.raw`(?:kWh|MWh|GWh|TWh|kWp|kvarh|kW|Wp|m³|m²|ct\/kWh|ct\/kvarh|kV|€\/t|€\/kW)`;
const DE_N = String.raw`\d{1,3}(?:\.\d{3})*(?:,\d+)?`;
const EN_N = String.raw`\d{1,3}(?:,\d{3})*(?:\.\d+)?`;

const deUnit = new RegExp(String.raw`(?<![\d.,])(${DE_N})\s*(${UNIT})(?![a-zA-Z])`, "g");
const enUnit = new RegExp(String.raw`(?<![\d.,])(${EN_N})\s*(${UNIT})(?![a-zA-Z])`, "g");
// English puts the currency first: "€95/kW·a" means the same as "95 €/kW·a".
const enEuroUnit = /€\s*(\d{1,3}(?:,\d{3})*(?:\.\d+)?)\s*\/\s*(kW|kWh|MWh|t)/g;
const deEuro = new RegExp(String.raw`(?<![\d.,])(${DE_N})\s*€(?![\/a-zA-Z])`, "g");
const enEuro = new RegExp(String.raw`€\s*(${EN_N})|(?<![\d.,])(${EN_N})\s*€(?![\/a-zA-Z])`, "g");

const pDe = (s) => parseFloat(s.replace(/\./g, "").replace(",", "."));
const pEn = (s) => parseFloat(s.replace(/,/g, ""));
const LINK = /\[\[([a-z0-9-]+)(?:\|[^\]]*?)?\]\]/g;

/** The `body: { de: [ … ] }` array of each German article. */
function deBodies(text) {
  const out = new Map();
  const re = /^\s{4}slug: "([^"]+)",/gm;
  let m;
  while ((m = re.exec(text))) {
    const rest = text.slice(m.index);
    const start = rest.indexOf("body: {");
    const next = rest.slice(1).search(/^\s{4}slug: "/m);
    const chunk = rest.slice(start, next === -1 ? rest.length : next + 1);
    const relEnd = chunk.indexOf("\n    related:");
    out.set(m[1], relEnd === -1 ? chunk : chunk.slice(0, relEnd));
  }
  return out;
}

function enBodies(text) {
  const out = new Map();
  const re = /^  "?([a-z0-9-]+)"?: \[$/gm;
  let m;
  const marks = [];
  while ((m = re.exec(text))) marks.push([m[1], m.index]);
  marks.forEach(([slug, at], i) => {
    out.set(slug, text.slice(at, i + 1 < marks.length ? marks[i + 1][1] : text.length));
  });
  return out;
}

const de = new Map();
for (const f of readdirSync(ART).filter((f) => f.endsWith(".ts")))
  for (const [k, v] of deBodies(readFileSync(join(ART, f), "utf8"))) de.set(k, v);

const en = new Map();
for (const f of readdirSync(TR).filter((f) => f.endsWith(".en.ts")))
  for (const [k, v] of enBodies(readFileSync(join(TR, f), "utf8"))) en.set(k, v);

const missing = [...de.keys()].filter((s) => !en.has(s));
const orphan = [...en.keys()].filter((s) => !de.has(s));
const problems = [];


for (const [slug, d] of de) {
  const e = en.get(slug);
  if (!e) continue;

  const a = new Map();
  for (const m of d.matchAll(deUnit)) a.set(`${pDe(m[1])} ${m[2]}`, (a.get(`${pDe(m[1])} ${m[2]}`) ?? 0) + 1);
  for (const m of d.matchAll(deEuro)) a.set(`${pDe(m[1])} EUR`, (a.get(`${pDe(m[1])} EUR`) ?? 0) + 1);

  const b = new Map();
  for (const m of e.matchAll(enUnit)) b.set(`${pEn(m[1])} ${m[2]}`, (b.get(`${pEn(m[1])} ${m[2]}`) ?? 0) + 1);
  for (const m of e.matchAll(enEuroUnit)) {
    const key = `${pEn(m[1])} €/${m[2]}`;
    b.set(key, (b.get(key) ?? 0) + 1);
  }
  for (const m of e.matchAll(enEuro)) {
    const raw = m[1] ?? m[2];
    b.set(`${pEn(raw)} EUR`, (b.get(`${pEn(raw)} EUR`) ?? 0) + 1);
  }

  for (const [k, n] of a) {
    const got = b.get(k) ?? 0;
    if (got < n) problems.push(`${slug}: ${k} — ${n}× in DE, ${got}× in EN`);
  }

  const dl = new Set([...d.matchAll(LINK)].map((m) => m[1]));
  const el = new Set([...e.matchAll(LINK)].map((m) => m[1]));
  const lost = [...dl].filter((x) => !el.has(x));
  if (lost.length) problems.push(`${slug}: link(s) lost in EN → ${lost.join(", ")}`);
}

console.log(`${de.size} articles, ${en.size} translated`);
if (missing.length) console.log(`missing EN: ${missing.join(", ")}`);
if (orphan.length) console.log(`unknown slug: ${orphan.join(", ")}`);
if (problems.length) {
  console.error(`\n${problems.length} to review:`);
  for (const p of problems) console.error("  " + p);
}
if (missing.length || orphan.length || problems.length) process.exit(1);
console.log("translations ok");
