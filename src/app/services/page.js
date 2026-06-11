import Link from "next/link";
import { BUSINESS } from "@/lib/business";

export const metadata = { title: "The program" };

// Minimal services page kept around for two reasons:
//   1. A2P review requires "Clear description of products or services" +
//      "Pricing information or transparent pricing structure" + "Defined
//      value proposition" on the business website. This page satisfies all three.
//   2. Adds a single-purpose CTA link from the homepage + footer.

export default function ServicesPage() {
  return (
    <>
      <section className="hero-bg">
        <div className="wrap" style={{ padding: "80px 24px 60px" }}>
          <div style={{ maxWidth: 760 }}>
            <div className="eyebrow" style={{ marginBottom: 14 }}>The program</div>
            <h1 className="h1" style={{ marginBottom: 18 }}>
              The {BUSINESS.dba} program.
            </h1>
            <p className="lead">
              The full-stack training program that pairs with our software (Adlevel.ai) so members can run profitable ad
              agencies for local businesses — even with zero prior experience.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap-narrow">
          <h2 className="h2" style={{ marginBottom: 18 }}>What members get</h2>
          <p className="lead" style={{ marginBottom: 20 }}>
            Curriculum, live coaching, member community, and access to the same AI tools and ad systems we use ourselves.
            The program covers landing clients, running paid ads that perform, and stacking monthly retainers.
          </p>
          <p className="lead">
            Most members close their first paying client between week three and week eight.
          </p>

          <h2 className="h2" style={{ marginBottom: 18, marginTop: 56 }}>Pricing</h2>
          <p className="lead">
            Enrollment starts at <strong style={{ color: "var(--text)" }}>$4,800 paid in full</strong> or three monthly
            installments. Pricing for partner enrollments and team licenses is set on a case-by-case basis — get in touch.
          </p>

          <div style={{ marginTop: 48, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-primary">Contact us →</Link>
            <Link href="/reviews" className="btn btn-ghost">Read member wins</Link>
          </div>
        </div>
      </section>
    </>
  );
}
