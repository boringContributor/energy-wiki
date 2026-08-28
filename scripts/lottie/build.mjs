/**
 * Generates the hero animation variants.
 *
 *   node scripts/lottie/build.mjs
 *
 * Pretty-printed into the Skottie player project for review, minified into
 * public/lottie for the site. Player scene folders must be named scene-N, so
 * the mapping lives in VARIANTS at the bottom.
 */
import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, resolve } from "node:path";

import {
  C, anim, arc, ellipse, fill, gradFill, gradStroke, group, layer, line,
  poly, rect, scene, stroke, trim,
} from "./lib.mjs";

const W = 520;
const H = 320;
const LOOP = 180; // 3 s at 60 fps

const rad = (d) => (d * Math.PI) / 180;
const onCircle = (cx, cy, r, deg) => [cx + r * Math.cos(rad(deg)), cy - r * Math.sin(rad(deg))];

/* ================================================================= *
 * A — Netzpuls
 * One source, two substations, three sites, one grid connection. The
 * terminals carry a glyph so they read as roles rather than as the generic
 * node mesh the diagram recipe warns about.
 * ================================================================= */

function netzpuls() {
  const N = {
    S: [66, 160, 22],
    J1: [192, 84, 7],
    J2: [192, 236, 7],
    C1: [338, 44, 7],
    C2: [338, 160, 7],
    C3: [338, 276, 7],
    H: [456, 160, 22],
  };
  const EDGES = [
    ["S", "J1", 0], ["S", "J2", 0],
    ["J1", "C1", 1], ["J1", "C2", 1], ["J2", "C2", 1], ["J2", "C3", 1],
    ["C1", "H", 2], ["C2", "H", 2], ["C3", "H", 2],
  ];

  const layers = [];
  let ind = 1;

  /** Pull an edge back to each node's rim so it never runs under a glyph. */
  const span = (a, b) => {
    const [ax, ay, ar] = N[a];
    const [bx, by, br] = N[b];
    const dx = bx - ax;
    const dy = by - ay;
    const len = Math.hypot(dx, dy);
    const ua = (ar + 5) / len;
    const ub = (br + 5) / len;
    return [ax + dx * ua, ay + dy * ua, bx - dx * ub, by - dy * ub];
  };

  EDGES.forEach(([a, b, ring], i) => {
    const [ax, ay, bx, by] = span(a, b);
    const phase = ring * 100 + (i % 2) * 26;
    layers.push(
      layer(`pulse-${a}-${b}`, [
        group("p", [
          line(ax, ay, bx, by),
          trim(0, 24, anim([[0, phase, "linear"], [LOOP, phase + 360]])),
          gradStroke([ax, ay], [bx, by], 4.5),
        ]),
      ], { ind: ind++, op: LOOP }),
    );
  });

  EDGES.forEach(([a, b]) => {
    const [ax, ay, bx, by] = span(a, b);
    layers.push(
      layer(`edge-${a}-${b}`, [group("e", [line(ax, ay, bx, by), stroke(C.neutral, 1.6, { opacity: 34 })])],
        { ind: ind++, op: LOOP }),
    );
  });

  // Terminals: a wind rotor at the source, a roof at the consumer.
  const [sx, sy] = N.S;
  const rotorBlades = [0, 120, 240].map((d) => {
    const [bx, by] = onCircle(sx, sy, 12, 90 + d);
    return line(sx, sy, bx, by);
  });
  layers.push(
    layer("source-rotor", [group("g", [...rotorBlades, stroke(C.purple, 2.4)])], {
      ind: ind++, op: LOOP, a: [sx, sy, 0], p: [sx, sy, 0],
      r: anim([[0, 0, "linear"], [LOOP, 120]]),
    }),
  );

  const [hx, hy] = N.H;
  layers.push(
    layer("sink-house", [
      group("g", [
        poly([[hx - 11, hy + 2], [hx, hy - 9], [hx + 11, hy + 2]]),
        poly([[hx - 7.5, hy + 2], [hx - 7.5, hy + 10], [hx + 7.5, hy + 10], [hx + 7.5, hy + 2]]),
        stroke(C.purple, 2.2),
      ]),
    ], { ind: ind++, op: LOOP }),
  );

  Object.entries(N).forEach(([name, [x, y, r]], i) => {
    const terminal = r > 12;
    if (terminal) {
      layers.push(
        layer(`halo-${name}`, [group("h", [ellipse(x, y, r * 2, r * 2), stroke(C.purple, 2)])], {
          ind: ind++, op: LOOP, a: [x, y, 0], p: [x, y, 0],
          s: anim([[i * 24, [100, 100, 100], "exit"], [i * 24 + 118, [190, 190, 100]], [LOOP + i * 24, [190, 190, 100]]]),
          o: anim([[i * 24, 46, "exit"], [i * 24 + 118, 0], [LOOP, 0]]),
        }),
      );
      layers.push(
        layer(`ring-${name}`, [group("r", [ellipse(x, y, r * 2, r * 2), stroke(C.purple, 2.2)])],
          { ind: ind++, op: LOOP }),
      );
    } else {
      layers.push(
        layer(`port-${name}`, [group("p", [ellipse(x, y, r * 2, r * 2), fill(C.purple)])],
          { ind: ind++, op: LOOP }),
      );
    }
  });

  return scene({ nm: "Hero A — Netzpuls", w: W, h: H, op: LOOP, layers });
}

/* ================================================================= *
 * B — Tarifkurve
 * A day of exchange prices. One gradient spans the whole field, so colour
 * encodes height instead of decorating each bar.
 * ================================================================= */

function tarifkurve() {
  const PRICES = [95, 88, 82, 80, 84, 96, 118, 135, 128, 105, 78, 52, 38, 35, 44, 68, 102, 138, 152, 141, 122, 110, 104, 98];
  const base = 274;
  const bw = 14;
  const gap = 6.1;
  const x0 = 26;
  const min = Math.min(...PRICES);
  const max = Math.max(...PRICES);
  const height = (p) => 34 + ((p - min) / (max - min)) * 178;
  const tallest = height(max);
  const xEnd = x0 + 23 * (bw + gap) + bw;

  const layers = [];
  let ind = 1;

  // Playhead: a soft band plus a bright core, so it reads as a highlight.
  layers.push(
    layer("playhead", [
      group("core", [line(0, base - tallest - 16, 0, base + 8), stroke(C.cyan, 2, { opacity: 90 })]),
      group("band", [rect(0, base - tallest / 2, 30, tallest + 40, 6), fill(C.cyan, 10)]),
    ], {
      ind: ind++, op: LOOP,
      p: anim([[0, [x0, 0, 0], "linear"], [LOOP, [xEnd, 0, 0]]]),
    }),
  );

  PRICES.forEach((p, i) => {
    const cx = x0 + i * (bw + gap) + bw / 2;
    const h = height(p);
    const phase = (i / PRICES.length) * Math.PI * 2;
    const steps = [];
    for (let k = 0; k <= 8; k++) {
      steps.push([
        Math.round((k / 8) * LOOP),
        [100, 100 + 7 * Math.sin((k / 8) * Math.PI * 2 + phase), 100],
        k === 8 ? undefined : "linear",
      ]);
    }
    layers.push(
      layer(`bar-${i}`, [
        group("b", [
          rect(cx, base - h / 2, bw, h, 3),
          // Same absolute gradient span on every bar: short bars stay purple,
          // only the tall ones reach the cyan end.
          gradFill([cx, base], [cx, base - tallest], [C.purple, C.cyan]),
        ]),
      ], { ind: ind++, op: LOOP, a: [cx, base, 0], p: [cx, base, 0], s: anim(steps) }),
    );
  });

  layers.push(
    layer("baseline", [group("g", [line(16, base + 8, W - 16, base + 8), stroke(C.neutral, 1.5, { opacity: 38 })])],
      { ind: ind++, op: LOOP }),
  );

  return scene({ nm: "Hero B — Tarifkurve", w: W, h: H, op: LOOP, layers });
}

/* ================================================================= *
 * C — Zähler
 * ================================================================= */

function zaehler() {
  const cx = 260;
  const cy = 190;
  const START = 210;
  const SWEEP = -240;
  const TICKS = 21;
  const R_ARC = 98;

  // Needle and arc read the same value. Screen rotation is clockwise-positive
  // and the needle is drawn pointing up, so angle → rotation is 90 − angle.
  const fillToRot = (f) => 90 - (START + SWEEP * f);
  const LOW = 0.03;
  const HIGH = 0.62;

  const layers = [];
  let ind = 1;

  layers.push(
    layer("needle", [group("n", [line(cx, cy, cx, cy - 74), stroke(C.purple, 3.4)])], {
      ind: ind++, op: LOOP, a: [cx, cy, 0], p: [cx, cy, 0],
      r: anim([
        [0, fillToRot(LOW), "settle"],
        [74, fillToRot(HIGH), "settle"],
        [108, fillToRot(HIGH), "travel"],
        [LOOP, fillToRot(LOW)],
      ]),
    }),
  );
  layers.push(layer("hub", [group("h", [ellipse(cx, cy, 17, 17), fill(C.purple)])], { ind: ind++, op: LOOP }));

  const a0 = onCircle(cx, cy, R_ARC, START);
  const a1 = onCircle(cx, cy, R_ARC, START + SWEEP);
  layers.push(
    layer("arc-fill", [
      group("a", [
        arc(cx, cy, R_ARC, START, START + SWEEP, 8),
        trim(0, anim([
          [0, LOW * 100, "settle"],
          [74, HIGH * 100, "settle"],
          [108, HIGH * 100, "travel"],
          [LOOP, LOW * 100],
        ]), 0),
        gradStroke(a0, a1, 10),
      ]),
    ], { ind: ind++, op: LOOP }),
  );
  layers.push(
    layer("arc-track", [group("a", [arc(cx, cy, R_ARC, START, START + SWEEP, 8), stroke(C.neutral, 10, { opacity: 18 })])],
      { ind: ind++, op: LOOP }),
  );

  for (let i = 0; i < TICKS; i++) {
    const deg = START + (SWEEP * i) / (TICKS - 1);
    const major = i % 5 === 0;
    const [x1, y1] = onCircle(cx, cy, 118, deg);
    const [x2, y2] = onCircle(cx, cy, major ? 132 : 126, deg);
    const t0 = Math.round((i / TICKS) * 96);
    layers.push(
      layer(`tick-${i}`, [group("t", [line(x1, y1, x2, y2), stroke(major ? C.purple : C.neutral, major ? 2.6 : 1.7)])], {
        ind: ind++, op: LOOP,
        o: anim([
          [0, 20, "linear"], [t0, 20, "entrance"], [t0 + 14, 100, "exit"],
          [t0 + 64, 20, "linear"], [LOOP, 20],
        ]),
      }),
    );
  }

  [0, 60, 120].forEach((offset, i) => {
    layers.push(
      layer(`ring-${i}`, [group("r", [ellipse(cx, cy, 300, 300), stroke(C.cyan, 1.4)])], {
        ind: ind++, op: LOOP, a: [cx, cy, 0], p: [cx, cy, 0],
        s: anim([[offset, [64, 64, 100], "exit"], [offset + 126, [98, 98, 100]], [LOOP + offset, [98, 98, 100]]]),
        o: anim([[offset, 0, "linear"], [offset + 14, 17, "exit"], [offset + 126, 0], [LOOP, 0]]),
      }),
    );
  });

  return scene({ nm: "Hero C — Zähler", w: W, h: H, op: LOOP, layers });
}

/* ================================================================= *
 * D — Prosumer
 * ================================================================= */

function prosumer() {
  const ground = 272;
  const layers = [];
  let ind = 1;

  const flow = (nm, pts, phase, colors, width = 4) =>
    layers.push(
      layer(nm, [
        group("f", [
          poly(pts),
          trim(0, 24, anim([[0, phase, "linear"], [LOOP, phase + 360]])),
          gradStroke([pts[0][0], pts[0][1]], [pts.at(-1)[0], pts.at(-1)[1]], width, colors),
        ]),
      ], { ind: ind++, op: LOOP }),
    );

  const BEAM = [[228, 80], [300, 148]];
  const WIND = [[118, 214], [272, 214]];
  const BATT = [[414, 206], [468, 206], [468, 232]];

  flow("flow-beam", BEAM, 0, [C.amber, C.amber]);
  flow("flow-wind", WIND, 120, [C.purple, C.cyan]);
  flow("flow-battery", BATT, 250, [C.purple, C.cyan]);

  const rail = (nm, pts, color = C.neutral, opacity = 30) =>
    layers.push(layer(nm, [group("r", [poly(pts), stroke(color, 1.6, { opacity })])], { ind: ind++, op: LOOP }));
  rail("rail-beam", BEAM, C.amber, 26);
  rail("rail-wind", WIND);
  rail("rail-battery", BATT);

  /* sun */
  const sx = 206;
  const sy = 50;
  layers.push(
    layer("sun-rays", [group("g", [
      ...Array.from({ length: 8 }, (_, i) => {
        const [x1, y1] = onCircle(sx, sy, 25, i * 45);
        const [x2, y2] = onCircle(sx, sy, 34, i * 45);
        return line(x1, y1, x2, y2);
      }),
      stroke(C.amber, 2.4),
    ])], {
      ind: ind++, op: LOOP, a: [sx, sy, 0], p: [sx, sy, 0],
      r: anim([[0, 0, "linear"], [LOOP, 45]]),
    }),
  );
  layers.push(
    layer("sun", [
      group("g", [ellipse(sx, sy, 34, 34), fill(C.amber, 20)]),
      group("o", [ellipse(sx, sy, 34, 34), stroke(C.amber, 2.6)]),
    ], { ind: ind++, op: LOOP }),
  );

  /* wind turbine — rotor kept clear of the rail below it */
  const tx = 118;
  const ty = 126;
  layers.push(
    layer("rotor", [group("g", [
      ...[0, 120, 240].map((d) => {
        const [bx, by] = onCircle(tx, ty, 32, 90 + d);
        return line(tx, ty, bx, by);
      }),
      stroke(C.purple, 2.8),
    ])], {
      ind: ind++, op: LOOP, a: [tx, ty, 0], p: [tx, ty, 0],
      r: anim([[0, 0, "linear"], [LOOP, 120]]),
    }),
  );
  layers.push(
    layer("mast", [
      group("g", [line(tx, ty, tx, ground), stroke(C.neutral, 2.8)]),
      group("h", [ellipse(tx, ty, 8, 8), fill(C.purple)]),
    ], { ind: ind++, op: LOOP }),
  );

  /* house */
  layers.push(
    layer("house", [
      group("roof", [poly([[272, 184], [348, 126], [424, 184]]), stroke(C.neutral, 2.6)]),
      group("walls", [poly([[284, 184], [284, ground], [414, ground], [414, 184]]), stroke(C.neutral, 2.6)]),
      group("door", [poly([[336, ground], [336, 232], [362, 232], [362, ground]]), stroke(C.neutral, 2.2)]),
    ], { ind: ind++, op: LOOP }),
  );

  /* PV field on the left roof face */
  for (let i = 0; i < 5; i++) {
    const t = i / 5;
    const ax = 280 + t * 62;
    const ay = 180 - t * 46;
    const cell = poly([
      [ax, ay], [ax + 13, ay - 10], [ax + 13 + 10, ay - 10 + 13], [ax + 10, ay + 13],
    ], true);
    const t0 = i * 14;
    layers.push(
      layer(`cell-${i}`, [group("c", [cell, gradFill([280, 193], [342, 134], [C.purple, C.cyan])])], {
        ind: ind++, op: LOOP,
        o: anim([
          [0, 28, "linear"], [t0, 28, "entrance"], [t0 + 16, 100, "exit"],
          [t0 + 90, 28, "linear"], [LOOP, 28],
        ]),
      }),
    );
  }

  /* battery, standing on the ground */
  const bx = 468;
  const bTop = 232;
  const bBottom = ground;
  const bh = bBottom - bTop;
  layers.push(
    layer("battery-fill", [group("f", [
      rect(bx, bTop + bh / 2, 24, bh - 6, 3),
      gradFill([bx, bBottom], [bx, bTop], [C.purple, C.cyan]),
    ])], {
      ind: ind++, op: LOOP, a: [bx, bBottom - 3, 0], p: [bx, bBottom - 3, 0],
      s: anim([[0, [100, 16, 100], "settle"], [100, [100, 100, 100], "settle"], [LOOP, [100, 16, 100]]]),
    }),
  );
  layers.push(
    layer("battery", [
      group("b", [rect(bx, bTop + bh / 2, 30, bh, 4), stroke(C.neutral, 2.4)]),
      group("cap", [rect(bx, bTop - 5, 12, 6, 2), fill(C.neutral)]),
    ], { ind: ind++, op: LOOP }),
  );

  layers.push(
    layer("ground", [group("g", [line(34, ground, W - 34, ground), stroke(C.neutral, 1.5, { opacity: 40 })])],
      { ind: ind++, op: LOOP }),
  );

  return scene({ nm: "Hero D — Prosumer", w: W, h: H, op: LOOP, layers });
}

/* ================================================================= */

const VARIANTS = [
  { name: "hero-netzpuls", playerScene: "scene-3", build: netzpuls },
  { name: "hero-tarifkurve", playerScene: "scene-4", build: tarifkurve },
  { name: "hero-zaehler", playerScene: "scene-5", build: zaehler },
  { name: "hero-prosumer", playerScene: "scene-6", build: prosumer },
];

const PLAYER = "/Users/sauerer/oss/lottie-player/public/projects/energy-wiki";
const SITE = resolve(process.cwd(), "public/lottie");

for (const v of VARIANTS) {
  const data = v.build();
  if (existsSync(PLAYER)) {
    const p = `${PLAYER}/${v.playerScene}/lottie.json`;
    mkdirSync(dirname(p), { recursive: true });
    writeFileSync(p, JSON.stringify(data, null, 2));
  }
  mkdirSync(SITE, { recursive: true });
  const json = JSON.stringify(data);
  writeFileSync(`${SITE}/${v.name}.json`, json);
  console.log(`${v.name.padEnd(18)} ${String(data.layers.length).padStart(3)} layers  ${(json.length / 1024).toFixed(1).padStart(6)} KB  → ${v.playerScene}`);
}
