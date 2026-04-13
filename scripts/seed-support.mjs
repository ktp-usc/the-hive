/**
 * Seed the Support Services page.
 * Run with:  node scripts/seed-support.mjs
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
  console.log("\nSeeding Support Services page…");

  // Upload card images
  const imageSources = [
    { src: "/images/TheHive_12.06.2025_135.jpg", filename: "TheHive_12.06.2025_135.jpg" },
    { src: "/donations/casitaofcare1.avif",        filename: "casitaofcare1.avif" },
    { src: "/donations/keepersclub2.avif",         filename: "keepersclub2.avif" },
    { src: "/images/TheHive_12.06.2025_87.jpg",    filename: "TheHive_12.06.2025_87.jpg" },
    { src: "/donations/keepersclub4.avif",         filename: "keepersclub4.avif" },
    { src: "/donations/casitaofcare3.avif",        filename: "casitaofcare3.avif" },
    { src: "/donations/keepersclub5.avif",         filename: "keepersclub5.avif" },
    { src: "/donations/casitaofcare4.png",         filename: "casitaofcare4.png" },
    { src: "/images/TheHive_12.06.2025_135.jpg",   filename: "TheHive_12.06.2025_135_intro.jpg" },
  ];

  const uploaded = {};
  for (const { src, filename } of imageSources) {
    process.stdout.write(`  Uploading ${filename}…`);
    const img = await uploadImage(src, filename);
    uploaded[filename] = img;
    console.log(img ? " done" : " skipped");
  }

  const page = {
    _id: "page-support",
    _type: "page",
    title: "Support Services",
    slug: { _type: "slug", current: "support" },
    sections: [
      {
        _key: "support-hero",
        _type: "sectionSupportHero",
        eyebrow: "Support & Care",
        title: "Support Services",
        body: "Compassionate support and practical resources, here when you need them.",
      },
      {
        _key: "support-intro",
        _type: "sectionSupportIntro",
        eyebrow: "Walking With Survivors",
        title: "Support rooted in voice, choice, and care",
        body: "The Hive works alongside survivors with culturally responsive, trauma-informed care that honors each person's pace, choices, and goals. Whether someone is seeking emotional support, advocacy, wellness coaching, or practical resources, our team helps survivors identify what they need, navigate options, and move toward healing with dignity and community.",
        ...(uploaded["TheHive_12.06.2025_135_intro.jpg"]
          ? { image: uploaded["TheHive_12.06.2025_135_intro.jpg"] }
          : {}),
      },
      {
        _key: "support-services",
        _type: "sectionSupportServices",
        heading: "Explore Support Services",
        languageNote: "All services are offered in English and Spanish.",
        cards: [
          {
            _key: "card-peer-advocacy",
            cardId: "0",
            title: "Peer Advocacy",
            subtitle: "Emotional support & navigation",
            summary: "Trained peer advocates provide confidential support, help you understand rights and options, and connect you to resources.",
            details: [
              "Ensure survivors understand their rights and options",
              "Social-emotional support and safety planning",
              "For primary and secondary survivors ages 11+",
              "Services at no cost to the survivor",
            ],
            note: null,
            noteLinkLabel: null,
            noteLinkHref: null,
            ctaLabel: "Call 803-888-7725",
            ctaHref: "tel:8038887725",
            ...(uploaded["TheHive_12.06.2025_135.jpg"]
              ? { image: uploaded["TheHive_12.06.2025_135.jpg"] }
              : {}),
          },
          {
            _key: "card-economic-relief",
            cardId: "1",
            title: "Economic Relief",
            subtitle: "Immediate financial support",
            summary: "Wrap-around financial support for urgent needs - housing, food, utility help, relocation, and transportation support.",
            details: [],
            note: "This resource is provided by Casita of Care. Learn more and support it through",
            noteLinkLabel: "Invest in the Hive",
            noteLinkHref: "/donations",
            ctaLabel: "Request help",
            ctaHref: "/contact",
            ...(uploaded["casitaofcare1.avif"]
              ? { image: uploaded["casitaofcare1.avif"] }
              : {}),
          },
          {
            _key: "card-wellness-coaching",
            cardId: "2",
            title: "Wellness Coaching",
            subtitle: "Licensed trauma-trained support",
            summary: "Trauma-informed wellness coaching for survivors. Services are provided by licensed therapists trained in trauma treatment.",
            details: [
              "For survivors of sexual assault, IPV, or stalking (ages 11+)",
              "Provided at no cost to the survivor",
            ],
            note: null,
            noteLinkLabel: null,
            noteLinkHref: null,
            ctaLabel: "Groups & Wellness Coaching: 803-766-8067",
            ctaHref: "tel:8037668067",
            ...(uploaded["keepersclub2.avif"]
              ? { image: uploaded["keepersclub2.avif"] }
              : {}),
          },
          {
            _key: "card-healing-circles",
            cardId: "3",
            title: "Peer Support Healing Circles",
            subtitle: "Peer-led group healing",
            summary: "Confidential healing circles using psycho-educational and wellness-based curriculum for community and recovery.",
            details: [
              "Queens Gather - Women 18+",
              "Bloom - Girls 11-18",
              "Held in a safe and affirming space",
            ],
            note: null,
            noteLinkLabel: null,
            noteLinkHref: null,
            ctaLabel: "Learn about circles",
            ctaHref: null,
            ...(uploaded["TheHive_12.06.2025_87.jpg"]
              ? { image: uploaded["TheHive_12.06.2025_87.jpg"] }
              : {}),
          },
          {
            _key: "card-holistic-support",
            cardId: "4",
            title: "Holistic Support",
            subtitle: "Wrap-around support",
            summary: "Support that goes beyond one service and helps address the survivor's full situation.",
            details: [
              "Goal and intervention case planning",
              "Financial planning",
              "Employment support",
              "Assist in applying for additional services",
            ],
            note: null,
            noteLinkLabel: null,
            noteLinkHref: null,
            ctaLabel: "Contact",
            ctaHref: null,
            ...(uploaded["keepersclub4.avif"]
              ? { image: uploaded["keepersclub4.avif"] }
              : {}),
          },
          {
            _key: "card-referral",
            cardId: "5",
            title: "How to Refer a Survivor",
            subtitle: "Quick contact info",
            summary: "Use these contact options to connect a survivor with General Support, Wellness Coaching, or Advocacy.",
            details: [
              "General Support / Advocacy: 803-888-7725",
              "Groups and Wellness Coaching: 803-766-8067",
              "Services are confidential",
              "We are mandated reporters",
            ],
            note: null,
            noteLinkLabel: null,
            noteLinkHref: null,
            ctaLabel: "Go to Contact",
            ctaHref: "/contact",
            ...(uploaded["casitaofcare3.avif"]
              ? { image: uploaded["casitaofcare3.avif"] }
              : {}),
          },
          {
            _key: "card-training",
            cardId: "6",
            title: "Request Training / Prevention Programming",
            subtitle: "Outreach events",
            summary: "Request training, prevention programming, or outreach events for your organization or community.",
            details: [
              "Email: hello@thehivecc.org",
              "Call: 803-888-7725",
              "We can coordinate outreach events",
            ],
            note: null,
            noteLinkLabel: null,
            noteLinkHref: null,
            ctaLabel: "Email Us",
            ctaHref: "mailto:hello@thehivecc.org",
            ...(uploaded["keepersclub5.avif"]
              ? { image: uploaded["keepersclub5.avif"] }
              : {}),
          },
        ],
      },
      {
        _key: "support-accessibility",
        _type: "sectionSupportAccessibility",
        eyebrow: "Accessibility",
        title: "Support that is accessible and inclusive",
        body: "We are committed to supporting blind and deaf survivors and reducing barriers to care. Linguists and interpreters are available, and those services are compensated so survivors can access support in ways that are clear, affirming, and inclusive.",
        ...(uploaded["casitaofcare4.png"]
          ? { image: uploaded["casitaofcare4.png"] }
          : {}),
      },
      {
        _key: "support-resources",
        _type: "sectionSupportResources",
        title: "Survivor Resources",
        body: "These planning tools can support emotional and physical safety. If you would like help filling one out, The Hive can walk through it with you.",
        buttons: [
          {
            _key: "btn-emotional",
            label: "Emotional Support Safety Plan",
            href: "https://www.thehivecc.org/_files/ugd/8a8511_175f07e5966d4276b783f3ce90ea902f.pdf",
          },
          {
            _key: "btn-physical",
            label: "Physical Safety Plan",
            href: "/support/physical-safety-plan",
          },
        ],
      },
    ],
  };

  await client.createOrReplace(page);
  console.log("  ✓ page-support");
  console.log("\nDone! Visit http://localhost:3000/support");
}

seed().catch((err) => {
  console.error(err.message ?? err);
  process.exit(1);
});
