"use client";

// Application form. Doubles as the A2P-compliant SMS opt-in.
// - Phone field removed per Noah's request (still in the schema if a user
//   opts in to SMS, just collected via the SMS workflow not here).
// - Both consent checkboxes are OPTIONAL and NOT pre-checked.
// - Submission is allowed even if neither box is selected.
// - The disclosure language exactly matches the A2P campaign description.
// - Links to Privacy + T&C are below the boxes, not inside the checkbox text.
// - On submit: POST /api/contact → redirect to /thank-you (single step).

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
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" type="text" required autoComplete="name" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required autoComplete="email" />
        </div>

        <div>
          <label htmlFor="message">Why are you reaching out?</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            placeholder="A sentence or two about what you&#39;re looking for is fine."
          />
        </div>

        {/* A2P-compliant opt-in checkboxes. Both optional + unchecked. */}
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
          By submitting this form, you agree to our <Link href="/terms" style={{ color: "var(--accent-bright)" }}>Terms of Service</Link> and{" "}
          <Link href="/privacy" style={{ color: "var(--accent-bright)" }}>Privacy Policy</Link>. No mobile information will be shared with
          third parties or affiliates for marketing or promotional purposes.
        </p>

        {error && (
          <div style={{ background: "rgba(239, 68, 68, 0.08)", border: "1px solid rgba(239, 68, 68, 0.3)", color: "#fca5a5", padding: 12, borderRadius: 10, fontSize: 13 }}>
            {error}
          </div>
        )}

        <button type="submit" className="btn btn-primary" disabled={submitting} style={{ justifySelf: "start", marginTop: 8 }}>
          {submitting ? "Sending..." : "Submit application"}
        </button>
      </div>
    </form>
  );
}
