import type { MetadataRoute } from "next";

import { PASSMALTA_LEGAL_LAST_UPDATED } from "@/lib/passmalta-legal";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/passmalta/privacy`,
      lastModified: PASSMALTA_LEGAL_LAST_UPDATED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/passmalta/terms`,
      lastModified: PASSMALTA_LEGAL_LAST_UPDATED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
