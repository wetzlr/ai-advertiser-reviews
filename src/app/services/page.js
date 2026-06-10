import Link from "next/link";
import { BUSINESS } from "@/lib/business";

export const metadata = { title: "The program" };

const INCLUDED = [
  { title: "Live coaching, 2× weekly",       body: "Mondays + Wednesdays. Active operators on the call answering your specific deal questions." },
  { title: "Mission Control",                body: "Our proprietary ops dashboard — lead tracking, pipeline, commissions, all in one place." },
  { title: "Athena outreach systems",         body: "The same outreach stack we use in-house to land 4-6 new conversations per day." },
  { title: "Brez pitch framework",            body: "The full sales script + objection handling templates. Proven on 1,000+ closed deals." },
  { title: "Ad strategy playbooks",           body: "Templated ad accounts, creative briefs, and the specific testing protocols that scale." },
  { title: "Member community",                body: "700+ active members in Discord. Daily wins, losses, and template swaps." },
  { title: "Done-with-you onboarding",        body: "First 14 days you get 1:1 setup help so the systems are wired before you hunt clients." },
  { title: "Lifetime updates",                body: "When the playbook updates (and it does — every quarter), you get the new version free." },
];

const TIERS = [
  {
    name: "AI-Advertiser Core",
    price: "$4,800 PIF",
    sub: "or $1,800/mo × 3",
    bullets: [
      "Full program access",
      "Live coaching 2× weekly",
      "Mission Control + Athena",
      "700-member Discord",
      "Brez pitch framework",
    ],
  },
  {
    name: "AI-Advertiser + Partner",
    price: "$6,000 PIF",
    sub: "or $2,500/mo × 3",
    bullets: [
      "Everything in Core",
      "Bring a co-founder (2 seats)",
      "Shared partner onboarding",
      "Joint deal coaching",
    ],
    featured: true,
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="hero-bg">
        <div className="wrap" style={{ padding: "80px 24px 60px" }}>
          <div style={{ maxWidth: 760 }}>
            <div className="eyebrow" style={{ marginBottom: 14 }}>The program</div>
            <h1 className="h1" style={{ marginBottom: 18 }}>
              Everything you need to land your first agency client — and stack the next ten.
            </h1>
            <p className="lead">
              {BUSINESS.dba} is a full-stack program: coaching, community, systems, and the exact playbook we run ourselves.
              Members typically close their first client between week 3 and week 8.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="eyebrow" style={{ marginBottom: 14, textAlign: "center" }}>What&apos;s included</div>
          <h2 className="h2" style={{ marginBottom: 36, textAlign: "center" }}>Everything in the program</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 14 }}>
            {INCLUDED.map((b) => (
              <div key={b.title} className="card" style={{ padding: 20 }}>
                <h3 style={{ fontWeight: 700, fontSize: 15, marginBottom: 8 }}>{b.title}</h3>
                <p style={{ fontSize: 13, lineHeight: 1.55, color: "var(--text-muted)" }}>{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-elev-1)", borderTop: "1px solid var(--border-soft)", borderBottom: "1px solid var(--border-soft)" }}>
        <div className="wrap">
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <div className="eyebrow" style={{ marginBottom: 14 }}>Pricing</div>
            <h2 className="h2">Two ways in.</h2>
            <p className="lead" style={{ marginTop: 12 }}>
              All tiers include the full curriculum, coaching, and community. The Partner tier adds a second seat for a co-founder.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, maxWidth: 820, margin: "0 auto" }}>
            {TIERS.map((t) => (
              <div
                key={t.name}
                className="card"
                style={{
                  padding: 28,
                  border: t.featured ? "1px solid var(--accent)" : "1px solid var(--border-soft)",
                  background: t.featured ? "linear-gradient(180deg, rgba(255,107,53,0.06), var(--bg-elev-1))" : "var(--bg-elev-1)",
                  position: "relative",
                }}
              >
                {t.featured && (
                  <div style={{ position: "absolute", top: -12, right: 24, background: "var(--accent)", color: "#fff", fontSize: 10, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", padding: "4px 10px", borderRadius: 999 }}>
                    Most popular
                  </div>
                )}
                <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 6 }}>{t.name}</h3>
                <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-0.02em", color: t.featured ? "var(--accent)" : "var(--text)" }}>{t.price}</div>
                <div style={{ fontSize: 13, color: "var(--text-quaternary)", marginBottom: 18 }}>{t.sub}</div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {t.bullets.map((b) => (
                    <li key={b} style={{ fontSize: 13, color: "var(--text-muted)", padding: "6px 0", display: "flex", gap: 8 }}>
                      <span style={{ color: "var(--green)", flexShrink: 0 }}>✓</span> {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="muted" style={{ fontSize: 13, textAlign: "center", marginTop: 24, maxWidth: 600, marginLeft: "auto", marginRight: "auto" }}>
            Want to talk before joining? Book a call — we&apos;ll walk through whether the program fits your situation
            and answer questions on the framework, expected timeline, and ROI.
          </p>
          <div style={{ textAlign: "center", marginTop: 24 }}>
            <Link href="/contact" className="btn btn-primary">Book a call →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
