/**
 * Seeds the singleton Site Settings document in Sanity.
 * This document controls all global editable values: contact info, social
 * links, donate URL, external page URLs, etc.
 *
 * Run once with:  node scripts/seed-site-settings.mjs
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

// ── settings data ──────────────────────────────────────────────────────────

const siteSettingsDoc = {
  _id: "site-settings",
  _type: "siteSettings",

  // Footer brand copy
  footerTagline:
    "Survivor-led support, prevention education, and practical care for women and girls across South Carolina.",

  // Contact & Social
  contactEmail: "hello@thehivecc.org",
  contactPhone: "803-888-7725",
  contactAddress: "4704 Colonial Drive, Columbia, SC 29203",
  googleMapsUrl:
    "https://www.google.com/maps/place/The+Hive+Community+Circle/@34.044254,-81.0319489,17z/data=!3m1!4b1!4m6!3m5!1s0x88f8bb73a2107003:0x3018e4f7f747e058!8m2!3d34.044254!4d-81.029374!16s%2Fg%2F11h0mwc9st?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D",
  instagramUrl: "https://www.instagram.com/thehivecc/",
  facebookUrl: "https://www.facebook.com/hivecc/",
  linkedinUrl: "https://www.linkedin.com/company/thehivecc/",
  twitterUrl: "https://x.com/thehive_cc",

  // Donate & Volunteer
  donateUrl: "https://thehivecc.networkforgood.com/projects/204053-what-is-hope",
  volunteerSignupUrl: "https://pointapp.org/orgs/7916",

  // Newsletter
  newsletterUrl:
    "https://thehivecc.dm.networkforgood.com/emails/first_name-hope-is-growing-in-south-carolina-thanks-to-you-9bd6cd6f-d221-4744-a983-fa7ee063e49a",

  // Donations page
  amazonWishlistUrl:
    "https://www.amazon.com/hz/wishlist/ls/OIKGIA7FGP0W?ref_=wl_share",
  keepersContactEmail: "chio@thehivecc.org",

  // Events page
  calendarEmbedUrl:
    "https://calendar.google.com/calendar/embed?src=hello%40thehivecc.org&ctz=America%2FNew_York",
  calendarDirectUrl:
    "https://calendar.google.com/calendar/u/0?cid=aGVsbG9AdGhlaGl2ZWNjLm9yZw",

  // Awareness / Prevention page
  calendlyUrl: "https://calendly.com",
  trainingCatalogUrl: "/training-catalog.pdf",
  trainingContactEmail: "kinnethia@thehivecc.org",

  // Support page
  safetyPlanUrl:
    "https://www.thehivecc.org/_files/ugd/8a8511_175f07e5966d4276b783f3ce90ea902f.pdf",

  // Partners page
  beeBoxContactEmail: "volunteer@thehivecc.org",
};

// ── seed ───────────────────────────────────────────────────────────────────

async function seed() {
  console.log("\nSeeding site settings…");
  await client.createOrReplace(siteSettingsDoc);
  console.log("  ✓ site-settings");
  console.log("\nDone! Edit at http://localhost:3333 → Site Settings");
}

seed().catch((err) => {
  console.error(err.message ?? err);
  process.exit(1);
});
