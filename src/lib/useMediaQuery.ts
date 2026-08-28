"use client";

import { useCallback, useSyncExternalStore } from "react";

/**
 * Reads a media query without a setState-in-effect dance: React subscribes to
 * the MediaQueryList directly and swaps in the client value right after
 * hydration, so the server render stays deterministic.
 *
 * The server snapshot is always `false` — callers that must not flash should
 * treat `false` as "not known yet" and render the safe variant.
 */
export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    },
    [query],
  );

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  );
}
