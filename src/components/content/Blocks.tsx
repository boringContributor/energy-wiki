import type { ReactNode } from "react";

import type { Block } from "@/content/types";
import type { Locale } from "@/lib/i18n";
import { slugify, stripMarkup } from "@/lib/utils";
import { Figure } from "@/components/figures";

import { RichText } from "./RichText";

const NOTE_STYLES: Record<
  string,
  { ring: string; bg: string; dot: string; label: string; icon: ReactNode }
> = {
  info: {
    ring: "border-gas/25",
    bg: "bg-gas-soft",
    dot: "text-gas",
    label: "Gut zu wissen",
    icon: <InfoIcon />,
  },
  tip: {
    ring: "border-accent/25",
    bg: "bg-accent-soft",
    dot: "text-accent",
    label: "Merkhilfe",
    icon: <BulbIcon />,
  },
  warn: {
    ring: "border-waerme/30",
    bg: "bg-waerme-soft",
    dot: "text-waerme",
    label: "Achtung",
    icon: <WarnIcon />,
  },
  law: {
    ring: "border-recht/30",
    bg: "bg-recht-soft",
    dot: "text-recht",
    label: "Rechtsgrundlage",
    icon: <ScaleIcon />,
  },
  praxis: {
    ring: "border-markt/25",
    bg: "bg-markt-soft",
    dot: "text-markt",
    label: "Aus der Praxis",
    icon: <SparkIcon />,
  },
};

export function Blocks({
  blocks,
  locale,
}: {
  blocks: Block[];
  locale: Locale;
}) {
  return (
    <div className="@container space-y-6">
      {blocks.map((block, i) => (
        <BlockView key={i} block={block} locale={locale} />
      ))}
    </div>
  );
}

function BlockView({ block, locale }: { block: Block; locale: Locale }) {
  switch (block.t) {
    case "lead":
      return (
        <p className="text-lg leading-relaxed text-fg-muted @md:text-xl @md:leading-relaxed">
          <RichText text={block.text} locale={locale} />
        </p>
      );

    case "p":
      return (
        <p className="leading-7 text-fg-muted">
          <RichText text={block.text} locale={locale} />
        </p>
      );

    case "h": {
      const id = slugify(block.text);
      return block.level === 2 ? (
        <h2
          id={id}
          className="group scroll-mt-28 pt-6 text-xl font-semibold tracking-tight text-fg @md:text-2xl"
        >
          {block.text}
          <Anchor id={id} />
        </h2>
      ) : (
        <h3
          id={id}
          className="group scroll-mt-28 pt-2 text-base font-semibold tracking-tight text-fg @md:text-lg"
        >
          {block.text}
          <Anchor id={id} />
        </h3>
      );
    }

    case "ul":
      return (
        <ul className="space-y-2.5 pl-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 leading-7 text-fg-muted">
              <span
                aria-hidden
                className="mt-[0.7rem] size-1.5 shrink-0 rounded-full bg-accent/60"
              />
              <span>
                <RichText text={item} locale={locale} />
              </span>
            </li>
          ))}
        </ul>
      );

    case "ol":
      return (
        <ol className="space-y-2.5">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 leading-7 text-fg-muted">
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent-soft font-mono text-xs font-semibold text-accent">
                {i + 1}
              </span>
              <span>
                <RichText text={item} locale={locale} />
              </span>
            </li>
          ))}
        </ol>
      );

    case "steps":
      return (
        <ol className="relative space-y-5 border-l border-border-base pl-7">
          {block.items.map((item, i) => (
            <li key={i} className="relative">
              <span className="absolute -left-[2.32rem] top-0.5 flex size-6 items-center justify-center rounded-full border border-border-base bg-surface font-mono text-2xs font-semibold text-accent">
                {i + 1}
              </span>
              <p className="font-medium text-fg">{item.title}</p>
              <p className="mt-1 leading-7 text-fg-muted">
                <RichText text={item.text} locale={locale} />
              </p>
            </li>
          ))}
        </ol>
      );

    case "dl":
      return (
        <dl className="divide-y divide-border-base overflow-hidden rounded-xl border border-border-base bg-surface">
          {block.items.map((item, i) => (
            <div key={i} className="grid gap-1 p-4 @md:grid-cols-[minmax(0,13rem)_1fr] @md:gap-5">
              <dt className="font-medium text-fg">
                <RichText text={item.term} locale={locale} />
              </dt>
              <dd className="leading-7 text-fg-muted">
                <RichText text={item.def} locale={locale} />
              </dd>
            </div>
          ))}
        </dl>
      );

    case "table": {
      const align = block.align ?? [];
      const alignClass = (i: number) =>
        align[i] === "r"
          ? "text-right tabular-nums"
          : align[i] === "c"
            ? "text-center"
            : "text-left";
      return (
        <figure className="space-y-2">
          <div className="overflow-x-auto rounded-xl border border-border-base">
            <table className="w-full min-w-[34rem] border-collapse text-sm">
              <thead>
                <tr className="bg-surface-2">
                  {block.head.map((h, i) => (
                    <th
                      key={i}
                      scope="col"
                      className={`border-b border-border-base px-4 py-3 font-semibold text-fg ${alignClass(i)}`}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, r) => (
                  <tr
                    key={r}
                    className="border-b border-border-base last:border-0 hover:bg-surface-2/60"
                  >
                    {row.map((cell, c) => (
                      <td
                        key={c}
                        className={`px-4 py-3 align-top text-fg-muted ${alignClass(c)}`}
                      >
                        <RichText text={cell} locale={locale} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.caption && (
            <figcaption className="text-xs text-fg-subtle">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
    }

    case "note": {
      const style = NOTE_STYLES[block.kind] ?? NOTE_STYLES.info;
      return (
        <aside
          className={`flex gap-3 rounded-xl border ${style.ring} ${style.bg} p-4`}
        >
          <span className={`mt-0.5 shrink-0 ${style.dot}`}>{style.icon}</span>
          <div className="min-w-0">
            <p
              className={`text-2xs font-semibold uppercase tracking-[0.09em] ${style.dot}`}
            >
              {block.title ?? style.label}
            </p>
            <p className="mt-1 leading-7 text-fg-muted">
              <RichText text={block.text} locale={locale} />
            </p>
          </div>
        </aside>
      );
    }

    case "formula":
      return (
        <figure className="overflow-hidden rounded-xl border border-border-base bg-surface-2">
          <div className="overflow-x-auto px-5 py-5">
            <p className="whitespace-nowrap text-center font-mono text-sm text-fg @md:text-base">
              {block.expr}
            </p>
          </div>
          {(block.where || block.caption) && (
            <div className="border-t border-border-base bg-surface px-5 py-4">
              {block.where && (
                <dl className="space-y-1.5 text-sm">
                  {block.where.map((w, i) => (
                    <div key={i} className="flex gap-3">
                      <dt className="w-32 shrink-0 font-mono text-xs text-accent">
                        {w.sym}
                      </dt>
                      <dd className="text-fg-muted">
                        <RichText text={w.desc} locale={locale} />
                      </dd>
                    </div>
                  ))}
                </dl>
              )}
              {block.caption && (
                <p className="mt-2 text-xs text-fg-subtle">{block.caption}</p>
              )}
            </div>
          )}
        </figure>
      );

    case "example":
      return (
        <div className="overflow-hidden rounded-xl border border-border-base bg-surface">
          <p className="border-b border-border-base bg-surface-2 px-4 py-2.5 text-2xs font-semibold uppercase tracking-[0.09em] text-fg-subtle">
            {block.title ?? "Rechenbeispiel"}
          </p>
          <dl className="divide-y divide-border-base">
            {block.lines.map((line, i) => (
              <div
                key={i}
                className="flex items-baseline justify-between gap-4 px-4 py-2.5 text-sm"
              >
                <dt className="text-fg-muted">{line.label}</dt>
                <dd className="shrink-0 font-mono tabular-nums text-fg">
                  {line.value}
                </dd>
              </div>
            ))}
          </dl>
          {block.result && (
            <div className="flex items-baseline justify-between gap-4 border-t-2 border-accent/30 bg-accent-soft px-4 py-3">
              <span className="font-medium text-fg">{block.result.label}</span>
              <span className="shrink-0 font-mono text-base font-semibold tabular-nums text-accent">
                {block.result.value}
              </span>
            </div>
          )}
        </div>
      );

    case "figure":
      return (
        <figure className="space-y-2">
          <Figure id={block.id} locale={locale} />
          {block.caption && (
            <figcaption className="text-xs leading-6 text-fg-subtle">
              <RichText text={block.caption} locale={locale} />
            </figcaption>
          )}
        </figure>
      );

    case "quote":
      return (
        <blockquote className="border-l-2 border-accent/40 pl-5">
          <p className="text-[0.95rem] italic leading-7 text-fg-muted">
            <RichText text={block.text} locale={locale} />
          </p>
          {block.source && (
            <footer className="mt-2 text-xs text-fg-subtle">
              — {block.source}
            </footer>
          )}
        </blockquote>
      );

    case "stats":
      return (
        <div className="grid gap-3 @md:grid-cols-3">
          {block.items.map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-border-base bg-surface p-4"
            >
              <p className="font-mono text-2xl font-semibold tabular-nums text-fg">
                {item.value}
              </p>
              <p className="mt-1 text-sm font-medium text-fg-muted">
                {item.label}
              </p>
              {item.hint && (
                <p className="mt-1 text-xs text-fg-subtle">{item.hint}</p>
              )}
            </div>
          ))}
        </div>
      );

    case "cards":
      return (
        <div className="grid gap-3 @md:grid-cols-2">
          {block.items.map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-border-base bg-surface p-4"
            >
              <p className="font-medium text-fg">{item.title}</p>
              <p className="mt-1 text-sm leading-6 text-fg-muted">
                <RichText text={item.text} locale={locale} />
              </p>
            </div>
          ))}
        </div>
      );
  }
}

function Anchor({ id }: { id: string }) {
  return (
    <a
      href={`#${id}`}
      aria-label="Direktlink"
      className="ml-2 text-fg-subtle opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
    >
      #
    </a>
  );
}

/** Headings that should appear in the table of contents. */
export function tableOfContents(blocks: Block[]) {
  return blocks
    .filter((b): b is Extract<Block, { t: "h" }> => b.t === "h")
    .map((b) => ({
      id: slugify(b.text),
      text: stripMarkup(b.text),
      level: b.level,
    }));
}

function InfoIcon() {
  return (
    <svg viewBox="0 0 20 20" className="size-4" fill="currentColor" aria-hidden>
      <path d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm.75 4.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.25 9h1.5v5.25h-1.5V9Z" />
    </svg>
  );
}
function BulbIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="size-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden
    >
      <path d="M7.6 14.2a5 5 0 1 1 4.8 0v1.3a1 1 0 0 1-1 1h-2.8a1 1 0 0 1-1-1v-1.3Z" />
      <path d="M8.5 18.2h3" strokeLinecap="round" />
    </svg>
  );
}
function WarnIcon() {
  return (
    <svg viewBox="0 0 20 20" className="size-4" fill="currentColor" aria-hidden>
      <path d="M9.1 2.6a1 1 0 0 1 1.8 0l7 12.9a1 1 0 0 1-.9 1.5H3a1 1 0 0 1-.9-1.5l7-12.9ZM9.25 7.5v4h1.5v-4h-1.5Zm.75 7.2a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8Z" />
    </svg>
  );
}
function ScaleIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="size-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M10 3v14M5 17h10M4 6.5h12M4 6.5 2 12h4L4 6.5Zm12 0L14 12h4l-2-5.5Z" />
    </svg>
  );
}
function SparkIcon() {
  return (
    <svg viewBox="0 0 20 20" className="size-4" fill="currentColor" aria-hidden>
      <path d="M10 1.8 11.6 7 17 8.6 11.6 10.2 10 15.4 8.4 10.2 3 8.6 8.4 7 10 1.8Zm5.6 8.9.8 2.5 2.6.8-2.6.8-.8 2.5-.8-2.5-2.6-.8 2.6-.8.8-2.5Z" />
    </svg>
  );
}
