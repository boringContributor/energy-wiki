import { articles, categories, categoryTree } from "@/content";
import type { NavGroup } from "@/components/layout/NavTree";
import type { SearchEntry } from "@/components/search/SearchDialog";
import { t, type Locale } from "@/lib/i18n";
import { stripMarkup } from "@/lib/utils";

export function navGroups(locale: Locale): NavGroup[] {
  return categoryTree().map(({ category, articles: items }) => ({
    id: category.id,
    title: t(category.title, locale),
    tone: category.tone,
    items: items.map((a) => ({ slug: a.slug, title: t(a.title, locale) })),
  }));
}

/**
 * Search runs fully client-side over titles, summaries and synonyms. Article
 * bodies are deliberately left out: the payload stays small and matches stay
 * precise enough to be useful in a glossary-shaped wiki.
 */
export function searchEntries(locale: Locale): SearchEntry[] {
  const catTitle = new Map(
    categories.map((c) => [c.id, t(c.title, locale).split(":")[0].trim()]),
  );

  return articles.map((a) => {
    const title = t(a.title, locale);
    const summary = stripMarkup(t(a.summary, locale));
    return {
      slug: a.slug,
      title,
      summary,
      category: catTitle.get(a.category) ?? a.category,
      terms: [title, summary, a.slug.replace(/-/g, " "), ...(a.aka ?? [])].join(
        " · ",
      ),
    };
  });
}
