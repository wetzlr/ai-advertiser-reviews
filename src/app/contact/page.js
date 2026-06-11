import Link from "next/link";
import { BUSINESS, ADDRESS_ONE_LINE } from "@/lib/business";

export const metadata = {
  title: "Contact",
  description: `Get in touch with ${BUSINESS.dba}. Email ${BUSINESS.contactEmail}.`,
};

// Minimal Contact page. The application form lives on the homepage now.
// A2P review (Twilio/carrier) requires the website to publish:
//   1. A physical address  2. A phone number  3. A business email.
// All three live here. The displayed phone is the campaign HELP number.

export default function ContactPage() {
  return (
    <>
      <section className="hero-bg">
        <div className="wrap" style={{ padding: "80px 24px 40px" }}>
          <div style={{ maxWidth: 760 }}>
            <div className="eyebrow" style={{ marginBottom: 14 }}>Contact</div>
            <h1 className="h1" style={{ marginBottom: 18 }}>Reach us.</h1>
            <p className="lead">
              Looking to apply or ask a question?{" "}
              <Link href="/#apply" style={{ color: "var(--accent-bright)" }}>Use the form on the homepage</Link>.
              Or get in touch directly using the details below.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="wrap-narrow" style={{ display: "grid", gap: 14 }}>
          <InfoCard label="Email" value={BUSINESS.contactEmail} href={`mailto:${BUSINESS.contactEmail}`} />
          <InfoCard label="Phone" value={BUSINESS.phoneDisplay} href={`tel:${BUSINESS.phone}`} />
          <InfoCard label="Mailing address" value={ADDRESS_ONE_LINE} />
        </div>
      </section>
    </>
  );
}

function InfoCard({ label, value, href }) {
  const Inner = (
    <>
      <div style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 800, color: "var(--text-quaternary)", marginBottom: 6 }}>{label}</div>
      <div style={{ fontSize: 15, fontWeight: 600 }}>{value}</div>
    </>
  );
  return (
    <div className="card" style={{ padding: 18 }}>
      {href ? <a href={href} style={{ textDecoration: "none", color: "inherit", display: "block" }}>{Inner}</a> : Inner}
    </div>
  );
}
