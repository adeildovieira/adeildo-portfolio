import type { Metadata } from "next";
import { ReactNode } from "react";

/**
 * Metadata carrier for the /blog section.
 *
 * blog/page.tsx is a client component, and client components cannot export
 * `metadata` — so the index page had none and fell back to the root layout's
 * title. This layout supplies it. Individual posts override it from their own
 * `generateMetadata` in blog/[slug]/page.tsx.
 */

const DESCRIPTION =
  "Essays on interning at BTG Pactual and Duke Code+, on carrying a name, and on what a new grad learns shipping software.";

export const metadata: Metadata = {
  title: "Writing",
  description: DESCRIPTION,
  alternates: { canonical: "/blog" },
  openGraph: {
    url: "/blog",
    title: "Writing - Adeildo Vieira",
    description: DESCRIPTION,
  },
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return children;
}
