/**
 * Seed the Our Impact page.
 * Run with:  node scripts/seed-our-impact.mjs
 */

import { createClient } from "@sanity/client";
import { config } from "dotenv";
import { resolve, extname } from "path";
import { createReadStream, existsSync } from "fs";

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

function mimeType(filename) {
  const ext = extname(filename).toLowerCase();
  const map = { ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp", ".avif": "image/avif" };
  return map[ext] ?? "application/octet-stream";
}

async function uploadImage(srcPath, filename) {
  const fullPath = resolve(process.cwd(), "public", srcPath.replace(/^\//, ""));
  if (!existsSync(fullPath)) { console.warn(`  ⚠ image not found: ${fullPath}`); return null; }
  const asset = await client.assets.upload("image", createReadStream(fullPath), { filename, contentType: mimeType(filename) });
  return { _type: "image", asset: { _type: "reference", _ref: asset._id } };
}

async function seed() {
  console.log("\nSeeding Our Impact page…");

  process.stdout.write("  Uploading hero image…");
  const heroImage = await uploadImage("/images/hive-community.png", "hive-community.png");
  console.log(heroImage ? " done" : " skipped");

  const page = {
    _id: "page-our-impact",
    _type: "page",
    title: "Our Impact",
    slug: { _type: "slug", current: "our-impact" },
    sections: [
      {
        _key: "impact-hero",
        _type: "sectionImpactHero",
        eyebrow: "Our Impact",
        body: "From national media features to strategic milestones, explore The Hive's growing footprint in the movement to end gender-based violence.",
        ...(heroImage ? { image: heroImage } : {}),
      },
      {
        _key: "impact-media",
        _type: "sectionImpactMedia",
        eyebrow: "Press & Interviews",
        title: "In the Media",
        items: [
          {
            _key: "media-1",
            outlet: "Black Enterprise",
            headline: "Changing the Conversation on Gender-Based Violence",
            description:
              "Featured for a survivor-led approach to healing and community care for Black women and girls in South Carolina.",
            href: "https://www.blackenterprise.com",
          },
          {
            _key: "media-2",
            outlet: "Essence Festival",
            headline: "Speaker & Facilitator",
            description:
              "Ashley Olayinka presented on social and racial justice, gender-based violence, and leadership at the Essence Festival.",
            href: "https://www.essence.com/festival",
          },
          {
            _key: "media-3",
            outlet: "The State Newspaper",
            headline: "20 Under 40",
            description:
              "Recognized among South Carolina's most influential young leaders for building survivor-centered spaces.",
            href: "https://www.thestate.com",
          },
        ],
      },
      {
        _key: "impact-awards",
        _type: "sectionImpactAwards",
        eyebrow: "Honors & Distinctions",
        title: "Awards & Recognition",
        awards: [
          {
            _key: "award-1",
            name: "Aspen SOAR Fellow",
            year: "2022",
            issuer: "Aspen Institute",
            description:
              "A highly selective fellowship recognizing emerging leaders driving systemic change in their communities.",
          },
          {
            _key: "award-2",
            name: "Jefferson Award",
            year: "",
            issuer: "Jefferson Awards Foundation",
            description:
              "Awarded for extraordinary public service and commitment to creating lasting community impact.",
          },
          {
            _key: "award-3",
            name: "20 Under 40",
            year: "",
            issuer: "The State Newspaper",
            description:
              "Honored among South Carolina's top young professionals making a meaningful difference.",
          },
        ],
      },
      {
        _key: "impact-documents",
        _type: "sectionImpactDocuments",
        eyebrow: "Strategic Documents",
        title: "Reports & Plans",
        documents: [
          {
            _key: "doc-1",
            title: "2025 Annual Report",
            description:
              "Our year in review — impact numbers, stories, and highlights from across The Hive's programs.",
            href: "https://www.thehivecc.org/2025-annual-report",
            cta: "View Report",
            external: true,
          },
          {
            _key: "doc-2",
            title: "2021–2026 Strategic Plan",
            description:
              "The roadmap guiding our growth, programs, and community vision over five years.",
            href: "/strategic-plan.pdf",
            cta: "Download PDF",
            external: false,
          },
        ],
      },
    ],
  };

  await client.createOrReplace(page);
  console.log("  ✓ page-our-impact");
  console.log("\nDone! Visit http://localhost:3000/about/our-impact");
}

seed().catch((err) => {
  console.error(err.message ?? err);
  process.exit(1);
});
