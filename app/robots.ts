import type { MetadataRoute } from "next";
import { business as b } from "@/lib/content";
export const dynamic = "force-static";
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: "*", allow: "/" }, sitemap: `${b.siteUrl}/sitemap.xml` }; }
