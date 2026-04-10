import { groq } from "next-sanity";

import { sanityFetch } from "@/sanity/lib/live";
import SupportPageClient from "./support-page-client";

type Card = {
  id: string;
  title: string;
  subtitle?: string;
  summary: string;
  details?: readonly string[];
  ctaLabel?: string;
  href?: string;
  badge?: string;
};

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

export default async function SupportPage() {
  const { data: supportPage } = await sanityFetch({
    query: SUPPORT_PAGE_QUERY,
  });

  const supportCardSection = (supportPage as SupportPageQueryResult | null)?.sections?.find(
    (section) => section._type === "sectionCardGrid",
  );

  const cmsCards: Card[] =
    supportCardSection?.cards
      ?.filter((card): card is NonNullable<typeof card> => Boolean(card?._id))
      .map((card) => ({
        id: card.key || card._id,
        title: card.title?.trim() || "Support service",
        subtitle: card.subtitle,
        summary:
          card.summary?.trim() ||
          "Support service details will be available here soon.",
        details: card.details?.filter(Boolean),
        ctaLabel: card.cta?.label,
        href: card.cta?.href,
        badge: card.badge,
      })) ?? [];

  return (
    <SupportPageClient
      cmsCards={cmsCards}
      sectionTitle={supportCardSection?.sectionTitle?.trim()}
      intro={supportCardSection?.intro?.trim()}
    />
  );
}