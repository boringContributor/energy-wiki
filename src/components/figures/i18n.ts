import type { Locale } from "@/lib/i18n";

import { FIGURE_EN } from "./strings.en";

/**
 * Deliberately not a client module: diagrams.tsx renders on the server while
 * the calculators are client components, and both need these helpers.
 */
export type FigureProps = { locale: Locale };

/** Translate one German figure string. Unknown strings pass through. */
export function tr(locale: Locale, de: string): string {
  return locale === "en" ? (FIGURE_EN[de] ?? de) : de;
}

/**
 * Translate a sentence that has computed values in it. The dictionary key keeps
 * `{0}`-style placeholders instead of the values, so a translation is free to
 * reorder them — English often puts the unit or the number somewhere else.
 */
export function tf(
  locale: Locale,
  de: string,
  ...args: (string | number)[]
): string {
  return tr(locale, de).replace(/\{(\d)\}/g, (_, i) => String(args[Number(i)] ?? ""));
}

/**
 * Translate every string inside a data structure. Figures keep their copy in
 * plain arrays of objects; this walks them and swaps only values that have an
 * entry in the dictionary, so colours, ids and SVG paths are untouched.
 */
export function L<T>(locale: Locale, value: T): T {
  if (locale !== "en") return value;
  const walk = (v: unknown): unknown =>
    typeof v === "string"
      ? (FIGURE_EN[v] ?? v)
      : Array.isArray(v)
        ? v.map(walk)
        : v && typeof v === "object"
          ? Object.fromEntries(
              Object.entries(v as Record<string, unknown>).map(([k, x]) => [
                k,
                walk(x),
              ]),
            )
          : v;
  return walk(value) as T;
}

/**
 * Locale-aware number formatting for figures.
 *
 * lib/utils formats in de-DE unconditionally, which is right for the German
 * source but wrong on the English pages: "12.600 €" and "9,9" read as 12.6 and
 * ninety-nine to an English speaker. Components destructure this over the
 * imported helpers, so the call sites stay unchanged.
 */
export function fmt(locale: Locale) {
  const tag = locale === "en" ? "en-GB" : "de-DE";
  return {
    num: (value: number, digits?: number) =>
      new Intl.NumberFormat(tag, {
        minimumFractionDigits: digits ?? 0,
        maximumFractionDigits: digits ?? 2,
      }).format(value),
    euro: (value: number, digits = 2) =>
      new Intl.NumberFormat(tag, {
        style: "currency",
        currency: "EUR",
        minimumFractionDigits: digits,
        maximumFractionDigits: digits,
      }).format(value),
  };
}
