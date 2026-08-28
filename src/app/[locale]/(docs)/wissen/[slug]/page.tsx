import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Blocks, tableOfContents } from "@/components/content/Blocks";
import { RichText } from "@/components/content/RichText";
import { articles, categoryById, getArticle } from "@/content";
import { isLocale, locales, pick, s, t, type Locale } from "@/lib/i18n";
import { formatDate, stripMarkup } from "@/lib/utils";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    articles.map((a) => ({ locale, slug: a.slug })),
  );
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/wissen/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getArticle(slug);
  if (!article || !isLocale(locale)) return {};
  return {
    title: t(article.title, locale),
    description: stripMarkup(t(article.summary, locale)),
  };
}

export default async function ArticlePage({
  params,
}: PageProps<"/[locale]/wissen/[slug]">) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const l = locale as Locale;

  const article = getArticle(slug);
  if (!article) notFound();

  const category = categoryById.get(article.category)!;
  const body = pick(article.body, l);
  const toc = tableOfContents(body.value);
  const related = (article.related ?? [])
    .map((r) => getArticle(r))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  return (
    <div className="flex gap-10 py-8 lg:py-12">
      <article className="min-w-0 max-w-3xl flex-1">
        <nav className="mb-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-fg-subtle">
          <Link
            href={`/${l}/thema/${category.id}`}
            className="inline-flex items-center gap-1.5 transition-colors hover:text-fg"
          >
            <span
              aria-hidden
              className="size-1.5 rounded-full"
              style={{ background: `var(--${category.tone})` }}
            />
            {t(category.title, l).split(":")[0]}
          </Link>
          <span aria-hidden>/</span>
          <span className="text-fg-muted">{t(article.title, l)}</span>
        </nav>

        <header className="ew-rise">
          <h1 className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
            {t(article.title, l)}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-fg-muted">
            <RichText text={t(article.summary, l)} locale={l} />
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-2 text-2xs text-fg-subtle">
            {article.level && (
              <span className="rounded-full border border-border-base px-2 py-0.5 uppercase tracking-[0.08em]">
                {article.level === "basis"
                  ? s("levelBasis", l)
                  : s("levelVertiefung", l)}
              </span>
            )}
            <span>
              {s("updated", l)}: {formatDate(article.updated, l)}
            </span>
          </div>
        </header>

        {!body.translated && (
          <p className="mt-6 rounded-xl border border-border-base bg-surface-2 px-4 py-3 text-sm text-fg-muted">
            {s("notTranslated", l)}
          </p>
        )}

        <hr className="my-8 border-border-base" />

        <Blocks blocks={body.value} locale={l} />

        {related.length > 0 && (
          <section className="mt-14">
            <h2 className="text-2xs font-semibold uppercase tracking-[0.09em] text-fg-subtle">
              {s("related", l)}
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {related.map((r) => {
                const rc = categoryById.get(r.category)!;
                return (
                  <Link
                    key={r.slug}
                    href={`/${l}/wissen/${r.slug}`}
                    className="group rounded-xl border border-border-base bg-surface p-4 transition-colors hover:border-border-strong hover:bg-surface-2"
                  >
                    <span className="flex items-center gap-1.5 text-2xs uppercase tracking-[0.08em] text-fg-subtle">
                      <span
                        aria-hidden
                        className="size-1.5 rounded-full"
                        style={{ background: `var(--${rc.tone})` }}
                      />
                      {t(rc.title, l).split(":")[0]}
                    </span>
                    <span className="mt-1.5 block font-medium text-fg group-hover:text-accent">
                      {t(r.title, l)}
                    </span>
                    <span className="mt-1 line-clamp-2 block text-sm leading-6 text-fg-muted">
                      {stripMarkup(t(r.summary, l))}
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {article.sources && article.sources.length > 0 && (
          <section className="mt-12 rounded-xl border border-border-base bg-surface-2 p-5">
            <h2 className="text-2xs font-semibold uppercase tracking-[0.09em] text-fg-subtle">
              {s("sources", l)}
            </h2>
            <ul className="mt-3 space-y-2 text-sm">
              {article.sources.map((src) => (
                <li key={src.url}>
                  <a
                    href={src.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-fg-muted underline decoration-border-strong underline-offset-2 transition-colors hover:text-fg"
                  >
                    {src.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>

      {toc.length > 2 && (
        <aside className="no-print sticky top-14 hidden h-fit w-56 shrink-0 py-8 xl:block">
          <p className="mb-3 text-2xs font-semibold uppercase tracking-[0.09em] text-fg-subtle">
            {s("onThisPage", l)}
          </p>
          <ul className="space-y-1.5 border-l border-border-base text-sm">
            {toc.map((h) => (
              <li key={h.id}>
                <a
                  href={`#${h.id}`}
                  className={`-ml-px block border-l border-transparent py-0.5 leading-snug text-fg-subtle transition-colors hover:border-border-strong hover:text-fg ${
                    h.level === 3 ? "pl-6" : "pl-3.5"
                  }`}
                >
                  {h.text}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      )}
    </div>
  );
}
