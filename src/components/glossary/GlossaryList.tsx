"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import type { Locale } from "@/lib/i18n";
import { cn, foldSearch } from "@/lib/utils";

export interface GlossaryEntry {
  slug: string;
  title: string;
  summary: string;
  category: string;
  tone: string;
  terms: string;
}

export function GlossaryList({
  entries,
  locale,
  labels,
}: {
  entries: GlossaryEntry[];
  locale: Locale;
  labels: { filter: string; empty: string; reset: string };
}) {
  const [query, setQuery] = useState("");

  const groups = useMemo(() => {
    const q = foldSearch(query.trim());
    const filtered = q
      ? entries.filter((e) => foldSearch(e.terms).includes(q))
      : entries;

    const map = new Map<string, GlossaryEntry[]>();
    for (const entry of filtered) {
      const first = entry.title[0].toUpperCase();
      const letter = /[A-ZÄÖÜ]/.test(first)
        ? first.replace(/[ÄÖÜ]/, (c) => ({ Ä: "A", Ö: "O", Ü: "U" })[c] ?? c)
        : "#";
      const list = map.get(letter) ?? [];
      list.push(entry);
      map.set(letter, list);
    }
    return [...map.entries()].sort(([a], [b]) => a.localeCompare(b, "de"));
  }, [entries, query]);

  const letters = new Set(groups.map(([l]) => l));
  const alphabet = ["#", ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")];

  return (
    <div>
      <div className="sticky top-14 z-20 -mx-4 border-b border-border-base bg-bg/90 px-4 py-3 backdrop-blur-md sm:-mx-6 sm:px-6">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={labels.filter}
          className="h-10 w-full rounded-lg border border-border-base bg-surface px-3 text-sm text-fg outline-none transition-colors placeholder:text-fg-subtle focus:border-accent"
          autoComplete="off"
          spellCheck={false}
        />
        <div className="mt-3 flex flex-wrap gap-1">
          {alphabet.map((letter) => {
            const has = letters.has(letter);
            return has ? (
              <a
                key={letter}
                href={`#letter-${letter}`}
                className="flex size-6 items-center justify-center rounded font-mono text-2xs font-semibold text-fg-muted transition-colors hover:bg-accent-soft hover:text-accent"
              >
                {letter}
              </a>
            ) : (
              <span
                key={letter}
                className="flex size-6 items-center justify-center font-mono text-2xs text-fg-subtle/40"
              >
                {letter}
              </span>
            );
          })}
        </div>
      </div>

      {groups.length === 0 ? (
        <div className="py-16 text-center">
          <p className="text-sm text-fg-subtle">{labels.empty}</p>
          <button
            type="button"
            onClick={() => setQuery("")}
            className="mt-3 text-sm text-accent underline underline-offset-2"
          >
            {labels.reset}
          </button>
        </div>
      ) : (
        <div className="mt-10 space-y-12">
          {groups.map(([letter, items]) => (
            <section key={letter} id={`letter-${letter}`} className="scroll-mt-44">
              <h2 className="mb-4 font-mono text-sm font-semibold text-accent">
                {letter}
              </h2>
              <dl className="divide-y divide-border-base border-t border-border-base">
                {items.map((entry) => (
                  <div
                    key={entry.slug}
                    className="grid gap-1 py-4 sm:grid-cols-[minmax(0,16rem)_1fr] sm:gap-6"
                  >
                    <dt>
                      <Link
                        href={`/${locale}/wissen/${entry.slug}`}
                        className="font-medium text-fg transition-colors hover:text-accent"
                      >
                        {entry.title}
                      </Link>
                      <span
                        className={cn(
                          "mt-1 flex items-center gap-1.5 text-2xs uppercase tracking-[0.08em] text-fg-subtle",
                        )}
                      >
                        <span
                          aria-hidden
                          className="size-1.5 rounded-full"
                          style={{ background: `var(--${entry.tone})` }}
                        />
                        {entry.category}
                      </span>
                    </dt>
                    <dd className="text-sm leading-6 text-fg-muted">
                      {entry.summary}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
