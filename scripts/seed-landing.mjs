/**
 * Seeds the Home / Landing page in Sanity (slug: "landing").
 * Uploads hero and mission images, creates "What We Do" contentCard
 * documents, and wires them all into the page document.
 *
 * Run once with:  node scripts/seed-landing.mjs
 * Requires SANITY_API_WRITE_TOKEN in .env.local (Editor role).
 */

import { createClient } from "@sanity/client";
import { config } from "dotenv";
import { resolve, extname } from "path";
import { createReadStream, existsSync } from "fs";

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

// ── helpers ────────────────────────────────────────────────────────────────

function mimeType(filename) {
  const ext = extname(filename).toLowerCase();
  const map = {
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".webp": "image/webp",
    ".avif": "image/avif",
    ".svg": "image/svg+xml",
  };
  return map[ext] ?? "application/octet-stream";
}

async function uploadImage(srcPath, filename) {
  const fullPath = resolve(process.cwd(), "public", srcPath.replace(/^\//, ""));
  if (!existsSync(fullPath)) {
    console.warn(`    ⚠ image not found, skipping: ${fullPath}`);
    return null;
  }
  const asset = await client.assets.upload(
    "image",
    createReadStream(fullPath),
    { filename, contentType: mimeType(filename) }
  );
  return { _type: "image", asset: { _type: "reference", _ref: asset._id } };
}

// ── "What We Do" card data ─────────────────────────────────────────────────

const whatWeDoCards = [
  {
    _id: "card-what-we-do-advocacy",
    _type: "contentCard",
    key: "what-we-do-advocacy",
    title: "Advocacy & Support",
    description:
      "We have assisted over 470 survivors and their families through direct advocacy and wraparound support services.",
  },
  {
    _id: "card-what-we-do-prevention",
    _type: "contentCard",
    key: "what-we-do-prevention",
    title: "Prevention & Outreach",
    description:
      "Our prevention programs have reached over 367 community members, creating safer spaces and raising awareness across South Carolina.",
  },
  {
    _id: "card-what-we-do-restoration",
    _type: "contentCard",
    key: "what-we-do-restoration",
    title: "Restoration",
    description:
      "We walk alongside survivors as they rebuild their lives, celebrating every milestone and success story along the way.",
  },
];

// ── seed ───────────────────────────────────────────────────────────────────

async function seed() {
  // ── Upload hero background image ────────────────────────────────────────
  console.log("\nUploading hero background image…");
  const heroImage = await uploadImage(
    "/images/TheHive_12.06.2025_135.jpg",
    "TheHive_12.06.2025_135.jpg"
  );
  console.log(heroImage ? "  ✓ hero image" : "  ⚠ hero image skipped (place TheHive_12.06.2025_135.jpg in public/images/)");

  // ── Upload mission image ─────────────────────────────────────────────────
  console.log("\nUploading mission image…");
  const missionImage = await uploadImage(
    "/images/TheHive_12.06.2025_87.jpg",
    "TheHive_12.06.2025_87.jpg"
  );
  console.log(missionImage ? "  ✓ mission image" : "  ⚠ mission image skipped (place TheHive_12.06.2025_87.jpg in public/images/)");

  // ── Create "What We Do" contentCard documents ────────────────────────────
  console.log("\nCreating 'What We Do' cards…");
  const cardRefs = [];

  for (const card of whatWeDoCards) {
    await client.createOrReplace(card);
    console.log(`  ✓ ${card.title}`);
    cardRefs.push({
      _type: "reference",
      _key: `ref-${card._id}`,
      _ref: card._id,
    });
  }

  // ── Landing page document ────────────────────────────────────────────────
  console.log("\nCreating Landing page…");

  const landingPage = {
    _id: "page-landing",
    _type: "page",
    title: "Home",
    slug: { _type: "slug", current: "landing" },
    sections: [
      {
        _key: "section-hero",
        _type: "sectionHero",
        headline: "Believing in Yourself is the",
        subheadline: "First Step to Healing",
        ctaLabel: "Donate Today",
        ctaHref: "/donations",
        ...(heroImage ? { images: [heroImage] } : {}),
      },
      {
        _key: "section-mission",
        _type: "sectionImageText",
        heading: "Our Mission",
        body: "The Hive Community Circle is a survivor-led, survivor-driven support organization helping women and girls in South Carolina overcome the trauma of sexual assault, intimate partner violence, and stalking. We are on a mission to provide unwavering support and compassion to the most impacted, yet most underserved survivors in SC.",
        ...(missionImage ? { image: missionImage } : {}),
      },
      {
        _key: "section-what-we-do",
        _type: "sectionCardGrid",
        sectionTitle: "What We Do",
        cards: cardRefs,
      },
      {
        _key: "section-support-cta",
        _type: "sectionRichText",
        heading: "Support Our Work",
        body: "Your contribution helps us reach more survivors and provide the care they deserve. Every dollar makes a difference.",
        eyebrow: "Support",
      },
    ],
  };

  await client.createOrReplace(landingPage);
  console.log("  ✓ page-landing");

  console.log("\nDone! Visit http://localhost:3000");
}

seed().catch((err) => {
  console.error(err.message ?? err);
  process.exit(1);
});
