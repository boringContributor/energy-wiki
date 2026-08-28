/**
 * Visual smoke test: renders a handful of pages in light and dark and writes
 * PNGs to .shots/. Not part of CI — a tool for reviewing design changes.
 *
 *   node scripts/shots.mjs [baseUrl]
 */
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const base = process.argv[2] ?? "http://localhost:3210";
const OUT = ".shots";
mkdirSync(OUT, { recursive: true });

const PAGES = [
  ["home", "/de", 2400],
  ["article-abschlag", "/de/wissen/abschlagszahlung", 2600],
  ["article-strompreis", "/de/wissen/strompreis-zusammensetzung", 2400],
  ["article-gas", "/de/wissen/thermische-gasabrechnung", 2400],
  ["article-dynamisch", "/de/wissen/dynamischer-tarif", 3000],
  ["article-zaehler", "/de/wissen/zaehlertypen", 2000],
  ["glossar", "/de/glossar", 1800],
  ["thema", "/de/thema/messwesen", 1400],
];

const browser = await chromium.launch();

for (const theme of ["light", "dark"]) {
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
    colorScheme: theme,
  });
  await context.addInitScript((t) => {
    try {
      localStorage.setItem("theme", t);
    } catch {}
  }, theme);

  const page = await context.newPage();
  for (const [name, path, height] of PAGES) {
    await page.setViewportSize({ width: 1440, height });
    await page.goto(base + path, { waitUntil: "networkidle" });
    await page.waitForTimeout(400);
    await page.screenshot({ path: `${OUT}/${name}.${theme}.png` });
    console.log(`${OUT}/${name}.${theme}.png`);
  }
  await context.close();
}

// One mobile view to check the responsive layout.
const mobile = await browser.newContext({
  viewport: { width: 390, height: 2200 },
  deviceScaleFactor: 2,
});
const mp = await mobile.newPage();
await mp.goto(base + "/de/wissen/abschlagszahlung", { waitUntil: "networkidle" });
await mp.waitForTimeout(300);
await mp.screenshot({ path: `${OUT}/article.mobile.png` });
console.log(`${OUT}/article.mobile.png`);

await browser.close();
