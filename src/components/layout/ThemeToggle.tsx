"use client";

import { setThemeMode, themeModes, useThemeMode, type ThemeMode } from "@/lib/theme";

export function ThemeToggle({
  labels,
}: {
  labels: Record<ThemeMode, string>;
}) {
  const mode = useThemeMode();

  const next = () =>
    setThemeMode(themeModes[(themeModes.indexOf(mode) + 1) % themeModes.length]);

  return (
    <button
      type="button"
      onClick={next}
      title={labels[mode]}
      aria-label={labels[mode]}
      className="flex size-9 items-center justify-center rounded-lg border border-border-base bg-surface text-fg-muted transition-colors hover:bg-surface-2 hover:text-fg"
    >
      {mode === "light" ? (
        <SunIcon />
      ) : mode === "dark" ? (
        <MoonIcon />
      ) : (
        <SystemIcon />
      )}
    </button>
  );
}

function SunIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="size-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      aria-hidden
    >
      <circle cx="10" cy="10" r="3.4" />
      <path d="M10 2.4v1.8M10 15.8v1.8M2.4 10h1.8M15.8 10h1.8M4.6 4.6l1.3 1.3M14.1 14.1l1.3 1.3M15.4 4.6l-1.3 1.3M5.9 14.1l-1.3 1.3" />
    </svg>
  );
}
function MoonIcon() {
  return (
    <svg viewBox="0 0 20 20" className="size-4" fill="currentColor" aria-hidden>
      <path d="M16.5 12.4A7 7 0 0 1 7.6 3.5 7 7 0 1 0 16.5 12.4Z" />
    </svg>
  );
}
function SystemIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="size-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="2.5" y="3.5" width="15" height="10" rx="1.6" />
      <path d="M7 16.5h6" strokeLinecap="round" />
    </svg>
  );
}
