"use client";

import Link from "next/link";

type Card = {
  id: string;
  title: string;
  subtitle?: string;
  summary: string;
  details?: string[];
  cta?: { label: string; href?: string };
  badge?: string;
};

const CARDS: Card[] = [
  {
    id: "peer-advocacy",
    title: "Peer Advocacy",
    subtitle: "Emotional support & navigation",
    summary:
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
    id: "economic-relief",
    title: "Economic Relief",
    subtitle: "Immediate financial support",
    summary:
      "Wrap-around financial support for urgent needs — housing, food, utility help, relocation, and transportation support.",
    details: [
      "Transitional housing",
      "Utility support and gas vouchers",
      "Food security and hotel accommodations",
    ],
    cta: { label: "Request help", href: "/contact" },
    badge: "No cost",
  },
  {
    id: "individual-counseling",
    title: "Individual Counseling",
    subtitle: "Licensed trauma-trained therapists",
    summary:
      "Professional counseling for survivors. Services are provided by licensed therapists trained in trauma treatment.",
    details: [
      "For survivors of sexual assault, IPV, or stalking (ages 11+)",
      "Provided at no cost to the survivor",
    ],
    cta: { label: "Groups & Counseling: 803-766-8067", href: "tel:8037668067" },
  },
  {
    id: "healing-circles",
    title: "Peer Support Healing Circles",
    subtitle: "Peer-led group healing",
    summary:
      "Confidential healing circles using psycho-educational and wellness-based curriculum for community and recovery.",
    details: [
      "Queens Gather — Women 18+",
      "Bloom — Girls 11–18",
      "Held in a safe and affirming space",
    ],
    cta: { label: "Learn about circles", href: "/support/healing-circles" },
    badge: "Groups",
  },
  {
    id: "holistic-support",
    title: "Holistic Support",
    subtitle: "Wrap-around support",
    summary:
      "Support that goes beyond one service and helps address the survivor’s full situation.",
    details: [
      "Goal and intervention case planning",
      "Financial planning",
      "Employment support",
      "Assist in applying for additional services",
    ],
    badge: "Case Planning",
  },
  {
    id: "refer-survivor",
    title: "How to Refer a Survivor",
    subtitle: "Quick contact info",
    summary:
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
    id: "training-prevention",
    title: "Request Training / Prevention Programming",
    subtitle: "Outreach events",
    summary:
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

const cardLinkClassName =
  "inline-flex items-center rounded-full border border-hive-blue px-4 py-2 text-sm font-semibold text-hive-blue transition hover:bg-hive-blue hover:text-white";

export default function SupportPage() {
  return (
    <main className="bg-white text-gray-900">
      <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-[#1D979C] px-6 py-28 text-center text-white">
        <div className="mx-auto w-full max-w-5xl">
          <h1 className="text-5xl font-bold leading-none md:text-6xl xl:text-7xl">
            Support Services
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/85 md:text-2xl">
            Compassionate support and practical resources, here when you need
            them.
          </p>
        </div>
      </section>

      <section
        aria-labelledby="services-heading"
        className="bg-white px-6 py-20 md:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <h2
            id="services-heading"
            className="text-3xl font-bold tracking-tight text-hive-blue md:text-4xl"
          >
            Explore Support Options
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {CARDS.map((card) => (
              <article
                key={card.id}
                tabIndex={0}
                className="rounded-3xl border border-hive-blue/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-hive-blue/30"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold text-hive-blue">
                    {card.title}
                  </h3>
                  {card.badge && (
                    <span className="rounded-full bg-hive-yellow/25 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-hive-blue">
                      {card.badge}
                    </span>
                  )}
                </div>

                {card.subtitle && (
                  <p className="mt-2 text-sm font-medium uppercase tracking-wide text-gray-500">
                    {card.subtitle}
                  </p>
                )}

                <p className="mt-4 text-base leading-7 text-gray-600">
                  {card.summary}
                </p>

                {card.details && (
                  <ul className="mt-5 space-y-2 text-sm leading-6 text-gray-700">
                    {card.details.map((detail) => (
                      <li key={detail} className="flex gap-2">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-hive-orange" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {card.cta && (
                  <div className="mt-6">
                    {card.cta.href?.startsWith("/") ? (
                      <Link href={card.cta.href} className={cardLinkClassName}>
                        {card.cta.label}
                      </Link>
                    ) : (
                      <a href={card.cta.href ?? "#"} className={cardLinkClassName}>
                        {card.cta.label}
                      </a>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-hive-blue/5 px-6 py-24 text-center">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-8">
          <h2 className="text-3xl font-bold text-hive-blue md:text-5xl">
            Emotional Safety Plan Resource
          </h2>

          <a
            href="https://www.thehivecc.org/_files/ugd/8a8511_175f07e5966d4276b783f3ce90ea902f.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-hive-yellow px-12 py-5 text-xl font-bold text-gray-900 transition hover:bg-yellow-400"
          >
            Click Here
          </a>

          <p className="text-lg leading-8 text-gray-600 md:text-xl">
            If you need help filling out this form or creating a plan that meets
            your needs, you can always contact The Hive. One of our advocates
            can assist you. You do not have to go through this alone.
          </p>
        </div>
      </section>

    </main>
  );
}
