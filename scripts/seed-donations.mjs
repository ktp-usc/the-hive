/**
 * Seed the Donations (Invest in The Hive) page.
 * Run with:  node scripts/seed-donations.mjs
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
  const map = {
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".webp": "image/webp",
    ".avif": "image/avif",
  };
  return map[ext] ?? "application/octet-stream";
}

async function uploadImage(srcPath, filename) {
  const fullPath = resolve(process.cwd(), "public", srcPath.replace(/^\//, ""));
  if (!existsSync(fullPath)) {
    console.warn(`  ⚠ image not found: ${fullPath}`);
    return null;
  }
  const asset = await client.assets.upload("image", createReadStream(fullPath), {
    filename,
    contentType: mimeType(filename),
  });
  return { _type: "image", asset: { _type: "reference", _ref: asset._id } };
}

function ref(image) {
  return image ?? null;
}

async function seed() {
  console.log("\nSeeding Donations page…");

  const imageFiles = [
    { src: "/donations/casitaofcare1.avif",  filename: "casitaofcare1.avif",  id: "casita1"   },
    { src: "/donations/casitaofcare3.avif",  filename: "casitaofcare3.avif",  id: "casita3"   },
    { src: "/donations/casitaofcare4.png",   filename: "casitaofcare4.png",   id: "casita4"   },
    { src: "/partner-images/TheBeeBox.avif", filename: "TheBeeBox.avif",      id: "beebox"    },
    { src: "/donations/keepersclub2.avif",   filename: "keepersclub2.avif",   id: "keepers2"  },
    { src: "/donations/keepersclub3.avif",   filename: "keepersclub3.avif",   id: "keepers3"  },
    { src: "/donations/keepersclub4.avif",   filename: "keepersclub4.avif",   id: "keepers4"  },
    { src: "/donations/keepersclub5.avif",   filename: "keepersclub5.avif",   id: "keepers5"  },
  ];

  const imgs = {};
  for (const { src, filename, id } of imageFiles) {
    process.stdout.write(`  Uploading ${filename}…`);
    imgs[id] = await uploadImage(src, filename);
    console.log(imgs[id] ? " ✓" : " skipped");
  }

  await client.createOrReplace({
    _id: "page-invest-in-the-hive",
    _type: "page",
    title: "Support survivors through spaces of care and sustaining generosity.",
    slug: { _type: "slug", current: "invest-in-the-hive" },
    description:
      "Support survivors with a gift to The Hive. Every dollar helps fund the Casita of Care, monthly giving, and survivor-centered outreach.",
    sections: [
      // ── Hero ────────────────────────────────────────────────────────────────
      {
        _key: "donationsHero",
        _type: "sectionDonationsHero",
        eyebrow: "Invest in the Hive",
        primaryCta: {
          label: "Donate Now",
          href: "https://thehivecc.networkforgood.com/projects/204053-what-is-hope",
        },
        secondaryCta: {
          label: "Volunteer",
          href: "https://pointapp.org/orgs/7916",
        },
        highlights: [
          {
            _key: "h1",
            title: "Casita of Care",
            body: "A boutique-style resource space designed around dignity, privacy, and belonging.",
          },
          {
            _key: "h2",
            title: "Monthly Giving",
            body: "The Keepers Club creates steady support that helps The Hive respond month after month.",
          },
          {
            _key: "h3",
            title: "Community Powered",
            body: "Every gift helps survivors feel seen, supported, and connected to a stronger community.",
          },
        ],
      },

      // ── Volunteer opportunities ──────────────────────────────────────────────
      {
        _key: "donationsVolunteer",
        _type: "sectionVolunteerCards",
        sectionTitle: "Volunteer Opportunities",
        cards: [
          {
            _key: "v1",
            title: "The Voices of Washindi — Speaker's Bureau",
            description:
              "A community and platform for survivors of sexual assault and intimate partner violence to share their stories of resiliency and courage through the incorporation of the arts and craft of storytelling. Additional training is required.",
          },
          {
            _key: "v2",
            title: "Hive Ambassadors",
            description:
              "If you love sharing The Hive, then tabling and general outreach may interest you. In this role you will have the opportunity to connect with the community and share about The Hive at community based events.",
          },
          {
            _key: "v3",
            title: "Hive Hostesses/Hosts",
            description:
              "Hive Hostesses/Hosts are special event volunteers who may not have the capacity to volunteer regularly but desire to support our work. As a volunteer in this area you will be contacted to volunteer when we have Hive hosted events such as our Annual SC Survivors Summit or fundraisers.",
          },
          {
            _key: "v4",
            title: "Volunteer Groups",
            description:
              "We have opportunities available for groups looking to volunteer together. These opportunities for groups of 5 or more include packing Bee Boxes of support for survivors or assembling BuzzPaks for our prevention education programming for youth.",
          },
        ],
      },

      // ── Donation opportunity ─────────────────────────────────────────────────
      {
        _key: "donationsOpportunity",
        _type: "sectionDonationOpportunity",
        eyebrow: "Support the Hive",
        sectionTitle: "Donation Opportunities",
        body: "Become a Steward of Hope today. Donate to The Hive and support survivors of domestic and sexual abuse who are seeking a safe community. Either donate to the Survivor's Pantry or Peer Advocacy/Outreach to directly help our survivors, or sign up and become a member of the Keeper's Club and donate monthly. If you want to directly donate to the organization, donate to the Hope Is Fund, which helps in all day-to-day operating activities.",
        ctaLabel: "Donate Now",
        ctaHref: "https://thehivecc.networkforgood.com/projects/204053-what-is-hope",
      },

      // ── Tabs intro ───────────────────────────────────────────────────────────
      {
        _key: "donationsTabs",
        _type: "sectionDonationsTabsIntro",
        eyebrow: "Giving Sections",
        heading: "Explore the giving story that speaks to you.",
        casitaTabLabel: "Casita of Care",
        keepersTabLabel: "The Keepers Club",
      },

      // ── Casita overview ──────────────────────────────────────────────────────
      {
        _key: "casitaOverview",
        _type: "sectionDonationsCasitaOverview",
        eyebrow: "Casita of Care",
        title: "More Than a Pantry. A Place of Belonging.",
        paragraphs: [
          "The Casita of Care reimagines what free resources can look and feel like. This isn't a thrift store or donation center, it's a thoughtfully designed boutique where survivors can shop with dignity for the items they need and want.",
          "From culturally specific hair and beauty products to household essentials and cleaning supplies, every detail is chosen with care and intention.",
        ],
        cta: {
          label: "Support the Casita",
          href: "https://thehivecc.networkforgood.com/projects/204053-what-is-hope",
        },
        imageAlt: "Casita of Care main photo",
        image: ref(imgs.casita1),
      },

      // ── Casita refuge ────────────────────────────────────────────────────────
      {
        _key: "casitaRefuge",
        _type: "sectionDonationsCasitaRefuge",
        title: "A Refuge for Survivors in the Midlands",
        paragraphs: [
          "The Casita of Care serves those in the South Carolina Midlands who are healing from sexual assault, intimate partner violence, and stalking.",
          "Survivors leave feeling a little more hopeful, a little more grounded, and with one less thing on their worry list. They walk away empowered, knowing their story is valued, their healing matters, and they are part of a community standing with them.",
        ],
        imageAlt: "Casita of Care detail photo",
        image: ref(imgs.casita3),
      },

      // ── Casita community ─────────────────────────────────────────────────────
      {
        _key: "casitaCommunity",
        _type: "sectionDonationsCasitaCommunity",
        eyebrow: "Community Story",
        title: "A Community Rallies: How the Casita of Care Came to Be",
        lead: "The story of the Casita of Care is one of persistence, heart, and the power of community.",
        paragraphs: [
          "The Casita of Care started with a simple conviction: survivors deserve dignity when accessing resources. The Hive began keeping hygiene and household items in a closet for those who needed them. In early 2025, a generous donation drive brought in so many supplies that the overflow broke the closet doors.",
          "After moving to a donated storage shed, the team faced a new challenge: the South Carolina sun made the space hard to use. Early support from local partners helped make the shed functional through insulation, electricity, and the first infrastructure upgrades.",
          "Then the broader community stepped in. Business owners, volunteers, and generous supporters helped transform the idea into something beautiful and real. What started as a stopgap solution became a boutique-style resource space created with care, intention, and deep belief in survivor-centered healing.",
        ],
      },

      // ── Casita ways ──────────────────────────────────────────────────────────
      {
        _key: "casitaWays",
        _type: "sectionDonationsCasitaWays",
        eyebrow: "Ways to Help",
        title: "Support the space with practical care.",
        body: "Help stock the Casita, sustain the experience, and keep this resource ready for each survivor who comes through the door.",
        volunteerCta: { label: "Volunteer", href: "https://pointapp.org/orgs/7916" },
        wishlistCta: {
          label: "Casita Wishlist",
          href: "https://www.amazon.com/hz/wishlist/ls/OIKGIA7FGP0W?ref_=wl_share",
        },
        wishlistNote:
          "Want to donate practical items directly? The Casita of Care Amazon wishlist makes it easy to send needed essentials straight to the space.",
        waysToGive: [
          {
            _key: "w1",
            title: "Donate essential items",
            description:
              "Stock the space with hygiene products, cleaning supplies, household basics, and beauty items survivors actually want to choose from.",
          },
          {
            _key: "w2",
            title: "Give financially",
            description:
              "Help keep the shelves full, the space maintained, and the Casita ready for each person who walks through the door.",
          },
          {
            _key: "w3",
            title: "Volunteer with care",
            description:
              "Support sorting, restocking, and welcoming community efforts that make the Casita feel calm, beautiful, and survivor-centered.",
          },
        ],
      },

      // ── Casita bee box ───────────────────────────────────────────────────────
      {
        _key: "casitaBeeBox",
        _type: "sectionDonationsCasitaBeeBox",
        eyebrow: "The Bee Box",
        title: "Support at the Point of Disclosure",
        body: "Sitting in a cold waiting room, trembling with fear as one contemplates disclosing their abuse is never a vision one would desire to have, but this is often the reality for survivors of abuse and violence. The Bee Box was designed to support survivors who disclose in public settings such as healthcare settings, police stations, schools, or churches.",
        imageAlt: "The Bee Box",
        image: ref(imgs.beebox),
      },

      // ── Casita closing ───────────────────────────────────────────────────────
      {
        _key: "casitaClosing",
        _type: "sectionDonationsCasitaClosing",
        dedicationTitle: "Dedicated in Honor of Brianna",
        dedicationParagraphs: [
          "The Casita of Care is dedicated in honor of Brianna, a beloved teacher, sister, daughter, auntie, friend, and lover of crochet. May the warmth and care she radiated in life continue to live through this space.",
          "We also dedicate the Casita of Care to all those whose lives were taken by domestic violence, sexual assault, and trafficking. May their names be held with dignity, and may this space offer light, care, and hope to our community.",
        ],
        thanksTitle: "Thank You to Our Community Partners",
        thanksBody:
          "The Casita of Care exists because over 25 local businesses and individuals said yes. From interior design and construction to marketing, flooring, HVAC, and beyond, each partner contributed their time, talent, and resources to make this vision a reality.",
      },

      // ── Keepers overview ─────────────────────────────────────────────────────
      {
        _key: "keepersOverview",
        _type: "sectionDonationsKeepersOverview",
        eyebrow: "The Keepers Club",
        title: "Stewarding sustainability for survivors every month.",
        paragraphs: [
          "The Keepers Club is The Hive's monthly giving community. Recurring support helps create a steadier budget for emergency relief, counseling, outreach, and prevention work as demand continues to grow.",
          "It's designed for people who want their generosity to keep showing up month after month, helping survivors access stable, responsive care when they need it most.",
        ],
        cta: {
          label: "Join The Keepers Club",
          href: "https://thehivecc.networkforgood.com/projects/204053-what-is-hope",
        },
        imageAlt: "Keepers Club main photo",
        image: ref(imgs.keepers2),
      },

      // ── Keepers benefits ─────────────────────────────────────────────────────
      {
        _key: "keepersBenefits",
        _type: "sectionDonationsKeepersBenefits",
        eyebrow: "Member Benefits",
        title: "A giving community with meaningful connection.",
        benefits: [
          "A welcome packet with a Keeper's Club shirt and Hive decal.",
          "Bee In The Know reports and annual impact updates.",
          "Exclusive invitations to Hive events throughout the year.",
          "A year-end tax deduction letter for recurring gifts.",
        ],
        contactLabel: "Contact",
        contactPrefix:
          "For questions about The Keepers Club, contact The Hive's Philanthropy and Partnerships Officer at",
        contactEmail: "chio@thehivecc.org",
      },

      // ── Keepers tiers ────────────────────────────────────────────────────────
      {
        _key: "keepersTiers",
        _type: "sectionDonationsKeepersTiers",
        eyebrow: "Monthly Levels",
        title: "Choose the level of support that fits your giving.",
        body: "Every tier helps fuel survivor-centered care, with monthly giving that makes The Hive's response more consistent and sustainable.",
        focusedImpactTitle: "Focused impact",
        focusedImpactBody:
          "Monthly gifts help sustain hotel stays, counseling access, survivor-based outreach, and awareness and prevention training throughout the year.",
        tiers: [
          {
            _key: "t1",
            amount: "$10/mo",
            yearly: "$120/year",
            name: "Hives of Hope",
            description:
              "A simple monthly gift that helps provide practical support like Bee Boxes and everyday essentials.",
          },
          {
            _key: "t2",
            amount: "$20/mo",
            yearly: "$240/year",
            name: "Beeyond Donor",
            description:
              "Strengthens access to survivor support such as counseling and other stabilizing services throughout the year.",
          },
          {
            _key: "t3",
            amount: "$30/mo",
            yearly: "$360/year",
            name: "Beelievers Circle",
            description:
              "Creates dependable funding that helps cover urgent needs and extend survivor-centered care each month.",
          },
          {
            _key: "t4",
            amount: "$50/mo",
            yearly: "$600/year",
            name: "Pollinator Pledge",
            description:
              "Expands The Hive's ability to fund prevention training, outreach, and stronger long-term community impact.",
          },
        ],
      },

      // ── Keepers impact ───────────────────────────────────────────────────────
      {
        _key: "keepersImpact",
        _type: "sectionDonationsKeepersImpact",
        eyebrow: "Supported Through Your Giving",
        title: "Recurring support helps fuel this work all year long.",
        impactAreas: [
          { _key: "ia1", title: "Emergency and Economic Relief", alt: "Emergency and economic relief support", image: ref(imgs.keepers2) },
          { _key: "ia2", title: "Counseling",                    alt: "Counseling support",                    image: ref(imgs.keepers3) },
          { _key: "ia3", title: "Survivor-Based Outreach",       alt: "Survivor-based outreach",               image: ref(imgs.keepers4) },
          { _key: "ia4", title: "Education and Prevention",      alt: "Education and prevention",              image: ref(imgs.keepers5) },
        ],
      },
    ],
  });

  console.log("  ✓ Donations page");
  console.log("\nDone!");
}

seed().catch((err) => {
  console.error(err.message ?? err);
  process.exit(1);
});
