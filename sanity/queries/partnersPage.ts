import { defineQuery } from "next-sanity";

export const partnersPageQuery = defineQuery(`
  *[_type == "page" && slug.current == "our-partners"][0]{
    title,
    sections[]{
      _key,
      _type,
      _type == "sectionHero" => {
        headline,
        subheadline
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
      }
    }
  }
`);
