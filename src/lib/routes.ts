/**
 * The site's primary routes, in order.
 *
 * Deliberately framework-agnostic and free of a "use client" directive: this
 * is imported by both client components (Nav, ScrollNavMain) and server
 * components (not-found). A server component importing a value from a client
 * module receives a client-reference proxy rather than the value itself, so
 * shared data has to live outside the boundary.
 *
 * Order is meaningful — ScrollNavMain steps through it on scroll.
 */
export interface SiteLink {
  href: string;
  label: string;
}

export const LINKS: SiteLink[] = [
  { href: "/", label: "index" },
  { href: "/experience", label: "experience" },
  { href: "/projects", label: "projects" },
  { href: "/about", label: "about me" },
];

/**
 * Résumé, hosted on Google Drive rather than committed to public/.
 *
 * Declared once so the two links that point at it cannot drift apart, and so
 * swapping the document later is a one-line change. Keeping a copy in the repo
 * meant every revision needed a commit and a deploy, and the version that
 * shipped fell behind the site — /experience listed roles the linked PDF did
 * not contain.
 *
 * This is the /view share link, which opens Drive's viewer. Use
 * /uc?export=download&id=... instead if a direct download is ever wanted.
 */
export const RESUME_URL =
  "https://drive.google.com/file/d/1W_eyDr1ei0peAxuAjsWjZFpmSeCmmuuw/view";
