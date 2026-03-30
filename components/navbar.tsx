"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const links = [
  { label: "About Us",         href: "/about" },
  { label: "Support Services", href: "/support" },
  { label: "Events",           href: "/events" },
  { label: "Bee in the Know",  href: "/bee-in-the-know" },
  { label: "Contact Us",       href: "/contact" },
];

const headingFont: React.CSSProperties = {
  fontFamily: "var(--font-heading), Georgia, serif",
};
const bodyFont: React.CSSProperties = {
  fontFamily: "var(--font-body), system-ui, sans-serif",
};

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      style={{
        ...bodyFont,
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 50,
        background: "#ffffff",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
        boxShadow: "0 1px 8px rgba(0,0,0,0.06)",
      }}
    >
      <div
        style={{
          padding: "0 1.5rem",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Brand */}
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="/the-hive-logo.png"
            alt="The Hive"
            width={120}
            height={40}
            style={{ objectFit: "contain" }}
          />
        </Link>

        {/* Links */}
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
          }}
        >
          {links.map(({ label, href }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className={
                    active
                      ? "text-hive-blue font-semibold border-b-2 border-hive-blue rounded-none hover:bg-transparent"
                      : "text-gray-700 font-medium hover:text-hive-blue hover:bg-transparent"
                  }
                  style={bodyFont}
                >
                  <Link href={href}>{label}</Link>
                </Button>
              </li>
            );
          })}

          {/* Donations CTA */}
          <li style={{ marginLeft: "0.5rem" }}>
            <Button
              asChild
              size="sm"
              className="rounded-full bg-hive-orange text-white font-semibold hover:bg-hive-orange/90"
              style={bodyFont}
            >
              <Link href="/donations">Impact the Hive</Link>
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
