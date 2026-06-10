import Link from "next/link";
import { BUSINESS } from "@/lib/business";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <section className="hero-bg">
        <div className="wrap" style={{ padding: "80px 24px 60px" }}>
          <div style={{ maxWidth: 760 }}>
            <div className="eyebrow" style={{ marginBottom: 14 }}>About</div>
            <h1 className="h1" style={{ marginBottom: 18 }}>
              Built by operators currently running ad accounts.
            </h1>
            <p className="lead">
              {BUSINESS.dba} is the brand-scaling program from {BUSINESS.legalName}. We&apos;ve helped {"700+"} members
              land their first paying client, replace their day-job income, and stack monthly retainers.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap-narrow">
          <h2 className="h2" style={{ marginBottom: 18 }}>What we do</h2>
          <p className="lead" style={{ marginBottom: 24 }}>
            We teach people how to run ads for brands and stack recurring monthly revenue. The curriculum covers
            offer creation, lead generation, sales calls, ad strategy, and operations. The coaching covers your
            specific deals, week by week, until you close.
          </p>

          <h2 className="h2" style={{ marginBottom: 18, marginTop: 48 }}>Who we are</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 24 }}>
            <Bio
              name="Pierre Khoury"
              role="CEO & Co-Founder"
              body="Pierre runs the operations and strategy side of the program. Previously scaled multiple 7-figure agency accounts."
              color="#FF6B35"
            />
            <Bio
              name="Noah Wetzelaer"
              role="Head of Operations"
              body="Noah leads the systems and tooling stack — Mission Control, Athena, and the daily operations that members rely on."
              color="#3A86FF"
            />
          </div>

          <h2 className="h2" style={{ marginBottom: 18, marginTop: 48 }}>Why this site exists</h2>
          <p className="lead">
            Most program reviews live scattered across Discord screenshots, Instagram comments, and DMs. We built this site so
            prospects can read the unfiltered version in one place — names, dates, real numbers — before they ever talk to us.
          </p>

          <div style={{ marginTop: 48 }}>
            <Link href="/contact" className="btn btn-primary">Get in touch →</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Bio({ name, role, body, color }) {
  return (
    <div className="card">
      <div style={{ width: 48, height: 48, borderRadius: "50%", background: color, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, marginBottom: 14 }}>
        {name.split(" ").map((w) => w[0]).join("")}
      </div>
      <div style={{ fontWeight: 700, fontSize: 16 }}>{name}</div>
      <div style={{ fontSize: 12, color: "var(--text-quaternary)", letterSpacing: "0.05em", textTransform: "uppercase", fontWeight: 700, marginBottom: 10 }}>{role}</div>
      <p style={{ fontSize: 14, lineHeight: 1.55, color: "var(--text-muted)" }}>{body}</p>
    </div>
  );
}
