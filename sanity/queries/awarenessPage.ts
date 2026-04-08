import { defineQuery } from "next-sanity";

export const awarenessPageQuery = defineQuery(`
  *[_type == "page" && slug.current == "prevention-and-awareness"][0]{
    title,
    sections[]{
      _key,
      _type,
      _type == "sectionHero" => {
        headline,
        subheadline,
        ctaLabel,
        ctaHref
      },
      _type == "sectionRichText" => {
        heading,
        content
      },
      _type == "sectionCardGrid" => {
        sectionTitle,
        subtitle,
        intro,
        cardsHeading,
        "cards": cards[]->{
          _id,
          key,
          title,
          subtitle,
          description,
          details,
          cta,
          badge
        }
      }
    }
  }
`);
