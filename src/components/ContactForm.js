"use client";

// A2P-compliant opt-in form. Restructured so the GHL/Twilio compliance
// scanner can clearly identify every required disclosure:
//
//   1. Business name in consent text  - "Brez Marketing LLC DBA AI-Advertiser"
//   2. Checkbox NOT pre-checked        - defaultChecked is unset
//   3. Privacy + T&C links             - rendered below the box
//   4. Opt-out instructions            - "Reply STOP to opt out"
//   5. Message frequency disclosure    - "approximately 4-8 messages per month"
//   6. Checkbox is optional            - submit allowed even if unchecked
//   7. Message type disclosure         - explicit description per checkbox
//   8. Message & data rates disclosure - "Message and data rates may apply"
//
// Form submission allowed even if neither box is checked. On submit:
// POST /api/contact -> redirect to /thank-you (single step).

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";

const BIZ = `${BUSINESS.legalName} DBA ${BUSINESS.dba}`;

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

        {/* ── A2P-compliant SMS consent block ──
            Two optional, unchecked checkboxes. Each has a short consent label
            and a clearly-separated disclosure paragraph below containing every
            required item (business name, message types, frequency, rates,
            opt-out, help). Compliance scanners check each disclosure
            independently, so separating them gives the cleanest pass. */}
        <div style={{ display: "grid", gap: 14, marginTop: 8 }}>
          <div className="consent-block">
            <label className="checkbox-row" htmlFor="consent_transactional">
              <input
                id="consent_transactional"
                name="consent_transactional"
                type="checkbox"
              />
              <span>
                I consent to receive transactional SMS messages from {BIZ}.
              </span>
            </label>
            <p className="consent-disclosure">
              Transactional messages may include appointment reminders, order confirmations, and account notifications.
              Message frequency is approximately 4 to 8 messages per month. Message and data rates may apply.
              Reply HELP for help. Reply STOP to opt out at any time. View our{" "}
              <Link href="/privacy">Privacy Policy</Link> and{" "}
              <Link href="/terms">Terms of Service</Link>.
            </p>
          </div>

          <div className="consent-block">
            <label className="checkbox-row" htmlFor="consent_marketing">
              <input
                id="consent_marketing"
                name="consent_marketing"
                type="checkbox"
              />
              <span>
                I consent to receive marketing SMS messages from {BIZ}.
              </span>
            </label>
            <p className="consent-disclosure">
              Marketing messages may include special offers, discounts, and new program updates.
              Message frequency is approximately 4 to 8 messages per month. Message and data rates may apply.
              Reply HELP for help. Reply STOP to opt out at any time. View our{" "}
              <Link href="/privacy">Privacy Policy</Link> and{" "}
              <Link href="/terms">Terms of Service</Link>.
            </p>
          </div>
        </div>

        <p style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.55 }}>
          Both SMS consent checkboxes are optional. You can submit this form without checking either.
          You must be 18 years of age or older to submit this form. No mobile information will be shared with
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
