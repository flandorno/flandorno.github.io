/* Visitor preferences: theme, motion, sound, language.
   One store, read with useSyncExternalStore. Each choice is saved in
   localStorage and mirrored on <html>, where the stylesheet reads it. The
   inline script in index.html applies theme, motion and language before first
   paint; it reads the same keys, so keep the two in sync. */
import { useSyncExternalStore } from "react";
import { getTheme, resolvedTheme, setTheme as applyTheme, type Theme } from "./theme";

export type Lang = "en" | "it";

export type Prefs = {
  theme: Theme;
  /** The theme on screen, with "system" resolved. */
  dark: boolean;
  motion: boolean;
  sound: boolean;
  lang: Lang;
};

const KEY = { motion: "fl-motion", sound: "fl-sound", lang: "fl-lang" } as const;

function read(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}
function write(key: string, value: string): void {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* the choice still holds for this visit */
  }
}

const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

function load(): Prefs {
  const theme = getTheme();
  const motion = read(KEY.motion);
  return {
    theme,
    dark: resolvedTheme(theme) === "dark",
    /* No saved choice: follow the system. */
    motion: motion === "on" ? true : motion === "off" ? false : !reduce.matches,
    sound: read(KEY.sound) === "on",
    lang: read(KEY.lang) === "it" ? "it" : "en",
  };
}

let state = load();
const listeners = new Set<() => void>();

function mirror(): void {
  const root = document.documentElement;
  root.dataset.motion = state.motion ? "on" : "off";
  root.lang = state.lang;
}
mirror();

function set(next: Partial<Prefs>): void {
  state = { ...state, ...next };
  mirror();
  listeners.forEach((l) => l());
}

reduce.addEventListener("change", () => {
  if (read(KEY.motion) === null) set({ motion: !reduce.matches });
});
darkQuery.addEventListener("change", () => {
  if (state.theme === "system") set({ dark: darkQuery.matches });
});

export function setTheme(theme: Theme): void {
  applyTheme(theme);
  set({ theme, dark: resolvedTheme(theme) === "dark" });
}
export function setMotion(motion: boolean): void {
  write(KEY.motion, motion ? "on" : "off");
  set({ motion });
}
export function setSound(sound: boolean): void {
  write(KEY.sound, sound ? "on" : "off");
  set({ sound });
}
export function setLang(lang: Lang): void {
  write(KEY.lang, lang);
  set({ lang });
}

export const getPrefs = (): Prefs => state;

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function usePrefs(): Prefs {
  return useSyncExternalStore(subscribe, getPrefs);
}
