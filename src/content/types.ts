import type { Localized } from "@/lib/i18n";

/**
 * Rich text is a tiny markup dialect so content stays plain data (easy to
 * translate, search and diff) while still allowing links and emphasis:
 *
 *   **bold**            strong
 *   *italic*            emphasis
 *   `code`              inline code / identifiers
 *   [[slug]]            internal wiki link, label = target article title
 *   [[slug|Label]]      internal wiki link with custom label
 *   [Label](https://…)  external link
 */
export type RichText = string;

export type NoteKind = "info" | "tip" | "warn" | "law" | "praxis";

export type Block =
  /** Opening paragraph, set slightly larger. */
  | { t: "lead"; text: RichText }
  | { t: "p"; text: RichText }
  | { t: "h"; level: 2 | 3; text: string }
  | { t: "ul"; items: RichText[] }
  | { t: "ol"; items: RichText[] }
  | { t: "steps"; items: { title: string; text: RichText }[] }
  | { t: "dl"; items: { term: RichText; def: RichText }[] }
  | {
      t: "table";
      head: string[];
      rows: RichText[][];
      align?: ("l" | "c" | "r")[];
      caption?: string;
    }
  | { t: "note"; kind: NoteKind; title?: string; text: RichText }
  | {
      t: "formula";
      expr: string;
      where?: { sym: string; desc: RichText }[];
      caption?: string;
    }
  | { t: "example"; title?: string; lines: { label: string; value: string }[]; result?: { label: string; value: string } }
  | { t: "figure"; id: string; caption?: RichText }
  | { t: "quote"; text: RichText; source?: string }
  | { t: "stats"; items: { value: string; label: string; hint?: string }[] }
  | { t: "cards"; items: { title: string; text: RichText; href?: string }[] };

export type CategoryId =
  | "grundlagen"
  | "sparten"
  | "anlagen"
  | "tarife"
  | "messwesen"
  | "abrechnung"
  | "kunde"
  | "recht";

export interface Article {
  slug: string;
  category: CategoryId;
  title: Localized<string>;
  /** One-sentence definition. Also used as the glossary entry. */
  summary: Localized<string>;
  /** Extra search terms: synonyms, abbreviations, legal references. */
  aka?: string[];
  /** Shown in the A–Z glossary. Deep-dive explainers can opt out. */
  glossary?: boolean;
  level?: "basis" | "vertiefung";
  /** ISO date of the last content review. */
  updated: string;
  body: Localized<Block[]>;
  related?: string[];
  sources?: { label: string; url: string }[];
  /** Pinned on the category page and on the home page. */
  featured?: boolean;
}

export interface Category {
  id: CategoryId;
  title: Localized<string>;
  summary: Localized<string>;
  /** CSS custom-property stem, e.g. "strom" → var(--strom). */
  tone:
    | "markt"
    | "strom"
    | "gas"
    | "wasser"
    | "waerme"
    | "messung"
    | "recht"
    | "anlage";
  icon: string;
}
