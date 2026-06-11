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
              An AI-powered advertising platform and education company.
            </h1>
            <p className="lead">
              Founded by Brez Scales. We build the software, we run the program, and we train the next generation of operators.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap-narrow">
          <h2 className="h2" style={{ marginBottom: 18 }}>What we do</h2>
          <p className="lead" style={{ marginBottom: 20 }}>
            We build tools that automate ad creation, audience research, and campaign optimization for digital advertisers,
            and teach people how to use them to run profitable ad agencies for local businesses.
          </p>
          <p className="lead">
            Our software (<a href="https://adlevel.ai" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-bright)" }}>Adlevel.ai</a>)
            and training program help complete beginners launch, manage, and scale paid ad campaigns using AI agents that do the
            heavy lifting.
          </p>

          <h2 className="h2" style={{ marginBottom: 18, marginTop: 56 }}>Why this site exists</h2>
          <p className="lead">
            Most member wins live scattered across Discord screenshots, Instagram comments, and DMs. We built this site so
            prospects can read the unfiltered version in one place — names, screenshots, stories — before they ever talk to us.
            Every win is pulled directly from our internal member portal where members submit them.
          </p>

          <h2 className="h2" style={{ marginBottom: 18, marginTop: 56 }}>The company</h2>
          <p className="lead">
            AI-Advertiser is operated by <strong>{BUSINESS.legalName}</strong>, doing business as <strong>{BUSINESS.dba}</strong>.
            Headquartered in Miami Beach, Florida.
          </p>

          <div style={{ marginTop: 48 }}>
            <Link href="/contact" className="btn btn-primary">Get in touch →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
