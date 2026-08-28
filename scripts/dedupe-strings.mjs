// Drops duplicate keys from src/components/figures/strings.en.ts, keeping the
// first occurrence, and reports every case where the two values disagreed so a
// silently-lost translation cannot slip through.
//
//   node scripts/dedupe-strings.mjs

import { readFileSync, writeFileSync } from "node:fs";

const FILE = "src/components/figures/strings.en.ts";
const src = readFileSync(FILE, "utf8");

const [head, rest] = split(src, "= {");
const [body, tail] = splitLast(rest, "};");

const KEY = /^ {2}("(?:[^"\\]|\\.)*"|[\p{L}_][\p{L}\p{N}_]*):/u;

// Group lines into entries: a new entry starts at a two-space-indented key.
const chunks = [];
for (const line of body.split("\n")) {
  if (KEY.test(line) && chunks.length) chunks.push([line]);
  else if (chunks.length) chunks[chunks.length - 1].push(line);
  else chunks.push([line]);
}

const seen = new Map();
const kept = [];
let dropped = 0;
for (const chunk of chunks) {
  const text = chunk.join("\n");
  const key = KEY.exec(text)?.[1].replace(/^"|"$/g, "");
  if (key === undefined) {
    kept.push(text);
    continue;
  }
  if (seen.has(key)) {
    dropped++;
    if (norm(seen.get(key)) !== norm(text)) {
      console.log(`differing duplicate: ${key.slice(0, 70)}`);
      console.log(`  kept:    ${norm(seen.get(key)).slice(0, 160)}`);
      console.log(`  dropped: ${norm(text).slice(0, 160)}`);
    }
    continue;
  }
  seen.set(key, text);
  kept.push(text);
}

writeFileSync(FILE, `${head}= {${kept.join("\n")}};${tail}`);
console.log(`${seen.size} entries, ${dropped} duplicates removed`);

function split(s, sep) {
  const i = s.indexOf(sep);
  return [s.slice(0, i), s.slice(i + sep.length)];
}
function splitLast(s, sep) {
  const i = s.lastIndexOf(sep);
  return [s.slice(0, i), s.slice(i + sep.length)];
}
function norm(s) {
  return s.replace(/\s+/g, " ").replace(/\/\*.*?\*\//g, "").trim();
}
