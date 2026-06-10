import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { BUSINESS, ADDRESS_ONE_LINE } from "@/lib/business";

export const metadata = {
  title: "Contact",
  description: `Get in touch with ${BUSINESS.dba}. Email ${BUSINESS.contactEmail} or use the contact form. SMS opt-in is optional.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="hero-bg">
        <div className="wrap" style={{ padding: "80px 24px 40px" }}>
          <div style={{ maxWidth: 760 }}>
            <div className="eyebrow" style={{ marginBottom: 14 }}>Contact</div>
            <h1 className="h1" style={{ marginBottom: 18 }}>Get in touch.</h1>
            <p className="lead">
              Questions about the program, the curriculum, or pricing? Drop us a line below. We respond within one business day.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 32 }}>
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 48, alignItems: "start" }}>
          <ContactForm />

          <aside style={{ display: "grid", gap: 18 }}>
            <InfoCard label="Email" value={BUSINESS.contactEmail} href={`mailto:${BUSINESS.contactEmail}`} />
            <InfoCard label="Support" value={BUSINESS.supportEmail} href={`mailto:${BUSINESS.supportEmail}`} />
            <InfoCard label="Phone" value={BUSINESS.phoneDisplay} href={`tel:${BUSINESS.phone}`} />
            <InfoCard label="Address" value={ADDRESS_ONE_LINE} sub="By appointment only" />
            <InfoCard label="Hours" value="Mon–Fri, 9am–6pm ET" sub="We reply within one business day" />

            <div className="card" style={{ padding: 18 }}>
              <h3 style={{ fontSize: 13, fontWeight: 700, marginBottom: 8 }}>About this form</h3>
              <p style={{ fontSize: 12, lineHeight: 1.55, color: "var(--text-muted)" }}>
                The opt-in checkboxes below are entirely optional. You can submit the form without checking either. Your information
                is never shared with third parties. See our <Link href="/privacy" style={{ color: "var(--accent)" }}>Privacy Policy</Link> for details.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function InfoCard({ label, value, sub, href }) {
  const Inner = (
    <>
      <div style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 800, color: "var(--text-quaternary)", marginBottom: 6 }}>{label}</div>
      <div style={{ fontSize: 15, fontWeight: 600 }}>{value}</div>
      {sub && <div style={{ fontSize: 12, color: "var(--text-quaternary)", marginTop: 4 }}>{sub}</div>}
    </>
  );
  return (
    <div className="card" style={{ padding: 18 }}>
      {href ? <a href={href} style={{ textDecoration: "none", color: "inherit", display: "block" }}>{Inner}</a> : Inner}
    </div>
  );
}
