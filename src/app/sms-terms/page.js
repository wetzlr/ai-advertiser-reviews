import Link from "next/link";
import { BUSINESS } from "@/lib/business";

export const metadata = { title: "SMS Terms" };

export default function SmsTermsPage() {
  return (
    <article className="wrap-narrow" style={{ padding: "60px 24px 80px" }}>
      <div className="eyebrow" style={{ marginBottom: 14 }}>Legal</div>
      <h1 className="h1" style={{ marginBottom: 8 }}>SMS Messaging Terms</h1>
      <p className="tiny" style={{ marginBottom: 36 }}>Last updated: January 6, 2026</p>

      <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--text-muted)", marginBottom: 32 }}>
        These terms govern any SMS communications from <strong>{BUSINESS.legalName} DBA {BUSINESS.dba}</strong>.
        They are designed to comply with U.S. carrier regulations (CTIA guidelines) and TCPA requirements.
      </p>

      <Section title="Two separate consent options">
        <p>When you fill out the contact form on our website, you&apos;ll see two clearly-labeled, optional consent checkboxes:</p>
        <ol>
          <li>
            <strong>Transactional consent</strong> — for messages related to your account, orders, or services you have
            requested. Examples: appointment reminders, order confirmations, account notifications.
          </li>
          <li>
            <strong>Marketing consent</strong> — for messages about special offers, discounts, and new program updates.
          </li>
        </ol>
        <p>
          Both checkboxes are optional and unchecked by default. You may submit the contact form without checking
          either box. We will only send you the type of messages you specifically opt in to.
        </p>
      </Section>

      <Section title="Message frequency">
        <p>
          Users who opt in will receive <strong>{BUSINESS.msgFrequency}</strong>. Message frequency may vary based on
          program activity.
        </p>
      </Section>

      <Section title="Carrier fees">
        <p>
          Message and data rates may apply. Standard carrier rates for SMS and MMS apply based on your wireless plan.
          We do not charge a separate fee for the messages you receive from us. Contact your wireless provider for plan
          details.
        </p>
      </Section>

      <Section title="Opt out — reply STOP">
        <p>
          You can opt out at any time by replying <strong>STOP</strong> to any message you receive from us. You will
          receive one confirmation message acknowledging the opt-out, and no further messages will be sent.
        </p>
        <p>
          To opt back in later, simply check the consent boxes again on our contact form. STOP applies separately to
          each consent type — if you opted in to both transactional and marketing and reply STOP to one campaign, we
          will stop both unless you re-opt-in.
        </p>
      </Section>

      <Section title="Help — reply HELP">
        <p>
          Reply <strong>HELP</strong> to any message for support. You can also contact us directly at{" "}
          <a href={`mailto:${BUSINESS.supportEmail}`}>{BUSINESS.supportEmail}</a> or by phone at{" "}
          <strong>{BUSINESS.phoneDisplay}</strong>.
        </p>
      </Section>

      <Section title="Carrier limitations">
        <p>Carriers are not liable for delayed or undelivered messages. Delivery is subject to:</p>
        <ul>
          <li>Network availability in your area</li>
          <li>Your device&apos;s ability to receive SMS messages</li>
          <li>Carrier filtering and routing</li>
        </ul>
      </Section>

      <Section title="Data handling">
        <p>
          We comply with the carrier-mandated non-sharing requirement: no mobile information will be shared with third
          parties or affiliates for marketing or promotional purposes. See our{" "}
          <Link href="/privacy" style={{ color: "var(--accent)" }}>Privacy Policy</Link> for full details on how your
          data is handled.
        </p>
      </Section>

      <Section title="Questions">
        <p>
          For any questions about our SMS program, contact us at{" "}
          <a href={`mailto:${BUSINESS.supportEmail}`}>{BUSINESS.supportEmail}</a> or by phone at{" "}
          <strong>{BUSINESS.phoneDisplay}</strong>.
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
          ul, ol { margin: 12px 0 12px 24px; padding: 0; }
          li { padding: 4px 0; }
          p { margin: 12px 0; }
        `}</style>
      </div>
    </section>
  );
}
