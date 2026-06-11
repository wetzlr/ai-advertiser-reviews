import Link from "next/link";
import Image from "next/image";
import { BUSINESS } from "@/lib/business";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="site-footer-cols">
          <div>
            <Link href="/" className="brand" style={{ marginBottom: 12 }}>
              <Image src="/logo.png" alt="AI-Advertiser" width={38} height={38} className="brand-logo" />
              <div className="brand-meta">
                <span>AI-Advertiser</span>
                <span>Reviews</span>
              </div>
            </Link>
            <p className="muted" style={{ fontSize: 14, marginTop: 16, maxWidth: 360, lineHeight: 1.55 }}>
              Verified member wins and case studies from the {BUSINESS.dba} program.
              Operated by {BUSINESS.legalName} DBA {BUSINESS.dba}.
            </p>
          </div>

          <div>
            <h4>Browse</h4>
            <Link href="/reviews">All reviews</Link>
            <Link href="/faq">FAQ</Link>
          </div>

          <div>
            <h4>Company</h4>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <a href="https://trustpilot.com/review/ai-advertiser.com" target="_blank" rel="noopener noreferrer">Trustpilot</a>
          </div>

          <div>
            <h4>Legal</h4>
            <Link href="/privacy">Privacy policy</Link>
            <Link href="/terms">Terms of service</Link>
            <Link href="/sms-terms">SMS terms</Link>
          </div>
        </div>

        <div className="site-footer-bottom">
          <span>© 2026 {BUSINESS.legalName} DBA {BUSINESS.dba}. All rights reserved.</span>
          <span>Miami Beach, FL · USA</span>
        </div>
      </div>
    </footer>
  );
}
