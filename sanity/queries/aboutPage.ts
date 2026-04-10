import { defineQuery } from "next-sanity";

export const aboutPageQuery = defineQuery(`
  *[_type == "page" && slug.current == "about"][0]{
    title,
    sections[]{
      _key,
      _type,
      _type == "sectionHero" => {
        headline,
        subheadline
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
      }
    }
  }
`);
