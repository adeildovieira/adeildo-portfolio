import type { MetadataRoute } from "next";

const BASE_URL = "https://adeildovieira.com";

// Required so robots.txt is emitted as a static file under `output: export`.
export const dynamic = "force-static";

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
