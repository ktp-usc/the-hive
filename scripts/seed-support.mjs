/**
 * Seeds the Support Services page in Sanity (slug: "support").
 * Creates contentCard documents for each support service and builds the
 * page document with a hero, card grid, and safety plan CTA section.
 *
 * Run once with:  node scripts/seed-support.mjs
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

// ── support card data ──────────────────────────────────────────────────────
// key maps to the CARD_META ids in support/page.tsx for icon/styling lookups

const supportCards = [
  {
    _id: "card-peer-advocacy",
    _type: "contentCard",
    key: "peer-advocacy",
    title: "Peer Advocacy",
    subtitle: "Emotional support & navigation",
    description:
      "Trained peer advocates provide confidential support, help you understand rights and options, and connect you to resources.",
    details: [
      "Ensure survivors understand their rights and options",
      "Social-emotional support and safety planning",
      "For primary and secondary survivors ages 11+",
      "Services at no cost to the survivor",
    ],
    cta: { label: "Call 803-888-7725", href: "tel:8038887725" },
    badge: "Confidential",
  },
  {
    _id: "card-economic-relief",
    _type: "contentCard",
    key: "economic-relief",
    title: "Economic Relief",
    subtitle: "Immediate financial support",
    description:
      "Wrap-around financial support for urgent needs - housing, food, utility help, relocation, and transportation support.",
    details: [
      "Transitional housing",
      "Utility support and gas vouchers",
      "Food security and hotel accommodations",
    ],
    cta: { label: "Request help", href: "/contact" },
    badge: "No cost",
  },
  {
    _id: "card-individual-counseling",
    _type: "contentCard",
    key: "individual-counseling",
    title: "Individual Counseling",
    subtitle: "Licensed trauma-trained therapists",
    description:
      "Professional counseling for survivors. Services are provided by licensed therapists trained in trauma treatment.",
    details: [
      "For survivors of sexual assault, IPV, or stalking (ages 11+)",
      "Provided at no cost to the survivor",
    ],
    cta: { label: "Groups & Counseling: 803-766-8067", href: "tel:8037668067" },
    badge: "",
  },
  {
    _id: "card-healing-circles",
    _type: "contentCard",
    key: "healing-circles",
    title: "Peer Support Healing Circles",
    subtitle: "Peer-led group healing",
    description:
      "Confidential healing circles using psycho-educational and wellness-based curriculum for community and recovery.",
    details: [
      "Queens Gather - Women 18+",
      "Bloom - Girls 11-18",
      "Held in a safe and affirming space",
    ],
    cta: { label: "Learn about circles", href: "/support/healing-circles" },
    badge: "Groups",
  },
  {
    _id: "card-holistic-support",
    _type: "contentCard",
    key: "holistic-support",
    title: "Holistic Support",
    subtitle: "Wrap-around support",
    description:
      "Support that goes beyond one service and helps address the survivor's full situation.",
    details: [
      "Goal and intervention case planning",
      "Financial planning",
      "Employment support",
      "Assist in applying for additional services",
    ],
    badge: "Case Planning",
  },
  {
    _id: "card-refer-survivor",
    _type: "contentCard",
    key: "refer-survivor",
    title: "How to Refer a Survivor",
    subtitle: "Quick contact info",
    description:
      "Use these contact options to connect a survivor with General Support, Counseling, or Advocacy.",
    details: [
      "General Support / Advocacy: 803-888-7725",
      "Groups and Counseling: 803-766-8067",
      "Services are confidential",
      "We are mandated reporters",
    ],
    cta: { label: "Go to Contact", href: "/contact" },
    badge: "Referrals",
  },
  {
    _id: "card-training-prevention",
    _type: "contentCard",
    key: "training-prevention",
    title: "Request Training / Prevention Programming",
    subtitle: "Outreach events",
    description:
      "Request training, prevention programming, or outreach events for your organization or community.",
    details: [
      "Email: hello@thehivecc.org",
      "Call: 803-888-7725",
      "We can coordinate outreach events",
    ],
    cta: { label: "Email Us", href: "mailto:hello@thehivecc.org" },
    badge: "Outreach",
  },
];

// ── seed ───────────────────────────────────────────────────────────────────

async function seed() {
  // ── Create support service contentCard documents ─────────────────────────
  console.log("\nSeeding support service cards…");
  const cardRefs = [];

  for (const card of supportCards) {
    await client.createOrReplace(card);
    console.log(`  ✓ ${card.title}`);
    cardRefs.push({
      _type: "reference",
      _key: `ref-${card._id}`,
      _ref: card._id,
    });
  }

  // ── Support page document ────────────────────────────────────────────────
  console.log("\nCreating Support page…");

  const supportPage = {
    _id: "page-support",
    _type: "page",
    title: "Support Services",
    slug: { _type: "slug", current: "support" },
    sections: [
      {
        _key: "section-hero",
        _type: "sectionHero",
        headline: "Support Services",
        subheadline:
          "Compassionate support and practical resources, here when you need them.",
      },
      {
        _key: "section-services",
        _type: "sectionCardGrid",
        sectionTitle: "Explore Support Options",
        cards: cardRefs,
      },
      {
        _key: "section-safety-plan",
        _type: "sectionRichText",
        heading: "Emotional Safety Plan Resource",
        eyebrow: "Safety Planning",
        body: "If you need help filling out this form or creating a plan that meets your needs, you can always contact The Hive. One of our advocates can assist you. You do not have to go through this alone.",
      },
    ],
  };

  await client.createOrReplace(supportPage);
  console.log("  ✓ page-support");

  console.log("\nDone! Visit http://localhost:3000/support");
}

seed().catch((err) => {
  console.error(err.message ?? err);
  process.exit(1);
});
