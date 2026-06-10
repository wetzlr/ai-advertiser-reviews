import Link from "next/link";

export const metadata = { title: "Thank you" };

export default function ThankYouPage() {
  return (
    <section style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "80px 24px" }}>
      <div style={{ textAlign: "center", maxWidth: 560 }}>
        <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(52, 211, 153, 0.12)", color: "var(--green)", margin: "0 auto 24px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, fontWeight: 800 }}>
          ✓
        </div>
        <h1 className="h1" style={{ marginBottom: 14 }}>Got it.</h1>
        <p className="lead" style={{ marginBottom: 32 }}>
          Thanks for reaching out. We&apos;ll be in touch within one business day. In the meantime, take a look at member
          reviews and case studies.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/reviews" className="btn btn-primary">Read reviews →</Link>
          <Link href="/case-studies" className="btn btn-ghost">See case studies</Link>
        </div>
      </div>
    </section>
  );
}
