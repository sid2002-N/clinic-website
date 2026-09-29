import type { MetadataRoute } from "next";
import { business as b } from "@/lib/content";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap { return [{ url: `${b.siteUrl}/`, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }]; }
