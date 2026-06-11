// POST /api/contact
//
// Receives the application form submission. Always logs to function logs.
// When RESEND_API_KEY is set, forwards the submission as an email to
// CONTACT_NOTIFY_EMAIL (defaults to support@ai-advertiser.com).
//
// IMPORTANT: respect the user's consent selections. If they did NOT opt in
// to SMS, do NOT enroll their phone in any SMS list. Carriers audit for this.

import { NextResponse } from "next/server";
import { BUSINESS } from "@/lib/business";

export const runtime = "nodejs";

export async function POST(request) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const { name, email, message, consent_transactional, consent_marketing } = payload || {};
  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }

  console.log("[contact]", {
    name, email,
    msgLen: message.length,
    consent_transactional: !!consent_transactional,
    consent_marketing: !!consent_marketing,
    receivedAt: new Date().toISOString(),
  });

  const notifyEmail = process.env.CONTACT_NOTIFY_EMAIL || BUSINESS.contactEmail;
  const fromAddress = process.env.RESEND_FROM || "AI-Advertiser Reviews <noreply@aiadvertiserreviews.com>";

  if (process.env.RESEND_API_KEY) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          from: fromAddress,
          to: [notifyEmail],
          subject: `New application from ${name}`,
          text: [
            `Name: ${name}`,
            `Email: ${email}`,
            ``,
            `Why reaching out:`,
            message,
            ``,
            `SMS consent (transactional): ${consent_transactional ? "YES" : "no"}`,
            `SMS consent (marketing):     ${consent_marketing ? "YES" : "no"}`,
            ``,
            `Submitted ${new Date().toISOString()}`,
          ].join("\n"),
          reply_to: email,
        }),
      });
      if (!res.ok) {
        const txt = await res.text();
        console.error("[contact] resend non-200:", res.status, txt.slice(0, 200));
      }
    } catch (err) {
      console.error("[contact] resend send threw:", err);
      // Don't fail the request. User already submitted. We can recover from the log.
    }
  }

  return NextResponse.json({ ok: true });
}
