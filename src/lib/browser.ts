/**
 * Thin wrappers around browser globals. Keeping them out of component bodies
 * lets the React compiler reason about components without tripping over
 * global mutation.
 */

export function setCookie(name: string, value: string, maxAgeSeconds: number) {
  document.cookie = `${name}=${value};path=/;max-age=${maxAgeSeconds};samesite=lax`;
}

export function readStorage(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

export function writeStorage(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* private mode, quota — the page still works, it just forgets */
  }
}

export function lockScroll(locked: boolean) {
  document.body.style.overflow = locked ? "hidden" : "";
}
