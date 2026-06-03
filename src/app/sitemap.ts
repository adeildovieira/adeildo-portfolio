import type { MetadataRoute } from "next";

const BASE_URL = "https://adeildovieira.com";

// Required so sitemap.xml is emitted as a static file under `output: export`.
export const dynamic = "force-static";

/**
 * Static sitemap. Emitted as /sitemap.xml at build time (static-export safe).
 * Keep blog slugs in sync with the published posts in /blog/[slug]/page.tsx.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes = ["", "/experience", "/projects", "/about", "/blog"].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const posts = ["lessons-first-internship", "last-name-grandson"].map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...routes, ...posts];
}
