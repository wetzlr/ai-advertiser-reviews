"use client";

// Contact form — A2P-compliant opt-in flow.
//
// Per Twilio/carrier requirements:
//   - Both consent checkboxes are OPTIONAL and NOT pre-checked.
//   - Form submission is allowed even if neither checkbox is selected.
//   - We honor the user's selection (only send SMS if they opted in to that type).
//   - The exact disclosure language ([BUSINESS], message types, frequency,
//     STOP/HELP, message/data rates) matches the campaign use case description.
//   - Links to Privacy Policy + Terms are below the checkboxes, NOT inside the
//     checkbox text (the doc is explicit about this).
//
// On submit: POST /api/contact, then redirect to /thank-you. No multi-step
// opt-in pages — the doc says secondary opt-in forms get rejected as
// "misalignment in the message flow."

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";

export default function ContactForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  async function onSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone") || null,
      message: fd.get("message"),
      consent_transactional: fd.get("consent_transactional") === "on",
      consent_marketing: fd.get("consent_marketing") === "on",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Submission failed. Please email us instead.");
      }
      router.push("/thank-you");
    } catch (err) {
      setError(err.message);
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="card" style={{ padding: 28 }}>
      <div style={{ display: "grid", gap: 16 }}>
        <div>
          <label htmlFor="name">Your name *</label>
          <input id="name" name="name" type="text" required autoComplete="name" />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div>
            <label htmlFor="email">Email *</label>
            <input id="email" name="email" type="email" required autoComplete="email" />
          </div>
          <div>
            <label htmlFor="phone">Phone (optional)</label>
            <input id="phone" name="phone" type="tel" autoComplete="tel" />
          </div>
        </div>

        <div>
          <label htmlFor="message">What can we help with? *</label>
          <textarea id="message" name="message" rows={5} required placeholder="Tell us a bit about where you're at and what you're looking for." />
        </div>

        {/* ────────────── A2P-compliant opt-in checkboxes ────────────── */}
        {/* Both optional. Both unchecked by default. Disclosures include
            business name, message types, frequency, rates, HELP/STOP. */}
        <div style={{ display: "grid", gap: 10, marginTop: 8 }}>
          <label className="checkbox-row" htmlFor="consent_transactional">
            <input id="consent_transactional" name="consent_transactional" type="checkbox" />
            <span>
              By checking this box, I consent to receive transactional messages related to my account, orders, or
              services I have requested from <strong>{BUSINESS.legalName} DBA {BUSINESS.dba}</strong>. These messages may include reminders,
              order confirmations, and account notifications among others. Message frequency may vary. Message &amp; Data rates may
              apply. Reply HELP for help or STOP to opt out.
            </span>
          </label>

          <label className="checkbox-row" htmlFor="consent_marketing">
            <input id="consent_marketing" name="consent_marketing" type="checkbox" />
            <span>
              By checking this box, I consent to receive marketing and promotional messages, including special offers,
              discounts, and new product updates, among others, from <strong>{BUSINESS.legalName} DBA {BUSINESS.dba}</strong>. Message
              frequency may vary. Message &amp; Data rates may apply. Reply HELP for help or STOP to opt out.
            </span>
          </label>
        </div>

        <p style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.55 }}>
          By submitting this form, you agree to our <Link href="/terms" style={{ color: "var(--accent)" }}>Terms of Service</Link> and{" "}
          <Link href="/privacy" style={{ color: "var(--accent)" }}>Privacy Policy</Link>. No mobile information will be shared with
          third parties or affiliates for marketing or promotional purposes.
        </p>

        {error && (
          <div style={{ background: "rgba(239, 68, 68, 0.08)", border: "1px solid rgba(239, 68, 68, 0.3)", color: "#fca5a5", padding: 12, borderRadius: 10, fontSize: 13 }}>
            {error}
          </div>
        )}

        <button type="submit" className="btn btn-primary" disabled={submitting} style={{ justifySelf: "start", marginTop: 8 }}>
          {submitting ? "Sending…" : "Send message →"}
        </button>
      </div>
    </form>
  );
}
