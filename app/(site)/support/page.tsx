import Link from "next/link";
import { groq } from "next-sanity";

import { sanityFetch } from "@/sanity/lib/live";

type Card = {
  id: string;
  title?: string;
  subtitle?: string;
  summary: string;
  details?: string[];
  cta?: { label: string; href?: string };
  badge?: string;
};

const cardLinkClassName =
  "inline-flex items-center rounded-full border border-hive-blue px-4 py-2 text-sm font-semibold text-hive-blue transition hover:bg-hive-blue hover:text-white";

const SUPPORT_PAGE_QUERY = groq`
  *[_type == "page" && slug.current == "support-services"][0]{
    sections[]{
      _type,
      _key,
      _type == "sectionCardGrid" => {
        sectionTitle,
        intro,
        cards[]->{
          _id,
          key,
          title,
          subtitle,
          "summary": description,
          details,
          cta,
          badge
        }
      }
    }
  }
`;

type SupportPageQueryResult = {
  sections?: Array<{
    _type: string;
    _key?: string;
    sectionTitle?: string;
    intro?: string;
    cards?: Array<
      | {
          _id: string;
          key?: string;
          title?: string;
          subtitle?: string;
          summary?: string;
          details?: string[];
          cta?: { label?: string; href?: string };
          badge?: string;
        }
      | null
    >;
  }>;
};

function isInternalHref(href?: string) {
  return Boolean(href?.startsWith("/"));
}

export default async function SupportPage() {
  const { data: supportPage } = await sanityFetch({
    query: SUPPORT_PAGE_QUERY,
  });

  const supportCardSection = (supportPage as SupportPageQueryResult | null)?.sections?.find(
    (section) => section._type === "sectionCardGrid",
  );

  const cards: Card[] =
    supportCardSection?.cards
      ?.filter((card): card is NonNullable<typeof card> => Boolean(card?._id))
      .map((card) => ({
        id: card.key || card._id,
        title: card.title,
        subtitle: card.subtitle,
        summary:
          card.summary?.trim() ||
          "Support service details will be available here soon.",
        details: card.details?.filter(Boolean),
        cta: card.cta?.label
          ? { label: card.cta.label, href: card.cta.href }
          : undefined,
        badge: card.badge,
      })) ?? [];

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
            {supportCardSection?.sectionTitle?.trim() || "Explore Support Options"}
          </h2>

          {supportCardSection?.intro?.trim() ? (
            <p className="mt-4 max-w-3xl text-base leading-7 text-gray-600 md:text-lg">
              {supportCardSection.intro}
            </p>
          ) : null}

          {cards.length > 0 ? (
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {cards.map((card) => (
                <article
                  key={card.id}
                  tabIndex={0}
                  className="rounded-3xl border border-hive-blue/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-hive-blue/30"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold text-hive-blue">
                      {card.title?.trim() || "Support service"}
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

                  {card.details?.length ? (
                    <ul className="mt-5 space-y-2 text-sm leading-6 text-gray-700">
                      {card.details.map((detail) => (
                        <li key={detail} className="flex gap-2">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-hive-orange" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {card.cta && (
                    <div className="mt-6">
                      {isInternalHref(card.cta.href) ? (
                        <Link href={card.cta.href} className={cardLinkClassName}>
                          {card.cta.label}
                        </Link>
                      ) : card.cta.href ? (
                        <a href={card.cta.href ?? "#"} className={cardLinkClassName}>
                          {card.cta.label}
                        </a>
                      ) : (
                        <span className={cardLinkClassName}>{card.cta.label}</span>
                      )}
                    </div>
                  )}
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-3xl border border-dashed border-hive-blue/20 bg-hive-blue/5 p-8 text-center text-gray-600">
              Add support-service cards in Sanity Studio to populate this section.
            </div>
          )}
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
