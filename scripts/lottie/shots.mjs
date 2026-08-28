/** Frame-pins each hero variant in the Skottie player for review. */
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const OUT = ".shots/lottie";
mkdirSync(OUT, { recursive: true });
const scenes = process.argv[2]?.split(",") ?? ["scene-3", "scene-4", "scene-5", "scene-6"];
const frames = (process.argv[3] ?? "0,60,120,179").split(",").map(Number);

const b = await chromium.launch();
const ctx = await b.newContext({ viewport: { width: 1100, height: 760 }, deviceScaleFactor: 2 });
const p = await ctx.newPage();
for (const s of scenes) {
  for (const f of frames) {
    await p.goto(`http://localhost:3030/energy-wiki/${s}?frame=${f}`, { waitUntil: "networkidle" });
    await p.waitForTimeout(1100);
    const canvas = await p.$("#main-canvas");
    await (canvas ?? p).screenshot({ path: `${OUT}/${s}-f${f}.png` });
  }
  console.log(s, "ok");
}
await b.close();
