/* Puts keyboard and screen-reader focus on the content, past the fixed row:
   used by the skip link and after every change of page.

   The target is the page's <h1>. On the home stage the <h1> belongs to the
   landing scene, which is inert while another scene is showing — an inert
   element cannot take focus — so there the target is the scene on show.
   A heading is given tabindex only for this, and loses it again on blur so it
   never enters the Tab order. */
export function focusContent(target?: HTMLElement | null): void {
  const main = document.getElementById("main-content");
  const el =
    target ??
    main?.querySelector<HTMLElement>("h1:not([inert] *)") ??
    main?.querySelector<HTMLElement>(".mx-scene:not([inert])") ??
    main;
  if (!el) return;
  if (!el.hasAttribute("tabindex")) {
    el.setAttribute("tabindex", "-1");
    el.addEventListener("blur", () => el.removeAttribute("tabindex"), { once: true });
  }
  el.focus({ preventScroll: true });
}
