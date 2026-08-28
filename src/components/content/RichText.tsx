import Link from "next/link";
import { Fragment, type ReactNode } from "react";

import { articleBySlug } from "@/content";
import { t, type Locale } from "@/lib/i18n";

const TOKEN =
  /\[\[([^\]|]+?)(?:\|([^\]]+?))?\]\]|\[([^\]]+?)\]\((https?:\/\/[^)\s]+)\)|\*\*(.+?)\*\*|(?<!\*)\*([^*\n]+?)\*(?!\*)|`([^`]+?)`/g;

/**
 * Renders the wiki's small markup dialect. Unknown [[slugs]] render as plain
 * text with a dotted underline so gaps in the content are visible while
 * authoring rather than shipping as dead links.
 */
export function RichText({
  text,
  locale,
}: {
  text: string;
  locale: Locale;
}): ReactNode {
  const out: ReactNode[] = [];
  let cursor = 0;
  let key = 0;

  for (const match of text.matchAll(TOKEN)) {
    const start = match.index ?? 0;
    if (start > cursor) out.push(text.slice(cursor, start));
    cursor = start + match[0].length;

    const [, wikiSlug, wikiLabel, extLabel, extHref, bold, italic, code] =
      match;

    if (wikiSlug !== undefined) {
      const target = articleBySlug.get(wikiSlug.trim());
      const label = wikiLabel ?? (target ? t(target.title, locale) : wikiSlug);
      out.push(
        target ? (
          <Link
            key={key++}
            href={`/${locale}/wissen/${target.slug}`}
            className="font-medium text-accent underline decoration-accent/30 underline-offset-2 transition-colors hover:decoration-accent"
          >
            {label}
          </Link>
        ) : (
          <span
            key={key++}
            title={`Kein Artikel mit dem Slug "${wikiSlug}"`}
            className="underline decoration-dotted decoration-fg-subtle underline-offset-2"
          >
            {label}
          </span>
        ),
      );
      continue;
    }

    if (extHref !== undefined) {
      out.push(
        <a
          key={key++}
          href={extHref}
          target="_blank"
          rel="noreferrer noopener"
          className="text-accent underline decoration-accent/30 underline-offset-2 transition-colors hover:decoration-accent"
        >
          {extLabel}
          <span aria-hidden className="ml-0.5 text-2xs align-super">
            ↗
          </span>
        </a>,
      );
      continue;
    }

    // Emphasis nests: **fett mit [[link]]** has to keep working, so the inner
    // run goes back through the same parser.
    if (bold !== undefined) {
      out.push(
        <strong key={key++} className="font-semibold text-fg">
          <RichText text={bold} locale={locale} />
        </strong>,
      );
      continue;
    }

    if (italic !== undefined) {
      out.push(
        <em key={key++}>
          <RichText text={italic} locale={locale} />
        </em>,
      );
      continue;
    }

    if (code !== undefined) {
      out.push(
        <code
          key={key++}
          className="rounded border border-border-base bg-surface-2 px-1 py-0.5 font-mono text-[0.85em] text-fg"
        >
          {code}
        </code>,
      );
    }
  }

  if (cursor < text.length) out.push(text.slice(cursor));

  return (
    <>
      {out.map((node, i) => (
        <Fragment key={i}>{node}</Fragment>
      ))}
    </>
  );
}
