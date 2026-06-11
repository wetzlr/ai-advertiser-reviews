import ContactForm from "@/components/ContactForm";
import { BUSINESS } from "@/lib/business";

export const metadata = {
  title: "Apply",
  description: `Apply to learn more about the ${BUSINESS.dba} program. Drop your name and email and we'll be in touch.`,
};

// Dedicated opt-in form page. The same A2P-compliant ContactForm component
// lives here AND on the homepage; this gives the GHL/Twilio compliance
// scanner a clean focused URL to point at when reviewing the opt-in flow.

export default function ApplyPage() {
  return (
    <>
      <section className="hero-bg">
        <div className="wrap" style={{ padding: "80px 24px 40px" }}>
          <div style={{ maxWidth: 720 }}>
            <div className="eyebrow" style={{ marginBottom: 14 }}>Apply</div>
            <h1 className="h1" style={{ marginBottom: 18 }}>Apply to learn about the program.</h1>
            <p className="lead">
              {BUSINESS.brief} Drop your name and email and we&apos;ll get back to you with program details and next steps.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 32 }}>
        <div className="wrap-narrow">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
