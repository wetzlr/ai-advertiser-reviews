import Link from "next/link";
import { BUSINESS, ADDRESS_ONE_LINE } from "@/lib/business";

export const metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <article className="wrap-narrow" style={{ padding: "60px 24px 80px" }}>
      <div className="eyebrow" style={{ marginBottom: 14 }}>Legal</div>
      <h1 className="h1" style={{ marginBottom: 8 }}>Terms of Service</h1>
      <p className="tiny" style={{ marginBottom: 36 }}>Last updated: January 6, 2026</p>

      <Section title="About these terms">
        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) govern your use of <strong>{BUSINESS.domain}</strong>, operated by{" "}
          <strong>{BUSINESS.legalName} DBA {BUSINESS.dba}</strong>. By accessing or using our website or services, you
          agree to be bound by these Terms.
        </p>
      </Section>

      <Section title="Our services">
        <p>
          {BUSINESS.dba} provides a brand-scaling education program including curriculum, live coaching, a member
          community, and supporting software tools. Program enrollment is governed by a separate enrollment agreement
          that you sign at the time of purchase.
        </p>
      </Section>

      <Section title="Reviews and testimonials">
        <p>
          Reviews displayed on this website are from verified program members. We do not edit reviews for sentiment.
          Members may receive a small incentive (e.g., merchandise) for submitting a review, but the content of the
          review is not solicited or modified by us.
        </p>
        <p>
          Individual results vary. Past member outcomes are not a guarantee of future results.
        </p>
      </Section>

      {/* ─────────────── EXACT A2P-required SMS terms ─────────────── */}
      <Section title="SMS messaging program">
        <p style={{ fontWeight: 600, color: "var(--text)" }}>{BUSINESS.legalName} DBA {BUSINESS.dba}</p>

        <ul>
          <li>
            {BUSINESS.dba} sends SMS messages to users who opt in for the purpose of program updates, onboarding
            communications, coaching call reminders, account notifications, and (separately, with separate consent)
            promotional offers, discounts, and program announcements.
          </li>
          <li>
            You can cancel the SMS service at any time. Just text <strong>&ldquo;{BUSINESS.smsKeywordStop}&rdquo;</strong> to{" "}
            <strong>{BUSINESS.phoneDisplay}</strong>. After you send the SMS message &ldquo;{BUSINESS.smsKeywordStop}&rdquo; to us, we will send you an SMS message
            to confirm that you have been unsubscribed. After this, you will no longer receive SMS messages from us. If
            you want to join again, just sign up as you did the first time and we will start sending SMS messages to you
            again.
          </li>
          <li>
            If you are experiencing issues with the messaging program you can reply with the keyword{" "}
            <strong>{BUSINESS.smsKeywordHelp}</strong> for more assistance, or you can get help directly at{" "}
            <strong>{BUSINESS.supportEmail}</strong> or by phone at <strong>{BUSINESS.phoneDisplay}</strong>.
          </li>
          <li>Carriers are not liable for delayed or undelivered messages.</li>
          <li>
            Message and data rates may apply for any messages sent to you from us and to us from you. You will receive{" "}
            <strong>{BUSINESS.msgFrequency}</strong>. If you have any questions about your text plan or data plan, it is
            best to contact your wireless provider.
          </li>
          <li>
            If you have any questions regarding privacy, please read our{" "}
            <Link href="/privacy" style={{ color: "var(--accent)" }}>Privacy Policy</Link>.
          </li>
        </ul>
      </Section>

      <Section title="Acceptable use">
        <p>You agree NOT to:</p>
        <ul>
          <li>Use the site or services for any unlawful purpose</li>
          <li>Attempt to gain unauthorized access to any portion of the site</li>
          <li>Use automated tools (bots, scrapers) to access the site without our written permission</li>
          <li>Interfere with the security or operation of the site</li>
          <li>Resell or redistribute our copyrighted materials</li>
        </ul>
      </Section>

      <Section title="Intellectual property">
        <p>
          All content on this website — including text, graphics, logos, curriculum materials, and software — is owned
          by {BUSINESS.legalName} or our licensors and is protected by copyright and trademark law. You may not copy,
          modify, distribute, or create derivative works without our express written permission.
        </p>
      </Section>

      <Section title="Disclaimers">
        <p>
          The site and services are provided &ldquo;as is&rdquo; without warranty of any kind. We do not guarantee
          specific outcomes from our program — individual results depend on each member&apos;s effort, prior experience,
          and circumstances. Income examples on this site are real but are not a guarantee of similar results.
        </p>
      </Section>

      <Section title="Limitation of liability">
        <p>
          To the maximum extent permitted by law, {BUSINESS.legalName} shall not be liable for any indirect, incidental,
          special, consequential, or punitive damages arising from your use of the site or services.
        </p>
      </Section>

      <Section title="Governing law">
        <p>
          These Terms are governed by the laws of the State of Florida, USA, without regard to its conflict of law
          provisions. Any dispute shall be resolved in the state or federal courts located in Miami-Dade County,
          Florida.
        </p>
      </Section>

      <Section title="Changes to these terms">
        <p>
          We may update these Terms from time to time. Continued use of the site after changes are posted constitutes
          acceptance of the updated Terms.
        </p>
      </Section>

      <Section title="Contact us">
        <p>Questions about these Terms? Contact us at:</p>
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
