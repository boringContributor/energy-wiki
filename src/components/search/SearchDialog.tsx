"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { lockScroll } from "@/lib/browser";
import type { Locale } from "@/lib/i18n";
import { foldSearch } from "@/lib/utils";

export interface SearchEntry {
  slug: string;
  title: string;
  summary: string;
  category: string;
  terms: string;
}

interface Props {
  locale: Locale;
  entries: SearchEntry[];
  labels: {
    search: string;
    placeholder: string;
    empty: string;
    hint: string;
    results: string;
    close: string;
  };
}

interface Scored extends SearchEntry {
  score: number;
}

function score(entry: SearchEntry, q: string): number {
  const title = foldSearch(entry.title);
  if (title === q) return 0;
  if (title.startsWith(q)) return 1;
  const terms = foldSearch(entry.terms);
  if (new RegExp(`\\b${escapeRe(q)}`).test(terms)) return 2;
  if (terms.includes(q)) return 3;
  return Infinity;
}

function escapeRe(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function SearchDialog({ locale, entries, labels }: Props) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  const openDialog = useCallback(() => {
    setQuery("");
    setActive(0);
    setOpen(true);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const typing =
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement;
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        openDialog();
      } else if (e.key === "Escape") {
        setOpen(false);
      } else if (e.key === "/" && !typing) {
        e.preventDefault();
        openDialog();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openDialog]);

  useEffect(() => {
    if (!open) return;
    // The trigger outlives the dialog, so capturing it here is safe and keeps
    // the cleanup from reading a ref that may have moved on.
    const trigger = triggerRef.current;
    const id = requestAnimationFrame(() => inputRef.current?.focus());
    lockScroll(true);
    return () => {
      cancelAnimationFrame(id);
      lockScroll(false);
      // Send focus back where it came from instead of dropping it on <body>.
      trigger?.focus();
    };
  }, [open]);

  const results = useMemo<Scored[]>(() => {
    const q = foldSearch(query.trim());
    if (q.length < 2) return [];
    return entries
      .map((e) => ({ ...e, score: score(e, q) }))
      .filter((e) => e.score !== Infinity)
      .sort((a, b) => a.score - b.score || a.title.localeCompare(b.title))
      .slice(0, 24);
  }, [entries, query]);

  useEffect(() => {
    listRef.current
      ?.querySelector<HTMLElement>(`[data-index="${active}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [active]);

  const onInputKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && results[active]) {
      e.preventDefault();
      setOpen(false);
      router.push(`/${locale}/wissen/${results[active].slug}`);
    }
  };

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={openDialog}
        className="group flex h-9 items-center gap-2 rounded-lg border border-border-base bg-surface pl-2.5 pr-2 text-sm text-fg-subtle transition-colors hover:border-border-strong hover:text-fg-muted sm:w-64 lg:w-72"
      >
        <SearchIcon />
        <span className="hidden truncate sm:inline">{labels.search}</span>
        <kbd className="ml-auto hidden rounded border border-border-base bg-surface-2 px-1.5 py-0.5 font-mono text-2xs text-fg-subtle sm:inline">
          ⌘K
        </kbd>
      </button>

      {/* Portalled to <body>. The header carries backdrop-blur, and a
          backdrop-filter makes an element the containing block for fixed
          descendants — inside the header this dialog resolved inset-0 against
          the 56 px header instead of the viewport, so the dimmer rendered as a
          band across the top of the page. */}
      {open &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-[8vh] sm:pt-[12vh]"
            role="dialog"
            aria-modal="true"
            aria-label={labels.search}
          >
            {/* Decorative dimmer. Click-to-close is a convenience; Esc and the
                visible esc button are the accessible ways out, so this must not
                be a tab stop announcing itself as "Schließen". */}
            <div
              aria-hidden
              onClick={() => setOpen(false)}
              className="ew-fade absolute inset-0 bg-black/40"
              style={{ animationDuration: "0.15s" }}
            />
          <div className="ew-rise relative flex max-h-[70vh] w-full max-w-xl flex-col overflow-hidden rounded-2xl border border-border-base bg-surface shadow-[var(--shadow-md)]">
            <div className="flex items-center gap-3 border-b border-border-base px-4">
              <span className="text-fg-subtle">
                <SearchIcon />
              </span>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActive(0);
                }}
                onKeyDown={onInputKey}
                placeholder={labels.placeholder}
                className="h-12 flex-1 bg-transparent text-sm text-fg outline-none placeholder:text-fg-subtle"
                autoComplete="off"
                spellCheck={false}
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded border border-border-base px-1.5 py-0.5 font-mono text-2xs text-fg-subtle hover:text-fg"
              >
                esc
              </button>
            </div>

            {query.trim().length < 2 ? (
              <p className="px-4 py-10 text-center text-sm text-fg-subtle">
                {labels.hint}
              </p>
            ) : results.length === 0 ? (
              <p className="px-4 py-10 text-center text-sm text-fg-subtle">
                {labels.empty}
              </p>
            ) : (
              <ul ref={listRef} className="rail-scroll overflow-y-auto p-2">
                {results.map((r, i) => (
                  <li key={r.slug}>
                    <Link
                      href={`/${locale}/wissen/${r.slug}`}
                      data-index={i}
                      onClick={() => setOpen(false)}
                      onMouseEnter={() => setActive(i)}
                      className={`block rounded-lg px-3 py-2.5 ${
                        i === active ? "bg-accent-soft" : ""
                      }`}
                    >
                      <span className="flex items-baseline gap-2">
                        <span className="truncate text-sm font-medium text-fg">
                          {r.title}
                        </span>
                        <span className="ml-auto shrink-0 text-2xs uppercase tracking-wide text-fg-subtle">
                          {r.category}
                        </span>
                      </span>
                      <span className="mt-0.5 line-clamp-2 block text-xs leading-5 text-fg-muted">
                        {r.summary}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            {results.length > 0 && (
              <p className="border-t border-border-base px-4 py-2 text-2xs text-fg-subtle">
                {results.length} {labels.results} · ↑↓ ⏎
              </p>
            )}
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="size-4 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      aria-hidden
    >
      <circle cx="8.8" cy="8.8" r="5.3" />
      <path d="m12.8 12.8 3.7 3.7" />
    </svg>
  );
}
