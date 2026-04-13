/**
 * Seed the Bee In The Know page.
 * Run with:  node scripts/seed-bee-in-the-know.mjs
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
  console.log("\nSeeding Bee In The Know page…");

  const page = {
    _id: "page-bee-in-the-know",
    _type: "page",
    title: "Bee In The Know",
    slug: { _type: "slug", current: "bee-in-the-know" },
    sections: [
      {
        _key: "bitkow-hero",
        _type: "sectionHero",
        headline: "Bee In The Know",
        subheadline: "Stay connected with the latest news, stories, and updates from The Hive community.",
      },
      {
        _key: "bitkow-intro",
        _type: "sectionRichText",
        eyebrow: "Community Updates",
        heading: "What's Happening at The Hive",
        body: "From program highlights to community events, this is your space to stay informed and inspired by the work happening every day at The Hive.",
      },
    ],
  };

  await client.createOrReplace(page);
  console.log("  ✓ page-bee-in-the-know");
  console.log("\nDone! Visit http://localhost:3000/bee-in-the-know");
}

seed().catch((err) => {
  console.error(err.message ?? err);
  process.exit(1);
});
