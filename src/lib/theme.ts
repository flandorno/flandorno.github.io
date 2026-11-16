/* Theme state. The store that the interface reads is prefs.ts; this file
   holds the reading, writing and resolving of the theme itself.
   "system" is the absence of a choice: no attribute on <html>, and the CSS
   follows prefers-color-scheme. An explicit choice sets data-theme and is
   remembered. The inline script in index.html applies the saved value before
   first paint — it reads the same key, so keep the two in sync. */

export type Theme = "light" | "dark" | "system";

const KEY = "fl-theme";

export function getTheme(): Theme {
  try {
    const t = localStorage.getItem(KEY);
    if (t === "light" || t === "dark") return t;
  } catch {
    /* storage blocked: fall through to the system */
  }
  return "system";
}

export function setTheme(theme: Theme): void {
  const root = document.documentElement;
  if (theme === "system") root.removeAttribute("data-theme");
  else root.setAttribute("data-theme", theme);
  try {
    if (theme === "system") localStorage.removeItem(KEY);
    else localStorage.setItem(KEY, theme);
  } catch {
    /* the choice still holds for this visit */
  }
}

/** The theme actually on screen, resolving "system" through the media query. */
export function resolvedTheme(theme: Theme = getTheme()): "light" | "dark" {
  if (theme !== "system") return theme;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
