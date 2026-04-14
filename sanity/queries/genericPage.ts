import { defineQuery } from "next-sanity";
import type { GenericSection } from "@/components/generic-section-renderer";

export const genericPageQuery = defineQuery(`
  *[_type == "page" && slug.current == $slug][0]{
    title,
    description,
    "sections": sections[]{
      _key,
      _type,
      _type == "sectionHero" => {
        headline, subheadline, ctaLabel, ctaHref,
        "heroImages": images[].asset->url
      },
      _type == "sectionRichText" => {
        eyebrow, heading, body
      },
      _type == "sectionImageText" => {
        heading, body,
        "imageUrl": image.asset->url
      },
      _type == "sectionImageCarousel" => {
        heading, body,
        "slides": slides[]{
          _key, title, caption, alt,
          "imageUrl": image.asset->url
        }
      },
      _type == "sectionCardGrid" => {
        sectionTitle, intro,
        "cards": cards[]->{_id, title, body}
      },
      _type == "sectionVolunteerCards" => {
        sectionTitle, intro, ctaLabel, ctaHref,
        "volunteerCards": cards[]{_key, title, description}
      },
      _type == "sectionDonationOpportunity" => {
        eyebrow, sectionTitle, body, ctaLabel, ctaHref
      }
    }
  }
`);

export type GenericPageData = {
  title?: string | null;
  description?: string | null;
  sections?: GenericSection[];
} | null;
