import { useEffect, type RefObject } from "react";

/* Sequenced reveals, shared by every surface.
 *
 * The hidden start state is added by script and only when motion is welcome,
 * so a reduced-motion visitor — or anyone whose JS never runs — gets the
 * finished page rather than a blank one. */
export function useReveals(root: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    el.classList.add("fl-anim");
    const items = Array.from(el.querySelectorAll<HTMLElement>("[data-reveal]"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = entry.target as HTMLElement;
          const delay = Number(target.dataset.revealDelay ?? 0);
          window.setTimeout(() => target.classList.add("is-in"), delay);
          io.unobserve(target);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -6% 0px" }
    );
    items.forEach((i) => io.observe(i));
    return () => io.disconnect();
  }, [root]);
}
