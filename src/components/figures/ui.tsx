"use client";

import { cn } from "@/lib/utils";

export function FigureShell({
  title,
  hint,
  interactive,
  children,
  footer,
}: {
  title: string;
  hint?: string;
  interactive?: boolean;
  children: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <div className="@container overflow-hidden rounded-2xl border border-border-base bg-surface">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-border-base bg-surface-2 px-5 py-3.5 @xl:px-6">
        <p className="text-sm font-medium text-fg">{title}</p>
        {hint && <p className="text-xs text-fg-subtle">{hint}</p>}
        {interactive && (
          <span className="ml-auto flex items-center gap-1.5 rounded-full bg-accent-soft px-2 py-0.5 text-2xs font-semibold uppercase tracking-[0.08em] text-accent">
            <span aria-hidden className="ew-pulse-soft size-1.5 rounded-full bg-accent" />
            interaktiv
          </span>
        )}
      </div>
      <div className="p-5 @xl:p-6">{children}</div>
      {footer && (
        <div className="border-t border-border-base bg-surface-2 px-5 py-4 @xl:px-6">
          <p className="max-w-[68ch] text-xs leading-6 text-fg-subtle">{footer}</p>
        </div>
      )}
    </div>
  );
}

export function Slider({
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
  display,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step?: number;
  display: string;
}) {
  return (
    <label className="block">
      <span className="flex items-baseline justify-between gap-3">
        <span className="text-xs font-medium text-fg-muted">{label}</span>
        <span className="font-mono text-sm tabular-nums text-fg">{display}</span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-border-base accent-[var(--accent)]"
        style={{
          background: `linear-gradient(to right, var(--accent) 0%, var(--accent) ${
            ((value - min) / (max - min)) * 100
          }%, var(--border) ${((value - min) / (max - min)) * 100}%, var(--border) 100%)`,
        }}
      />
    </label>
  );
}

export function Segmented<T extends string>({
  options,
  value,
  onChange,
  label,
}: {
  options: { value: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
  label?: string;
}) {
  return (
    <div>
      {label && (
        <span className="mb-1.5 block text-xs font-medium text-fg-muted">
          {label}
        </span>
      )}
      <div
        role="group"
        className="inline-flex flex-wrap gap-1 rounded-lg border border-border-base bg-surface-2 p-1"
      >
        {options.map((o) => (
          <button
            key={o.value}
            type="button"
            onClick={() => onChange(o.value)}
            aria-pressed={o.value === value}
            className={cn(
              "rounded-md px-2.5 py-1 text-xs font-medium transition-colors",
              o.value === value
                ? "bg-surface text-fg shadow-[var(--shadow-sm)]"
                : "text-fg-subtle hover:text-fg",
            )}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}

/** Horizontal stacked bar used by all three price-breakdown figures. */
export function StackBar({
  parts,
  total,
  activeKey,
  onHover,
}: {
  parts: { key: string; label: string; value: number; color: string }[];
  total: number;
  activeKey?: string | null;
  onHover?: (key: string | null) => void;
}) {
  return (
    <div
      className="flex h-11 w-full overflow-hidden rounded-lg"
      onMouseLeave={() => onHover?.(null)}
    >
      {parts.map((p) => {
        const pct = total > 0 ? (p.value / total) * 100 : 0;
        if (pct <= 0) return null;
        return (
          <button
            key={p.key}
            type="button"
            onMouseEnter={() => onHover?.(p.key)}
            onFocus={() => onHover?.(p.key)}
            title={`${p.label}: ${pct.toFixed(1)} %`}
            aria-label={`${p.label}: ${pct.toFixed(1)} Prozent`}
            className={cn(
              "relative h-full min-w-[2px] transition-[filter,opacity] duration-150",
              activeKey && activeKey !== p.key
                ? "opacity-35"
                : "opacity-100",
            )}
            style={{ width: `${pct}%`, background: p.color }}
          >
            {pct > 9 && (
              <span className="pointer-events-none absolute inset-0 flex items-center justify-center font-mono text-2xs font-semibold text-white/95 mix-blend-plus-lighter">
                {pct.toFixed(0)}%
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

export function Legend({
  parts,
  total,
  unit,
  activeKey,
  onHover,
  format,
}: {
  parts: { key: string; label: string; value: number; color: string; note?: string }[];
  total: number;
  unit: string;
  activeKey?: string | null;
  onHover?: (key: string | null) => void;
  format: (v: number) => string;
}) {
  return (
    <ul className="mt-4 divide-y divide-border-base border-t border-border-base">
      {parts.map((p) => (
        <li
          key={p.key}
          onMouseEnter={() => onHover?.(p.key)}
          onMouseLeave={() => onHover?.(null)}
          className={cn(
            "flex items-baseline gap-3 py-2 text-sm transition-colors",
            activeKey === p.key && "bg-surface-2",
          )}
        >
          <span
            aria-hidden
            className="mt-1.5 size-2 shrink-0 rounded-sm"
            style={{ background: p.color }}
          />
          <span className="min-w-0 flex-1">
            <span className="text-fg-muted">{p.label}</span>
            {p.note && (
              <span className="ml-2 text-xs text-fg-subtle">{p.note}</span>
            )}
          </span>
          <span className="shrink-0 font-mono tabular-nums text-fg">
            {format(p.value)}
            <span className="ml-1 text-2xs text-fg-subtle">{unit}</span>
          </span>
          <span className="w-12 shrink-0 text-right font-mono text-xs tabular-nums text-fg-subtle">
            {total > 0 ? ((p.value / total) * 100).toFixed(1) : "0,0"}%
          </span>
        </li>
      ))}
    </ul>
  );
}

export function ResultRow({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <div className="mt-4 flex flex-wrap items-baseline justify-between gap-2 rounded-xl border border-accent/25 bg-accent-soft px-4 py-3">
      <span className="text-sm font-medium text-fg">{label}</span>
      <span className="font-mono text-lg font-semibold tabular-nums text-accent">
        {value}
      </span>
      {hint && <span className="w-full text-xs text-fg-subtle">{hint}</span>}
    </div>
  );
}
