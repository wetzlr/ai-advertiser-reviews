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
            <div className="eyebrow" style={{ marginBottom: 18 }}>{STATS.total} verified member wins</div>
            <h1 className="h1" style={{ marginBottom: 18 }}>
              See what {STATS.total}+ members actually achieved with <span style={{ color: "var(--accent-bright)" }}>AI-Advertiser</span>.
            </h1>
            <p className="lead" style={{ maxWidth: 660, marginBottom: 32 }}>
              Real wins from real members of the AI-Advertiser program — pulled directly from our internal portal.
              Names, screenshots, and stories you can verify. Average rating <strong style={{ color: "var(--gold)" }}>★ {STATS.avg}/5</strong>.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/reviews" className="btn btn-primary">
                Read all {STATS.total} wins →
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

      {/* STAT STRIP */}
      <section
        className="section-tight"
        style={{
          borderTop: "1px solid var(--border-soft)",
          borderBottom: "1px solid var(--border-soft)",
          background: "var(--bg-elev-1)",
        }}
      >
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, textAlign: "center" }}>
          <StatBlock value={`★ ${STATS.avg}`} label="Average rating" tone="gold" />
          <StatBlock value={STATS.total + "+"} label="Verified wins" />
          <StatBlock value="100%" label="5-star wins" tone="green" />
          <StatBlock value="Brez" label="Marketing LLC" />
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
            <Link href="/reviews" className="btn btn-ghost">View all {STATS.total} wins</Link>
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
          <div className="eyebrow" style={{ marginBottom: 14 }}>Verified by Trustpilot</div>
          <h2 className="h2" style={{ marginBottom: 14 }}>Independently rated by third parties.</h2>
          <p className="lead" style={{ marginBottom: 28 }}>
            We don&apos;t pick the reviews. Trustpilot collects them directly from members — what they say is what gets shown.
          </p>
          <a
            href="https://www.trustpilot.com/review/ai-advertiser.com"
            target="_blank"
            rel="noopener noreferrer"
            className="trustpilot-link"
          >
            <span style={{ fontSize: 18 }}>★</span> See AI-Advertiser on Trustpilot
          </a>
        </div>
      </section>

      {/* PROGRAM SUMMARY */}
      <section className="section">
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 14 }}>What our members joined</div>
            <h2 className="h2" style={{ marginBottom: 18 }}>
              {BUSINESS.dba} teaches you how to run ads for brands and stack monthly retainers.
            </h2>
            <p className="lead" style={{ marginBottom: 24 }}>
              Members learn how to land paying clients, run Meta &amp; TikTok ads that perform, and build agency revenue —
              taught by operators currently running 7-figure ad accounts.
            </p>
            <Link href="/services" className="btn btn-primary">See what&apos;s included →</Link>
          </div>

          <div style={{ display: "grid", gap: 12 }}>
            <BulletCard
              title="Live coaching"
              body="Coaching calls with active operators. No pre-recorded fluff."
            />
            <BulletCard
              title="Real systems"
              body="Mission Control, Athena outreach, and the Brez pitch framework — the same tools we use ourselves."
            />
            <BulletCard
              title="Member community"
              body="Hundreds of active members sharing wins, losses, and playbooks daily."
            />
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="section" style={{ textAlign: "center" }}>
        <div className="wrap-narrow">
          <h2 className="h2" style={{ marginBottom: 16 }}>Curious whether this is for you?</h2>
          <p className="lead" style={{ marginBottom: 28 }}>
            Most members were in your shoes a few months ago — no agency clients, no ad experience. Read the wins, then
            book a call to talk through whether the program fits.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/reviews" className="btn btn-primary">Read every win →</Link>
            <Link href="/contact" className="btn btn-ghost">Contact us</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function StatBlock({ value, label, tone }) {
  const colorMap = { gold: "var(--gold)", green: "var(--green)" };
  return (
    <div>
      <div style={{ fontSize: 36, fontWeight: 800, letterSpacing: "-0.02em", color: colorMap[tone] || "var(--text)" }}>{value}</div>
      <div style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-quaternary)", marginTop: 6, fontWeight: 700 }}>{label}</div>
    </div>
  );
}

function BulletCard({ title, body }) {
  return (
    <div className="card" style={{ padding: 20 }}>
      <h3 className="h3" style={{ marginBottom: 8 }}>{title}</h3>
      <p className="muted" style={{ fontSize: 14, lineHeight: 1.55 }}>{body}</p>
    </div>
  );
}
