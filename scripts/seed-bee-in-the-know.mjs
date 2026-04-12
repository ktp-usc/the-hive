/**
 * Seeds the Bee In The Know page in Sanity (slug: "bee-in-the-know").
 *
 * Run once with:  node scripts/seed-bee-in-the-know.mjs
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
  console.log("\nCreating Bee In The Know page…");

  const beeInTheKnowPage = {
    _id: "page-bee-in-the-know",
    _type: "page",
    title: "Bee in the Know",
    slug: { _type: "slug", current: "bee-in-the-know" },
    sections: [
      {
        _key: "section-hero",
        _type: "sectionHero",
        headline: "Bee in the Know",
        subheadline:
          "Stay informed about The Hive's work, events, and impact across South Carolina.",
      },
      {
        _key: "section-newsletter-cta",
        _type: "sectionRichText",
        eyebrow: "Newsletter",
        heading: "Subscribe to Our Newsletter",
        body: "Get the latest news, updates, and stories from The Hive delivered directly to your inbox.",
      },
    ],
  };

  await client.createOrReplace(beeInTheKnowPage);
  console.log("  ✓ page-bee-in-the-know");

  console.log("\nDone! Visit http://localhost:3000/bee-in-the-know");
}

seed().catch((err) => {
  console.error(err.message ?? err);
  process.exit(1);
});
