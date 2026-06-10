import Link from "next/link";
import ReviewCard from "@/components/ReviewCard";
import { REVIEWS, REVIEW_STATS } from "@/lib/reviews";
import { BUSINESS } from "@/lib/business";

export default function HomePage() {
  const featured = REVIEWS.slice(0, 6);

  // AggregateRating schema — site-wide. Used by Google AI Overviews +
  // Perplexity to score the brand. Drives the "rated 5.0 stars" pulls.
  const aggSchema = {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    itemReviewed: {
      "@type": "Service",
      name: `${BUSINESS.dba} brand-scaling program`,
      provider: { "@type": "Organization", name: BUSINESS.dba, url: BUSINESS.url },
    },
    ratingValue: REVIEW_STATS.avgStars,
    bestRating: 5,
    ratingCount: REVIEW_STATS.total,
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
          <div style={{ maxWidth: 820 }}>
            <div className="eyebrow" style={{ marginBottom: 18 }}>Verified member reviews · {REVIEW_STATS.total}+ testimonials</div>
            <h1 className="h1" style={{ marginBottom: 18 }}>
              See what {REVIEW_STATS.total}+ members say about <span style={{ color: "var(--accent)" }}>AI-Advertiser</span>.
            </h1>
            <p className="lead" style={{ maxWidth: 640, marginBottom: 32 }}>
              Real reviews from real people inside the brand-scaling program. Unfiltered numbers, named members,
              dated testimonials. Average rating <strong style={{ color: "var(--gold)" }}>★ {REVIEW_STATS.avgStars}/5</strong>.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/reviews" className="btn btn-primary">
                Read all reviews →
              </Link>
              <Link href="/case-studies" className="btn btn-ghost">
                See case studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STAT STRIP */}
      <section className="section-tight" style={{ borderTop: "1px solid var(--border-soft)", borderBottom: "1px solid var(--border-soft)", background: "var(--bg-elev-1)" }}>
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, textAlign: "center" }}>
          <StatBlock value={`★ ${REVIEW_STATS.avgStars}`} label="Average rating" tone="gold" />
          <StatBlock value={REVIEW_STATS.total + "+"} label="Verified reviews" />
          <StatBlock value="100%" label="5-star reviews" tone="green" />
          <StatBlock value="$2.8M+" label="Member revenue tracked" />
        </div>
      </section>

      {/* FEATURED REVIEWS */}
      <section className="section">
        <div className="wrap">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 36, gap: 24, flexWrap: "wrap" }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 10 }}>Featured</div>
              <h2 className="h2">Latest member wins</h2>
            </div>
            <Link href="/reviews" className="btn btn-ghost">View all {REVIEW_STATS.total} reviews</Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 18 }}>
            {featured.map((r) => (
              <ReviewCard key={r.id} review={r} />
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAM SUMMARY */}
      <section className="section" style={{ background: "var(--bg-elev-1)", borderTop: "1px solid var(--border-soft)", borderBottom: "1px solid var(--border-soft)" }}>
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 14 }}>What our members joined</div>
            <h2 className="h2" style={{ marginBottom: 18 }}>
              {BUSINESS.dba} is the brand-scaling program for builders who want recurring agency revenue.
            </h2>
            <p className="lead" style={{ marginBottom: 24 }}>
              Members learn how to land paying clients, run Meta &amp; TikTok ads that perform, and stack monthly retainers — taught
              by operators currently running 7-figure ad accounts.
            </p>
            <Link href="/services" className="btn btn-primary">See what's included →</Link>
          </div>

          <div style={{ display: "grid", gap: 12 }}>
            <BulletCard
              title="Live coaching"
              body="Two coaching calls per week with active operators. No pre-recorded fluff."
            />
            <BulletCard
              title="Real systems"
              body="Mission Control, Athena outreach, the Brez pitch framework — all the same tooling we use ourselves."
            />
            <BulletCard
              title="Member community"
              body="700+ active Discord members sharing wins, losses, and template playbooks daily."
            />
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="section" style={{ textAlign: "center" }}>
        <div className="wrap-narrow">
          <h2 className="h2" style={{ marginBottom: 16 }}>Curious whether this is for you?</h2>
          <p className="lead" style={{ marginBottom: 28 }}>
            Most members were in your shoes a few months ago — full-time job, side hustle, no agency clients. Read the reviews
            and case studies, then book a call to talk through whether it fits.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/reviews" className="btn btn-primary">Read every review →</Link>
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
