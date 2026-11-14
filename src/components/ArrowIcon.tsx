type Props = { size?: number };

/* The one arrow in the system, drawn rather than typed. A Unicode "→" standing
   in for an icon is what the craft floor refuses, and the typographic arrow in
   a metric line ("45 → 3") is a different thing entirely — that one is text.
   1.5px stroke to match the generative field's 1.25px caps at reading weight,
   square viewBox, `currentColor` so the row that holds it decides the colour. */
export default function ArrowIcon({ size = 16 }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M2.5 8h11" />
      <path d="M9 3.5 13.5 8 9 12.5" />
    </svg>
  );
}
