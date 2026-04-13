/**
 * run once with:  node scripts/seed-about-us.mjs
 * uploads team/board member images from public/member-images/ into Sanity
 * and creates teamMember documents + the About Us page document.
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
    ".jfif": "image/jpeg",
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

// ── member data ────────────────────────────────────────────────────────────

const founder = [
  {
    id: "team-member-ashley-olayinka",
    name: "Ashley Olayinka",
    role: "Founder & Chief Executive Officer",
    group: "founder",
    bio: "Ashley Olayinka is a transformative leader, healing justice advocate, and founder of The Hive, a culturally specific peer advocacy organization serving Black and Brown survivors of gender-based violence in South Carolina.",
    profileBody: "Ashley Olayinka is a transformative leader, healing justice advocate, and founder of The Hive, a culturally specific peer advocacy organization serving Black and Brown survivors of gender-based violence in South Carolina.",
    storyEyebrow: "Founder Story",
    narrativeLabel: "Narrative",
    narrativeParagraphs: [
      "A lifelong advocate, Ashley draws from both lived experience and a strong academic foundation, holding a B.A. in Psychology from Columbia College and a Master of Social Work from the University of Washington. She is known for her ability to mobilize people, resources, and ideas to drive meaningful social change.",
      "Ashley has served in numerous philanthropic and leadership roles, including Board Member of Prisma Health Hospital Foundation, member of the Central Carolina Community Foundation African American Philanthropy Committee, and Chair of the Richland County Domestic Violence Coordinating Community Council. She currently serves on the South Carolina Victim Services Coordinating Council.",
      "Her impact has been nationally recognized. Ashley is a 2022 Aspen SOAR Fellow and recipient of honors including The State's 20 Under 40 and a Jefferson Award. She is a sought-after speaker and facilitator, having presented at the Essence Festival and been featured in outlets such as Black Enterprise. Her work focuses on social and racial justice, gender-based violence, and leadership.",
      "Above all, Ashley is a mother to three children, Corinne Elizabeth, Caleb Josiah, and Collin Noah, who inspire her continued commitment to building safer, more equitable communities.",
    ],
    sparkTitle: "Founding Spark",
    sparkBody:
      "As a survivor of sexual abuse and a native of South Carolina, Ashley Olayinka recognized the critical gaps in culturally responsive support for Black and Brown women and girls impacted by gender-based violence. Her lived experience, combined with her professional training, inspired her to create a space where survivors could access care that affirms their identities, addresses systemic barriers, and fosters true healing. This vision became The Hive.",
    visionTitle: "Vision Today",
    visionBody:
      "Today, Ashley leads The Hive alongside fellow survivors, working to decrease barriers and expand access to equitable, trauma-informed, and economically empowering services. Her leadership is rooted in healing justice, ensuring that survivors are not only supported, but also equipped to reclaim their autonomy, mental health, and economic mobility. She continues to advocate for systems change so that women and girls of color are safe, seen, and supported.",
    src: "/member-images/Ashley2.png",
  },
];

const teamMembers = [
  {
    id: "team-member-alyson-berry",
    name: "Alyson Berry",
    role: "Executive Administrator",
    group: "team",
    email: "alyson@thehivecc.org",
    extension: "ext 104",
    src: "/member-images/AlysonBerry.avif",
  },
  {
    id: "team-member-jalona-webb",
    name: "Jalona Webb",
    role: "Legal Outreach Advocate",
    group: "team",
    email: "jalona.webb@thehivecc.org",
    extension: "ext 108",
    src: "/member-images/JalonaWebb.avif",
  },
  {
    id: "team-member-kinnethia-tolson",
    name: "Kinnethia Tolson",
    role: "Education and Volunteer Coordinator",
    group: "team",
    email: "kinnethia@thehivecc.org",
    extension: "ext. 109",
    src: "/member-images/KinnethiaTolson.avif",
  },
  {
    id: "team-member-beatrice-hernandez-morales",
    name: "Beatrice Hernandez-Morales",
    role: "Bilingual Outreach Advocate",
    group: "team",
    email: "beatrice@thehivecc.org",
    extension: "ext. 107",
    src: "/member-images/BeatriceHernandezMorales.avif",
  },
];

const boardMembers = [
  {
    id: "team-member-stephanie-kirkland",
    name: "Dr. Stephanie Kirkland",
    role: "Board Chair",
    group: "board",
    bio: "Identity Dynamics\nCEO",
    src: "/member-images/StephanieKirkland.avif",
  },
  {
    id: "team-member-jordan-crapps",
    name: "Jordan Crapps",
    role: "Vice Chair",
    group: "board",
    bio: "Gallivan, White, Boyd\nPartner",
    src: "/member-images/JordanCrapps.avif",
  },
  {
    id: "team-member-andrea-lee",
    name: "Andrea Lee",
    role: "Treasurer",
    group: "board",
    bio: "Center for Community Health Alignment\nAssociate Director of Operations",
    src: "/member-images/AndreaLee.avif",
  },
  {
    id: "team-member-ann-turner",
    name: "Ann Turner",
    role: "AVP",
    group: "board",
    bio: "Underwriting Operations",
    src: "/member-images/AnnTurner.avif",
  },
  {
    id: "team-member-anthony-bryant",
    name: "Anthony Bryant",
    role: "Board Member",
    group: "board",
    bio: "Leadership Strategist, Speaker, Author",
    src: "/member-images/AnthonyBryant.avif",
  },
  {
    id: "team-member-bency-beals",
    name: "Bency Beals",
    role: "Board Member",
    group: "board",
    bio: "Ignite Leadership Solutions\nCEO",
    src: "/member-images/BencyBeals.avif",
  },
  {
    id: "team-member-ebone-ivory",
    name: "Ebone Ivory",
    role: "Board Member",
    group: "board",
    bio: "SC Department of Employment and Workforce\nAdministrative Hearing Officer",
    src: "/member-images/EboneIvory.avif",
  },
  {
    id: "team-member-naomi-walton",
    name: "Naomi Walton",
    role: "Board Member",
    group: "board",
    src: "/member-images/NaomiWalton.avif",
  },
  {
    id: "team-member-nicki-woodson",
    name: "Nicki Woodson",
    role: "Board Member",
    group: "board",
    bio: "Starbucks\nManager of Partner Resources (HR)",
    src: "/member-images/NickiWoodson.avif",
  },
  {
    id: "team-member-terry-judy",
    name: "Terry Judy",
    role: "Board Member",
    group: "board",
    bio: "Ignite Leadership Solutions\nImpact & Partnerships Director",
    src: "/member-images/TerryJudy.avif",
  },
];

const allMembers = [...founder, ...teamMembers, ...boardMembers];

// ── seed ───────────────────────────────────────────────────────────────────

async function seed() {
  const memberRefs = {};

  // ── Upload images and create teamMember documents ──────────────────────
  console.log("\nSeeding team members…");

  for (const member of allMembers) {
    const filename = member.src.split("/").pop();
    process.stdout.write(`  Uploading photo for ${member.name}…`);
    const photo = await uploadImage(member.src, filename);
    console.log(photo ? " done" : " skipped");

    const doc = {
      _id: member.id,
      _type: "teamMember",
      name: member.name,
      role: member.role,
      group: member.group,
      ...(member.bio        ? { bio: member.bio }                       : {}),
      ...(member.email      ? { email: member.email }                   : {}),
      ...(member.extension  ? { extension: member.extension }           : {}),
      ...(member.profileBody       ? { profileBody: member.profileBody }             : {}),
      ...(member.storyEyebrow      ? { storyEyebrow: member.storyEyebrow }           : {}),
      ...(member.narrativeLabel    ? { narrativeLabel: member.narrativeLabel }       : {}),
      ...(member.narrativeParagraphs ? { narrativeParagraphs: member.narrativeParagraphs } : {}),
      ...(member.sparkTitle  ? { sparkTitle: member.sparkTitle }         : {}),
      ...(member.sparkBody   ? { sparkBody: member.sparkBody }           : {}),
      ...(member.visionTitle ? { visionTitle: member.visionTitle }       : {}),
      ...(member.visionBody  ? { visionBody: member.visionBody }         : {}),
      ...(photo ? { image: photo } : {}),
    };

    await client.createOrReplace(doc);
    console.log(`  ✓ ${member.name} (${member.group})`);
    memberRefs[member.id] = {
      _type: "reference",
      _key: `ref-${member.id}`,
      _ref: member.id,
    };
  }

  // ── BeeEmpowered image ─────────────────────────────────────────────────
  console.log("\nUploading BeeEmpowered image…");
  const beeEmpoweredImage = await uploadImage(
    "/member-images/BeeEmpowered.avif",
    "BeeEmpowered.avif"
  );
  console.log(beeEmpoweredImage ? "  ✓ BeeEmpowered.avif" : "  ⚠ skipped");

  // ── page document ──────────────────────────────────────────────────────
  console.log("\nCreating About Us page…");

  const founderRefs = founder.map((m) => memberRefs[m.id]);
  const teamRefs    = teamMembers.map((m) => memberRefs[m.id]);
  const boardRefs   = boardMembers.map((m) => memberRefs[m.id]);

  const aboutPage = {
    _id: "page-about",
    _type: "page",
    title: "About Us",
    slug: { _type: "slug", current: "about" },
    sections: [
      {
        _key: "section-hero",
        _type: "sectionHero",
        headline: "Meet the people shaping The Hive.",
        subheadline: "Members",
      },
      {
        _key: "section-why-founded",
        _type: "sectionImageText",
        heading: "Why We Were Founded",
        body: "We were founded in 2015 with a visionary spirit and urgent objective: to help prevent violence against some of our nation's most vulnerable populations of women and girls. As a survivor-led, survivor-driven peer advocacy organization, we bring a culturally competent approach to preventing and educating survivors and their surrounding communities about sexual assault, intimate partner violence, and stalking. We exist to enhance support services and prevention for women and girls of color and those experiencing economic instability.",
        ...(beeEmpoweredImage ? { image: beeEmpoweredImage } : {}),
      },
      {
        _key: "section-founder",
        _type: "sectionTeam",
        groupLabel: "Founder/CEO",
        members: founderRefs,
      },
      {
        _key: "section-team",
        _type: "sectionTeam",
        eyebrow: "Team",
        groupLabel: "Team Members",
        members: teamRefs,
      },
      {
        _key: "section-board",
        _type: "sectionTeam",
        eyebrow: "Leadership",
        groupLabel: "Board of Directors",
        members: boardRefs,
      },
      {
        _key: "section-join",
        _type: "sectionRichText",
        eyebrow: "Join The Hive",
        heading: "Looking to join our team?",
        body: "Send your resume and a cover letter to hello@thehivecc.org",
      },
    ],
  };

  await client.createOrReplace(aboutPage);
  console.log("  ✓ page-about");

  console.log("\nDone! Visit http://localhost:3000/about");
}

seed().catch((err) => {
  console.error(err.message ?? err);
  process.exit(1);
});
