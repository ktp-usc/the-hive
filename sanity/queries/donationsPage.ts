import { defineQuery } from "next-sanity";

export type DonationsAction = {
  label?: string;
  href?: string;
};

export type DonationsHighlight = {
  _key?: string;
  title?: string;
  body?: string;
};

export type VolunteerCard = {
  _key?: string;
  title?: string;
  description?: string;
};

export type DonationsInfoCard = {
  _key?: string;
  title?: string;
  description?: string;
};

export type DonationsTier = {
  _key?: string;
  amount?: string;
  yearly?: string;
  name?: string;
  description?: string;
};

export type DonationsImpactArea = {
  _key?: string;
  title?: string;
  alt?: string;
  imageUrl?: string;
};

type DonationsBaseSection = {
  _key?: string;
  _type: string;
};

export type DonationsHeroSection = DonationsBaseSection & {
  _type: "sectionDonationsHero";
  eyebrow?: string;
  primaryCta?: DonationsAction;
  secondaryCta?: DonationsAction;
  highlights?: DonationsHighlight[];
};

export type VolunteerCardsSection = DonationsBaseSection & {
  _type: "sectionVolunteerCards";
  sectionTitle?: string;
  intro?: string;
  cards?: VolunteerCard[];
  ctaLabel?: string;
  ctaHref?: string;
};

export type DonationOpportunitySection = DonationsBaseSection & {
  _type: "sectionDonationOpportunity";
  eyebrow?: string;
  sectionTitle?: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export type DonationsTabsIntroSection = DonationsBaseSection & {
  _type: "sectionDonationsTabsIntro";
  eyebrow?: string;
  heading?: string;
  casitaTabLabel?: string;
  keepersTabLabel?: string;
};

export type DonationsCasitaOverviewSection = DonationsBaseSection & {
  _type: "sectionDonationsCasitaOverview";
  eyebrow?: string;
  title?: string;
  paragraphs?: string[];
  cta?: DonationsAction;
  imageAlt?: string;
  imageUrl?: string;
};

export type DonationsCasitaRefugeSection = DonationsBaseSection & {
  _type: "sectionDonationsCasitaRefuge";
  title?: string;
  paragraphs?: string[];
  imageAlt?: string;
  imageUrl?: string;
};

export type DonationsCasitaCommunitySection = DonationsBaseSection & {
  _type: "sectionDonationsCasitaCommunity";
  eyebrow?: string;
  title?: string;
  lead?: string;
  paragraphs?: string[];
};

export type DonationsCasitaWaysSection = DonationsBaseSection & {
  _type: "sectionDonationsCasitaWays";
  eyebrow?: string;
  title?: string;
  body?: string;
  volunteerCta?: DonationsAction;
  wishlistCta?: DonationsAction;
  wishlistNote?: string;
  waysToGive?: DonationsInfoCard[];
};

export type DonationsCasitaBeeBoxSection = DonationsBaseSection & {
  _type: "sectionDonationsCasitaBeeBox";
  eyebrow?: string;
  title?: string;
  body?: string;
  imageAlt?: string;
  imageUrl?: string;
};

export type DonationsCasitaClosingSection = DonationsBaseSection & {
  _type: "sectionDonationsCasitaClosing";
  dedicationTitle?: string;
  dedicationParagraphs?: string[];
  thanksTitle?: string;
  thanksBody?: string;
};

export type DonationsKeepersOverviewSection = DonationsBaseSection & {
  _type: "sectionDonationsKeepersOverview";
  eyebrow?: string;
  title?: string;
  paragraphs?: string[];
  cta?: DonationsAction;
  imageAlt?: string;
  imageUrl?: string;
};

export type DonationsKeepersBenefitsSection = DonationsBaseSection & {
  _type: "sectionDonationsKeepersBenefits";
  eyebrow?: string;
  title?: string;
  benefits?: string[];
  contactLabel?: string;
  contactPrefix?: string;
  contactEmail?: string;
};

export type DonationsKeepersTiersSection = DonationsBaseSection & {
  _type: "sectionDonationsKeepersTiers";
  eyebrow?: string;
  title?: string;
  body?: string;
  focusedImpactTitle?: string;
  focusedImpactBody?: string;
  tiers?: DonationsTier[];
};

export type DonationsKeepersImpactSection = DonationsBaseSection & {
  _type: "sectionDonationsKeepersImpact";
  eyebrow?: string;
  title?: string;
  impactAreas?: DonationsImpactArea[];
};

export type RichTextSection = DonationsBaseSection & {
  _type: "sectionRichText";
  eyebrow?: string;
  heading?: string;
  body?: string;
};

export type ImageTextSection = DonationsBaseSection & {
  _type: "sectionImageText";
  heading?: string;
  body?: string;
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
    // Fetch the full ordered section list so Studio add/remove/reorder is reflected on /donations.
    sections[]{
      _key,
      _type,
      // Hero banner with primary/secondary CTAs and highlight cards.
      _type == "sectionDonationsHero" => {
        eyebrow,
        primaryCta{label, href},
        secondaryCta{label, href},
        highlights[]{
          _key,
          title,
          body
        }
      },
      // Volunteer opportunity cards and optional CTA.
      _type == "sectionVolunteerCards" => {
        sectionTitle,
        intro,
        cards[]{
          _key,
          title,
          description
        },
        ctaLabel,
        ctaHref
      },
      // Standalone donation opportunity block.
      _type == "sectionDonationOpportunity" => {
        eyebrow,
        sectionTitle,
        body,
        ctaLabel,
        ctaHref
      },
      // Tab controls for switching between Casita and Keepers content.
      _type == "sectionDonationsTabsIntro" => {
        eyebrow,
        heading,
        casitaTabLabel,
        keepersTabLabel
      },
      // Casita tab: opening story, CTA, and lead image.
      _type == "sectionDonationsCasitaOverview" => {
        eyebrow,
        title,
        paragraphs,
        cta{label, href},
        imageAlt,
        "imageUrl": image.asset->url
      },
      // Casita tab: follow-up image/text refuge block.
      _type == "sectionDonationsCasitaRefuge" => {
        title,
        paragraphs,
        imageAlt,
        "imageUrl": image.asset->url
      },
      // Casita tab: community story content.
      _type == "sectionDonationsCasitaCommunity" => {
        eyebrow,
        title,
        lead,
        paragraphs
      },
      // Casita tab: ways to help CTAs and supporting cards.
      _type == "sectionDonationsCasitaWays" => {
        eyebrow,
        title,
        body,
        volunteerCta{label, href},
        wishlistCta{label, href},
        wishlistNote,
        waysToGive[]{
          _key,
          title,
          description
        }
      },
      // Casita tab: Bee Box image-left text-right section.
      _type == "sectionDonationsCasitaBeeBox" => {
        eyebrow,
        title,
        body,
        imageAlt,
        "imageUrl": image.asset->url
      },
      // Casita tab: dedication and thanks closing content.
      _type == "sectionDonationsCasitaClosing" => {
        dedicationTitle,
        dedicationParagraphs,
        thanksTitle,
        thanksBody
      },
      // Keepers tab: opening story, CTA, and lead image.
      _type == "sectionDonationsKeepersOverview" => {
        eyebrow,
        title,
        paragraphs,
        cta{label, href},
        imageAlt,
        "imageUrl": image.asset->url
      },
      // Keepers tab: benefits list and contact information.
      _type == "sectionDonationsKeepersBenefits" => {
        eyebrow,
        title,
        benefits,
        contactLabel,
        contactPrefix,
        contactEmail
      },
      // Keepers tab: giving tiers and focused impact copy.
      _type == "sectionDonationsKeepersTiers" => {
        eyebrow,
        title,
        body,
        focusedImpactTitle,
        focusedImpactBody,
        tiers[]{
          _key,
          amount,
          yearly,
          name,
          description
        }
      },
      // Keepers tab: image cards showing supported impact areas.
      _type == "sectionDonationsKeepersImpact" => {
        eyebrow,
        title,
        impactAreas[]{
          _key,
          title,
          alt,
          "imageUrl": image.asset->url
        }
      },
      // Generic rich text section that can be inserted anywhere on the page.
      _type == "sectionRichText" => {
        eyebrow,
        heading,
        body
      },
      // Generic image/text section that can be inserted anywhere on the page.
      _type == "sectionImageText" => {
        heading,
        body,
        "imageUrl": image.asset->url
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
