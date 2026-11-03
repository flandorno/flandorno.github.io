type Props = { size?: number };

/* The LinkedIn wordmark, glyph only — no containing square. The boxed version
   of this logo draws the frame and the letters as separate subpaths, so a
   single `fill` renders it as a solid block with the letters lost. Drawn at a
   24 viewBox and scaled by font-size-independent props so it stays crisp.
   `currentColor` lets the button that holds it decide the colour. */
export default function LinkedInIcon({ size = 24 }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z" />
      <path d="M5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125z" />
      <path d="M7.119 20.452H3.555V9h3.564v11.452z" />
    </svg>
  );
}
