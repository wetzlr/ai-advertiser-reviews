"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BUSINESS } from "@/lib/business";

const NAV = [
  { href: "/reviews",     label: "Reviews" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/services",    label: "Program" },
  { href: "/about",       label: "About" },
  { href: "/contact",     label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <div className="wrap site-header-inner">
        <Link href="/" className="brand">
          <span className="brand-mark">A</span>
          <span>AI-Advertiser <span style={{ color: "var(--text-quaternary)", fontWeight: 500 }}>Reviews</span></span>
        </Link>
        <nav className="nav-links">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href || pathname.startsWith(item.href + "/") ? "active" : ""}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
