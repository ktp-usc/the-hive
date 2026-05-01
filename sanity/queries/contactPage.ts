import { defineQuery } from "next-sanity";

type LocalizedValue =
    | string
    | {
    en?: string | null;
    "es-MX"?: string | null;
}
    | null
    | undefined;

type ContactBaseSection = { _key?: string; _type: string };

export type ContactHeroSection = ContactBaseSection & {
    _type: "sectionContactHero";
    eyebrow?: LocalizedValue;
    title?: LocalizedValue;
    body?: LocalizedValue;
};

export type ContactNewsletterSection = ContactBaseSection & {
    _type: "sectionContactNewsletter";
    title?: LocalizedValue;
    formTitle?: LocalizedValue;
    emailLabel?: LocalizedValue;
    submitLabel?: LocalizedValue;
    newsletterUrl?: string | null;
};

export type ContactFormSubjectOption = {
    value?: string | null;
    label?: LocalizedValue;
};

export type ContactFormSection = ContactBaseSection & {
    _type: "sectionContactForm";
    formTitle?: LocalizedValue;
    formDescription?: LocalizedValue;
    nameLabel?: LocalizedValue;
    namePlaceholder?: LocalizedValue;
    emailLabel?: LocalizedValue;
    emailPlaceholder?: LocalizedValue;
    phoneLabel?: LocalizedValue;
    phonePlaceholder?: LocalizedValue;
    subjectLabel?: LocalizedValue;
    subjectPlaceholder?: LocalizedValue;
    commentLabel?: LocalizedValue;
    commentPlaceholder?: LocalizedValue;
    submitLabel?: LocalizedValue;
    subjectOptions?: ContactFormSubjectOption[] | null;
};

export type ContactInfoSection = ContactBaseSection & {
    _type: "sectionContactInfo";
    infoTitle?: LocalizedValue;
    infoDescription?: LocalizedValue;
    stayConnectedLabel?: LocalizedValue;
    emailLabel?: LocalizedValue;
    phoneLabel?: LocalizedValue;
    addressLabel?: LocalizedValue;
};

export type ContactPageSection =
    | ContactHeroSection
    | ContactNewsletterSection
    | ContactFormSection
    | ContactInfoSection;

export type ContactPageData = {
    sections?: ContactPageSection[];
} | null;

export const contactPageQuery = defineQuery(`
  *[_type == "page" && slug.current == "contact"][0]{
    sections[]{
      _key,
      _type,
      _type == "sectionContactHero" => {
        eyebrow, title, body
      },
      _type == "sectionContactNewsletter" => {
        title, formTitle, emailLabel, submitLabel, newsletterUrl
      },
      _type == "sectionContactForm" => {
        formTitle, formDescription,
        nameLabel, namePlaceholder,
        emailLabel, emailPlaceholder,
        phoneLabel, phonePlaceholder,
        subjectLabel, subjectPlaceholder,
        commentLabel, commentPlaceholder,
        submitLabel,
        subjectOptions[]{ value, label }
      },
      _type == "sectionContactInfo" => {
        infoTitle, infoDescription, stayConnectedLabel,
        emailLabel, phoneLabel, addressLabel
      },
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