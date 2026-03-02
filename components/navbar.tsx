"use client";

// Lily Deller - Navigation
import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "About Us", href: "/about" },
  { label: "Awareness", href: "/awareness" },
  { label: "Support", href: "/support" },
  { label: "Contact", href: "/contact" },
  { label: "Keep Updated", href: "/keep-updated" },
];

const brandFont: React.CSSProperties = { fontFamily: "var(--font-heading)" };

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
        ...brandFont,
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
        padding: "0.75rem 2rem",
        background: "#fefde8",
        zIndex: 50,
      }}
    >
      <Link
        href="/"
        style={{ ...brandFont, color: "#1a1a1a", textDecoration: "none", fontSize: "1.25rem", fontWeight: 700 }}
      >
        The Hive
      </Link>

      {/* Desktop links */}
      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "row", gap: "0.75rem" }}>
        {links.map(({ label, href }) => (
          <li key={href}>
            <Link
              href={href}
              style={{ ...brandFont, color: "#fff", textDecoration: "none", fontSize: "0.95rem", display: "block", background: "#e8935a", borderRadius: "9999px", padding: "0.35rem 1rem", textAlign: "center" }}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button onClick={() => setOpen((v) => !v)} style={{ display: "none" }}>
        {open ? "Close" : "Menu"}
      </button>
    </nav>
  );
}
