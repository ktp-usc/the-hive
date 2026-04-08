import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PortableText } from "@portabletext/react";
import { sanityFetch } from "@/sanity/lib/live";
import { awarenessPageQuery } from "@/sanity/queries/awarenessPage";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Prevention & Awareness | The Hive",
};

// ── static fallback data ────────────────────────────────────────────────────
// The page renders this content until a matching document (slug: "awareness")
// is published in Sanity Studio. Once published, Studio content takes over.

const STATIC_HERO = {
  headline: "Training & Education at The Hive",
  subheadline: "Healing centered learning rooted in culture, care, and connection.",
};

const STATIC_HIVE_VALUES = {
  heading: "Our Guiding Principles: HIVE Values",
  body: (
    <p className="text-gray-600 text-lg leading-relaxed">
      At The Hive, we approach training through our core values:{" "}
      <span className="font-semibold text-hive-blue">Healing</span>,{" "}
      <span className="font-semibold text-hive-blue">Interconnection</span>,{" "}
      <span className="font-semibold text-hive-blue">Voice</span>, and{" "}
      <span className="font-semibold text-hive-blue">Empowerment</span>. These
      pillars reflect our commitment to nurturing trauma-informed, culturally
      grounded learning spaces—where people can heal, connect, be heard, and
      grow together.
    </p>
  ),
};

const STATIC_PREVENTION = {
  heading: "Prevention",
  subtitle: "Empowering young people to prevent harm and promote care",
  intro:
    "From preteens to college students, our prevention education builds early awareness and healthy relationship skills. Ideal for middle & high school classrooms, youth groups, advocates in training programs, camp counselors, residence assistants, and first-year experience courses, the BuzzPak and Interconnected: Healthy Relationships offer interactive, age-appropriate insights that engage students meaningfully.",
  cardsHeading: "Signature Programs",
  cards: [
    {
      id: "buzzpak",
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
      id: "bee-real",
      title: "Bee Real: Healthy Relationships & Boundaries",
      subtitle: "Available in 1x session",
      description:
        "Examine the building blocks of safe and supportive relationships. Learn to navigate boundaries, consent, and communication while recognizing the signs of unhealthy dynamics. Includes strategies for cultivating empathy, fostering mutual respect, and practicing accountability in everyday interactions. Designed to empower young people to make informed choices and nurture connections rooted in care.",
    },
  ],
};

const STATIC_SIGNATURE_TRAINING = {
  heading: "Signature Training Series",
  subtitle: "Education centered in equity, culture, and care",
  intro:
    "These trainings are designed for Parents/Guardians/Caregivers, Faith Organizations, Community Groups, Law Enforcement, Healthcare Professionals, Advocates, K–12 School Professionals, Colleges/Universities and Educators, and Social Service Organizations. Invite us to your conference, professional development, retreat, classroom or community meeting!",
  note: "Some training can be tailored for youth groups (11+)",
  cards: [
    {
      id: "healing-is-work",
      title: "Healing is Work: Centering the Brain, Body & Culture in Trauma Care",
      description:
        "Explore how trauma lives in the nervous system and how healing practices can be culturally relevant, affordable, and community-driven. Learn to identify trauma responses and co-regulate in support spaces.",
    },
    {
      id: "interconnected",
      title: "Interconnected: Reimagining Relationships, Boundaries & Belonging",
      description:
        'Go beyond the basics of "healthy relationships" to explore love, care, and accountability. Explore relationships beyond romantic partnerships—including family, community, and institutions. Includes cultural insights into consent, boundary setting, emotional safety and trust-building.',
      tailored: true,
    },
    {
      id: "language-of-liberation",
      title: "Language of Liberation: Understanding IPV, SA & Stalking in Context",
      description:
        "Learn the core definitions, root causes, and social dynamics of intimate partner violence, sexual assault, and stalking—while naming how systems and identities intersect in survivor experiences. Build skills in supporting disclosure and safety planning.",
    },
    {
      id: "claiming-voice",
      title: "Claiming Voice: Storytelling, Disclosure & Holding Space Without Harm",
      description:
        'Gain skills in affirming survivor voice while reducing harm when disclosures are unexpected or occur in everyday interactions. Great for service providers, educators, or anyone who might be a "first listener."',
      badge: "Free for Bee Box Partners!",
      tailored: true,
    },
    {
      id: "cultural-resilience",
      title: "Cultural Resilience in Practice: A BIPOC Approach to Trauma-Informed Care",
      description:
        "Move past checkbox trauma-informed care. This session equips you with tools grounded in cultural practices, and uplift community-defined healing, spiritual safety, and non-clinical responses.",
    },
    {
      id: "cultural-humility",
      title: "Cultural Humility: A Liberatory Practice for Safer Communities",
      description:
        "Unpack the lifelong practice of cultural humility. Learn to engage identity, power, and discomfort while building more honest, accountable systems and relationships. Includes strategies for naming harm, making repairs, and navigating discomfort with intentional dialogue.",
      tailored: true,
    },
    {
      id: "bystander",
      title: "From Bystander to Community Keeper: Responding to Harm with Care & Courage",
      description:
        "Build practical skills to notice, name, and navigate harm in your everyday environment. From schools to workplaces to public spaces, this training is about courage and community care in action. Covers grounded intervention, survivor-led support, and how to avoid unintentional retraumatization.",
      tailored: true,
    },
  ],
};

const STATIC_TECHNICAL_ASSISTANCE = {
  heading: "Technical Assistance",
  subtitle: "\u201cLet\u2019s build together\u201d",
  intro:
    "At The Hive, we know that every organization, school, or community group has unique needs when it comes to creating safer, more supportive spaces. That\u2019s why we offer customized technical assistance\u2014partnering with you to strengthen capacity, develop survivor-centered responses, and build systems of care that last. Whether you\u2019re just beginning to explore anti-violence work or looking to deepen your team\u2019s skills, our experts are here to listen, co-create, and guide. Together, we\u2019ll design a plan that reflects your culture, values, and goals.",
  cardsHeading: "Offerings",
  cards: [
    {
      id: "custom-training",
      title: "Custom Training Design",
      description: "Tailored workshops and learning journeys for your team.",
    },
    {
      id: "capacity-building",
      title: "Capacity Building Plans",
      description: "Strengthening internal systems, policies, and practices.",
    },
    {
      id: "collaborative",
      title: "Collaborative Problem-Solving",
      description: "Partnering to navigate challenges and identify solutions.",
    },
    {
      id: "ongoing-support",
      title: "Ongoing Support",
      description:
        "Continued consultation to ensure your team can sustain the work.",
    },
  ],
};

// ── types ───────────────────────────────────────────────────────────────────

type CardData = {
  _id: string;
  title: string;
  subtitle?: string;
  description: string;
  details?: string[];
  badge?: string;
};

type SectionCardGrid = {
  _key: string;
  _type: "sectionCardGrid";
  sectionTitle?: string;
  subtitle?: string;
  intro?: string;
  cardsHeading?: string;
  cards?: CardData[];
};

type CardGridGroup = { _type: "cardGridGroup"; _key: string; items: SectionCardGrid[] };

// ── helpers ─────────────────────────────────────────────────────────────────

function groupCardGrids(sections: { _type: string; _key: string }[]): ({ _type: string; _key: string } | CardGridGroup)[] {
  const result: ({ _type: string; _key: string } | CardGridGroup)[] = [];
  let buffer: SectionCardGrid[] = [];
  for (const s of sections) {
    if (s._type === "sectionCardGrid") {
      buffer.push(s as SectionCardGrid);
    } else {
      if (buffer.length) { result.push({ _type: "cardGridGroup", _key: buffer[0]._key, items: buffer }); buffer = []; }
      result.push(s);
    }
  }
  if (buffer.length) result.push({ _type: "cardGridGroup", _key: buffer[0]._key, items: buffer });
  return result;
}

// ── sub-components ───────────────────────────────────────────────────────────

function CmsCardColumn({ section }: { section: SectionCardGrid }) {
  return (
    <div>
      {section.sectionTitle && (
        <h2 className="text-2xl font-bold text-hive-blue mb-2">{section.sectionTitle}</h2>
      )}
      {section.subtitle && (
        <p className="text-sm font-semibold text-hive-orange uppercase tracking-wide mb-4">
          {section.subtitle}
        </p>
      )}
      {section.intro && (
        <p className="text-gray-600 leading-relaxed mb-6">{section.intro}</p>
      )}
      {section.cardsHeading && (
        <h3 className="text-lg font-bold text-hive-blue mb-3">{section.cardsHeading}</h3>
      )}
      <div className="flex flex-col gap-5">
        {section.cards?.map((card) => (
          <div key={card._id} className="bg-gray-50 rounded-xl p-5">
            <p className="font-semibold text-gray-800 mb-1">{card.title}</p>
            {card.subtitle && (
              <p className="text-xs text-hive-orange font-medium mb-2">{card.subtitle}</p>
            )}
            {card.badge && (
              <span className="inline-block text-xs font-bold text-hive-orange bg-hive-orange/10 rounded-full px-3 py-0.5 mb-2">
                {card.badge}
              </span>
            )}
            <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
            {card.details && card.details.length > 0 && (
              <ul className="mt-3 ml-4 list-disc text-sm text-gray-600 space-y-1">
                {card.details.map((d) => <li key={d}>{d}</li>)}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── CTA buttons (always the same) ────────────────────────────────────────────

function CtaButtons() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <Button asChild className="h-auto rounded-full bg-hive-blue text-white font-bold hover:bg-hive-blue/90 px-8 py-4 text-base transition-colors">
        <Link href="/contact">Request a Training</Link>
      </Button>
      <Button asChild className="h-auto rounded-full bg-hive-orange text-white font-bold hover:bg-hive-orange/90 px-8 py-4 text-base transition-colors">
        <Link href="https://calendly.com" target="_blank" rel="noopener noreferrer">Book a Discovery Call</Link>
      </Button>
      <Button asChild variant="outline" className="h-auto rounded-full border-hive-blue text-hive-blue font-bold hover:bg-hive-blue/5 px-8 py-4 text-base transition-colors">
        <Link href="/training-catalog.pdf" target="_blank" rel="noopener noreferrer">Download Training Catalog</Link>
      </Button>
      <Button asChild className="h-auto rounded-full bg-hive-yellow text-gray-900 font-bold hover:bg-hive-yellow/90 px-8 py-4 text-base transition-colors">
        <Link href="mailto:kinnethia@thehivecc.org">Contact Our Team</Link>
      </Button>
    </div>
  );
}

// ── page ─────────────────────────────────────────────────────────────────────

export default async function AwarenessPage() {
  const { data: page } = await sanityFetch({ query: awarenessPageQuery });
  console.log("Sanity page data:", JSON.stringify(page, null, 2));

  // ── CMS version (once content is published in Studio) ───────────────────
  if (page?.sections?.length) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const grouped = groupCardGrids(page.sections as any[]);
    let heroCount = 0;

    return (
      <main className="min-h-screen bg-white text-gray-800">
        {grouped.map((item) => {
          if (item._type === "sectionHero") {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const s = item as any;
            heroCount += 1;
            if (heroCount === 1) {
              return (
                <section key={s._key} className="flex flex-col items-center justify-center bg-hive-blue text-white py-24 px-6 text-center">
                  {s.headline && <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto">{s.headline}</h1>}
                  {s.subheadline && <p className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl">{s.subheadline}</p>}
                </section>
              );
            }
            return (
              <div key={s._key} className="text-center px-6">
                {s.headline && <h2 className="text-3xl font-bold text-hive-blue mb-3">{s.headline}</h2>}
                {s.subheadline && <p className="text-gray-500 max-w-xl mx-auto mb-10 text-lg">{s.subheadline}</p>}
              </div>
            );
          }
          if (item._type === "sectionRichText") {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const s = item as any;
            return (
              <section key={s._key} className="py-16 px-6 max-w-4xl mx-auto text-center">
                {s.heading && <h2 className="text-2xl md:text-3xl font-bold text-hive-blue mb-6">{s.heading}</h2>}
                {s.content && (
                  <div className="text-gray-600 text-lg leading-relaxed prose mx-auto">
                    <PortableText value={s.content} />
                  </div>
                )}
              </section>
            );
          }
          if (item._type === "cardGridGroup") {
            const g = item as CardGridGroup;
            const cols = g.items.length >= 3 ? "grid-cols-1 md:grid-cols-3" : g.items.length === 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1";
            return (
              <div key={g._key}>
                <div className="border-t border-gray-200 max-w-5xl mx-auto" />
                <section className={`py-20 px-6 max-w-6xl mx-auto grid ${cols} gap-12 items-start`}>
                  {g.items.map((col) => <CmsCardColumn key={col._key} section={col} />)}
                </section>
                <div className="border-t border-gray-200 max-w-5xl mx-auto" />
              </div>
            );
          }
          return null;
        })}
        <section className="py-20 px-6 text-center bg-gray-50"><CtaButtons /></section>
      </main>
    );
  }

  // ── static fallback (shown until CMS content is ready) ──────────────────
  return (
    <main className="min-h-screen bg-white text-gray-800">

      <section className="flex flex-col items-center justify-center bg-hive-blue text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto">
          {STATIC_HERO.headline}
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl">
          {STATIC_HERO.subheadline}
        </p>
      </section>

      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-hive-blue mb-6">
          {STATIC_HIVE_VALUES.heading}
        </h2>
        {STATIC_HIVE_VALUES.body}
      </section>

      <div className="border-t border-gray-200 max-w-5xl mx-auto" />

      <section className="py-20 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

        {/* Prevention */}
        <div>
          <h2 className="text-2xl font-bold text-hive-blue mb-2">{STATIC_PREVENTION.heading}</h2>
          <p className="text-sm font-semibold text-hive-orange uppercase tracking-wide mb-4">{STATIC_PREVENTION.subtitle}</p>
          <p className="text-gray-600 leading-relaxed mb-6">{STATIC_PREVENTION.intro}</p>
          <h3 className="text-lg font-bold text-hive-blue mb-3">{STATIC_PREVENTION.cardsHeading}</h3>
          <div className="flex flex-col gap-5">
            {STATIC_PREVENTION.cards.map((card) => (
              <div key={card.id} className="bg-gray-50 rounded-xl p-5">
                <p className="font-semibold text-gray-800 mb-1">{card.title}</p>
                {card.subtitle && <p className="text-xs text-hive-orange font-medium mb-2">{card.subtitle}</p>}
                <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
                {card.details && (
                  <ul className="mt-3 ml-4 list-disc text-sm text-gray-600 space-y-1">
                    {card.details.map((d) => <li key={d}>{d}</li>)}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Signature Training Series */}
        <div>
          <h2 className="text-2xl font-bold text-hive-blue mb-2">{STATIC_SIGNATURE_TRAINING.heading}</h2>
          <p className="text-sm font-semibold text-hive-orange uppercase tracking-wide mb-4">{STATIC_SIGNATURE_TRAINING.subtitle}</p>
          <p className="text-gray-600 leading-relaxed mb-2">{STATIC_SIGNATURE_TRAINING.intro}</p>
          <p className="text-sm text-gray-500 italic mb-6">{STATIC_SIGNATURE_TRAINING.note}</p>
          <div className="flex flex-col gap-4">
            {STATIC_SIGNATURE_TRAINING.cards.map((card) => (
              <div key={card.id} className="bg-gray-50 rounded-xl p-4">
                <p className="font-semibold text-gray-800 text-sm mb-1">{card.title}</p>
                {card.badge && (
                  <span className="inline-block text-xs font-bold text-hive-orange bg-hive-orange/10 rounded-full px-3 py-0.5 mb-2">
                    {card.badge}
                  </span>
                )}
                <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
                {card.tailored && (
                  <p className="text-xs text-gray-400 italic mt-2">
                    This training can be tailored for youth groups (11+)
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Technical Assistance */}
        <div>
          <h2 className="text-2xl font-bold text-hive-blue mb-2">{STATIC_TECHNICAL_ASSISTANCE.heading}</h2>
          <p className="text-sm font-semibold text-hive-orange uppercase tracking-wide mb-4">{STATIC_TECHNICAL_ASSISTANCE.subtitle}</p>
          <p className="text-gray-600 leading-relaxed mb-6">{STATIC_TECHNICAL_ASSISTANCE.intro}</p>
          <h3 className="text-lg font-bold text-hive-blue mb-3">{STATIC_TECHNICAL_ASSISTANCE.cardsHeading}</h3>
          <div className="flex flex-col gap-4">
            {STATIC_TECHNICAL_ASSISTANCE.cards.map((card) => (
              <div key={card.id} className="flex gap-3 items-start">
                <div className="mt-1 w-3 h-3 rounded-full bg-hive-yellow shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{card.title}</p>
                  <p className="text-gray-500 text-sm">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      <div className="border-t border-gray-200 max-w-5xl mx-auto" />

      <section className="py-20 px-6 text-center bg-gray-50">
        <h2 className="text-3xl font-bold text-hive-blue mb-3">Ready to Learn with Us?</h2>
        <p className="text-gray-500 max-w-xl mx-auto mb-10 text-lg">
          Whether you&apos;re booking a training, exploring a partnership, or just getting started—we&apos;re here for it.
        </p>
        <CtaButtons />
      </section>

    </main>
  );
}
