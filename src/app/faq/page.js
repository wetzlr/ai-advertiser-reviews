import { BUSINESS } from "@/lib/business";

export const metadata = { title: "FAQ" };

const FAQ = [
  {
    q: "Are these reviews real?",
    a: "Yes. Every review on this site is from a verified program member, pulled directly from our internal member portal. We don't edit reviews for sentiment. What they wrote is what's published.",
  },
  {
    q: "How long does it take to land a first client?",
    a: "It depends entirely on how much work you put in. Some members land their first client in the first week. For others it takes longer. Your timeline is a function of your effort, prior experience, and the niche you target. We help you get there. We can't promise a specific timeline.",
  },
  {
    q: "Do I need ad experience to join?",
    a: "No. The curriculum is designed for people with no prior paid-ad experience. We cover the platforms, the strategy, and the tooling from first principles.",
  },
  {
    q: "What's the time commitment?",
    a: "That's up to you. The program is self-paced for the curriculum, with live coaching at fixed times. Members who put in more focused time tend to see faster progress, but there's no minimum hours requirement.",
  },
  {
    q: "How do I get in touch?",
    a: `Email ${BUSINESS.contactEmail} or use the application form on the homepage. We respond within one business day.`,
  },
  {
    q: "Do you send text messages?",
    a: `Only if you opt in. When you fill out the application form, you'll see two clearly-labeled checkboxes. One for transactional messages (appointment reminders, account updates), one for marketing (offers, program updates). Both are optional. Text STOP to opt out any time. See the SMS terms page for details.`,
  },
  {
    q: "Is this affiliated with any other agency program?",
    a: "No. AI-Advertiser is operated independently by Brez Marketing LLC. We don't sell, share, or buy leads from third parties. For an independently-verified read on the program, check our Trustpilot profile.",
  },
];

export default function FAQPage() {
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
          <p className="lead">If you have a question that isn&apos;t here, email {BUSINESS.contactEmail} or use the application form on the homepage.</p>
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
