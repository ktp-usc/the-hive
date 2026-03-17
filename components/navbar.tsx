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
  { label: "Donations", href: "/donations"}
];



export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
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
        background: "#ffffff",
        zIndex: 50,
      }}
    >
      <Link
        href="/"
        style={{ fontSize: "1.1rem", color: "#1D979C", textDecoration: "none", fontWeight: 700 }}
      >
        The Hive
      </Link>

      {/* Desktop links */}
      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "row", gap: "2rem" }}>
        {links.map(({ label, href }) => (
          <li key={href}>
            <Link
              href={href}
              style={{ fontSize: "1.1rem", color: "#1D979C", textDecoration: "none", fontWeight: 700 }}
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