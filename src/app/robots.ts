import type { MetadataRoute } from "next";

const BASE_URL = "https://adeildovieira.com";

/** Emitted as /robots.txt at build time (static-export safe). */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
