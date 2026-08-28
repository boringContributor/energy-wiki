import type { Article, CategoryId } from "./types";
import { categories } from "./categories";

import { grundlagenArticles } from "./articles/grundlagen";
import { spartenArticles } from "./articles/sparten";
import { anlagenArticles } from "./articles/anlagen";
import { tarifeArticles } from "./articles/tarife";
import { messwesenArticles } from "./articles/messwesen";
import { abrechnungArticles } from "./articles/abrechnung";
import { kundeArticles } from "./articles/kunde";
import { rechtArticles } from "./articles/recht";

import { enBodies } from "./translations";

const sources: Article[] = [
  ...grundlagenArticles,
  ...spartenArticles,
  ...anlagenArticles,
  ...tarifeArticles,
  ...messwesenArticles,
  ...abrechnungArticles,
  ...kundeArticles,
  ...rechtArticles,
];

/**
 * German is authored inline; English bodies live in ./translations and are
 * merged here. An article without a translation keeps only `de` and the article
 * page shows the fallback banner.
 */
export const articles: Article[] = sources.map((article) => {
  const en = enBodies[article.slug];
  return en ? { ...article, body: { ...article.body, en } } : article;
});

export const articleBySlug = new Map<string, Article>(
  articles.map((a) => [a.slug, a]),
);

export function getArticle(slug: string): Article | undefined {
  return articleBySlug.get(slug);
}

export function articlesInCategory(id: CategoryId): Article[] {
  return articles.filter((a) => a.category === id);
}

/** Categories in display order, each with its articles attached. */
export function categoryTree() {
  return categories.map((category) => ({
    category,
    articles: articlesInCategory(category.id),
  }));
}

export function glossaryArticles(): Article[] {
  return articles.filter((a) => a.glossary !== false);
}

export { categories, categoryById } from "./categories";
export type { Article, Block, Category, CategoryId, RichText } from "./types";
