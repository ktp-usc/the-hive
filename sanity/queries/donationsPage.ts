import { defineQuery } from "next-sanity";

export type LocalizedValue =
  | string
  | { en?: string | null; es?: string | null }
  | null
  | undefined;

export type DonationsAction = {
  label?: LocalizedValue;
  href?: string;
};

export type DonationsHighlight = {
  _key?: string;
  title?: LocalizedValue;
  body?: LocalizedValue;
};

export type VolunteerCard = {
  _key?: string;
  title?: LocalizedValue;
  description?: LocalizedValue;
};

export type DonationsInfoCard = {
  _key?: string;
  title?: LocalizedValue;
  description?: LocalizedValue;
};

export type DonationsTier = {
  _key?: string;
  amount?: LocalizedValue;
  yearly?: LocalizedValue;
  name?: LocalizedValue;
  description?: LocalizedValue;
};

export type DonationsImpactArea = {
  _key?: string;
  title?: LocalizedValue;
  alt?: string;
  imageUrl?: string;
};

type DonationsBaseSection = {
  _key?: string;
  _type: string;
};

export type DonationsHeroSection = DonationsBaseSection & {
  _type: "sectionDonationsHero";
  eyebrow?: LocalizedValue;
  primaryCta?: DonationsAction;
  secondaryCta?: DonationsAction;
  highlights?: DonationsHighlight[];
};

export type VolunteerCardsSection = DonationsBaseSection & {
  _type: "sectionVolunteerCards";
  sectionTitle?: LocalizedValue;
  intro?: LocalizedValue;
  cards?: VolunteerCard[];
  ctaLabel?: LocalizedValue;
  ctaHref?: string;
};

export type DonationOpportunitySection = DonationsBaseSection & {
  _type: "sectionDonationOpportunity";
  eyebrow?: LocalizedValue;
  sectionTitle?: LocalizedValue;
  body?: LocalizedValue;
  ctaLabel?: LocalizedValue;
  ctaHref?: string;
};

export type DonationsTabsIntroSection = DonationsBaseSection & {
  _type: "sectionDonationsTabsIntro";
  eyebrow?: LocalizedValue;
  heading?: LocalizedValue;
  casitaTabLabel?: LocalizedValue;
  keepersTabLabel?: LocalizedValue;
};

export type DonationsCasitaOverviewSection = DonationsBaseSection & {
  _type: "sectionDonationsCasitaOverview";
  eyebrow?: LocalizedValue;
  title?: LocalizedValue;
  paragraphs?: LocalizedValue[];
  cta?: DonationsAction;
  imageAlt?: string;
  imageUrl?: string;
};

export type DonationsCasitaRefugeSection = DonationsBaseSection & {
  _type: "sectionDonationsCasitaRefuge";
  title?: LocalizedValue;
  paragraphs?: LocalizedValue[];
  imageAlt?: string;
  imageUrl?: string;
};

export type DonationsCasitaCommunitySection = DonationsBaseSection & {
  _type: "sectionDonationsCasitaCommunity";
  eyebrow?: LocalizedValue;
  title?: LocalizedValue;
  lead?: LocalizedValue;
  paragraphs?: LocalizedValue[];
};

export type DonationsCasitaWaysSection = DonationsBaseSection & {
  _type: "sectionDonationsCasitaWays";
  eyebrow?: LocalizedValue;
  title?: LocalizedValue;
  body?: LocalizedValue;
  volunteerCta?: DonationsAction;
  wishlistCta?: DonationsAction;
  wishlistNote?: LocalizedValue;
  waysToGive?: DonationsInfoCard[];
};

export type DonationsCasitaBeeBoxSection = DonationsBaseSection & {
  _type: "sectionDonationsCasitaBeeBox";
  eyebrow?: LocalizedValue;
  title?: LocalizedValue;
  body?: LocalizedValue;
  imageAlt?: string;
  imageUrl?: string;
};

export type DonationsCasitaClosingSection = DonationsBaseSection & {
  _type: "sectionDonationsCasitaClosing";
  dedicationTitle?: LocalizedValue;
  dedicationParagraphs?: LocalizedValue[];
  thanksTitle?: LocalizedValue;
  thanksBody?: LocalizedValue;
};

export type DonationsKeepersOverviewSection = DonationsBaseSection & {
  _type: "sectionDonationsKeepersOverview";
  eyebrow?: LocalizedValue;
  title?: LocalizedValue;
  paragraphs?: LocalizedValue[];
  cta?: DonationsAction;
  imageAlt?: string;
  imageUrl?: string;
};

export type DonationsKeepersBenefitsSection = DonationsBaseSection & {
  _type: "sectionDonationsKeepersBenefits";
  eyebrow?: LocalizedValue;
  title?: LocalizedValue;
  benefits?: LocalizedValue[];
  contactLabel?: LocalizedValue;
  contactPrefix?: LocalizedValue;
  contactEmail?: string;
};

export type DonationsKeepersTiersSection = DonationsBaseSection & {
  _type: "sectionDonationsKeepersTiers";
  eyebrow?: LocalizedValue;
  title?: LocalizedValue;
  body?: LocalizedValue;
  focusedImpactTitle?: LocalizedValue;
  focusedImpactBody?: LocalizedValue;
  tiers?: DonationsTier[];
};

export type DonationsKeepersImpactSection = DonationsBaseSection & {
  _type: "sectionDonationsKeepersImpact";
  eyebrow?: LocalizedValue;
  title?: LocalizedValue;
  impactAreas?: DonationsImpactArea[];
};

export type RichTextSection = DonationsBaseSection & {
  _type: "sectionRichText";
  eyebrow?: LocalizedValue;
  heading?: LocalizedValue;
  body?: LocalizedValue;
};

export type ImageTextSection = DonationsBaseSection & {
  _type: "sectionImageText";
  heading?: LocalizedValue;
  body?: LocalizedValue;
  imageUrl?: string;
};

export type DonationsPageSection =
  | DonationsHeroSection
  | VolunteerCardsSection
  | DonationOpportunitySection
  | DonationsTabsIntroSection
  | DonationsCasitaOverviewSection
  | DonationsCasitaRefugeSection
  | DonationsCasitaCommunitySection
  | DonationsCasitaWaysSection
  | DonationsCasitaBeeBoxSection
  | DonationsCasitaClosingSection
  | DonationsKeepersOverviewSection
  | DonationsKeepersBenefitsSection
  | DonationsKeepersTiersSection
  | DonationsKeepersImpactSection
  | RichTextSection
  | ImageTextSection;

export type DonationsPageData = {
  title?: string;
  description?: string;
  sections?: DonationsPageSection[];
};

export const donationsPageQuery = defineQuery(`
  *[_type == "page" && slug.current == "invest-in-the-hive"][0]{
    title,
    description,
    sections[]{
      _key,
      _type,
      _type == "sectionDonationsHero" => {
        eyebrow,
        primaryCta{label, href},
        secondaryCta{label, href},
        highlights[]{_key, title, body}
      },
      _type == "sectionVolunteerCards" => {
        sectionTitle, intro,
        cards[]{_key, title, description},
        ctaLabel, ctaHref
      },
      _type == "sectionDonationOpportunity" => {
        eyebrow, sectionTitle, body, ctaLabel, ctaHref
      },
      _type == "sectionDonationsTabsIntro" => {
        eyebrow, heading, casitaTabLabel, keepersTabLabel
      },
      _type == "sectionDonationsCasitaOverview" => {
        eyebrow, title, paragraphs,
        cta{label, href},
        imageAlt, "imageUrl": image.asset->url
      },
      _type == "sectionDonationsCasitaRefuge" => {
        title, paragraphs, imageAlt, "imageUrl": image.asset->url
      },
      _type == "sectionDonationsCasitaCommunity" => {
        eyebrow, title, lead, paragraphs
      },
      _type == "sectionDonationsCasitaWays" => {
        eyebrow, title, body,
        volunteerCta{label, href},
        wishlistCta{label, href},
        wishlistNote,
        waysToGive[]{_key, title, description}
      },
      _type == "sectionDonationsCasitaBeeBox" => {
        eyebrow, title, body, imageAlt, "imageUrl": image.asset->url
      },
      _type == "sectionDonationsCasitaClosing" => {
        dedicationTitle, dedicationParagraphs, thanksTitle, thanksBody
      },
      _type == "sectionDonationsKeepersOverview" => {
        eyebrow, title, paragraphs,
        cta{label, href},
        imageAlt, "imageUrl": image.asset->url
      },
      _type == "sectionDonationsKeepersBenefits" => {
        eyebrow, title, benefits, contactLabel, contactPrefix, contactEmail
      },
      _type == "sectionDonationsKeepersTiers" => {
        eyebrow, title, body, focusedImpactTitle, focusedImpactBody,
        tiers[]{_key, amount, yearly, name, description}
      },
      _type == "sectionDonationsKeepersImpact" => {
        eyebrow, title,
        impactAreas[]{_key, title, alt, "imageUrl": image.asset->url}
      },
      _type == "sectionRichText" => {
        eyebrow, heading, body
      },
      _type == "sectionImageText" => {
        heading, body, "imageUrl": image.asset->url
      },
      _type == "sectionHero" => {
        headline, subheadline, ctaLabel, ctaHref,
        "heroImages": images[].asset->url
      },
      _type == "sectionImageCarousel" => {
        heading, body,
        "slides": slides[]{_key, title, caption, alt, "imageUrl": image.asset->url}
      },
      _type == "sectionCardGrid" => {
        sectionTitle, intro,
        "cards": cards[]->{_id, title, body}
      }
    }
  }
`);
