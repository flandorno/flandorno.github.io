/* A competitor app icon from the Electrolux market scan.
 * Decorative: the surrounding copy states what the set is. */
export default function AppIcon({ imgUrl }: { imgUrl: string }) {
  return (
    <div
      aria-hidden="true"
      className="fl-app-icon"
      style={{ backgroundImage: `url(${imgUrl})` }}
    />
  );
}
