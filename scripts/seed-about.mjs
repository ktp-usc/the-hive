/**
 * Seed the About page + all team member documents.
 * Run with:  node scripts/seed-about.mjs
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
  console.log("\nSeeding About page…");

  // ── Upload member images ────────────────────────────────────────────────────
  const imageFiles = [
    { src: "/member-images/Ashley2.png",                   filename: "Ashley2.png",                   id: "ashley"    },
    { src: "/member-images/AlysonBerry.avif",              filename: "AlysonBerry.avif",              id: "alyson"    },
    { src: "/member-images/JalonaWebb.avif",               filename: "JalonaWebb.avif",               id: "jalona"    },
    { src: "/member-images/KinnethiaTolson.avif",          filename: "KinnethiaTolson.avif",          id: "kinnethia" },
    { src: "/member-images/BeatriceHernandezMorales.avif", filename: "BeatriceHernandezMorales.avif", id: "beatrice"  },
    { src: "/member-images/AshleyThomas.avif",             filename: "AshleyThomas.avif",             id: "ashleyt"   },
    { src: "/member-images/StephanieKirkland.avif",        filename: "StephanieKirkland.avif",        id: "stephanie" },
    { src: "/member-images/JordanCrapps.avif",             filename: "JordanCrapps.avif",             id: "jordan"    },
    { src: "/member-images/AndreaLee.avif",                filename: "AndreaLee.avif",                id: "andrea"    },
    { src: "/member-images/AnnTurner.avif",                filename: "AnnTurner.avif",                id: "ann"       },
    { src: "/member-images/AnthonyBryant.avif",            filename: "AnthonyBryant.avif",            id: "anthony"   },
    { src: "/member-images/BencyBeals.avif",               filename: "BencyBeals.avif",               id: "bency"     },
    { src: "/member-images/EboneIvory.avif",               filename: "EboneIvory.avif",               id: "ebone"     },
    { src: "/member-images/NaomiWalton.avif",              filename: "NaomiWalton.avif",              id: "naomi"     },
    { src: "/member-images/NickiWoodson.avif",             filename: "NickiWoodson.avif",             id: "nicki"     },
    { src: "/member-images/TerryJudy.avif",                filename: "TerryJudy.avif",                id: "terry"     },
    { src: "/member-images/BeeEmpowered.avif",             filename: "BeeEmpowered.avif",             id: "bee"       },
  ];

  const imgs = {};
  for (const { src, filename, id } of imageFiles) {
    process.stdout.write(`  Uploading ${filename}…`);
    imgs[id] = await uploadImage(src, filename);
    console.log(imgs[id] ? " ✓" : " skipped");
  }

  // ── Team member documents ───────────────────────────────────────────────────

  // Founder
  await client.createOrReplace({
    _id: "team-ashley-olayinka",
    _type: "teamMember",
    name: "Ashley Olayinka",
    role: "Founder & Chief Executive Officer",
    group: "founder",
    image: ref(imgs.ashley),
    storyEyebrow: "Founder Story",
    narrativeLabel: "Narrative",
    narrativeParagraphs: [
      "A lifelong advocate, Ashley draws from both lived experience and a strong academic foundation, holding a B.A. in Psychology from Columbia College and a Master of Social Work from the University of Washington.",
    ],
    sparkTitle: "Founding Spark",
    sparkBody:
      "As a survivor of sexual abuse and a native of South Carolina, Ashley Olayinka recognized the critical gaps in culturally responsive support for Black and Brown women and girls impacted by gender-based violence.",
    visionTitle: "Vision Today",
    visionBody:
      "Today, Ashley leads The Hive alongside fellow survivors, working to decrease barriers and expand access to equitable, trauma-informed, and economically empowering services.",
    profileBody:
      "Ashley Olayinka is a transformative leader, healing justice advocate, and founder of The Hive.",
  });
  console.log("  ✓ Ashley Olayinka (founder)");

  // Team members
  const teamMembers = [
    {
      _id: "team-alyson-berry",
      name: "Alyson Berry",
      role: "Executive Administrator",
      email: "alyson@thehivecc.org",
      extension: "ext 104",
      imgKey: "alyson",
    },
    {
      _id: "team-jalona-webb",
      name: "Jalona Webb",
      role: "Legal Outreach Advocate",
      email: "jalona.webb@thehivecc.org",
      extension: "ext 108",
      imgKey: "jalona",
    },
    {
      _id: "team-kinnethia-tolson",
      name: "Kinnethia Tolson",
      role: "Education and Volunteer Coordinator",
      email: "kinnethia@thehivecc.org",
      extension: "ext. 109",
      imgKey: "kinnethia",
    },
    {
      _id: "team-beatrice-hernandez-morales",
      name: "Beatrice Hernandez-Morales",
      role: "Bilingual Outreach Advocate",
      email: "beatrice@thehivecc.org",
      extension: "ext. 107",
      imgKey: "beatrice",
    },
  ];

  for (const m of teamMembers) {
    await client.createOrReplace({
      _id: m._id,
      _type: "teamMember",
      name: m.name,
      role: m.role,
      group: "team",
      email: m.email,
      extension: m.extension,
      image: ref(imgs[m.imgKey]),
    });
    console.log(`  ✓ ${m.name} (team)`);
  }

  // Board members
  const boardMembers = [
    {
      _id: "board-stephanie-kirkland",
      name: "Dr. Stephanie Kirkland",
      role: "Board Chair",
      bio: "Identity Dynamics\nCEO",
      imgKey: "stephanie",
    },
    {
      _id: "board-jordan-crapps",
      name: "Jordan Crapps",
      role: "Vice Chair",
      bio: "Gallivan, White, Boyd\nPartner",
      imgKey: "jordan",
    },
    {
      _id: "board-andrea-lee",
      name: "Andrea Lee",
      role: "Treasurer",
      bio: "Center for Community Health Alignment\nAssociate Director of Operations",
      imgKey: "andrea",
    },
    {
      _id: "board-ann-turner",
      name: "Ann Turner",
      role: "AVP",
      bio: "Underwriting Operations",
      imgKey: "ann",
    },
    {
      _id: "board-anthony-bryant",
      name: "Anthony Bryant",
      role: "Board Member",
      bio: "Leadership Strategist, Speaker, Author",
      imgKey: "anthony",
    },
    {
      _id: "board-bency-beals",
      name: "Bency Beals",
      role: "Board Member",
      bio: "Ignite Leadership Solutions\nCEO",
      imgKey: "bency",
    },
    {
      _id: "board-ebone-ivory",
      name: "Ebone Ivory",
      role: "Board Member",
      bio: "SC Department of Employment and Workforce\nAdministrative Hearing Officer",
      imgKey: "ebone",
    },
    {
      _id: "board-naomi-walton",
      name: "Naomi Walton",
      role: "Board Member",
      imgKey: "naomi",
    },
    {
      _id: "board-nicki-woodson",
      name: "Nicki Woodson",
      role: "Board Member",
      bio: "Starbucks\nManager of Partner Resources (HR)",
      imgKey: "nicki",
    },
    {
      _id: "board-terry-judy",
      name: "Terry Judy",
      role: "Board Member",
      bio: "Ignite Leadership Solutions\nImpact & Partnerships Director",
      imgKey: "terry",
    },
  ];

  for (const m of boardMembers) {
    await client.createOrReplace({
      _id: m._id,
      _type: "teamMember",
      name: m.name,
      role: m.role,
      group: "board",
      ...(m.bio ? { bio: m.bio } : {}),
      image: ref(imgs[m.imgKey]),
    });
    console.log(`  ✓ ${m.name} (board)`);
  }

  // ── About page document ─────────────────────────────────────────────────────
  await client.createOrReplace({
    _id: "page-about",
    _type: "page",
    title: "About Us",
    slug: { _type: "slug", current: "about" },
    sections: [
      {
        _key: "aboutHero",
        _type: "sectionHero",
        headline: "Meet the people shaping The Hive.",
        subheadline: "Members",
      },
      {
        _key: "aboutImageText",
        _type: "sectionImageText",
        heading: "Why We Were Founded",
        body: "We were founded in 2015 with a visionary spirit and urgent objective: to help prevent violence against some of our nation's most vulnerable populations of women and girls.",
        image: ref(imgs.bee),
      },
      {
        _key: "aboutFounderTeam",
        _type: "sectionTeam",
        groupLabel: "Founder/CEO",
        members: [{ _type: "reference", _ref: "team-ashley-olayinka" }],
      },
      {
        _key: "aboutTeam",
        _type: "sectionTeam",
        groupLabel: "Team Members",
        members: teamMembers.map((m) => ({ _type: "reference", _ref: m._id })),
      },
      {
        _key: "aboutBoard",
        _type: "sectionTeam",
        groupLabel: "Board of Directors",
        members: boardMembers.map((m) => ({ _type: "reference", _ref: m._id })),
      },
      {
        _key: "aboutJoin",
        _type: "sectionRichText",
        eyebrow: "Join The Hive",
        heading: "Looking to join our team?",
        body: "Send your resume and a cover letter to hello@thehivecc.org",
      },
    ],
  });

  console.log("  ✓ About page");
  console.log("\nDone!");
}

seed().catch((err) => {
  console.error(err.message ?? err);
  process.exit(1);
});
