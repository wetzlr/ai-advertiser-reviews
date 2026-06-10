import Link from "next/link";
import { BUSINESS } from "@/lib/business";

export default function Footer() {
  const year = 2026;
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="site-footer-cols">
          <div>
            <Link href="/" className="brand" style={{ marginBottom: 12 }}>
              <span className="brand-mark">A</span>
              <span>AI-Advertiser <span style={{ color: "var(--text-quaternary)", fontWeight: 500 }}>Reviews</span></span>
            </Link>
            <p className="muted" style={{ fontSize: 14, marginTop: 12, maxWidth: 360, lineHeight: 1.55 }}>
              Verified reviews and case studies from {BUSINESS.dba} program members.
              Operated by {BUSINESS.legalName} DBA {BUSINESS.dba}.
            </p>
          </div>

          <div>
            <h4>Browse</h4>
            <Link href="/reviews">All reviews</Link>
            <Link href="/case-studies">Case studies</Link>
            <Link href="/services">The program</Link>
            <Link href="/faq">FAQ</Link>
          </div>

          <div>
            <h4>Company</h4>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div>
            <h4>Legal</h4>
            <Link href="/privacy">Privacy policy</Link>
            <Link href="/terms">Terms of service</Link>
            <Link href="/sms-terms">SMS terms</Link>
          </div>
        </div>

        <div className="site-footer-bottom">
          <span>© {year} {BUSINESS.legalName} DBA {BUSINESS.dba}. All rights reserved.</span>
          <span>Built with care in Miami, FL.</span>
        </div>
      </div>
    </footer>
  );
}
