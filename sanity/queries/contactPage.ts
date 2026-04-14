import { defineQuery } from "next-sanity";

type ContactBaseSection = { _key?: string; _type: string };

export type ContactHeroSection = ContactBaseSection & {
  _type: "sectionContactHero";
  eyebrow?: string;
  title?: string;
  body?: string;
};

export type ContactNewsletterSection = ContactBaseSection & {
  _type: "sectionContactNewsletter";
  title?: string;
  formTitle?: string;
  emailLabel?: string;
  submitLabel?: string;
  newsletterUrl?: string | null;
};

export type ContactFormSubjectOption = {
  value?: string | null;
  label?: string | null;
};

export type ContactFormSection = ContactBaseSection & {
  _type: "sectionContactForm";
  formTitle?: string | null;
  formDescription?: string | null;
  nameLabel?: string | null;
  namePlaceholder?: string | null;
  emailLabel?: string | null;
  emailPlaceholder?: string | null;
  phoneLabel?: string | null;
  phonePlaceholder?: string | null;
  subjectLabel?: string | null;
  subjectPlaceholder?: string | null;
  commentLabel?: string | null;
  commentPlaceholder?: string | null;
  submitLabel?: string | null;
  subjectOptions?: ContactFormSubjectOption[] | null;
};

export type ContactInfoSection = ContactBaseSection & {
  _type: "sectionContactInfo";
  infoTitle?: string | null;
  infoDescription?: string | null;
  stayConnectedLabel?: string | null;
  emailLabel?: string | null;
  phoneLabel?: string | null;
  addressLabel?: string | null;
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
