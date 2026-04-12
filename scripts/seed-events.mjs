/**
 * Seeds the Events page in Sanity (slug: "events").
 * Calendar embed/direct URLs are stored in Site Settings — run
 * seed-site-settings.mjs first to populate those values.
 *
 * Run once with:  node scripts/seed-events.mjs
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
  console.log("\nCreating Events page…");

  const eventsPage = {
    _id: "page-events",
    _type: "page",
    title: "Events",
    slug: { _type: "slug", current: "events" },
    sections: [
      {
        _key: "section-hero",
        _type: "sectionHero",
        headline: "Community Events",
        subheadline:
          "Stay connected with what's happening at The Hive. Check our calendar for upcoming events, trainings, and community gatherings.",
      },
      {
        _key: "section-calendar-info",
        _type: "sectionRichText",
        eyebrow: "Community Calendar",
        heading: "Upcoming Events",
        body: "Browse our upcoming events below. The calendar embed and direct link are managed in Site Settings.",
      },
    ],
  };

  await client.createOrReplace(eventsPage);
  console.log("  ✓ page-events");

  console.log(
    "\nNote: Google Calendar embed/direct URLs are stored in Site Settings.\n" +
    "Run seed-site-settings.mjs to populate those values.\n"
  );
  console.log("Done! Visit http://localhost:3000/events");
}

seed().catch((err) => {
  console.error(err.message ?? err);
  process.exit(1);
});
