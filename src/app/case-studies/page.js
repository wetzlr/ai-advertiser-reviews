import Link from "next/link";

export const metadata = { title: "Case studies" };

const CASES = [
  {
    name: "Aiden Delfino",
    role: "First-time agency owner",
    location: "Phoenix, AZ",
    before: "$0 in agency revenue, working a service job",
    after: "$11k cash collected in month 2 · two retainers signed",
    timeframe: "8 weeks",
    quote: "The systems are what separated this from every other course. Mission Control and the outreach playbook are what got me my first deposit before week 4.",
    color: "#FF6B35",
  },
  {
    name: "Raj Tiwana",
    role: "Existing agency operator (stuck at $4-6k MRR)",
    location: "Birmingham, UK",
    before: "$4-6k MRR with 1 client, growth stalled for 6 months",
    after: "$18k cash collected last month · 3 retainers, 1 PIF",
    timeframe: "12 weeks",
    quote: "Pierre rebuilt my offer in two coaching calls. The version I came in with would never have sold at the new price. The new version sold three deals in two weeks.",
    color: "#3A86FF",
  },
  {
    name: "Jared Lund",
    role: "Career-switcher from SaaS",
    location: "Toronto, ON",
    before: "Setter role at SaaS company, $7k/mo W-2 + bonuses",
    after: "$9.4k/mo from agency retainers, quit W-2 month 4",
    timeframe: "16 weeks",
    quote: "Speed-to-lead was the unlock. Once I had that under two minutes, show rate jumped from 50% to 78%. That alone paid back the program inside a month.",
    color: "#06A77D",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="hero-bg">
        <div className="wrap" style={{ padding: "80px 24px 60px" }}>
          <div style={{ maxWidth: 760 }}>
            <div className="eyebrow" style={{ marginBottom: 14 }}>Case studies</div>
            <h1 className="h1" style={{ marginBottom: 18 }}>
              Member transformations, in their own numbers.
            </h1>
            <p className="lead">
              These are deep-dive case studies on members who moved from where you might be now to repeatable agency revenue.
              Real names, real timeframes, real cash collected.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap" style={{ display: "grid", gap: 22, maxWidth: 920 }}>
          {CASES.map((c) => (
            <article key={c.name} className="card" style={{ padding: 32 }}>
              <header style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: c.color, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 18, flexShrink: 0 }}>
                  {c.name.split(" ").map((w) => w[0]).join("")}
                </div>
                <div>
                  <h2 style={{ fontWeight: 800, fontSize: 22, letterSpacing: "-0.02em", marginBottom: 2 }}>{c.name}</h2>
                  <div style={{ fontSize: 13, color: "var(--text-quaternary)" }}>{c.role} · {c.location}</div>
                </div>
                <div style={{ marginLeft: "auto", textAlign: "right" }}>
                  <div style={{ fontSize: 11, color: "var(--text-quaternary)", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 700 }}>Timeline</div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: "var(--accent)" }}>{c.timeframe}</div>
                </div>
              </header>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 22 }}>
                <BeforeAfter label="Before" body={c.before} tone="muted" />
                <BeforeAfter label="After" body={c.after} tone="accent" />
              </div>

              <blockquote style={{ fontSize: 16, lineHeight: 1.55, color: "var(--text)", fontStyle: "italic", borderLeft: "3px solid var(--accent)", paddingLeft: 18, margin: 0 }}>
                &ldquo;{c.quote}&rdquo;
              </blockquote>
            </article>
          ))}
        </div>
      </section>

      <section className="section" style={{ textAlign: "center" }}>
        <div className="wrap-narrow">
          <h2 className="h2" style={{ marginBottom: 16 }}>Want to be the next case study?</h2>
          <p className="lead" style={{ marginBottom: 28 }}>
            Book a call and tell us where you&apos;re at. We&apos;ll tell you honestly whether the program is the right fit.
          </p>
          <Link href="/contact" className="btn btn-primary">Book a call →</Link>
        </div>
      </section>
    </>
  );
}

function BeforeAfter({ label, body, tone }) {
  const isAccent = tone === "accent";
  return (
    <div style={{ padding: "14px 16px", borderRadius: 10, background: isAccent ? "var(--accent-soft)" : "var(--bg-elev-2)", border: "1px solid " + (isAccent ? "var(--accent-soft)" : "var(--border-soft)") }}>
      <div style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 800, color: isAccent ? "var(--accent)" : "var(--text-quaternary)", marginBottom: 6 }}>{label}</div>
      <div style={{ fontSize: 14, color: "var(--text)", lineHeight: 1.5 }}>{body}</div>
    </div>
  );
}
