import type { MetadataRoute } from "next";
import { newsPosts, siteConfig } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/courses",
    "/news",
    "/success-stories",
    "/contact",
    "/donate",
  ];

  const staticUrls: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${siteConfig.domain}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const newsUrls: MetadataRoute.Sitemap = newsPosts.map((post) => ({
    url: `${siteConfig.domain}/news/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticUrls, ...newsUrls];
}
