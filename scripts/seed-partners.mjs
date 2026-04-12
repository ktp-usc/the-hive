/**
 * Seeds the Sanity dataset with all Our Partners page content.
 * Run once with:  node scripts/seed-partners.mjs
 *
 * Requires SANITY_API_WRITE_TOKEN in .env.local (Editor role).
 * Uploads partner logo images from public/partner-images/ into Sanity assets.
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

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function mimeType(filename) {
  const ext = extname(filename).toLowerCase();
  const map = {
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".jfif": "image/jpeg",
    ".webp": "image/webp",
    ".avif": "image/avif",
    ".svg": "image/svg+xml",
  };
  return map[ext] ?? "application/octet-stream";
}

async function uploadImage(srcPath, filename, retries = 3) {
  const fullPath = resolve(process.cwd(), "public", srcPath.replace(/^\//, ""));
  if (!existsSync(fullPath)) {
    console.warn(`    ⚠ image not found, skipping logo: ${fullPath}`);
    return null;
  }
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const asset = await client.assets.upload(
        "image",
        createReadStream(fullPath),
        { filename, contentType: mimeType(filename) }
      );
      return { _type: "image", asset: { _type: "reference", _ref: asset._id } };
    } catch (err) {
      if (attempt < retries) {
        const delay = attempt * 2000;
        console.warn(`\n    ⚠ upload failed (attempt ${attempt}/${retries}), retrying in ${delay / 1000}s…`);
        await new Promise((r) => setTimeout(r, delay));
      } else {
        throw err;
      }
    }
  }
}

// ── partner data ───────────────────────────────────────────────────────────

const categories = [
  {
    key: "philanthropic",
    label: "Philanthropic",
    partners: [
      { name: "Junior League of Columbia",                          src: "/partner-images/JLC.png" },
      { name: "Allstate Foundation",                                src: "/partner-images/Allstate.webp" },
      { name: "Bluecross Blueshield of South Carolina",             src: "/partner-images/BCBS.png" },
      { name: "Central Carolina Community Foundation",              src: "/partner-images/CCCF.png" },
      { name: "Columbia Urban League Inc.",                         src: "/partner-images/CUL.png" },
      { name: "Cypress Fund",                                       src: "/partner-images/CypressFund.png" },
      { name: "Emergent Fund",                                      src: "/partner-images/EF.jfif" },
      { name: "Fact Forward",                                       src: "/partner-images/FF.png" },
      { name: "Grantmakers for Girls of Color",                     src: "/partner-images/GGC.png" },
      { name: "WREN",                                               src: "/partner-images/images.png" },
      { name: "Just Beginnings Collaborative",                      src: "/partner-images/JBC.png" },
      { name: "Kolibri",                                            src: "/partner-images/Kolibri.png" },
      { name: "Lipscomb Family Foundation",                         src: "/partner-images/LFF.png" },
      { name: "Lululemon",                                          src: "/partner-images/LL.png" },
      { name: "Molina",                                             src: "/partner-images/Molina.png" },
      { name: "Ms. Foundation",                                     src: "/partner-images/MsFoundation.png" },
      { name: "National Network To End Domestic Violence",          src: "/partner-images/NNEDV.webp" },
      { name: "Pearl Milling Company",                              src: "/partner-images/PMC.jpg" },
      { name: "Southern Black Girls and Women's Consortium",        src: "/partner-images/SBG.webp" },
      { name: "Sisters of Charity Foundation of South Carolina",    src: "/partner-images/SCF.png" },
      { name: "Solidaire",                                          src: "/partner-images/solidaire.png" },
      { name: "Synovus",                                            src: "/partner-images/Synovus.png" },
      { name: "Unum",                                               src: "/partner-images/unum.png" },
      { name: "Walmart",                                            src: "/partner-images/Walmart.png" },
    ],
  },
  {
    key: "nonprofit",
    label: "Non-Profit Organizations",
    partners: [
      { name: "Children's Trust of South Carolina",                                     src: "/partner-images/CT.webp" },
      { name: "Prisma",                                                                  src: "/partner-images/Prisma.webp" },
      { name: "South Carolina Department of Social Services",                            src: "/partner-images/DSS.jpg" },
      { name: "DHEC",                                                                    src: "/partner-images/DHEC.jpg" },
      { name: "Sowing Seeds Into The Midlands",                                          src: "/partner-images/SS.webp" },
      { name: "Sexual Trauma Services",                                                  src: "/partner-images/STS.png" },
      { name: "South Carolina Coalition Against Domestic Violence and Sexual Assault",   src: "/partner-images/SCCADVASA.png" },
      { name: "Lighthouse for Life",                                                     src: "/partner-images/LFL.png" },
      { name: "Surviving Assault Standing Strong",                                       src: "/partner-images/SASS.png" },
      { name: "Peace at Home Advocacy Center",                                           src: "/partner-images/PHAC.png" },
      { name: "Habitat for Humanity",                                                    src: "/partner-images/HFH.png" },
      { name: "Sistercare",                                                               src: "/partner-images/Sistercare.png" },
      { name: "South Carolina Victim Assistance Network",                                src: "/partner-images/SCVAN.webp" },
      { name: "Palmetto Place",                                                          src: "/partner-images/PP.png" },
      { name: "eleven24",                                                                src: "/partner-images/E24.webp" },
      { name: "Epworth Children's Home",                                                 src: "/partner-images/Epworth.png" },
      { name: "The YMCA",                                                                src: "/partner-images/YMCA.png" },
    ],
  },
  {
    key: "lawEnforcement",
    label: "Law Enforcement",
    partners: [
      { name: "Richland County Sheriff Department",      src: "/partner-images/Richland.jpg" },
      { name: "Richland County Inmate Labor Officer",    src: "/partner-images/LaborOfficer.jpg" },
      { name: "Kershaw County Sheriff Department",       src: "/partner-images/Kershaw.webp" },
      { name: "Benedict College Police",                 src: "/partner-images/Benedict.jfif" },
      { name: "Rock Hill Police",                        src: "/partner-images/Rock Hill.webp" },
    ],
  },
  {
    key: "education",
    label: "Education",
    partners: [
      { name: "Benedict College",           src: "/partner-images/BC.png" },
      { name: "Columbia College",           src: "/partner-images/CC.png" },
      { name: "University of South Carolina", src: "/partner-images/USC.jpg" },
      { name: "Lexington District Four",    src: "/partner-images/LD4.png" },
      { name: "Richland School District Two", src: "/partner-images/richland2.jfif" },
    ],
  },
  {
    key: "faithBased",
    label: "Faith Based",
    partners: [
      { name: "Mt. Olive AME Church",         src: "/partner-images/Church1.jfif" },
      { name: "International Praise",         src: "/partner-images/Church2.png" },
      { name: "Journey Church",               src: "/partner-images/Church3.png" },
      { name: "Trinity Baptist Church",       src: "/partner-images/Church4.png" },
      { name: "Ephesus",                      src: "/partner-images/Church5.jpg" },
      { name: "Sandhills Community Church",   src: "/partner-images/Church6.png" },
    ],
  },
  {
    key: "merchant",
    label: "Merchant Based",
    partners: [
      { name: "Painting With a Twist",      src: "/partner-images/Merchant1.jpg" },
      { name: "The Fresh Market",           src: "/partner-images/Merchant2.svg" },
      { name: "BJ's",                       src: "/partner-images/Merchant3.jpg" },
      { name: "Cinnamon Roll Deli",         src: "/partner-images/Merchant4.png" },
      { name: "PDQ",                        src: "/partner-images/Merchant5.webp" },
      { name: "Kiki's Chicken and Waffles", src: "/partner-images/Merchant6.jpg" },
      { name: "Hungry Howie's",             src: "/partner-images/Merchant7.jpg" },
      { name: "Urban Cookhouse",            src: "/partner-images/Merchant8.jpg" },
      { name: "Panera Bread",               src: "/partner-images/Merchant9.jpg" },
      { name: "Blum",                       src: "/partner-images/Merchant10.webp" },
      { name: "Kendra Scott",               src: "/partner-images/Merchant11.jpg" },
      { name: "Hampton St Vineyard",        src: "/partner-images/Merchant12.jpg" },
      { name: "Whole Foods",                src: "/partner-images/Merchant13.jpg" },
    ],
  },
  {
    key: "community",
    label: "Community Partners",
    partners: [
      { name: "Stanley Martin",                        src: "/partner-images/Comm1.webp" },
      { name: "One to One Consulting",                 src: "/partner-images/Comm2.png" },
      { name: "Palmetto Alarm",                        src: "/partner-images/Comm3.png" },
      { name: "Snaply Sites",                          src: "/partner-images/Comm4.webp" },
      { name: "AB4 Building Group",                    src: "/partner-images/Comm5.webp" },
      { name: "T and T HVAC",                          src: "/partner-images/Comm6.avif" },
      { name: "Alsies",                                src: "/partner-images/Comm7.avif" },
      { name: "Carolina on a Dime",                    src: "/partner-images/Comm8.avif" },
      { name: "The Lexico Group",                      src: "/partner-images/Comm9.avif" },
      { name: "Recise Services, LLC",                  src: "/partner-images/Comm10.avif" },
      { name: "Blake Insurance and Financial Group",   src: "/partner-images/Comm11.avif" },
      { name: "HelloSEO",                              src: "/partner-images/Comm12.avif" },
      { name: "Elite Lawn and Landscape",              src: "/partner-images/Comm13.avif" },
      { name: "Gadgetboy Retail and Repair",           src: "/partner-images/Comm14.avif" },
      { name: "S & E Flooring",                        src: "/partner-images/Comm15.avif" },
      { name: "Tidy Tiffany's Organization",           src: "/partner-images/Comm16.avif" },
      { name: "Blackwell Video Marketing",             src: "/partner-images/Comm17.avif" },
      { name: "WECO Candle Company",                   src: "/partner-images/Comm18.avif" },
    ],
  },
];

// ── seed ───────────────────────────────────────────────────────────────────

async function seed() {
  // Track created partner doc ids grouped by category key for the page sections
  const categoryRefs = {};

  for (const category of categories) {
    console.log(`\nSeeding category: ${category.label}`);
    const refs = [];

    for (let i = 0; i < category.partners.length; i++) {
      const partner = category.partners[i];
      const id = `partner-${slugify(partner.name)}`;
      const filename = partner.src.split("/").pop();

      process.stdout.write(`  Uploading logo for ${partner.name}…`);
      const logo = await uploadImage(partner.src, filename);
      console.log(logo ? " done" : " skipped");

      const doc = {
        _id: id,
        _type: "partnerLogo",
        name: partner.name,
        category: category.label,
        sortOrder: i + 1,
        ...(logo ? { logo } : {}),
      };

      await client.createOrReplace(doc);
      console.log(`  ✓ ${partner.name}`);
      refs.push({ _type: "reference", _key: `ref-${id}`, _ref: id });
    }

    categoryRefs[category.key] = { label: category.label, refs };
  }

  // ── Page images ────────────────────────────────────────────────────────
  console.log("\nUploading page images…");
  const beeBoxImg  = await uploadImage("/partner-images/TheBeeBox.avif",      "TheBeeBox.avif");
  const hive135Img = await uploadImage("/images/TheHive_12.06.2025_135.jpg",  "TheHive_partners_135.jpg");
  const hive87Img  = await uploadImage("/images/TheHive_12.06.2025_87.jpg",   "TheHive_partners_87.jpg");
  console.log("  ✓ page images");

  // ── page document ──────────────────────────────────────────────────────
  console.log("\nCreating partners page…");

  const partnersPage = {
    _id: "page-our-partners",
    _type: "page",
    title: "Our Partners",
    slug: { _type: "slug", current: "our-partners" },
    sections: [
      // Hero
      {
        _key: "section-hero",
        _type: "sectionHero",
        headline: "Community grows stronger when we grow together.",
        subheadline: "Our Partners",
      },

      // Carousel
      {
        _key: "section-carousel",
        _type: "sectionImageCarousel",
        heading: "Partnership in Action",
        slides: [
          {
            _key: "slide1",
            title: "A month-long community presence",
            caption:
              "Host The Hive in your business or workplace for a short residency that keeps survivor-centered resources visible and accessible all month long.",
            alt: "The Hive team and community members at an event",
            ...(hive135Img ? { image: hive135Img } : {}),
          },
          {
            _key: "slide2",
            title: "Support at the point of disclosure",
            caption:
              "Partner sites can place Bee Boxes in public-facing spaces so survivors receive grounding items, care tools, and affirming support in the moment they need it.",
            alt: "The Bee Box support package for survivors",
            ...(beeBoxImg ? { image: beeBoxImg } : {}),
          },
          {
            _key: "slide3",
            title: "A partnership tailored to your audience",
            caption:
              "Residencies can combine outreach, awareness moments, and educational touchpoints designed to fit the rhythm of your team, customers, or community.",
            alt: "The Hive staff and supporters gathered together indoors",
            ...(hive87Img ? { image: hive87Img } : {}),
          },
        ],
      },

      // Partnership opportunities labels (CMS-editable strings)
      {
        _key: "section-opportunities",
        _type: "sectionPartnersOpportunities",
        heading: "Partnership Opportunities",
        description:
          "We are grateful for the organizations, businesses, and community leaders who support this work.",
        residencyLabel: "Residency Partnership",
        resourceLabel: "Resource Partnership",
        beeBoxContactText:
          "If you are interested in becoming a partner site for the Bee Box, please reach out to",
        beeBoxEmail: "volunteer@thehivecc.org",
      },

      // Host the Hive (first sectionImageText — convention used by partners-client.tsx)
      {
        _key: "section-host-the-hive",
        _type: "sectionImageText",
        heading: "Host the Hive",
        body: "Invite The Hive into your business, workplace, or community space for a short-term residency, typically around a month or tailored to your schedule. We work alongside your team to create visible, approachable moments of support through outreach, education, and resource-sharing that meet people where they are.",
        ...(hive87Img ? { image: hive87Img } : {}),
      },

      // Bee Box (second sectionImageText — convention used by partners-client.tsx)
      {
        _key: "section-bee-box",
        _type: "sectionImageText",
        heading: "The Bee Box",
        body: "Sitting in a cold waiting room, trembling with fear as one contemplates disclosing their abuse is never a vision one would desire to have, but this is often the reality for survivors of abuse and violence. The Bee Box was designed to support survivors who disclose in public settings such as healthcare settings, police stations, schools, or churches. The Bee Box has been uniquely designed to provide aid and support as a survivor embarks on their journey of healing, consisting of a grounding tool, tea for care and wellness, powerful affirmations written by fellow survivors, and an all-natural room enhancer spray.",
        ...(beeBoxImg ? { image: beeBoxImg } : {}),
      },

      // One sectionPartnerLogos per category
      ...categories.map((cat) => ({
        _key: `section-${cat.key}`,
        _type: "sectionPartnerLogos",
        groupLabel: cat.label,
        partners: categoryRefs[cat.key].refs,
      })),
    ],
  };

  await client.createOrReplace(partnersPage);
  console.log("  ✓ page-our-partners");

  console.log("\nDone!");
}

seed().catch((err) => {
  console.error(err.message ?? err);
  process.exit(1);
});
