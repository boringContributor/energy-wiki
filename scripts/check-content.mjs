/**
 * Content integrity check.
 *
 * Runs over the raw article sources rather than the compiled bundle, so it
 * works without a build step and catches the two mistakes that are easy to make
 * while authoring: a [[wiki-link]] to a slug that does not exist, and a
 * {t:"figure"} pointing at a figure id the registry does not know.
 *
 *   node scripts/check-content.mjs
 */
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const ARTICLE_DIR = "src/content/articles";
const REGISTRY = "src/components/figures/index.tsx";

const files = readdirSync(ARTICLE_DIR).filter((f) => f.endsWith(".ts"));
const sources = files.map((f) => ({
  file: join(ARTICLE_DIR, f),
  text: readFileSync(join(ARTICLE_DIR, f), "utf8"),
}));

const slugs = new Set();
for (const { text } of sources) {
  for (const m of text.matchAll(/^\s{4}slug: "([^"]+)",/gm)) slugs.add(m[1]);
}

const registry = readFileSync(REGISTRY, "utf8");
const figureIds = new Set();
const block = registry.slice(
  registry.indexOf("export const figures = {"),
  registry.indexOf("} as const;"),
);
for (const m of block.matchAll(/^\s{2}"?([a-z0-9-]+)"?:/gm)) figureIds.add(m[1]);

const problems = [];

for (const { file, text } of sources) {
  for (const m of text.matchAll(/\[\[([^\]|]+?)(?:\|[^\]]*?)?\]\]/g)) {
    const target = m[1].trim();
    if (!slugs.has(target)) {
      problems.push(`${file}: wiki link to unknown slug "${target}"`);
    }
  }
  for (const m of text.matchAll(/t: "figure", id: "([^"]+)"/g)) {
    if (!figureIds.has(m[1])) {
      problems.push(`${file}: figure "${m[1]}" is not in the registry`);
    }
  }
  for (const m of text.matchAll(/related: \[([^\]]*)\]/gs)) {
    for (const r of m[1].matchAll(/"([^"]+)"/g)) {
      if (!slugs.has(r[1])) {
        problems.push(`${file}: related entry "${r[1]}" is not a known slug`);
      }
    }
  }
}

const unused = [...figureIds].filter(
  (id) => !sources.some(({ text }) => text.includes(`id: "${id}"`)),
);

console.log(`${slugs.size} articles, ${figureIds.size} figures`);
if (unused.length) console.log(`unused figures: ${unused.join(", ")}`);

if (problems.length) {
  console.error(`\n${problems.length} problem(s):`);
  for (const p of problems) console.error(`  ${p}`);
  process.exit(1);
}
console.log("content ok");
