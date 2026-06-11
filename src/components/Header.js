"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/reviews", label: "Reviews" },
  { href: "/about",   label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <div className="wrap site-header-inner">
        <Link href="/" className="brand">
          <Image src="/logo.png" alt="AI-Advertiser" width={38} height={38} className="brand-logo" priority />
          <div className="brand-meta">
            <span>AI-Advertiser</span>
            <span>Reviews</span>
          </div>
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
