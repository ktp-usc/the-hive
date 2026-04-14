import { defineQuery } from "next-sanity";

export const aboutPageQuery = defineQuery(`
  *[_type == "page" && slug.current == "about"][0]{
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
      _type == "sectionImageText" => {
        heading,
        body,
        "imageUrl": image.asset->url
      },
      _type == "sectionTeam" => {
        eyebrow,
        groupLabel,
        "members": members[]->{
          _id,
          name,
          role,
          bio,
          group,
          email,
          extension,
          storyEyebrow,
          narrativeLabel,
          narrativeParagraphs,
          sparkTitle,
          sparkBody,
          visionTitle,
          visionBody,
          profileBody,
          "imageUrl": image.asset->url
        }
      },
      _type == "sectionRichText" => {
        eyebrow,
        heading,
        body
      },
      _type == "sectionImageCarousel" => {
        heading, body,
        "slides": slides[]{_key, title, caption, alt, "imageUrl": image.asset->url}
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
