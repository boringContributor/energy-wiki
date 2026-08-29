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
  poly, rect, scene, still, stroke, trim,
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


/* ================================================================= *
 * E — Anlagen (Energiehub)
 * Everything behind the meter hangs off one hub: PV feeds in, heat pump,
 * battery and wallbox draw. Each device animates the one thing it does.
 * ================================================================= */

function anlagen() {
  const HUB = [260, 160];
  const D = { pv: [140, 84], hp: [380, 84], bat: [140, 236], wb: [380, 236] };
  const RAILS = {
    pv: [[172, 84], [212, 84], [212, 150], [238, 150]],
    hp: [[282, 150], [308, 150], [308, 84], [348, 84]],
    bat: [[172, 236], [212, 236], [212, 170], [238, 170]],
    wb: [[282, 170], [308, 170], [308, 236], [348, 236]],
  };
  const layers = [];
  let ind = 1;

  Object.entries(RAILS).forEach(([k, pts], i) => {
    // PV feeds the hub, the hub feeds the rest: rails are drawn in flow order.
    layers.push(
      layer(`pulse-${k}`, [
        group("p", [
          poly(pts),
          trim(0, 26, anim([[0, i * 90, "linear"], [LOOP, i * 90 + 360]])),
          gradStroke([pts[0][0], pts[0][1]], [pts.at(-1)[0], pts.at(-1)[1]], 4.5,
            k === "pv" ? [C.amber, C.purple] : [C.purple, C.cyan]),
        ]),
      ], { ind: ind++, op: LOOP }),
    );
  });
  Object.entries(RAILS).forEach(([k, pts]) => {
    layers.push(layer(`rail-${k}`, [group("r", [poly(pts), stroke(C.neutral, 1.6, { opacity: 32 })])], { ind: ind++, op: LOOP }));
  });

  /* hub */
  const [hx, hy] = HUB;
  layers.push(
    layer("hub-halo", [group("h", [rect(hx, hy, 44, 44, 12), stroke(C.purple, 2)])], {
      ind: ind++, op: LOOP, a: [hx, hy, 0], p: [hx, hy, 0],
      s: anim([[0, [100, 100, 100], "exit"], [120, [175, 175, 100]], [LOOP, [175, 175, 100]]]),
      o: anim([[0, 42, "exit"], [120, 0], [LOOP, 0]]),
    }),
  );
  layers.push(
    layer("hub", [
      group("box", [rect(hx, hy, 44, 44, 12), stroke(C.purple, 2.4)]),
      group("bolt", [
        poly([[hx + 4, hy - 13], [hx - 8, hy + 3], [hx + 1, hy + 3], [hx - 4, hy + 14], [hx + 8, hy - 2], [hx - 1, hy - 2]], true),
        fill(C.purple),
      ]),
    ], { ind: ind++, op: LOOP }),
  );

  /* PV panel: cells glimmer in reading order */
  const [px, py] = D.pv;
  [-1, 0, 1].forEach((col) => [-1, 1].forEach((row, r) => {
    const i = (col + 1) * 2 + r;
    const t0 = i * 12;
    layers.push(
      layer(`pv-cell-${i}`, [group("c", [
        rect(px + col * 19, py + row * 9.5, 16, 15, 2),
        gradFill([px - 30, py + 20], [px + 30, py - 20], [C.purple, C.cyan]),
      ])], {
        ind: ind++, op: LOOP,
        o: anim([[0, 30, "linear"], [t0, 30, "entrance"], [t0 + 16, 100, "exit"], [t0 + 96, 30, "linear"], [LOOP, 30]]),
      }),
    );
  }));
  layers.push(layer("pv-frame", [group("f", [rect(px, py, 64, 42, 4), stroke(C.neutral, 2.4)])], { ind: ind++, op: LOOP }));

  /* heat pump: casing, guard ring, spinning fan */
  const [qx, qy] = D.hp;
  layers.push(
    layer("hp-fan", [group("g", [
      ...[0, 120, 240].map((d) => { const [bx, by] = onCircle(qx, qy, 12, 90 + d); return line(qx, qy, bx, by); }),
      stroke(C.purple, 2.6),
    ]), group("h", [ellipse(qx, qy, 6, 6), fill(C.purple)])], {
      ind: ind++, op: LOOP, a: [qx, qy, 0], p: [qx, qy, 0],
      r: anim([[0, 0, "linear"], [LOOP, 240]]),
    }),
  );
  layers.push(
    layer("hp", [
      group("ring", [ellipse(qx, qy, 30, 30), stroke(C.neutral, 1.6, { opacity: 55 })]),
      group("box", [rect(qx, qy, 64, 42, 4), stroke(C.neutral, 2.4)]),
    ], { ind: ind++, op: LOOP }),
  );

  /* battery: charge level breathes */
  const [bx, by] = D.bat;
  layers.push(
    layer("bat-fill", [group("f", [rect(bx - 2, by, 48, 18, 3), gradFill([bx - 26, by], [bx + 22, by], [C.purple, C.cyan])])], {
      ind: ind++, op: LOOP, a: [bx - 26, by, 0], p: [bx - 26, by, 0],
      s: anim([[0, [18, 100, 100], "settle"], [104, [100, 100, 100], "settle"], [LOOP, [18, 100, 100]]]),
    }),
  );
  layers.push(
    layer("bat", [
      group("b", [rect(bx - 2, by, 56, 28, 4), stroke(C.neutral, 2.4)]),
      group("cap", [rect(bx + 30, by, 5, 12, 1.5), fill(C.neutral)]),
    ], { ind: ind++, op: LOOP }),
  );

  /* wallbox: socket, blinking charge indicator */
  const [wx, wy] = D.wb;
  layers.push(
    layer("wb-led", [group("l", [ellipse(wx, wy + 16, 6, 6), fill(C.cyan)])], {
      ind: ind++, op: LOOP,
      o: anim([[0, 25, "linear"], [36, 25, "entrance"], [50, 100, "linear"], [76, 100, "exit"], [96, 25, "linear"], [LOOP, 25]]),
    }),
  );
  layers.push(
    layer("wb", [
      group("box", [rect(wx, wy, 40, 54, 6), stroke(C.neutral, 2.4)]),
      group("socket", [ellipse(wx, wy - 6, 18, 18), stroke(C.neutral, 1.8)]),
      group("pins", [ellipse(wx - 4, wy - 8, 3, 3), ellipse(wx + 4, wy - 8, 3, 3), ellipse(wx, wy - 1, 3, 3), fill(C.neutral)]),
    ], { ind: ind++, op: LOOP }),
  );

  return scene({ nm: "Hero E — Anlagen", w: W, h: H, op: LOOP, layers });
}

/* ================================================================= *
 * F — Abrechnung
 * Eleven equal instalments rise month by month; the twelfth slot is the
 * annual statement that settles the difference.
 * ================================================================= */

function abrechnung() {
  const base = 262;
  const x0 = 40;
  const bw = 28;
  const gap = 8;
  const hInst = 168;
  const hSettle = 62;
  const layers = [];
  let ind = 1;
  const cxOf = (i) => x0 + i * (bw + gap) + bw / 2;
  const FADE = [160, 178];

  /* settlement bar */
  {
    const cx = cxOf(11);
    layers.push(
      layer("settlement", [group("s", [rect(cx, base - hSettle / 2, bw, hSettle, 3), fill(C.cyan)])], {
        ind: ind++, op: LOOP, a: [cx, base, 0], p: [cx, base, 0],
        s: anim([[0, [100, 0, 100], "linear"], [112, [100, 0, 100], "pop"], [134, [100, 100, 100], "linear"], [LOOP, [100, 100, 100]]]),
        o: anim([[0, 100, "linear"], [FADE[0], 100, "exit"], [FADE[1], 0], [LOOP, 0]]),
      }),
    );
    // Leader from the instalment level down to the settlement bar's top.
    layers.push(
      layer("settle-leader", [group("l", [
        line(cxOf(10) + bw / 2 + 4, base - hInst, cx + bw / 2 + 4, base - hInst),
        line(cx + bw / 2 + 4, base - hInst, cx + bw / 2 + 4, base - hSettle),
        stroke(C.cyan, 1.4, { opacity: 70 }),
        trim(0, anim([[0, 0, "linear"], [106, 0, "entrance"], [122, 100, "linear"], [LOOP, 100]]), 0),
      ])], {
        ind: ind++, op: LOOP,
        o: anim([[0, 100, "linear"], [FADE[0], 100, "exit"], [FADE[1], 0], [LOOP, 0]]),
      }),
    );
  }

  for (let i = 0; i < 11; i++) {
    const cx = cxOf(i);
    const t0 = 4 + i * 8;
    layers.push(
      layer(`instalment-${i}`, [group("b", [
        rect(cx, base - hInst / 2, bw, hInst, 3),
        gradFill([cx, base], [cx, base - hInst], [C.purple, C.cyan]),
      ])], {
        ind: ind++, op: LOOP, a: [cx, base, 0], p: [cx, base, 0],
        s: anim([[0, [100, 0, 100], "linear"], [t0, [100, 0, 100], "settle"], [t0 + 22, [100, 100, 100], "linear"], [LOOP, [100, 100, 100]]]),
        o: anim([[0, 100, "linear"], [FADE[0], 100, "exit"], [FADE[1], 0], [LOOP, 0]]),
      }),
    );
  }

  /* instalment level: drawn as the bars land */
  layers.push(
    layer("level", [group("l", [
      line(x0 - 6, base - hInst, cxOf(10) + bw / 2 + 4, base - hInst),
      stroke(C.neutral, 1.4, { opacity: 55, dash: [{ n: "d", nm: "dash", v: still(4) }, { n: "g", nm: "gap", v: still(5) }] }),
      trim(0, anim([[0, 0, "linear"], [8, 0, "linear"], [104, 100, "linear"], [LOOP, 100]]), 0),
    ])], {
      ind: ind++, op: LOOP,
      o: anim([[0, 100, "linear"], [FADE[0], 100, "exit"], [FADE[1], 0], [LOOP, 0]]),
    }),
  );

  /* axis with twelve month ticks */
  layers.push(
    layer("axis", [
      group("base", [line(x0 - 12, base + 8, cxOf(11) + bw / 2 + 12, base + 8), stroke(C.neutral, 1.5, { opacity: 40 })]),
      group("ticks", [
        ...Array.from({ length: 12 }, (_, i) => line(cxOf(i), base + 8, cxOf(i), base + 14)),
        stroke(C.neutral, 1.5, { opacity: 40 }),
      ]),
    ], { ind: ind++, op: LOOP }),
  );

  return scene({ nm: "Hero F — Abrechnung", w: W, h: H, op: LOOP, layers });
}

/* ================================================================= *
 * G — Kunde
 * One household, three suppliers. The active contract moves from one
 * supplier to the next: switching is a normal thing to do.
 * ================================================================= */

function kunde() {
  const SUP = [120, 260, 400];
  const supY = 70;
  const trunkY = 150;
  const roofTop = 190;
  const hx = 260;
  const ground = 268;
  const layers = [];
  let ind = 1;

  const linkPts = (x) =>
    x === hx
      ? [[x, supY + 20], [x, roofTop - 6]]
      : [[x, supY + 20], [x, trunkY], [hx, trunkY], [hx, roofTop - 6]];

  /** 100 while supplier k holds the contract, 0 otherwise; seamless at the loop. */
  const active = (k) => {
    const s = k * 60;
    const e = s + 60;
    const keys = [];
    if (k === 0) return anim([[0, 100, "linear"], [e - 10, 100, "exit"], [e, 0, "linear"], [LOOP - 10, 0, "entrance"], [LOOP, 100]]);
    keys.push([0, 0, "linear"], [s - 10, 0, "entrance"], [s, 100, "linear"]);
    if (k === 2) keys.push([e - 10, 100, "exit"], [LOOP, 0]);
    else keys.push([e - 10, 100, "exit"], [e, 0, "linear"], [LOOP, 0]);
    return anim(keys);
  };

  SUP.forEach((x, k) => {
    const pts = linkPts(x);
    layers.push(
      layer(`pulse-${k}`, [group("p", [
        poly(pts),
        trim(0, 30, anim([[0, k * 40, "linear"], [LOOP, k * 40 + 360]])),
        gradStroke([x, supY], [hx, roofTop], 4.5),
      ])], { ind: ind++, op: LOOP, o: active(k) }),
    );
  });
  SUP.forEach((x, k) => {
    layers.push(layer(`link-${k}`, [group("l", [poly(linkPts(x)), stroke(C.neutral, 1.6, { opacity: 30 })])], { ind: ind++, op: LOOP }));
  });

  /* suppliers: a plain frame each, the active one lit */
  SUP.forEach((x, k) => {
    layers.push(
      layer(`sup-active-${k}`, [
        group("f", [rect(x, supY, 60, 40, 9), fill(C.purple, 12)]),
        group("o", [rect(x, supY, 60, 40, 9), stroke(C.purple, 2.4)]),
        group("mark", [ellipse(x, supY, 10, 10), fill(C.purple)]),
      ], { ind: ind++, op: LOOP, o: active(k) }),
    );
    layers.push(
      layer(`sup-${k}`, [
        group("o", [rect(x, supY, 60, 40, 9), stroke(C.neutral, 2.2)]),
        group("mark", [ellipse(x, supY, 10, 10), stroke(C.neutral, 1.8)]),
      ], { ind: ind++, op: LOOP }),
    );
  });

  /* house with a person at the door */
  const doorX = hx + 22;
  layers.push(
    layer("person", [
      group("head", [ellipse(doorX, ground - 30, 9, 9), stroke(C.purple, 2.2)]),
      group("body", [arc(doorX, ground - 2, 12, 0, 180, 3), stroke(C.purple, 2.2)]),
    ], { ind: ind++, op: LOOP }),
  );
  layers.push(
    layer("house", [
      group("roof", [poly([[hx - 66, roofTop + 44], [hx, roofTop - 6], [hx + 66, roofTop + 44]]), stroke(C.neutral, 2.6)]),
      group("walls", [poly([[hx - 54, roofTop + 36], [hx - 54, ground], [hx + 54, ground], [hx + 54, roofTop + 36]]), stroke(C.neutral, 2.6)]),
      group("window", [rect(hx - 24, ground - 30, 22, 20, 2), stroke(C.neutral, 2)]),
    ], { ind: ind++, op: LOOP }),
  );
  layers.push(
    layer("ground", [group("g", [line(60, ground, W - 60, ground), stroke(C.neutral, 1.5, { opacity: 40 })])],
      { ind: ind++, op: LOOP }),
  );

  return scene({ nm: "Hero G — Kunde", w: W, h: H, op: LOOP, layers });
}

/* ================================================================= *
 * H — Recht
 * A balance. Energy on one pan, levies stacking onto the other; the beam
 * tilts, holds, and returns.
 * ================================================================= */

function recht() {
  const px = 260;
  const py = 112;
  const half = 112;
  const ground = 268;
  const TILT = [0, 3.4, 6.8, 10.2];
  const ang = anim([
    [0, 0, "linear"], [24, 0, "settle"],
    [46, TILT[1], "settle"], [66, TILT[2], "settle"], [86, TILT[3], "linear"],
    [128, TILT[3], "travel"], [166, 0, "linear"], [LOOP, 0],
  ]);
  const end = (side, deg) => {
    const t = rad(deg);
    return [px + side * half * Math.cos(t), py + side * half * Math.sin(t), 0];
  };
  /** Pan position keyframes follow the beam's rotation keyframes. */
  const panPos = (side) =>
    anim([
      [0, end(side, 0), "linear"], [24, end(side, 0), "settle"],
      [46, end(side, TILT[1]), "settle"], [66, end(side, TILT[2]), "settle"], [86, end(side, TILT[3]), "linear"],
      [128, end(side, TILT[3]), "travel"], [166, end(side, 0), "linear"], [LOOP, end(side, 0)],
    ]);

  const layers = [];
  let ind = 1;
  const PLATE = 62;

  const pan = (nm, side) => {
    const id = ind++;
    layers.push(
      layer(nm, [
        group("chains", [line(0, 0, -24, PLATE), line(0, 0, 24, PLATE), stroke(C.neutral, 1.6, { opacity: 70 })]),
        group("plate", [line(-30, PLATE, 30, PLATE), stroke(C.neutral, 2.6)]),
      ], { ind: id, op: LOOP, p: panPos(side) }),
    );
    return id;
  };

  const leftPan = pan("pan-energy", -1);
  layers.push(
    layer("energy", [group("b", [
      poly([[3, PLATE - 30], [-8, PLATE - 14], [1, PLATE - 14], [-3, PLATE - 1], [8, PLATE - 17], [-1, PLATE - 17]], true),
      fill(C.purple),
    ])], { ind: ind++, op: LOOP, parent: leftPan }),
  );

  const rightPan = pan("pan-levies", 1);
  [0, 1, 2].forEach((i) => {
    const y = PLATE - 6.5 - i * 12;
    const t0 = 26 + i * 20;
    layers.push(
      layer(`levy-${i}`, [group("r", [rect(0, y, 34, 11, 2), gradFill([0, PLATE], [0, PLATE - 36], [C.purple, C.cyan])])], {
        ind: ind++, op: LOOP, parent: rightPan,
        p: anim([[0, [0, -30, 0], "linear"], [t0, [0, -30, 0], "entrance"], [t0 + 16, [0, 0, 0], "linear"], [LOOP, [0, 0, 0]]]),
        o: anim([[0, 0, "linear"], [t0, 0, "linear"], [t0 + 8, 100, "linear"], [128, 100, "exit"], [146, 0, "linear"], [LOOP, 0]]),
      }),
    );
  });

  layers.push(
    layer("beam", [group("b", [line(px - half, py, px + half, py), stroke(C.neutral, 3)])], {
      ind: ind++, op: LOOP, a: [px, py, 0], p: [px, py, 0], r: ang,
    }),
  );
  layers.push(
    layer("stand", [
      group("post", [line(px, py, px, ground), stroke(C.neutral, 3)]),
      group("foot", [line(px - 44, ground, px + 44, ground), stroke(C.neutral, 2.6)]),
      group("pivot", [ellipse(px, py, 12, 12), fill(C.purple)]),
    ], { ind: ind++, op: LOOP }),
  );

  return scene({ nm: "Hero H — Recht", w: W, h: H, op: LOOP, layers });
}

/* ================================================================= */

const VARIANTS = [
  { name: "hero-netzpuls", playerScene: "scene-3", build: netzpuls },
  { name: "hero-tarifkurve", playerScene: "scene-4", build: tarifkurve },
  { name: "hero-zaehler", playerScene: "scene-5", build: zaehler },
  { name: "hero-prosumer", playerScene: "scene-6", build: prosumer },
  { name: "hero-anlagen", playerScene: "scene-7", build: anlagen },
  { name: "hero-abrechnung", playerScene: "scene-8", build: abrechnung },
  { name: "hero-kunde", playerScene: "scene-9", build: kunde },
  { name: "hero-recht", playerScene: "scene-10", build: recht },
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
