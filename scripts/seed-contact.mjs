/**
 * Seed the Contact page.
 * Run with:  node scripts/seed-contact.mjs
 */

import { createClient } from "@sanity/client";
import { config } from "dotenv";
import { resolve } from "path";

config({ path: resolve(process.cwd(), ".env.local") });

const token =
  process.env.SANITY_API_WRITE_TOKEN || process.env.SANITY_API_READ_TOKEN;

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
  console.log("\nSeeding Contact page…");

  const page = {
    _id: "page-contact",
    _type: "page",
    title: "Contact",
    slug: { _type: "slug", current: "contact" },
    sections: [
      {
        _key: "contact-hero",
        _type: "sectionContactHero",
        eyebrow: "Contact Us",
        title: "Get in Touch",
        body: "We're here for you. Reach out and a member of our team will get back with you shortly.",
      },
      {
        _key: "contact-newsletter",
        _type: "sectionContactNewsletter",
        title: "Check Out Our Newsletter!",
      },
    ],
  };

  await client.createOrReplace(page);
  console.log("  ✓ page-contact");
  console.log("\nDone! Visit http://localhost:3000/contact");
}

seed().catch((err) => {
  console.error(err.message ?? err);
  process.exit(1);
});
