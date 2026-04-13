/**
 * Seed the navbarSettings singleton with the current default nav structure.
 * After running this, the Navigation document in Sanity Studio will be
 * pre-populated and fully editable without changing any code.
 * Run with:  node scripts/seed-navbar.mjs
 */

import { createClient } from "@sanity/client";
import { config } from "dotenv";
import { resolve } from "path";

config({ path: resolve(process.cwd(), ".env.local") });

const token =
  process.env.SANITY_API_WRITE_TOKEN ||
  process.env.SANITY_API_READ_TOKEN;

if (!token) {
  console.error("\nNo token found. Add SANITY_API_WRITE_TOKEN to .env.local\n");
  process.exit(1);
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2026-03-30",
  token,
  useCdn: false,
});

async function seed() {
  console.log("\nSeeding navbar settings…");

  await client.createOrReplace({
    _id: "navbarSettings",
    _type: "navbarSettings",

    // ── Top nav ──────────────────────────────────────────────────────────────
    items: [
      {
        _key: "nav-home",
        _type: "navLink",
        labelEn: "Home",
        labelEsMx: "Inicio",
        href: "/",
        openInNewTab: false,
      },
      {
        _key: "nav-about",
        _type: "navDropdown",
        labelEn: "About Us",
        labelEsMx: "Sobre Nosotras",
        items: [
          {
            _key: "nav-about-us",
            _type: "navLink",
            labelEn: "About Us",
            labelEsMx: "Sobre Nosotras",
            href: "/about",
            openInNewTab: false,
          },
          {
            _key: "nav-invest",
            _type: "navLink",
            labelEn: "Invest in The Hive",
            labelEsMx: "Invierte en The Hive",
            href: "/donations",
            openInNewTab: false,
          },
          {
            _key: "nav-impact",
            _type: "navLink",
            labelEn: "Our Impact",
            labelEsMx: "Nuestro Impacto",
            href: "/about/our-impact",
            openInNewTab: false,
          },
          {
            _key: "nav-partners",
            _type: "navLink",
            labelEn: "Our Partners",
            labelEsMx: "Nuestras Personas Aliadas",
            href: "/about/our-partners",
            openInNewTab: false,
          },
        ],
      },
      {
        _key: "nav-support",
        _type: "navDropdown",
        labelEn: "Support",
        labelEsMx: "Apoyo",
        items: [
          {
            _key: "nav-support-services",
            _type: "navLink",
            labelEn: "Support Services",
            labelEsMx: "Servicios de Apoyo",
            href: "/support",
            openInNewTab: false,
          },
          {
            _key: "nav-awareness",
            _type: "navLink",
            labelEn: "Prevention",
            labelEsMx: "Prevención",
            href: "/awareness",
            openInNewTab: false,
          },
        ],
      },
      {
        _key: "nav-events",
        _type: "navLink",
        labelEn: "Events",
        labelEsMx: "Eventos",
        href: "/events",
        openInNewTab: false,
      },
      {
        _key: "nav-contact",
        _type: "navLink",
        labelEn: "Contact",
        labelEsMx: "Contacto",
        href: "/contact",
        openInNewTab: false,
      },
    ],

    // ── Footer quick links ────────────────────────────────────────────────────
    footerQuickLinks: [
      {
        _key: "footer-home",
        _type: "navLink",
        labelEn: "Home",
        labelEsMx: "Inicio",
        href: "/",
        openInNewTab: false,
      },
      {
        _key: "footer-about",
        _type: "navLink",
        labelEn: "About",
        labelEsMx: "Sobre nosotros",
        href: "/about",
        openInNewTab: false,
      },
      {
        _key: "footer-invest",
        _type: "navLink",
        labelEn: "Invest in the Hive",
        labelEsMx: "Apoya a Hive",
        href: "/donations",
        openInNewTab: false,
      },
      {
        _key: "footer-impact",
        _type: "navLink",
        labelEn: "Our Impact",
        labelEsMx: "Nuestro Impacto",
        href: "/about/our-impact",
        openInNewTab: false,
      },
      {
        _key: "footer-partners",
        _type: "navLink",
        labelEn: "Our Partners",
        labelEsMx: "Nuestros aliados",
        href: "/about/our-partners",
        openInNewTab: false,
      },
      {
        _key: "footer-support",
        _type: "navLink",
        labelEn: "Support",
        labelEsMx: "Apoyo",
        href: "/support",
        openInNewTab: false,
      },
      {
        _key: "footer-awareness",
        _type: "navLink",
        labelEn: "Awareness",
        labelEsMx: "Conciencia",
        href: "/awareness",
        openInNewTab: false,
      },
      {
        _key: "footer-events",
        _type: "navLink",
        labelEn: "Events",
        labelEsMx: "Eventos",
        href: "/events",
        openInNewTab: false,
      },
      {
        _key: "footer-contact",
        _type: "navLink",
        labelEn: "Contact",
        labelEsMx: "Contacto",
        href: "/contact",
        openInNewTab: false,
      },
    ],

    // ── Donate button ─────────────────────────────────────────────────────────
    donate: {
      labelEn: "Donate",
      labelEsMx: "Donar",
      url: "https://thehivecc.networkforgood.com/projects/204053-what-is-hope",
      openInNewTab: true,
    },
  });

  console.log("  ✓ navbarSettings");
  console.log("\nDone!");
}

seed().catch((err) => {
  console.error(err.message ?? err);
  process.exit(1);
});
