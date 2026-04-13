/**
 * Seed the Events page document with default CMS-controlled text.
 * Run with:  node scripts/seed-events.mjs
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
  console.log("\nSeeding Events page…");

  await client.createOrReplace({
    _id: "page-events",
    _type: "page",
    title: "Events",
    slug: { _type: "slug", current: "events" },
    sections: [
      {
        _key: "eventsHero",
        _type: "sectionEventsHero",
        eyebrow: "Community Calendar",
        title: "Stay up to date with Hive events.",
        body: "This calendar is connected directly to The Hive's Google Calendar, so new events and updates appear here automatically.",
        openCalendarLabel: "Open Full Calendar",
        askAboutEventLabel: "Ask About an Event",
        calendarIframeTitle: "The Hive events calendar",
      },
      {
        _key: "eventsUpcoming",
        _type: "sectionEventsUpcoming",
        eyebrow: "Coming Up",
        title: "A quick look at what's next.",
        openCalendarLabel: "Open Full Calendar",
        loadingLabel: "Loading upcoming events...",
        emptyLabel:
          "No upcoming events are listed right now. Check back soon or open the full calendar.",
        privacyNote:
          "Some entries may appear as Busy because Google Calendar is hiding public event details.",
        ctaLabel: "View calendar day",
        allDayLabel: "All day",
      },
    ],
  });

  console.log("  ✓ Events page");
  console.log("\nDone!");
}

seed().catch((err) => {
  console.error(err.message ?? err);
  process.exit(1);
});
