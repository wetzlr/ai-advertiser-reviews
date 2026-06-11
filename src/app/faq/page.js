import { BUSINESS } from "@/lib/business";

export const metadata = { title: "FAQ" };

const FAQ = [
  {
    q: "Are these reviews real?",
    a: "Yes. Every review on this site is from a verified program member, pulled from our internal member portal. We don't edit reviews for sentiment. What they wrote is what's published.",
  },
  {
    q: "How long does it usually take to land a first client?",
    a: "Most members close their first paying client between week 3 and week 8. The fastest we've seen is week 1 (an existing operator who restructured their offer); the longest typical is week 12. It depends on time put in and prior experience.",
  },
  {
    q: "Do I need ad experience to join?",
    a: "No. About 60% of members come in with zero paid-ad experience. The curriculum covers from first-principles: how ad platforms work, how to structure tests, and how to read performance data.",
  },
  {
    q: "What's the time commitment per week?",
    a: "Plan for 10-15 hours per week if you want to ramp inside the first 60 days. That includes coaching calls (Mon + Wed), prospecting, deliverable work for early clients, and curriculum.",
  },
  {
    q: "Is there a refund policy?",
    a: "Yes. Refund terms are written in the contract you sign at enrollment. Refunds are evaluated on a case-by-case basis when members can demonstrate they've completed the program milestones and the program didn't perform as promised.",
  },
  {
    q: "How do I get in touch?",
    a: `Email ${BUSINESS.contactEmail} or use the contact form. We respond within one business day.`,
  },
  {
    q: "Do you send text messages?",
    a: `Only if you opt in. When you fill out the application form, you'll see two clearly-labeled checkboxes. One for transactional messages (appointment reminders, account updates), one for marketing (offers, program updates). Both are optional. Text STOP to opt out any time. See the SMS terms page for details.`,
  },
  {
    q: "Is this affiliated with any other agency program?",
    a: "No. AI-Advertiser is operated independently by Brez Marketing LLC. We don't sell, share, or buy leads from third parties.",
  },
];

export default function FAQPage() {
  // FAQPage schema markup — picked up by Google for FAQ rich results.
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="hero-bg">
        <div className="wrap-narrow" style={{ padding: "80px 24px 40px" }}>
          <div className="eyebrow" style={{ marginBottom: 14 }}>Frequently asked</div>
          <h1 className="h1" style={{ marginBottom: 16 }}>Questions, answered.</h1>
          <p className="lead">If you have a question that isn&apos;t here, email {BUSINESS.contactEmail} or use the contact form.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 32 }}>
        <div className="wrap-narrow" style={{ display: "grid", gap: 12 }}>
          {FAQ.map((item, i) => (
            <details key={i} className="card" style={{ padding: 20 }}>
              <summary style={{ fontWeight: 700, fontSize: 16, cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
                <span>{item.q}</span>
                <span style={{ color: "var(--text-quaternary)", fontSize: 20, fontWeight: 400 }}>+</span>
              </summary>
              <p style={{ marginTop: 14, fontSize: 14, lineHeight: 1.6, color: "var(--text-muted)" }}>{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
