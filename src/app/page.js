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
        <div className="wrap" style={{ padding: "104px 24px 88px" }}>
          <div style={{ maxWidth: 840 }}>
            <div
              className="eyebrow"
              style={{
                marginBottom: 22,
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "6px 14px",
                background: "rgba(77, 124, 255, 0.08)",
                border: "1px solid rgba(77, 124, 255, 0.22)",
                borderRadius: 999,
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--green)", boxShadow: "0 0 8px var(--green)" }} />
              <span>Verified member wins</span>
            </div>
            <h1 className="h1" style={{ marginBottom: 20 }}>
              Real wins from real members of{" "}
              <span style={{ background: "linear-gradient(135deg, var(--accent-bright) 0%, #a3c0ff 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                AI-Advertiser
              </span>
              .
            </h1>
            <p className="lead" style={{ maxWidth: 660, marginBottom: 36 }}>
              Pulled directly from our internal member portal. Names, screenshots, and stories you can verify.
              What members submit is what gets shown.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/reviews" className="btn btn-primary">
                Read member wins
                <span style={{ marginLeft: 2 }}>→</span>
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
      <section className="section dot-grid-bg">
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
          background:
            "linear-gradient(180deg, var(--bg) 0%, var(--bg-elev-1) 30%, var(--bg-elev-1) 70%, var(--bg) 100%)",
          borderTop: "1px solid var(--border-soft)",
          borderBottom: "1px solid var(--border-soft)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 50% 50%, rgba(0, 182, 122, 0.08) 0%, transparent 55%)",
            pointerEvents: "none",
          }}
        />
        <div className="wrap-narrow" style={{ textAlign: "center", position: "relative" }}>
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

      {/* APPLY CTA — form lives at /apply */}
      <section className="section dot-grid-bg">
        <div className="wrap-narrow" style={{ textAlign: "center" }}>
          <div className="eyebrow" style={{ marginBottom: 14 }}>Want to learn more?</div>
          <h2 className="h2" style={{ marginBottom: 18 }}>
            Apply to learn about the program.
          </h2>
          <p className="lead" style={{ marginBottom: 28, maxWidth: 600, marginLeft: "auto", marginRight: "auto" }}>
            {BUSINESS.brief}
          </p>
          <Link href="/apply" className="btn btn-primary">
            Apply now
            <span style={{ marginLeft: 2 }}>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
