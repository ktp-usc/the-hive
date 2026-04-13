/**
 * Seed the Awareness & Prevention page.
 * Run with:  node scripts/seed-awareness.mjs
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
  console.log("\nSeeding Awareness page…");

  process.stdout.write("  Uploading BuzzPak image…");
  const buzzpakImage = await uploadImage("/member-images/BeeEmpowered.avif", "BeeEmpowered.avif");
  console.log(buzzpakImage ? " done" : " skipped");

  const page = {
    _id: "page-awareness",
    _type: "page",
    title: "Awareness & Prevention",
    slug: { _type: "slug", current: "awareness" },
    sections: [
      {
        _key: "awareness-hero",
        _type: "sectionAwarenessHero",
        eyebrow: "Prevention and Awareness",
        title: "Training & Education at The Hive",
        body: "Healing centered learning rooted in culture, care, and connection.",
      },
      {
        _key: "awareness-values",
        _type: "sectionAwarenessValues",
        title: "Our Guiding Principles: HIVE Values",
        intro: "At The Hive, we approach training through our core values:",
        pillars: ["Healing", "Interconnection", "Voice", "Empowerment"],
        outro:
          "These pillars reflect our commitment to nurturing trauma-informed, culturally grounded learning spaces where people can heal, connect, be heard, and grow together.",
      },
      {
        _key: "awareness-programs",
        _type: "sectionAwarenessPrograms",
        title: "Prevention",
        eyebrow: "Empowering young people to prevent harm and promote care",
        body:
          "From preteens to college students, our prevention education builds early awareness and healthy relationship skills. Ideal for middle and high school classrooms, youth groups, advocates in training programs, camp counselors, residence assistants, and first-year experience courses.",
        programs: [
          {
            _key: "prog-buzzpak",
            title: "BuzzPak multiseries",
            languages: "Available in English & Spanish",
            body:
              "Explore the foundations of healthy relationships and violence prevention. Engage real-world scenarios that address boundaries, consent, communication, and respect. Build skills to recognize harm, support peers, and create safer school and campus communities.",
            ...(buzzpakImage ? { image: buzzpakImage } : {}),
          },
          {
            _key: "prog-prevention-course",
            title: "Prevention & Awareness Course",
            body:
              "Our prevention and awareness courses are designed to meet organizations at every stage, from foundational 101-level learning to advanced 300+ trainings with opportunities for technical assistance.",
          },
          {
            _key: "prog-bee-real",
            title: "Bee Real: Healthy Relationships & Boundaries",
            badge: "Available in 1x session",
            body:
              "Examine the building blocks of safe and supportive relationships. Learn to navigate boundaries, consent, and communication while recognizing the signs of unhealthy dynamics.",
          },
        ],
      },
      {
        _key: "awareness-training",
        _type: "sectionAwarenessTraining",
        title: "Signature Training Series",
        eyebrow: "Education centered in equity, culture, and care",
        body:
          "These trainings are designed for Parents/Guardians/Caregivers, Faith Organizations, Community Groups, Law Enforcement, Healthcare Professionals, Advocates, K–12 School Professionals, Colleges/Universities and Educators, and Social Service Organizations.",
        note: "Some training can be tailored for youth groups (11+)",
        trainingSeries: [
          { _key: "ts-1", title: "Healing is Work: Centering the Brain, Body & Culture in Trauma Care" },
          { _key: "ts-2", title: "Interconnected: Reimagining Relationships, Boundaries & Belonging" },
          { _key: "ts-3", title: "Language of Liberation: Understanding IPV, SA & Stalking in Context" },
          { _key: "ts-4", title: "Claiming Voice: Storytelling, Disclosure & Holding Space Without Harm", badge: "Free for Bee Box Partners!" },
          { _key: "ts-5", title: "Cultural Resilience in Practice: A BIPOC Approach to Trauma-Informed Care" },
          { _key: "ts-6", title: "Cultural Humility: A Liberatory Practice for Safer Communities" },
          { _key: "ts-7", title: "From Bystander to Community Keeper: Responding to Harm with Care & Courage" },
        ],
        contactNote:
          "Interested in one of our trainings? Contact us for more info or to participate.",
      },
      {
        _key: "awareness-tech-assist",
        _type: "sectionAwarenessTechAssist",
        title: "Technical Assistance",
        eyebrow: "Let's build together",
        body:
          "At The Hive, we know that every organization, school, or community group has unique needs when it comes to creating safer, more supportive spaces. That's why we offer customized technical assistance, partnering with you to strengthen capacity, develop survivor-centered responses, and build systems of care that last.",
        offerings: [
          { _key: "ta-1", title: "Custom Training Design", body: "Tailored workshops and learning journeys for your team." },
          { _key: "ta-2", title: "Capacity Building Plans", body: "Strengthening internal systems, policies, and practices." },
          { _key: "ta-3", title: "Collaborative Problem-Solving", body: "Partnering to navigate challenges and identify solutions." },
          { _key: "ta-4", title: "Ongoing Support", body: "Continued consultation to ensure your team can sustain the work." },
        ],
      },
      {
        _key: "awareness-cta",
        _type: "sectionAwarenessCta",
        title: "Ready to Learn with Us?",
        body: "Whether you're booking a training, exploring a partnership, or just getting started, we're here for it.",
        buttons: [
          { _key: "btn-1", label: "Request a Training", href: "/contact", variant: "primary" },
          { _key: "btn-2", label: "Book a Discovery Call", href: "https://calendly.com", variant: "primary" },
          { _key: "btn-3", label: "Download Training Catalog", href: "/training-catalog.pdf", variant: "outline" },
          { _key: "btn-4", label: "Contact Our Team", href: "https://mail.google.com/mail/?view=cm&fs=1&to=kinnethia@thehivecc.org", variant: "primary" },
        ],
      },
    ],
  };

  await client.createOrReplace(page);
  console.log("  ✓ page-awareness");
  console.log("\nDone! Visit http://localhost:3000/awareness");
}

seed().catch((err) => {
  console.error(err.message ?? err);
  process.exit(1);
});
