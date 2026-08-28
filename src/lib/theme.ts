"use client";

import { useEffect, useSyncExternalStore } from "react";

import { readStorage, writeStorage } from "./browser";

export type ThemeMode = "light" | "dark" | "system";

export const themeModes: ThemeMode[] = ["light", "dark", "system"];

const KEY = "theme";
const listeners = new Set<() => void>();

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  return () => {
    listeners.delete(onChange);
  };
}

function snapshot(): ThemeMode {
  const stored = readStorage(KEY) as ThemeMode | null;
  return stored && themeModes.includes(stored) ? stored : "system";
}

/** Mirrors the inline script in the root layout, which runs before first paint. */
function applyToDocument(mode: ThemeMode) {
  const dark =
    mode === "dark" ||
    (mode === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.classList.toggle("dark", dark);
}

export function setThemeMode(mode: ThemeMode) {
  writeStorage(KEY, mode);
  applyToDocument(mode);
  for (const listener of listeners) listener();
}

/**
 * The selected mode. Server-rendered as "system" and corrected on hydration by
 * useSyncExternalStore — no setState-in-effect and no flash, because the inline
 * script has already put the right class on <html>.
 */
export function useThemeMode(): ThemeMode {
  const mode = useSyncExternalStore(
    subscribe,
    snapshot,
    () => "system" as ThemeMode,
  );

  useEffect(() => {
    applyToDocument(mode);
    if (mode !== "system") return;
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => applyToDocument("system");
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [mode]);

  return mode;
}
