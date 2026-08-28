/**
 * Minimal Lottie authoring helpers.
 *
 * Hand-writing Lottie JSON for anything with staggered choreography is
 * unmanageable, so the hero scenes are generated. Everything here sticks to the
 * subset lottie-web (the player used on the site) and Skottie (the player used
 * to verify) both support: shape layers, trim paths, gradient strokes and
 * fills. No expressions, no slots.
 */

/* epilot brand palette, as Lottie 0..1 RGB */
export const C = {
  purple: [0.298, 0.298, 1],
  cyan: [0, 0.843, 1],
  violet: [0.706, 0.318, 1],
  pink: [1, 0.388, 0.792],
  amber: [0.996, 0.624, 0.278],
  neutral: [0.541, 0.541, 0.6],
  white: [1, 1, 1],
};

/** Behaviour-named easing anchors. */
export const E = {
  entrance: { o: { x: [0.2], y: [0.75] }, i: { x: [0.34], y: [0.94] } },
  settle: { o: { x: [0.0], y: [0.65] }, i: { x: [0.51], y: [0.99] } },
  travel: { o: { x: [1.0], y: [0.49] }, i: { x: [0.0], y: [0.55] } },
  exit: { o: { x: [1.0], y: [0.02] }, i: { x: [0.54], y: [0.42] } },
  pop: { o: { x: [0.94], y: [0.75] }, i: { x: [0.34], y: [0.94] } },
  linear: { o: { x: [0.5], y: [0.5] }, i: { x: [0.5], y: [0.5] } },
};

export const still = (k) => ({ a: 0, k });

/** anim([[frame, value, easingName], …]) — last entry needs no easing. */
export function anim(steps) {
  return {
    a: 1,
    k: steps.map(([t, s, ease], idx) => {
      const value = Array.isArray(s) ? s : [s];
      if (idx === steps.length - 1) return { t, s: value };
      const e = E[ease ?? "linear"];
      return { t, s: value, o: e.o, i: e.i };
    }),
  };
}

export function transform({ p = [0, 0], a = [0, 0], s = [100, 100], r = 0, o = 100 } = {}) {
  return {
    ty: "tr",
    p: Array.isArray(p) ? still(p) : p,
    a: Array.isArray(a) ? still(a) : a,
    s: Array.isArray(s) ? still(s) : s,
    r: typeof r === "number" ? still(r) : r,
    o: typeof o === "number" ? still(o) : o,
  };
}

export function layer(nm, shapes, opts = {}) {
  const {
    ind = 1,
    op = 180,
    ip = 0,
    p = [0, 0, 0],
    a = [0, 0, 0],
    s = [100, 100, 100],
    r = 0,
    o = 100,
    parent,
  } = opts;
  const l = {
    ddd: 0,
    ind,
    ty: 4,
    nm,
    sr: 1,
    ks: {
      o: typeof o === "number" ? still(o) : o,
      r: typeof r === "number" ? still(r) : r,
      p: Array.isArray(p) ? still(p) : p,
      a: Array.isArray(a) ? still(a) : a,
      s: Array.isArray(s) ? still(s) : s,
    },
    ao: 0,
    shapes,
    ip,
    op,
    st: 0,
    bm: 0,
  };
  if (parent !== undefined) l.parent = parent;
  return l;
}

export function group(nm, it) {
  return { ty: "gr", nm, it: [...it, transform()] };
}

/* ---- geometry -------------------------------------------------- */

/** Open or closed polyline. Pass [x, y, inTangent?, outTangent?] per point. */
export function poly(points, closed = false) {
  return {
    ty: "sh",
    ks: still({
      i: points.map((pt) => pt[2] ?? [0, 0]),
      o: points.map((pt) => pt[3] ?? [0, 0]),
      v: points.map((pt) => [pt[0], pt[1]]),
      c: closed,
    }),
  };
}

export const line = (x1, y1, x2, y2) => poly([[x1, y1], [x2, y2]]);

export const ellipse = (cx, cy, w, h = w) => ({
  ty: "el",
  p: still([cx, cy]),
  s: still([w, h]),
});

export const rect = (cx, cy, w, h, r = 0) => ({
  ty: "rc",
  p: still([cx, cy]),
  s: still([w, h]),
  r: still(r),
});

/**
 * Circular arc as a bezier path. Angles in degrees, measured counter-clockwise
 * from +x with y pointing up on screen (so 90 is the top of the circle).
 */
export function arc(cx, cy, radius, fromDeg, toDeg, segments = 0) {
  const rad = (d) => (d * Math.PI) / 180;
  const total = toDeg - fromDeg;
  const n = segments || Math.max(1, Math.ceil(Math.abs(total) / 60));
  const step = total / n;
  // Magnitude only: direction comes from `dir` below. Signing k as well as dir
  // cancelled out and flipped every tangent, which turned arcs into zigzags.
  const k = Math.abs((4 / 3) * Math.tan(rad(step) / 4) * radius);
  const pts = [];
  for (let i = 0; i <= n; i++) {
    const th = rad(fromDeg + step * i);
    const x = cx + radius * Math.cos(th);
    const y = cy - radius * Math.sin(th);
    // unit tangent in the direction of increasing angle, y flipped
    const tx = -Math.sin(th);
    const ty = -Math.cos(th);
    const dir = Math.sign(step) || 1;
    pts.push([
      x,
      y,
      i === 0 ? [0, 0] : [-tx * k * dir, -ty * k * dir],
      i === n ? [0, 0] : [tx * k * dir, ty * k * dir],
    ]);
  }
  return poly(pts);
}

/* ---- paint ------------------------------------------------------ */

export const stroke = (color, w, extra = {}) => ({
  ty: "st",
  c: still([...color, 1]),
  o: still(extra.opacity ?? 100),
  w: typeof w === "number" ? still(w) : w,
  lc: extra.cap ?? 2,
  lj: extra.join ?? 2,
  ...(extra.dash ? { d: extra.dash } : {}),
});

export const fill = (color, opacity = 100) => ({
  ty: "fl",
  c: still([...color, 1]),
  o: typeof opacity === "number" ? still(opacity) : opacity,
  r: 1,
});

/** Linear gradient stroke from a→b, brand purple→cyan by default. */
export function gradStroke(a, b, w, stops = [C.purple, C.cyan], extra = {}) {
  return {
    ty: "gs",
    o: still(extra.opacity ?? 100),
    w: typeof w === "number" ? still(w) : w,
    g: {
      p: stops.length,
      k: still(
        stops.flatMap((c, i) => [i / (stops.length - 1), ...c]),
      ),
    },
    s: still(a),
    e: still(b),
    t: 1,
    lc: extra.cap ?? 2,
    lj: extra.join ?? 2,
  };
}

export function gradFill(a, b, stops = [C.purple, C.cyan], extra = {}) {
  return {
    ty: "gf",
    o: still(extra.opacity ?? 100),
    g: {
      p: stops.length,
      k: still(stops.flatMap((c, i) => [i / (stops.length - 1), ...c])),
    },
    s: still(a),
    e: still(b),
    t: 1,
    r: 1,
  };
}

/** Trim path. Offsets are in degrees where 360 = the whole path. */
export const trim = (s, e, o) => ({
  ty: "tm",
  s: typeof s === "number" ? still(s) : s,
  e: typeof e === "number" ? still(e) : e,
  o: typeof o === "number" ? still(o) : o,
  m: 1,
  nm: "trim",
});

export function scene({ nm, w, h, fr = 60, op, layers }) {
  return { v: "5.9.0", fr, ip: 0, op, w, h, nm, ddd: 0, assets: [], layers, markers: [] };
}
