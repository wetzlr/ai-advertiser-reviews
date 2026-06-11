import Link from "next/link";
import WinCard from "@/components/WinCard";
import { WINS, STATS } from "@/lib/wins";
import { BUSINESS } from "@/lib/business";

export default function HomePage() {
  const featured = WINS.slice(0, 9);

  const aggSchema = {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    itemReviewed: {
      "@type": "Service",
      name: `${BUSINESS.dba} brand-scaling program`,
      provider: { "@type": "Organization", name: BUSINESS.dba, url: BUSINESS.url },
    },
    ratingValue: STATS.avg,
    bestRating: 5,
    ratingCount: STATS.total,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggSchema) }}
      />

      {/* HERO */}
      <section className="hero-bg">
        <div className="wrap" style={{ padding: "100px 24px 80px" }}>
          <div style={{ maxWidth: 840 }}>
            <div className="eyebrow" style={{ marginBottom: 18 }}>Verified member wins</div>
            <h1 className="h1" style={{ marginBottom: 18 }}>
              Real wins from real members of <span style={{ color: "var(--accent-bright)" }}>AI-Advertiser</span>.
            </h1>
            <p className="lead" style={{ maxWidth: 660, marginBottom: 32 }}>
              Pulled directly from our internal member portal. Names, screenshots, and stories you can verify —
              what they submit is what gets shown.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/reviews" className="btn btn-primary">
                Read member wins →
              </Link>
              <a
                href="https://www.trustpilot.com/review/ai-advertiser.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                See us on Trustpilot
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED WINS */}
      <section className="section">
        <div className="wrap">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 36, gap: 24, flexWrap: "wrap" }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 10 }}>Latest</div>
              <h2 className="h2">Recent member wins</h2>
            </div>
            <Link href="/reviews" className="btn btn-ghost">View all wins</Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 18 }}>
            {featured.map((w) => <WinCard key={w.id} win={w} />)}
          </div>
        </div>
      </section>

      {/* TRUSTPILOT BAND */}
      <section
        className="section"
        style={{
          background: "var(--bg-elev-1)",
          borderTop: "1px solid var(--border-soft)",
          borderBottom: "1px solid var(--border-soft)",
        }}
      >
        <div className="wrap-narrow" style={{ textAlign: "center" }}>
          <div className="eyebrow" style={{ marginBottom: 14 }}>Independently verified</div>
          <h2 className="h2" style={{ marginBottom: 14 }}>See us on Trustpilot.</h2>
          <p className="lead" style={{ marginBottom: 28 }}>
            Trustpilot collects reviews directly from members. We don&apos;t pick which ones get shown.
          </p>
          <a
            href="https://www.trustpilot.com/review/ai-advertiser.com"
            target="_blank"
            rel="noopener noreferrer"
            className="trustpilot-link"
          >
            <span style={{ fontSize: 18 }}>★</span> View AI-Advertiser on Trustpilot
          </a>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="section" style={{ textAlign: "center" }}>
        <div className="wrap-narrow">
          <h2 className="h2" style={{ marginBottom: 16 }}>Curious whether this is for you?</h2>
          <p className="lead" style={{ marginBottom: 28 }}>
            Read the wins, then get in touch.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/reviews" className="btn btn-primary">Read member wins →</Link>
            <Link href="/contact" className="btn btn-ghost">Contact us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
