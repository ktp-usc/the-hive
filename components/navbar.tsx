"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";

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

function DesktopDropdownMenu({
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
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#f3f4f6";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(
    null
  );

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleMouseEnter(label: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(label);
  }

  function handleMouseLeave() {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  }

  function toggleMobileDropdown(label: string) {
    setMobileDropdownOpen((prev) => (prev === label ? null : label));
  }

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileDropdownOpen(null);
  }, [pathname]);

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
          padding: "0 2rem",
          minHeight: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {/* Brand */}
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="/the-hive-logo.png"
            alt="The Hive"
            width={110}
            height={38}
            style={{
              width: "auto",
              height: "38px",
              objectFit: "contain",
            }}
          />
        </Link>

        {/* Desktop nav */}
        <ul
          className="hidden md:flex"
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
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
                      <path
                        d="M2 4l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        fill="none"
                      />
                    </svg>
                  </Button>

                  <DesktopDropdownMenu
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

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="md:hidden flex items-center justify-center"
          style={{
            background: "transparent",
            border: "none",
            padding: "0.5rem",
            cursor: "pointer",
          }}
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#374151"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {mobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden"
          style={{
            borderTop: "1px solid rgba(0,0,0,0.06)",
            background: "#ffffff",
            padding: "0.5rem 1rem 1rem",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: "0.25rem",
            }}
          >
            {navItems.map((item) => {
              const isActive =
                item.href !== undefined
                  ? pathname === item.href
                  : item.dropdown?.some((d) => pathname === d.href);

              if (item.dropdown) {
                const isOpen = mobileDropdownOpen === item.label;

                return (
                  <li key={item.label}>
                    <button
                      type="button"
                      onClick={() => toggleMobileDropdown(item.label)}
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "0.9rem 0",
                        background: "transparent",
                        border: "none",
                        borderBottom: "1px solid rgba(0,0,0,0.05)",
                        color: isActive ? "#1d4ed8" : "#374151",
                        fontWeight: isActive ? 600 : 500,
                        fontSize: "1rem",
                        cursor: "pointer",
                        textAlign: "left",
                        ...bodyFont,
                      }}
                    >
                      <span>{item.label}</span>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 12 12"
                        fill="currentColor"
                        aria-hidden
                        style={{
                          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.2s ease",
                        }}
                      >
                        <path
                          d="M2 4l4 4 4-4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          fill="none"
                        />
                      </svg>
                    </button>

                    {isOpen && (
                      <ul
                        style={{
                          listStyle: "none",
                          margin: 0,
                          padding: "0.25rem 0 0.5rem 0.75rem",
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.25rem",
                        }}
                      >
                        {item.dropdown.map((subItem) => (
                          <li key={subItem.href}>
                            <Link
                              href={subItem.href}
                              style={{
                                display: "block",
                                padding: "0.6rem 0",
                                color:
                                  pathname === subItem.href
                                    ? "#1d4ed8"
                                    : "#4b5563",
                                textDecoration: "none",
                                fontSize: "0.95rem",
                                fontWeight:
                                  pathname === subItem.href ? 600 : 400,
                                ...bodyFont,
                              }}
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              }

              return (
                <li key={item.href}>
                  <Link
                    href={item.href!}
                    style={{
                      display: "block",
                      padding: "0.9rem 0",
                      borderBottom: "1px solid rgba(0,0,0,0.05)",
                      color: isActive ? "#1d4ed8" : "#374151",
                      textDecoration: "none",
                      fontSize: "1rem",
                      fontWeight: isActive ? 600 : 500,
                      ...bodyFont,
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}

            <li style={{ paddingTop: "0.75rem" }}>
              <Button
                asChild
                className="w-full rounded-full bg-hive-orange text-white font-semibold hover:bg-hive-orange/90"
                style={{ ...bodyFont, padding: "0.75rem 1rem" }}
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
      )}
    </nav>
  );
}