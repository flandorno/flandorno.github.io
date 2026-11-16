import gsap from "gsap";

/* How the screens of a scene come on. They are separate devices, so they do
   not come on together or in the same way: each one starts at its own moment
   and with its own behaviour — typed out, lit dot by dot in no order, swept
   from the middle, or stepped up in brightness. The choice is random, so a
   scene does not come in the same way twice.

   Returns a timeline that starts from every screen at opacity 0 and ends with
   every screen and character at opacity 1; the caller clears the inline
   styles afterwards. */

type Effect = (tl: gsap.core.Timeline, screen: Element, chars: Element[], at: number) => void;

const STEP = { ease: "steps(1)" };

/** Left to right, like a line being printed. */
const typed: Effect = (tl, screen, chars, at) => {
  tl.set(screen, { opacity: 1 }, at).fromTo(
    chars,
    { opacity: 0 },
    { opacity: 1, duration: 0.03, stagger: { amount: 0.4 }, ...STEP },
    at,
  );
};

/** Every character on its own, in no order. */
const scattered: Effect = (tl, screen, chars, at) => {
  tl.set(screen, { opacity: 1 }, at).fromTo(
    chars,
    { opacity: 0 },
    { opacity: 1, duration: 0.03, stagger: { amount: 0.45, from: "random" }, ...STEP },
    at,
  );
};

/** From the middle outwards. */
const opened: Effect = (tl, screen, chars, at) => {
  tl.set(screen, { opacity: 1 }, at).fromTo(
    chars,
    { opacity: 0 },
    { opacity: 1, duration: 0.03, stagger: { amount: 0.35, from: "center" }, ...STEP },
    at,
  );
};

/** A picture comes up smoothly. A large image changing brightness in jumps
    reads as flashing, and is unpleasant (owner, 2026-11-15). */
const faded: Effect = (tl, screen, _chars, at) => {
  tl.to(screen, { opacity: 1, duration: 0.45, ease: "power1.out" }, at);
};

/** Comes up in three steps of brightness. */
const stepped: Effect = (tl, screen, _chars, at) => {
  tl.to(screen, { opacity: 1, duration: 0.3, ease: "steps(3)" }, at);
};

/* Nothing flashes (owner, 2026-11-15: the first versions did, and it was
   annoying). Text writes itself or steps up; a short label steps up; a
   picture fades in. No screen ever goes down again once it has started. */
const TEXT_EFFECTS = [typed, scattered, opened, stepped];

export function powerOn(screens: Element[]): gsap.core.Timeline {
  const tl = gsap.timeline();
  if (!screens.length) return tl;
  tl.set(screens, { opacity: 0 }, 0);

  const order = gsap.utils.shuffle([...screens]);
  /* Deal the effects out so two screens of a scene share one only when there
     are more screens than effects. */
  const text = gsap.utils.shuffle([...TEXT_EFFECTS]);
  let at = 0;
  order.forEach((screen, i) => {
    /* A screen that runs its own animation (the rotating sector) is switched
       on as a whole; its characters are not ours to touch. */
    const chars = screen.classList.contains("mx-screen-live") ? [] : [...screen.querySelectorAll(".mx-ch")];
    const effect = chars.length ? text[i % text.length] : screen.querySelector("img") ? faded : stepped;
    if (i > 0) at += 0.1 + Math.random() * 0.16;
    effect(tl, screen, chars, at);
  });
  /* Whatever the effects did, end on fully lit. */
  tl.set(screens, { opacity: 1 }, ">");
  return tl;
}
