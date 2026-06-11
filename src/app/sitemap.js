import { BUSINESS } from "@/lib/business";

export default function sitemap() {
  const now = new Date();
  const base = BUSINESS.url;
  const pages = ["", "reviews", "about", "faq", "contact", "privacy", "terms", "sms-terms"];
  return pages.map((p) => ({
    url: `${base}${p ? "/" + p : ""}`,
    lastModified: now,
    changeFrequency: p === "reviews" ? "weekly" : "monthly",
    priority: p === "" ? 1 : p === "reviews" ? 0.9 : 0.7,
  }));
}
