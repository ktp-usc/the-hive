/**
 * Seeds the Donations / Impact page in Sanity (slug: "donations").
 * Creates volunteer opportunity cards and a donation opportunity section.
 * Casita of Care and Keepers Club tab content is managed through the
 * sectionVolunteerCards and sectionDonationOpportunity section types.
 *
 * Run once with:  node scripts/seed-donations.mjs
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
  console.log("\nCreating Donations page…");

  const donationsPage = {
    _id: "page-donations",
    _type: "page",
    title: "Impact the Hive",
    description:
      "Choose how you want to support our community - through volunteering or donating.",
    slug: { _type: "slug", current: "donations" },
    sections: [
      {
        _key: "section-hero",
        _type: "sectionHero",
        headline: "Support survivors through spaces of care and sustained generosity.",
        subheadline:
          "Choose how you want to support our community — through volunteering or donating.",
        ctaLabel: "Donate Now",
        ctaHref: "https://thehivecc.networkforgood.com/projects/204053-what-is-hope",
      },
      {
        _key: "section-volunteer",
        _type: "sectionVolunteerCards",
        sectionTitle: "Volunteer Opportunities",
        intro:
          "We have a variety of ways to get involved. Find the opportunity that fits your schedule and passion.",
        cards: [
          {
            _key: "vol-voices-washindi",
            title: "The Voices of Washindi — Speaker's Bureau",
            description:
              "A community and platform for survivors of sexual assault and intimate partner violence to share their stories of resiliency and courage through the incorporation of the arts and craft of storytelling. Additional training is required.",
          },
          {
            _key: "vol-hive-ambassadors",
            title: "Hive Ambassadors",
            description:
              "If you love sharing The Hive, then tabling and general outreach may interest you. In this role you will have the opportunity to connect with the community and share about The Hive at community based events.",
          },
          {
            _key: "vol-hostesses",
            title: "Hive Hostesses/Hosts",
            description:
              "Hive Hostesses/Hosts are special event volunteers who may not have the capacity to volunteer regularly but desire to support our work. As a volunteer in this area you will be contacted to volunteer when we have Hive hosted events such as our Annual SC Survivors Summit or fundraisers.",
          },
          {
            _key: "vol-groups",
            title: "Volunteer Groups",
            description:
              "We have opportunities available for groups looking to volunteer together. These opportunities for groups of 5 or more include packing Bee Boxes of support for survivors or assembling BuzzPaks for our prevention education programming for youth.",
          },
        ],
        ctaLabel: "Sign Up to Volunteer",
        ctaHref: "https://pointapp.org/orgs/7916",
      },
      {
        _key: "section-donation-opportunity",
        _type: "sectionDonationOpportunity",
        sectionTitle: "Donation Opportunities",
        body: "Become a Steward of Hope today. Donate to The Hive and support survivors of domestic and sexual abuse who are seeking a safe community. Either donate to the Survivor's Pantry or Peer Advocacy/Outreach to directly help our survivors, or sign up and become a member of the Keeper's Club and donate monthly. If you want to directly donate to the organization, donate to the Hope Is Fund, which helps in all day-to-day operating activities.",
        ctaLabel: "Donate Now",
        ctaHref: "https://thehivecc.networkforgood.com/projects/204053-what-is-hope",
      },
      {
        _key: "section-casita",
        _type: "sectionRichText",
        eyebrow: "Casita of Care",
        heading: "More Than a Pantry. A Place of Belonging.",
        body: "The Casita of Care reimagines what free resources can look and feel like. This isn't a thrift store or donation center, it's a thoughtfully designed boutique where survivors can shop with dignity for the items they need and want. From culturally specific hair and beauty products to household essentials and cleaning supplies, every detail is chosen with care and intention.",
      },
      {
        _key: "section-keepers",
        _type: "sectionRichText",
        eyebrow: "The Keepers Club",
        heading: "Stewarding sustainability for survivors every month.",
        body: "The Keepers Club is The Hive's monthly giving community. Recurring support helps create a steadier budget for emergency relief, counseling, outreach, and prevention work as demand continues to grow. It's designed for people who want their generosity to keep showing up month after month, helping survivors access stable, responsive care when they need it most.",
      },
    ],
  };

  await client.createOrReplace(donationsPage);
  console.log("  ✓ page-donations");

  console.log(
    "\nNote: donateUrl, volunteerSignupUrl, and amazonWishlistUrl are stored in Site Settings.\n" +
    "Run seed-site-settings.mjs to populate those values.\n"
  );
  console.log("Done! Visit http://localhost:3000/donations");
}

seed().catch((err) => {
  console.error(err.message ?? err);
  process.exit(1);
});
