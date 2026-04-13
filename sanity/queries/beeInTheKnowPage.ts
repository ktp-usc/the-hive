import { defineQuery } from "next-sanity";

type BeeBaseSection = { _key?: string; _type: string };

export type BeeHeroSection = BeeBaseSection & {
  _type: "sectionHero";
  headline?: string;
  subheadline?: string;
};

export type BeeRichTextSection = BeeBaseSection & {
  _type: "sectionRichText";
  eyebrow?: string;
  heading?: string;
  body?: string;
};

export type BeeInTheKnowSection = BeeHeroSection | BeeRichTextSection;

export type BeeInTheKnowPageData = {
  title?: string;
  sections?: BeeInTheKnowSection[];
} | null;

export const beeInTheKnowPageQuery = defineQuery(`
  *[_type == "page" && slug.current == "bee-in-the-know"][0]{
    title,
    sections[]{
      _key,
      _type,
      _type == "sectionHero" => {
        headline, subheadline
      },
      _type == "sectionRichText" => {
        eyebrow, heading, body
      }
    }
  }
`);
