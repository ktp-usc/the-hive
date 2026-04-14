import { defineQuery } from "next-sanity";

export const partnersPageQuery = defineQuery(`
  *[_type == "page" && slug.current == "our-partners"][0]{
    title,
    sections[]{
      _key,
      _type,
      _type == "sectionHero" => {
        headline,
        subheadline,
        ctaLabel,
        ctaHref,
        "heroImages": images[].asset->url
      },
      _type == "sectionImageCarousel" => {
        heading,
        body,
        slides[]{
          _key,
          title,
          caption,
          alt,
          "imageUrl": image.asset->url
        }
      },
      _type == "sectionImageText" => {
        heading,
        body,
        "imageUrl": image.asset->url
      },
      _type == "sectionPartnerLogos" => {
        groupLabel,
        "partners": partners[]->{
          _id,
          name,
          category,
          sortOrder,
          "logoUrl": logo.asset->url,
          url
        }
      },
      _type == "sectionPartnersOpportunities" => {
        heading, description, residencyLabel, resourceLabel, beeBoxContactText, beeBoxEmail
      },
      _type == "sectionRichText" => {
        eyebrow, heading, body
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
