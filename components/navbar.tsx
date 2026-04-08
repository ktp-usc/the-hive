"use client";

import type { CSSProperties } from "react";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import LanguageToggle from "@/components/language-toggle";
import { useSiteCopy } from "@/components/language-provider";
import { Button } from "@/components/ui/button";

const bodyFont: CSSProperties = {
  fontFamily: "var(--font-body), system-ui, sans-serif",
};

type DropdownItem = { label: string; href: string };

type NavItem =
  | { label: string; href: string; dropdown?: never }
  | { label: string; href?: never; dropdown: DropdownItem[] };

function DesktopDropdownMenu({
  items,
  open,
}: {
  items: DropdownItem[];
  open: boolean;
}) {
  if (!open) {
    return null;
  }

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
            onMouseEnter={(event) => {
              event.currentTarget.style.background = "#f3f4f6";
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.background = "transparent";
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
  const copy = useSiteCopy();
  const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    {
      label: copy.nav.about,
      dropdown: [
        { label: copy.footer.about, href: "/about" },
        { label: "Impact the Hive", href: "/donations" },
        { label: copy.donations.partnersTitle, href: "/about/our-partners" },
      ],
    },
    {
      label: copy.nav.support,
      dropdown: [
        { label: copy.support.heroTitle, href: "/support" },
        { label: copy.nav.awareness, href: "/awareness" },
      ],
    },
    { label: "Events", href: "/events" },
    { label: copy.nav.contact, href: "/contact" },
  ];

  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(
    null
  );
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleMouseEnter(label: string) {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }
    setOpenMenu(label);
  }

  function handleMouseLeave() {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  }

  function toggleMobileDropdown(label: string) {
    setMobileDropdownOpen((previous) => (previous === label ? null : label));
  }

  function closeMobileMenus() {
    setMobileMenuOpen(false);
    setMobileDropdownOpen(null);
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
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.5rem",
          minHeight: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          width: "100%",
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="/the-hive-logo.png"
            alt={copy.nav.brand}
            width={110}
            height={38}
            style={{
              width: "auto",
              height: "38px",
              objectFit: "contain",
            }}
          />
        </Link>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            flex: 1,
            gap: "1rem",
          }}
        >
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
                  : item.dropdown.some((dropdownItem) => pathname === dropdownItem.href);

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
                          ? "rounded-none border-b-2 border-hive-blue font-semibold text-hive-blue hover:bg-transparent"
                          : "font-medium text-gray-700 hover:bg-transparent hover:text-hive-blue"
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
                        ? "rounded-none border-b-2 border-hive-blue font-semibold text-hive-blue hover:bg-transparent"
                        : "font-medium text-gray-700 hover:bg-transparent hover:text-hive-blue"
                    }
                    style={bodyFont}
                  >
                    <Link href={item.href} onClick={closeMobileMenus}>
                      {item.label}
                    </Link>
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
                  {copy.nav.donate}
                </a>
              </Button>
            </li>
          </ul>

          <div className="hidden md:flex">
            <LanguageToggle />
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((previous) => !previous)}
            className="flex items-center justify-center md:hidden"
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
      </div>

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
                  : item.dropdown.some((dropdownItem) => pathname === dropdownItem.href);

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
                        {item.dropdown.map((dropdownItem) => (
                          <li key={dropdownItem.href}>
                            <Link
                              href={dropdownItem.href}
                              onClick={closeMobileMenus}
                              style={{
                                display: "block",
                                padding: "0.6rem 0",
                                color:
                                  pathname === dropdownItem.href
                                    ? "#1d4ed8"
                                    : "#4b5563",
                                textDecoration: "none",
                                fontSize: "0.95rem",
                                fontWeight:
                                  pathname === dropdownItem.href ? 600 : 400,
                                ...bodyFont,
                              }}
                            >
                              {dropdownItem.label}
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
                    href={item.href}
                    onClick={closeMobileMenus}
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

            <li className="pt-3">
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
                  {copy.nav.donate}
                </a>
              </Button>
            </li>

            <li className="pt-2">
              <LanguageToggle />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
