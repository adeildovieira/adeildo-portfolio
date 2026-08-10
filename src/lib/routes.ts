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
