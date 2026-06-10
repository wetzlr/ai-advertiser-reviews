import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BUSINESS, ADDRESS_ONE_LINE } from "@/lib/business";

export const metadata = {
  metadataBase: new URL(BUSINESS.url),
  title: {
    default: `${BUSINESS.dba} Reviews — Verified testimonials from program members`,
    template: `%s · ${BUSINESS.dba} Reviews`,
  },
  description:
    "Verified reviews, video testimonials, and case studies from members of the AI-Advertiser brand-scaling program. See the real numbers from real people inside the program.",
  openGraph: {
    title: "AI-Advertiser Reviews",
    description:
      "Verified reviews and case studies from AI-Advertiser program members.",
    url: BUSINESS.url,
    siteName: "AI-Advertiser Reviews",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Advertiser Reviews",
    description:
      "Verified reviews and case studies from AI-Advertiser program members.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0f",
};

export default function RootLayout({ children }) {
  // schema.org Organization markup — helps AI search engines (Perplexity,
  // ChatGPT, Google AI Overviews) understand the business at a glance.
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BUSINESS.dba,
    legalName: BUSINESS.legalName,
    url: BUSINESS.url,
    email: BUSINESS.supportEmail,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.line1,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: BUSINESS.address.country,
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body>
        <Header />
        <main style={{ flex: 1, minHeight: "60vh" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
