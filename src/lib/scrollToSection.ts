/* In-page navigation. HashRouter owns location.hash, so `href="#work"` would be
   read as a route — these links move focus and scroll by hand instead. */
export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Focus first so keyboard users continue from the section, not from the top.
     preventScroll keeps the browser from jumping before the smooth scroll runs. */
  el.focus({ preventScroll: true });
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
}
