// POST /api/contact
//
// Receives the contact form submission. For v1, we just log + send via Resend
// when RESEND_API_KEY is set. Otherwise we just acknowledge so the form keeps
// working pre-Resend-setup.
//
// IMPORTANT: respect the user's consent selections. If they did NOT opt in to
// SMS, do NOT enroll their phone number in the SMS list — only collect for
// callback purposes. Carriers explicitly audit for this.

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

  const { name, email, phone, message, consent_transactional, consent_marketing } = payload || {};
  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }

  // Audit log — gets surfaced in Vercel function logs. Useful for the A2P
  // submission ("here's a sample of opt-ins we receive") if Twilio asks.
  console.log("[contact]", {
    name, email,
    phone: phone ? phone.replace(/\d(?=\d{4})/g, "*") : null,
    msgLen: message.length,
    consent_transactional: !!consent_transactional,
    consent_marketing: !!consent_marketing,
    receivedAt: new Date().toISOString(),
  });

  // Optional: forward to Resend if configured
  if (process.env.RESEND_API_KEY) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          from: `AI-Advertiser Reviews <${BUSINESS.supportEmail}>`,
          to: [process.env.CONTACT_NOTIFY_EMAIL || BUSINESS.contactEmail],
          subject: `New contact form submission from ${name}`,
          text: [
            `Name: ${name}`,
            `Email: ${email}`,
            `Phone: ${phone || "(not provided)"}`,
            ``,
            `Consent (transactional SMS): ${consent_transactional ? "YES" : "no"}`,
            `Consent (marketing SMS):     ${consent_marketing ? "YES" : "no"}`,
            ``,
            `Message:`,
            message,
          ].join("\n"),
          reply_to: email,
        }),
      });
    } catch (err) {
      console.error("[contact] resend forward failed:", err);
      // Don't fail the request — user already submitted, we can recover from log.
    }
  }

  return NextResponse.json({ ok: true });
}
