/**
 * Seeds the Contact page in Sanity (slug: "contact").
 * Contact info (email, phone, address, social links) lives in Site Settings —
 * run seed-site-settings.mjs first.
 *
 * Run once with:  node scripts/seed-contact.mjs
 * Requires SANITY_API_WRITE_TOKEN in .env.local (Editor role).
 */

import { createClient } from "@sanity/client";
import { config } from "dotenv";
import { resolve } from "path";

config({ path: resolve(process.cwd(), ".env.local") });

const token =
  process.env.SANITY_API_WRITE_TOKEN ||
  process.env.SANITY_API_READ_TOKEN ||
  process.env.SANITY_API_VIEWER_TOKEN;

if (!token) {
  console.error(
    "\nNo token found in .env.local.\n" +
    "Add SANITY_API_WRITE_TOKEN=your_token (Editor role) and try again.\n"
  );
  process.exit(1);
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2026-03-30",
  token,
  useCdn: false,
});

// ── seed ───────────────────────────────────────────────────────────────────

async function seed() {
  console.log("\nCreating Contact page…");

  const contactPage = {
    _id: "page-contact",
    _type: "page",
    title: "Contact",
    slug: { _type: "slug", current: "contact" },
    sections: [
      {
        _key: "section-hero",
        _type: "sectionHero",
        headline: "Get in Touch",
        subheadline:
          "We're here for you. Reach out and a member of our team will get back with you shortly.",
      },
      {
        _key: "section-contact-info",
        _type: "sectionRichText",
        eyebrow: "Contact Us",
        heading: "Contact Information",
        body: "Reach us by email, phone, or stop by our office. All contact info is managed in Site Settings.",
      },
      {
        _key: "section-newsletter",
        _type: "sectionRichText",
        eyebrow: "Stay Connected",
        heading: "Check Out Our Newsletter!",
        body: "Subscribe to our newsletter to stay up to date on The Hive's work, events, and impact across South Carolina.",
      },
    ],
  };

  await client.createOrReplace(contactPage);
  console.log("  ✓ page-contact");

  console.log(
    "\nNote: contact email/phone/address/social links are stored in Site Settings.\n" +
    "Run seed-site-settings.mjs to populate those values.\n"
  );
  console.log("Done! Visit http://localhost:3000/contact");
}

seed().catch((err) => {
  console.error(err.message ?? err);
  process.exit(1);
});
