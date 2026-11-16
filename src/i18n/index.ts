import type { ReactNode } from "react";
import { usePrefs } from "../lib/prefs";
import { en, type Dict } from "./en";
import { it } from "./it";
import { itContent } from "./it.content";

/* The Italian of everything Federico claims in his own voice — the case
   studies, About, the case titles and the closing line — is a draft written
   for his review. Until he has approved it, it exists only on the dev server:
   a production build shows those parts in English, with the interface labels
   in Italian, and does not contain the draft at all. That second part depends
   on every use of the draft sitting behind this constant, so the bundler can
   drop it (it.content.ts here, the pages in App.tsx).
   Set this to `true` to publish the Italian. */
export const ITALIAN_CONTENT_READY: boolean = import.meta.env.DEV;

const DICTS: Record<"en" | "it", Dict> = {
  en,
  it: ITALIAN_CONTENT_READY
    ? { ...it, home: { ...it.home, cases: itContent.cases, footer: { ...it.home.footer, line: itContent.line } } }
    : it,
};

/** The interface strings in the visitor's language. */
export function useT(): Dict {
  return DICTS[usePrefs().lang];
}

/** True when the page content, not just the interface, should be Italian. */
export function useItalianContent(): boolean {
  return usePrefs().lang === "it" && ITALIAN_CONTENT_READY;
}

/** `lang` for text that is Federico's own: "en" while the page is in Italian
    but his Italian is not published, so that assistive technology reads the
    English with an English voice. Otherwise nothing: the page's language holds. */
export function useContentLang(): "en" | undefined {
  return usePrefs().lang === "it" && !ITALIAN_CONTENT_READY ? "en" : undefined;
}

export type Localized = { en: ReactNode; it: ReactNode };
