/**
 * Faint film-grain / noise overlay (texture, not noise). Pure CSS + inline
 * SVG — zero network cost. Server component; ships no JS.
 */
export function Grain() {
  return <div className="film-grain" aria-hidden="true" />;
}
