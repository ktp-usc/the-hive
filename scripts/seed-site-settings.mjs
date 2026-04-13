/**
 * Seed the siteSettings singleton with default contact info and social links.
 * Run with:  node scripts/seed-site-settings.mjs
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
  console.log("\nSeeding site settings…");

  await client.createOrReplace({
    _id: "siteSettings",
    _type: "siteSettings",
    contactEmail: "hello@thehivecc.org",
    contactPhone: "803-888-7725",
    contactAddress: "4704 Colonial Drive, Columbia, SC 29203",
    googleMapsUrl:
      "https://www.google.com/maps/place/The+Hive+Community+Circle/@34.044254,-81.0319489,17z",
    instagramUrl: "https://www.instagram.com/thehivecc/",
    facebookUrl: "https://www.facebook.com/hivecc/",
    linkedinUrl: "https://www.linkedin.com/company/thehivecc/",
    twitterUrl: "https://x.com/thehive_cc",
    youtubeUrl: "https://www.youtube.com/@thehivecommunitycircle93",
    footerTagline:
      "Survivor-led support, prevention education, and practical care for women and girls in South Carolina.",
    footerBrand: "The Hive",
    footerCopyright: "© 2026 The Hive Community Circle",
    footerQuickLinksHeading: "Quick Links",
    footerContactHeading: "Contact",
    footerEmailLabel: "Email:",
    footerPhoneLabel: "Phone:",
    footerAddressLabel: "Address:",
    calendarDirectUrl:
      "https://calendar.google.com/calendar/u/0?cid=aGVsbG9AdGhlaGl2ZWNjLm9yZw",
    calendarEmbedUrl:
      "https://calendar.google.com/calendar/embed?src=hello%40thehivecc.org&ctz=America%2FNew_York",
    missionTitle: "Our Mission",
    missionBody:
      "The Hive Community Circle is a survivor-led, survivor-driven support organization helping women and girls in South Carolina overcome the trauma of sexual assault, intimate partner violence, and stalking. We are on a mission to provide unwavering support and compassion to the most impacted, yet most underserved survivors in SC.",
    valuesTitle: "Our Values",
    valuesIntro:
      "Our work is rooted in the belief that every survivor deserves dignity, safety, and belonging. These pillars guide everything we do.",
    valuesPillars: [
      "Empowerment",
      "Compassion",
      "Equity",
      "Community",
      "Accountability",
      "Healing",
    ],
    newsletterUrl:
      "https://thehivecc.dm.networkforgood.com/emails/first_name-hope-is-growing-in-south-carolina-thanks-to-you-9bd6cd6f-d221-4744-a983-fa7ee063e49a",
  });

  console.log("  ✓ siteSettings");
  console.log("\nDone!");
}

seed().catch((err) => {
  console.error(err.message ?? err);
  process.exit(1);
});
