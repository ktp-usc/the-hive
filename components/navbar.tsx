"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageToggle from "@/components/language-toggle";
import { useSiteCopy } from "@/components/language-provider";
import { Button } from "@/components/ui/button";

const headingFont: CSSProperties = {
  fontFamily: "var(--font-heading), Georgia, serif",
};
const bodyFont: CSSProperties = {
  fontFamily: "var(--font-body), system-ui, sans-serif",
};

export default function Navbar() {
  const pathname = usePathname();
  const copy = useSiteCopy();
  const links = [
    { label: copy.nav.about, href: "/about" },
    { label: copy.nav.awareness, href: "/awareness" },
    { label: copy.nav.support, href: "/support" },
    { label: copy.nav.contact, href: "/contact" },
    { label: copy.nav.keepUpdated, href: "/keep-updated" },
  ];

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
          position: "relative",
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
            display: "flex",
            alignItems: "center",
            color: "var(--color-hive-blue)",
            textDecoration: "none",
            fontSize: "1.4rem",
            fontWeight: 700,
            lineHeight: 1,
            whiteSpace: "nowrap",
            transform: "translateX(-1in)",
            letterSpacing: "-0.01em",
          }}
        >
          {copy.nav.brand}
        </Link>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            flex: 1,
            minWidth: 0,
            gap: "0.75rem",
          }}
        >
          {/* Links */}
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              alignItems: "center",
              gap: "0.25rem",
              transform: "translateX(0.5in)",
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
                <Link href="/donations">{copy.nav.donate}</Link>
              </Button>
            </li>
          </ul>

          <div
            style={{
              position: "absolute",
              top: "50%",
              right: "-2in",
              transform: "translateY(-50%)",
            }}
          >
            <LanguageToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
