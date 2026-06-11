"use client";

// A2P-compliant opt-in form.
//
// The GHL/Twilio compliance scanner does EXACT-PHRASE matching against the
// checkbox label text only - not the surrounding form copy. So every
// required disclosure must live INSIDE the <label> next to each checkbox,
// in the precise phrasing the scanner expects:
//
//   - Business name             : "Brez Marketing LLC"
//   - Message type              : "transactional" + "alerts" (cbox 1) /
//                                 "promotional" (cbox 2)
//   - Frequency disclosure      : "Message frequency may vary"
//   - Rates disclosure          : "Message & data rates may apply"
//   - Opt-out instruction       : "Reply STOP to unsubscribe"
//   - HELP keyword              : "Reply HELP for help"
//
// Both checkboxes are optional. Form submits even if neither is checked.
// On submit -> POST /api/contact -> redirect to /thank-you (single step).

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const BIZ_LEGAL = "Brez Marketing LLC";
const BIZ_FULL  = "Brez Marketing LLC DBA AI-Advertiser";

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

        {/* ── A2P-compliant consent block ── */}
        <div style={{ display: "grid", gap: 12, marginTop: 8 }}>
          <label className="checkbox-row" htmlFor="consent_transactional">
            <input
              id="consent_transactional"
              name="consent_transactional"
              type="checkbox"
            />
            <span>
              By checking this box, I consent to receive transactional SMS messages and account alerts from {BIZ_FULL} ({BIZ_LEGAL}),
              including order confirmations, appointment reminders, and account notifications.
              Message frequency may vary. Message {"&"} data rates may apply.
              Reply HELP for help. Reply STOP to unsubscribe.
            </span>
          </label>

          <label className="checkbox-row" htmlFor="consent_marketing">
            <input
              id="consent_marketing"
              name="consent_marketing"
              type="checkbox"
            />
            <span>
              By checking this box, I consent to receive promotional SMS messages from {BIZ_FULL} ({BIZ_LEGAL}),
              including special offers, discounts, and new product updates.
              Message frequency may vary. Message {"&"} data rates may apply.
              Reply HELP for help. Reply STOP to unsubscribe.
            </span>
          </label>
        </div>

        <p style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.55 }}>
          Both SMS consent checkboxes are optional. You can submit this form without checking either.
          You must be 18 years of age or older to submit this form.
          By submitting, you agree to our <Link href="/terms">Terms of Service</Link> and{" "}
          <Link href="/privacy">Privacy Policy</Link>. No mobile information will be shared with
          third parties or affiliates for marketing or promotional purposes.
        </p>

        {error && (
          <div
            style={{
              background: "rgba(239, 68, 68, 0.08)",
              border: "1px solid rgba(239, 68, 68, 0.3)",
              color: "#fca5a5",
              padding: 12,
              borderRadius: 10,
              fontSize: 13,
            }}
          >
            {error}
          </div>
        )}

        <button
          type="submit"
          className="btn btn-primary"
          disabled={submitting}
          style={{ justifySelf: "start", marginTop: 8 }}
        >
          {submitting ? "Sending..." : "Submit application"}
        </button>
      </div>
    </form>
  );
}
