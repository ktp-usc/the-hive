/**
 * Seeds the Sanity dataset with all awareness page content.
 * Run once with:  node scripts/seed-awareness.mjs
 *
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

// ── cards ──────────────────────────────────────────────────────────────────

const cards = [
  // Prevention
  {
    _id: "card-buzzpak",
    _type: "contentCard",
    key: "buzzpak",
    title: "BuzzPak multiseries",
    description:
      "Explore the foundations of healthy relationships and violence prevention. Engage real-world scenarios that address boundaries, consent, communication, and respect. Build skills to recognize harm, support peers, and create safer school and campus communities. Designed to spark dialogue, foster empathy, and equip young people to lead with awareness and accountability.",
    details: [
      "BuzzPak 2.0",
      "Technical Assistance",
      "Course: Prevention & Awareness — Start at 101, range to 300+ level (technical assistance)",
      "TA offerings",
      "Implement culturally specific training into your program",
      "Train the trainer facilitator model",
    ],
  },
  {
    _id: "card-bee-real",
    _type: "contentCard",
    key: "bee-real",
    title: "Bee Real: Healthy Relationships & Boundaries",
    subtitle: "Available in 1x session",
    description:
      "Examine the building blocks of safe and supportive relationships. Learn to navigate boundaries, consent, and communication while recognizing the signs of unhealthy dynamics. Includes strategies for cultivating empathy, fostering mutual respect, and practicing accountability in everyday interactions. Designed to empower young people to make informed choices and nurture connections rooted in care.",
  },

  // Signature Training Series
  {
    _id: "card-healing-is-work",
    _type: "contentCard",
    key: "healing-is-work",
    title: "Healing is Work: Centering the Brain, Body & Culture in Trauma Care",
    description:
      "Explore how trauma lives in the nervous system and how healing practices can be culturally relevant, affordable, and community-driven. Learn to identify trauma responses and co-regulate in support spaces.",
  },
  {
    _id: "card-interconnected",
    _type: "contentCard",
    key: "interconnected",
    title: "Interconnected: Reimagining Relationships, Boundaries & Belonging",
    subtitle: "This training can be tailored for youth groups (11+)",
    description:
      'Go beyond the basics of "healthy relationships" to explore love, care, and accountability. Explore relationships beyond romantic partnerships—including family, community, and institutions. Includes cultural insights into consent, boundary setting, emotional safety and trust-building.',
  },
  {
    _id: "card-language-of-liberation",
    _type: "contentCard",
    key: "language-of-liberation",
    title: "Language of Liberation: Understanding IPV, SA & Stalking in Context",
    description:
      "Learn the core definitions, root causes, and social dynamics of intimate partner violence, sexual assault, and stalking—while naming how systems and identities intersect in survivor experiences. Build skills in supporting disclosure and safety planning.",
  },
  {
    _id: "card-claiming-voice",
    _type: "contentCard",
    key: "claiming-voice",
    title: "Claiming Voice: Storytelling, Disclosure & Holding Space Without Harm",
    subtitle: "This training can be tailored for youth groups (11+)",
    badge: "Free for Bee Box Partners!",
    description:
      'Gain skills in affirming survivor voice while reducing harm when disclosures are unexpected or occur in everyday interactions. Great for service providers, educators, or anyone who might be a "first listener."',
  },
  {
    _id: "card-cultural-resilience",
    _type: "contentCard",
    key: "cultural-resilience",
    title: "Cultural Resilience in Practice: A BIPOC Approach to Trauma-Informed Care",
    description:
      "Move past checkbox trauma-informed care. This session equips you with tools grounded in cultural practices, and uplift community-defined healing, spiritual safety, and non-clinical responses.",
  },
  {
    _id: "card-cultural-humility",
    _type: "contentCard",
    key: "cultural-humility",
    title: "Cultural Humility: A Liberatory Practice for Safer Communities",
    subtitle: "This training can be tailored for youth groups (11+)",
    description:
      "Unpack the lifelong practice of cultural humility. Learn to engage identity, power, and discomfort while building more honest, accountable systems and relationships. Includes strategies for naming harm, making repairs, and navigating discomfort with intentional dialogue.",
  },
  {
    _id: "card-bystander",
    _type: "contentCard",
    key: "bystander",
    title: "From Bystander to Community Keeper: Responding to Harm with Care & Courage",
    subtitle: "This training can be tailored for youth groups (11+)",
    description:
      "Build practical skills to notice, name, and navigate harm in your everyday environment. From schools to workplaces to public spaces, this training is about courage and community care in action. Covers grounded intervention, survivor-led support, and how to avoid unintentional retraumatization.",
  },

  // Technical Assistance
  {
    _id: "card-custom-training",
    _type: "contentCard",
    key: "custom-training",
    title: "Custom Training Design",
    description: "Tailored workshops and learning journeys for your team.",
  },
  {
    _id: "card-capacity-building",
    _type: "contentCard",
    key: "capacity-building",
    title: "Capacity Building Plans",
    description: "Strengthening internal systems, policies, and practices.",
  },
  {
    _id: "card-collaborative-problem",
    _type: "contentCard",
    key: "collaborative-problem",
    title: "Collaborative Problem-Solving",
    description: "Partnering to navigate challenges and identify solutions.",
  },
  {
    _id: "card-ongoing-support",
    _type: "contentCard",
    key: "ongoing-support",
    title: "Ongoing Support",
    description: "Continued consultation to ensure your team can sustain the work.",
  },
];

// ── page ───────────────────────────────────────────────────────────────────

const awarenessPage = {
  _id: "page-awareness",
  _type: "page",
  title: "Prevention & Awareness",
  slug: { _type: "slug", current: "prevention-and-awareness" },
  sections: [
    {
      _key: "section-hero",
      _type: "sectionHero",
      headline: "Training & Education at The Hive",
      subheadline: "Healing centered learning rooted in culture, care, and connection.",
    },
    {
      _key: "section-hive-values",
      _type: "sectionRichText",
      heading: "Our Guiding Principles: HIVE Values",
      content: [
        {
          _type: "block",
          _key: "hive-values-block",
          style: "normal",
          markDefs: [],
          children: [
            { _type: "span", _key: "s1", text: "At The Hive, we approach training through our core values: " },
            { _type: "span", _key: "s2", marks: ["strong"], text: "Healing" },
            { _type: "span", _key: "s3", text: ", " },
            { _type: "span", _key: "s4", marks: ["strong"], text: "Interconnection" },
            { _type: "span", _key: "s5", text: ", " },
            { _type: "span", _key: "s6", marks: ["strong"], text: "Voice" },
            { _type: "span", _key: "s7", text: ", and " },
            { _type: "span", _key: "s8", marks: ["strong"], text: "Empowerment" },
            { _type: "span", _key: "s9", text: ". These pillars reflect our commitment to nurturing trauma-informed, culturally grounded learning spaces—where people can heal, connect, be heard, and grow together." },
          ],
        },
      ],
    },
    {
      _key: "section-prevention",
      _type: "sectionCardGrid",
      sectionTitle: "Prevention",
      subtitle: "Empowering young people to prevent harm and promote care",
      intro:
        "From preteens to college students, our prevention education builds early awareness and healthy relationship skills. Ideal for middle & high school classrooms, youth groups, advocates in training programs, camp counselors, residence assistants, and first-year experience courses, the BuzzPak and Interconnected: Healthy Relationships offer interactive, age-appropriate insights that engage students meaningfully.",
      cardsHeading: "Signature Programs",
      cards: [
        { _type: "reference", _key: "ref-buzzpak", _ref: "card-buzzpak" },
        { _type: "reference", _key: "ref-bee-real", _ref: "card-bee-real" },
      ],
    },
    {
      _key: "section-signature-training",
      _type: "sectionCardGrid",
      sectionTitle: "Signature Training Series",
      subtitle: "Education centered in equity, culture, and care",
      intro:
        "These trainings are designed for Parents/Guardians/Caregivers, Faith Organizations, Community Groups, Law Enforcement, Healthcare Professionals, Advocates, K–12 School Professionals, Colleges/Universities and Educators, and Social Service Organizations. Invite us to your conference, professional development, retreat, classroom or community meeting!\n\nSome training can be tailored for youth groups (11+)",
      cards: [
        { _type: "reference", _key: "ref-healing-is-work", _ref: "card-healing-is-work" },
        { _type: "reference", _key: "ref-interconnected", _ref: "card-interconnected" },
        { _type: "reference", _key: "ref-language", _ref: "card-language-of-liberation" },
        { _type: "reference", _key: "ref-claiming-voice", _ref: "card-claiming-voice" },
        { _type: "reference", _key: "ref-cultural-resilience", _ref: "card-cultural-resilience" },
        { _type: "reference", _key: "ref-cultural-humility", _ref: "card-cultural-humility" },
        { _type: "reference", _key: "ref-bystander", _ref: "card-bystander" },
      ],
    },
    {
      _key: "section-technical-assistance",
      _type: "sectionCardGrid",
      sectionTitle: "Technical Assistance",
      subtitle: '"Let\'s build together"',
      intro:
        "At The Hive, we know that every organization, school, or community group has unique needs when it comes to creating safer, more supportive spaces. That's why we offer customized technical assistance—partnering with you to strengthen capacity, develop survivor-centered responses, and build systems of care that last. Whether you're just beginning to explore anti-violence work or looking to deepen your team's skills, our experts are here to listen, co-create, and guide. Together, we'll design a plan that reflects your culture, values, and goals.",
      cardsHeading: "Offerings",
      cards: [
        { _type: "reference", _key: "ref-custom-training", _ref: "card-custom-training" },
        { _type: "reference", _key: "ref-capacity", _ref: "card-capacity-building" },
        { _type: "reference", _key: "ref-collaborative", _ref: "card-collaborative-problem" },
        { _type: "reference", _key: "ref-ongoing", _ref: "card-ongoing-support" },
      ],
    },
    {
      _key: "section-cta",
      _type: "sectionHero",
      headline: "Ready to Learn with Us?",
      subheadline:
        "Whether you're booking a training, exploring a partnership, or just getting started—we're here for it.",
    },
  ],
};

// ── run ────────────────────────────────────────────────────────────────────

async function seed() {
  console.log("Creating cards…");
  for (const card of cards) {
    await client.createOrReplace(card);
    console.log(`  ✓ ${card.title}`);
  }

  console.log("\nCreating awareness page…");
  await client.createOrReplace(awarenessPage);
  console.log("  ✓ page-awareness");

  console.log("\nDone! Visit http://localhost:3000/awareness");
}

seed().catch((err) => {
  console.error(err.message ?? err);
  process.exit(1);
});
