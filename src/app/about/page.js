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

          <h2 className="h2" style={{ marginBottom: 18, marginTop: 48 }}>Why this site exists</h2>
          <p className="lead">
            Most program wins live scattered across Discord screenshots, Instagram comments, and DMs. We built this site so
            prospects can read the unfiltered version in one place — names, screenshots, and stories — before they ever
            talk to us. The wins shown here are pulled directly from our internal member portal where members submit them.
          </p>

          <div style={{ marginTop: 48 }}>
            <Link href="/contact" className="btn btn-primary">Get in touch →</Link>
          </div>
        </div>
      </section>
    </>
  );
}

