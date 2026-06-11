import { BUSINESS, ADDRESS_ONE_LINE } from "@/lib/business";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <article className="wrap-narrow" style={{ padding: "60px 24px 80px" }}>
      <div className="eyebrow" style={{ marginBottom: 14 }}>Legal</div>
      <h1 className="h1" style={{ marginBottom: 8 }}>Privacy Policy</h1>
      <p className="tiny" style={{ marginBottom: 36 }}>Last updated: January 6, 2026</p>

      <Section title={`About this policy`}>
        <p>
          This Privacy Policy describes how <strong>{BUSINESS.legalName} DBA {BUSINESS.dba}</strong> (&ldquo;we,&rdquo; &ldquo;us,&rdquo;
          or &ldquo;our&rdquo;) collects, uses, and protects information you provide when visiting{" "}
          <strong>{BUSINESS.domain}</strong> or interacting with our services.
        </p>
      </Section>

      <Section title="Information we collect">
        <p>We collect information you voluntarily provide when you contact us, including:</p>
        <ul>
          <li>Name and email address</li>
          <li>Phone number (optional)</li>
          <li>Any message or details you share via our contact form</li>
          <li>SMS opt-in preferences (transactional and/or marketing)</li>
        </ul>
        <p>
          We also collect basic technical information automatically when you visit our website, including IP address,
          browser type, and pages visited. This is used for security and analytics only.
        </p>
      </Section>

      <Section title="How we use your information">
        <p>We use your information to:</p>
        <ul>
          <li>Respond to your inquiries and provide information you request</li>
          <li>Send transactional messages related to your account or services, if you opt in</li>
          <li>Send marketing communications about offers, discounts, and program updates, only if you opt in separately</li>
          <li>Improve our website and services</li>
          <li>Comply with legal obligations</li>
        </ul>
      </Section>

      {/* ─── EXACT NON-SHARING CLAUSE required by Twilio A2P doc ─── */}
      <Section title="SMS / mobile information sharing">
        <p style={{ fontWeight: 600, color: "var(--text)" }}>
          No mobile information will be shared with third parties/affiliates for marketing/promotional purposes.
          Information sharing to subcontractors in support services, such as customer service, is permitted. All other
          use case categories exclude text messaging originator opt-in data and consent; this information will not be
          shared with any third parties.
        </p>
      </Section>

      <Section title="SMS consent and opt-out">
        <p>
          When you check a consent box on our contact form, you authorize us to send you SMS messages of the type
          described in that specific consent box. Both consent boxes are optional. You can submit the form without
          opting in to either.
        </p>
        <p>
          You can opt out of any SMS messages at any time by replying <strong>STOP</strong> to any message you receive.
          Reply <strong>HELP</strong> to receive support information. Message and data rates may apply. Message
          frequency will be {BUSINESS.msgFrequency} for users who opt in.
        </p>
      </Section>

      <Section title="Third parties">
        <p>
          We use service providers (payment processors, hosting providers, email and SMS delivery services) that may
          process your data on our behalf. These providers are contractually bound to use your information only for the
          specific purpose of supporting our services.
        </p>
        <p>
          We do not sell your personal information. We do not buy, share, or trade leads with affiliate networks. Your
          information is not used for any purpose other than the ones described in this policy.
        </p>
      </Section>

      <Section title="Data retention">
        <p>
          We retain your information for as long as needed to provide our services or as required by law. You can
          request deletion of your data at any time by emailing <strong>{BUSINESS.supportEmail}</strong>.
        </p>
      </Section>

      <Section title="Your rights">
        <p>You have the right to:</p>
        <ul>
          <li>Access the personal information we hold about you</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your information</li>
          <li>Opt out of marketing communications at any time</li>
          <li>Withdraw SMS consent at any time by replying STOP</li>
        </ul>
      </Section>

      <Section title="Security">
        <p>
          We use industry-standard security measures including HTTPS encryption, access controls, and secure data
          storage. No system is 100% secure, but we take reasonable steps to protect your information.
        </p>
      </Section>

      <Section title="Children">
        <p>
          Our services are not directed to children under 18. We do not knowingly collect information from anyone
          under 18.
        </p>
      </Section>

      <Section title="Changes to this policy">
        <p>
          We may update this policy from time to time. We will post the updated policy on this page with a new
          &ldquo;Last updated&rdquo; date. Significant changes will be communicated via email or a prominent notice on
          our website.
        </p>
      </Section>

      <Section title="Contact us">
        <p>
          Questions about this Privacy Policy? Contact us at:
        </p>
        <p style={{ marginTop: 12 }}>
          <strong>{BUSINESS.legalName} DBA {BUSINESS.dba}</strong><br />
          {ADDRESS_ONE_LINE}<br />
          Email: <a href={`mailto:${BUSINESS.supportEmail}`}>{BUSINESS.supportEmail}</a><br />
          Phone: {BUSINESS.phoneDisplay}
        </p>
      </Section>
    </article>
  );
}

function Section({ title, children }) {
  return (
    <section style={{ marginBottom: 32 }}>
      <h2 className="h3" style={{ marginBottom: 12 }}>{title}</h2>
      <div style={{ fontSize: 15, lineHeight: 1.65, color: "var(--text-muted)" }}>
        {children}
        <style>{`
          ul { margin: 12px 0 12px 24px; padding: 0; }
          li { padding: 4px 0; }
          p { margin: 12px 0; }
        `}</style>
      </div>
    </section>
  );
}
