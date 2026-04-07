"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";
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

type DropdownItem = { label: string; href: string };

type NavItem =
  | { label: string; href: string; dropdown?: never }
  | { label: string; href?: never; dropdown: DropdownItem[] };

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    dropdown: [
      { label: "About Us", href: "/about" },
      { label: "Impact the Hive", href: "/donations" },
      { label: "Our Partners", href: "/about/our-partners" },
    ],
  },
  {
    label: "Support",
    dropdown: [
      { label: "Support Services", href: "/support" },
      { label: "Prevention & Awareness", href: "/awareness" },
    ],
  },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

function DropdownMenu({
  items,
  open,
}: {
  items: DropdownItem[];
  open: boolean;
}) {
  if (!open) return null;
  return (
    <ul
      style={{
        position: "absolute",
        top: "calc(100% + 4px)",
        left: "50%",
        transform: "translateX(-50%)",
        background: "#ffffff",
        border: "1px solid rgba(0,0,0,0.08)",
        borderRadius: "8px",
        boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
        listStyle: "none",
        margin: 0,
        padding: "4px 0",
        minWidth: "180px",
        zIndex: 100,
      }}
    >
      {items.map(({ label, href }) => (
        <li key={href}>
          <Link
            href={href}
            style={{
              display: "block",
              padding: "8px 16px",
              color: "#374151",
              textDecoration: "none",
              whiteSpace: "nowrap",
              fontSize: "0.875rem",
              ...bodyFont,
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "#f3f4f6")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "transparent")
            }
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleMouseEnter(label: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(label);
  }

  function handleMouseLeave() {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  }

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
          {navItems.map((item) => {
            const isActive =
              item.href !== undefined
                ? pathname === item.href
                : item.dropdown?.some((d) => pathname === d.href);

            if (item.dropdown) {
              return (
                <li
                  key={item.label}
                  style={{ position: "relative" }}
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    className={
                      isActive
                        ? "text-hive-blue font-semibold border-b-2 border-hive-blue rounded-none hover:bg-transparent"
                        : "text-gray-700 font-medium hover:text-hive-blue hover:bg-transparent"
                    }
                    style={{ ...bodyFont, gap: "4px" }}
                  >
                    {item.label}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                    </svg>
                  </Button>
                  <DropdownMenu
                    items={item.dropdown}
                    open={openMenu === item.label}
                  />
                </li>
              );
            }

            return (
              <li key={item.href}>
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className={
                    isActive
                      ? "text-hive-blue font-semibold border-b-2 border-hive-blue rounded-none hover:bg-transparent"
                      : "text-gray-700 font-medium hover:text-hive-blue hover:bg-transparent"
                  }
                  style={bodyFont}
                >
                  <Link href={item.href!}>{item.label}</Link>
                </Button>
              </li>
            );
          })}

          {/* Donate CTA */}
          <li style={{ marginLeft: "0.5rem" }}>
            <Button
              asChild
              size="sm"
              className="rounded-full bg-hive-orange text-white font-semibold hover:bg-hive-orange/90"
              style={{ ...bodyFont, padding: "0.4rem 1.25rem" }}
            >
              <a
                href="https://thehivecc.networkforgood.com/projects/204053-what-is-hope"
                target="_blank"
                rel="noopener noreferrer"
              >
                Donate
              </a>
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
