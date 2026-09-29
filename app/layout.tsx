import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Open_Sans } from "next/font/google";
import { business as b, faqs, services } from "@/lib/content";
const sans = Open_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const title = "Dr. Shine's Dental Clinic | Dentist & Orthodontist in Pathanamthitta";
const description = "Dr. Shine's Dental Clinic & Orthodontic Speciality Centre in Pathanamthitta, Kerala: orthodontics, clear aligners, dental implants, root canal, smile correction and family dentistry. Rated 5.0 by 232 patients on Google.";
export const metadata: Metadata = {
  metadataBase: new URL(b.siteUrl), title, description, alternates: { canonical: "/" },
  keywords: ["dentist in Pathanamthitta", "orthodontist Pathanamthitta", "dental implants Pathanamthitta", "clear aligners Kerala", "Dr. Shine dental clinic", "braces Pathanamthitta"],
  openGraph: { title, description, url: "/", siteName: b.fullName, locale: "en_IN", type: "website", images: [{ url: "/images/front.jpg", width: 408, height: 254, alt: "Dr. Shine's Dental Clinic, Pathanamthitta" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/images/front.jpg"] },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#fbfbfd" };
const ld = { "@context": "https://schema.org", "@graph": [
  { "@type": ["Dentist", "LocalBusiness"], "@id": b.siteUrl + "/#clinic", name: b.fullName, url: b.siteUrl, telephone: "+917012868192", image: b.siteUrl + "/images/front.jpg", hasMap: b.mapsUrl, sameAs: [b.website], medicalSpecialty: ["Dentistry", "Orthodontics"], knowsAbout: services.map(s => s[0]),
    address: { "@type": "PostalAddress", streetAddress: "KSRTC Cross Road, Near Old Private Bus Stand", addressLocality: "Pathanamthitta", addressRegion: "Kerala", postalCode: "689645", addressCountry: "IN" } },
  { "@type": "WebSite", "@id": b.siteUrl + "/#website", url: b.siteUrl, name: b.fullName, inLanguage: "en-IN" },
  { "@type": "FAQPage", mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
] };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en-IN"><body className={sans.variable}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />{children}</body></html>;
}
