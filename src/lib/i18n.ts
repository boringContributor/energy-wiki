export const locales = ["de", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "de";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/**
 * German is the source of truth. English is optional per field and falls back
 * to German, so the site never shows a hole while translations catch up.
 */
export type Localized<T> = { de: T; en?: T };

export function pick<T>(
  value: Localized<T>,
  locale: Locale,
): { value: T; translated: boolean } {
  if (locale === "de") return { value: value.de, translated: true };
  return value.en !== undefined
    ? { value: value.en, translated: true }
    : { value: value.de, translated: false };
}

export function t<T>(value: Localized<T>, locale: Locale): T {
  return pick(value, locale).value;
}

export const localeLabels: Record<Locale, string> = {
  de: "Deutsch",
  en: "English",
};

type Dict = Record<string, Localized<string>>;

/** UI chrome strings. Article prose lives in the content files. */
export const ui = {
  siteName: { de: "Energy Wiki", en: "Energy Wiki" },
  siteTagline: {
    de: "Das offene Nachschlagewerk zur deutschen Energiewirtschaft",
    en: "The open field guide to the German energy market",
  },
  search: { de: "Suchen", en: "Search" },
  searchPlaceholder: {
    de: "Begriff suchen – z. B. Abschlag, Brennwert, MaLo …",
    en: "Search a term – e.g. Abschlag, Brennwert, MaLo …",
  },
  searchEmpty: { de: "Nichts gefunden.", en: "No results." },
  searchHint: {
    de: "Tippe, um Artikel und Glossarbegriffe zu durchsuchen.",
    en: "Type to search articles and glossary entries.",
  },
  results: { de: "Treffer", en: "results" },
  close: { de: "Schließen", en: "Close" },
  onThisPage: { de: "Auf dieser Seite", en: "On this page" },
  related: { de: "Verwandte Themen", en: "Related topics" },
  sources: { de: "Quellen & Weiterlesen", en: "Sources & further reading" },
  updated: { de: "Stand", en: "Updated" },
  glossary: { de: "Glossar", en: "Glossary" },
  glossaryLead: {
    de: "Alle Begriffe von A bis Z – kurz erklärt, mit Link zur Vertiefung.",
    en: "Every term from A to Z – briefly explained, with a link to the deep dive.",
  },
  topics: { de: "Themen", en: "Topics" },
  allArticles: { de: "Alle Artikel", en: "All articles" },
  articles: { de: "Artikel", en: "articles" },
  startHere: { de: "Hier anfangen", en: "Start here" },
  readMore: { de: "Weiterlesen", en: "Read more" },
  backToOverview: { de: "Zur Übersicht", en: "Back to overview" },
  notTranslated: {
    de: "Dieser Artikel liegt noch nicht auf Englisch vor.",
    en: "This article has not been translated yet – showing the German original.",
  },
  notTranslatedShort: { de: "nur Deutsch", en: "German only" },
  levelBasis: { de: "Grundlagen", en: "Basics" },
  levelVertiefung: { de: "Vertiefung", en: "Deep dive" },
  inShort: { de: "Kurz gesagt", en: "In short" },
  theme: { de: "Design", en: "Theme" },
  themeLight: { de: "Hell", en: "Light" },
  themeDark: { de: "Dunkel", en: "Dark" },
  themeSystem: { de: "System", en: "System" },
  interactive: { de: "Interaktiv", en: "Interactive" },
  reset: { de: "Zurücksetzen", en: "Reset" },
  disclaimer: {
    de: "Offenes Nachschlagewerk, Beiträge willkommen. Preise, Umlagen und Fristen ändern sich – im Zweifel die verlinkte Primärquelle prüfen.",
    en: "An open reference, contributions welcome. Prices, levies and deadlines change – when in doubt, check the linked primary source.",
  },
  seeAlso: { de: "Siehe auch", en: "See also" },
  noArticles: { de: "Noch keine Artikel.", en: "No articles yet." },
  toggleNav: { de: "Navigation", en: "Navigation" },
  jumpTo: { de: "Springe zu", en: "Jump to" },
} satisfies Dict;

export function s(key: keyof typeof ui, locale: Locale): string {
  return t(ui[key], locale);
}
