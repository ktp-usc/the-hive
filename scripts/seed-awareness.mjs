/**
 * Seeds the Prevention & Awareness page in Sanity (slug: "awareness").
 * Creates contentCard documents for signature programs, training series,
 * and technical assistance offerings, then wires them into the page.
 *
 * Run once with:  node scripts/seed-awareness.mjs
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

// ── Signature program cards ────────────────────────────────────────────────

const signatureProgramCards = [
  {
    _id: "card-program-buzzpak",
    _type: "contentCard",
    key: "program-buzzpak",
    title: "BuzzPak multiseries",
    description:
      "Explore the foundations of healthy relationships and violence prevention. Engage real-world scenarios that address boundaries, consent, communication, and respect. Build skills to recognize harm, support peers, and create safer school and campus communities. Designed to spark dialogue, foster empathy, and equip young people to lead with awareness and accountability.",
  },
  {
    _id: "card-program-prevention-course",
    _type: "contentCard",
    key: "program-prevention-course",
    title: "Prevention & Awareness Course",
    description:
      "Our prevention and awareness courses are designed to meet organizations at every stage, from foundational 101-level learning to advanced 300+ trainings with opportunities for technical assistance. We provide tailored support to help integrate culturally specific approaches into your programs, and through our train-the-trainer model, we equip facilitators to carry this work forward in their own communities.",
  },
  {
    _id: "card-program-bee-real",
    _type: "contentCard",
    key: "program-bee-real",
    title: "Bee Real: Healthy Relationships & Boundaries",
    description:
      "Examine the building blocks of safe and supportive relationships. Learn to navigate boundaries, consent, and communication while recognizing the signs of unhealthy dynamics. Includes strategies for cultivating empathy, fostering mutual respect, and practicing accountability in everyday interactions. Designed to empower young people to make informed choices and nurture connections rooted in care.",
    badge: "Available in 1x session",
  },
];

// ── Training series cards ──────────────────────────────────────────────────

const trainingSeriesCards = [
  {
    _id: "card-training-healing-work",
    _type: "contentCard",
    key: "training-healing-work",
    title: "Healing is Work: Centering the Brain, Body & Culture in Trauma Care",
    description:
      "Explore how trauma lives in the nervous system and how healing practices can be culturally relevant, affordable, and community-driven. Learn to identify trauma responses and co-regulate in support spaces.",
  },
  {
    _id: "card-training-interconnected",
    _type: "contentCard",
    key: "training-interconnected",
    title: "Interconnected: Reimagining Relationships, Boundaries & Belonging",
    description:
      "Go beyond the basics of healthy relationships to explore love, care, and accountability. Explore relationships beyond romantic partnerships, including family, community, and institutions. Includes cultural insights into consent, boundary setting, emotional safety, and trust-building.",
    badge: "Can be tailored for youth groups (11+)",
  },
  {
    _id: "card-training-language-liberation",
    _type: "contentCard",
    key: "training-language-liberation",
    title: "Language of Liberation: Understanding IPV, SA & Stalking in Context",
    description:
      "Learn the core definitions, root causes, and social dynamics of intimate partner violence, sexual assault, and stalking while naming how systems and identities intersect in survivor experiences. Build skills in supporting disclosure and safety planning.",
  },
  {
    _id: "card-training-claiming-voice",
    _type: "contentCard",
    key: "training-claiming-voice",
    title: "Claiming Voice: Storytelling, Disclosure & Holding Space Without Harm",
    description:
      "Gain skills in affirming survivor voice while reducing harm when disclosures are unexpected or occur in everyday interactions. Great for service providers, educators, or anyone who might be a first listener.",
    badge: "Free for Bee Box Partners!",
  },
  {
    _id: "card-training-cultural-resilience",
    _type: "contentCard",
    key: "training-cultural-resilience",
    title: "Cultural Resilience in Practice: A BIPOC Approach to Trauma-Informed Care",
    description:
      "Move past checkbox trauma-informed care. This session equips you with tools grounded in cultural practices and uplifts community-defined healing, spiritual safety, and non-clinical responses.",
  },
  {
    _id: "card-training-cultural-humility",
    _type: "contentCard",
    key: "training-cultural-humility",
    title: "Cultural Humility: A Liberatory Practice for Safer Communities",
    description:
      "Unpack the lifelong practice of cultural humility. Learn to engage identity, power, and discomfort while building more honest, accountable systems and relationships. Includes strategies for naming harm, making repairs, and navigating discomfort with intentional dialogue.",
    badge: "Can be tailored for youth groups (11+)",
  },
  {
    _id: "card-training-bystander",
    _type: "contentCard",
    key: "training-bystander",
    title: "From Bystander to Community Keeper: Responding to Harm with Care & Courage",
    description:
      "Build practical skills to notice, name, and navigate harm in your everyday environment. From schools to workplaces to public spaces, this training is about courage and community care in action. Covers grounded intervention, survivor-led support, and how to avoid unintentional retraumatization.",
    badge: "Can be tailored for youth groups (11+)",
  },
];

// ── Technical assistance offering cards ───────────────────────────────────

const technicalAssistanceCards = [
  {
    _id: "card-assistance-custom-training",
    _type: "contentCard",
    key: "assistance-custom-training",
    title: "Custom Training Design",
    description: "Tailored workshops and learning journeys for your team.",
  },
  {
    _id: "card-assistance-capacity-building",
    _type: "contentCard",
    key: "assistance-capacity-building",
    title: "Capacity Building Plans",
    description: "Strengthening internal systems, policies, and practices.",
  },
  {
    _id: "card-assistance-problem-solving",
    _type: "contentCard",
    key: "assistance-problem-solving",
    title: "Collaborative Problem-Solving",
    description: "Partnering to navigate challenges and identify solutions.",
  },
  {
    _id: "card-assistance-ongoing-support",
    _type: "contentCard",
    key: "assistance-ongoing-support",
    title: "Ongoing Support",
    description: "Continued consultation to ensure your team can sustain the work.",
  },
];

// ── seed ───────────────────────────────────────────────────────────────────

async function seedCards(cards, label) {
  console.log(`\nSeeding ${label}…`);
  const refs = [];
  for (const card of cards) {
    await client.createOrReplace(card);
    console.log(`  ✓ ${card.title}`);
    refs.push({ _type: "reference", _key: `ref-${card._id}`, _ref: card._id });
  }
  return refs;
}

async function seed() {
  const programRefs = await seedCards(signatureProgramCards, "signature program cards");
  const trainingRefs = await seedCards(trainingSeriesCards, "training series cards");
  const assistanceRefs = await seedCards(technicalAssistanceCards, "technical assistance cards");

  // ── Awareness page document ──────────────────────────────────────────────
  console.log("\nCreating Awareness page…");

  const awarenessPage = {
    _id: "page-awareness",
    _type: "page",
    title: "Prevention & Awareness",
    slug: { _type: "slug", current: "awareness" },
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
        eyebrow: "Prevention & Awareness",
        heading: "Our Guiding Principles: HIVE Values",
        body: "At The Hive, we approach training through our core values: Healing, Interconnection, Voice, and Empowerment. These pillars reflect our commitment to nurturing trauma-informed, culturally grounded learning spaces where people can heal, connect, be heard, and grow together.",
      },
      {
        _key: "section-prevention",
        _type: "sectionRichText",
        eyebrow: "Empowering young people to prevent harm and promote care",
        heading: "Prevention",
        body: "From preteens to college students, our prevention education builds early awareness and healthy relationship skills. Ideal for middle and high school classrooms, youth groups, advocates in training programs, camp counselors, residence assistants, and first-year experience courses, BuzzPak and Interconnected: Healthy Relationships offer interactive, age-appropriate insights that engage students meaningfully.",
      },
      {
        _key: "section-signature-programs",
        _type: "sectionCardGrid",
        sectionTitle: "Signature Programs",
        cards: programRefs,
      },
      {
        _key: "section-training-intro",
        _type: "sectionRichText",
        eyebrow: "Education centered in equity, culture, and care",
        heading: "Signature Training Series",
        body: "These trainings are designed for Parents/Guardians/Caregivers, Faith Organizations, Community Groups, Law Enforcement, Healthcare Professionals, Advocates, K–12 School Professionals, Colleges/Universities and Educators, and Social Service Organizations. Invite us to your conference, professional development, retreat, classroom, or community meeting.",
      },
      {
        _key: "section-training-series",
        _type: "sectionCardGrid",
        sectionTitle: "Trainings",
        cards: trainingRefs,
      },
      {
        _key: "section-technical-assistance-intro",
        _type: "sectionRichText",
        eyebrow: "Let's build together",
        heading: "Technical Assistance",
        body: "At The Hive, we know that every organization, school, or community group has unique needs when it comes to creating safer, more supportive spaces. That's why we offer customized technical assistance, partnering with you to strengthen capacity, develop survivor-centered responses, and build systems of care that last. Whether you're just beginning to explore anti-violence work or looking to deepen your team's skills, our experts are here to listen, co-create, and guide. Together, we'll design a plan that reflects your culture, values, and goals.",
      },
      {
        _key: "section-technical-assistance",
        _type: "sectionCardGrid",
        sectionTitle: "Offerings",
        cards: assistanceRefs,
      },
      {
        _key: "section-cta",
        _type: "sectionRichText",
        heading: "Ready to Learn with Us?",
        body: "Whether you're booking a training, exploring a partnership, or just getting started, we're here for it.",
        eyebrow: "Get Started",
      },
    ],
  };

  await client.createOrReplace(awarenessPage);
  console.log("  ✓ page-awareness");

  console.log("\nDone! Visit http://localhost:3000/awareness");
}

seed().catch((err) => {
  console.error(err.message ?? err);
  process.exit(1);
});
