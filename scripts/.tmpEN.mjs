import { chromium } from "playwright";
import { readFileSync, readdirSync } from "node:fs";

// every slug
const slugs = [];
for (const f of readdirSync("src/content/articles").filter(f => f.endsWith(".ts"))) {
  const t = readFileSync("src/content/articles/" + f, "utf8");
  for (const m of t.matchAll(/^\s{4}slug: "([^"]+)",/gm)) slugs.push(m[1]);
}

// German markers that should never appear in English prose
const GERMAN = /\b(und|oder|nicht|der|die|das|ist|ein|eine|mit|von|für|bei|nur|auf|wird|werden|sind|kann|sich|dem|den|des|als|wie|über|unter|aus|nach|vor|Jahr|Verbrauch|Zähler|Netzentgelt|Abschlag|jährlich|monatlich|Kunde|Kunden)\b/;
// legal/product names that are meant to stay German
const ALLOW = /(EnWG|MsbG|StromGVV|GasGVV|StromNEV|AVBFernwärmeV|KAV|BEHG|GEG|EEG|GPKE|GeLi|MaBiS|MPES|WiM|EDI@Energy|Marktstammdatenregister|MaStR|Zustandszahl|Abschlag|Grundpreis|Arbeitspreis|Leistungspreis|Marktlokation|Messlokation|Grundversorgung|Ersatzversorgung|Konzessionsabgabe|Messstellenbetrieb|Formatanpassung|Jahresarbeitszahl|Solarpaket|Solarspitzengesetz|Gebäudemodernisierungsgesetz|Bio-Treppe|Stadtwerk|Bundesnetzagentur|Entflechtung|Messeinrichtung|Zählpunktbezeichnung|Differenzbilanzierung|GNDEW|Mitteilung|Datenformate|THG-Quote|Wärmepumpe|Balkonkraftwerk|Netzentgelte|Umlage)/;

const b = await chromium.launch();
const p = await (await b.newContext({ viewport: { width: 1400, height: 900 } })).newPage();
const hits = [];
for (const slug of slugs) {
  await p.goto(`http://localhost:3210/en/wissen/${slug}`, { waitUntil: "domcontentloaded" });
  const text = await p.$eval("article", el => el.innerText).catch(() => "");
  for (const line of text.split("\n")) {
    const s = line.trim();
    if (s.length < 12) continue;
    if (!GERMAN.test(s)) continue;
    if (ALLOW.test(s) && !/\b(und|oder|nicht|wird|werden|sind|kann|jährlich)\b/.test(s)) continue;
    hits.push(`${slug}: ${s.slice(0, 110)}`);
  }
}
console.log(hits.length ? hits.slice(0, 40).join("\n") : "no German prose found on the English article pages");
console.log(`\n${hits.length} suspicious line(s) across ${slugs.length} pages`);
await b.close();
