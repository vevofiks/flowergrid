import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://flowergriid.com",
      lastModified: new Date(),
    },
    {
      url: "https://flowergrid.co.uk",
      lastModified: new Date(),
    },
  ];
}
