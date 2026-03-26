"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const links = [
  { label: "About Us",      href: "/about" },
  { label: "Awareness",     href: "/awareness" },
  { label: "Support",       href: "/support" },
  { label: "Contact",       href: "/contact" },
  { label: "Keep Updated",  href: "/keep-updated" },
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
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 1.5rem",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Brand */}
        <Link
          href="/"
          style={{
            ...headingFont,
            color: "var(--color-hive-blue)",
            textDecoration: "none",
            fontSize: "1.4rem",
            fontWeight: 700,
            letterSpacing: "-0.01em",
          }}
        >
          The Hive
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
              <Link href="/donations">Donate</Link>
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
