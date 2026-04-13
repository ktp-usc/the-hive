import { defineQuery } from "next-sanity";

export const siteSettingsQuery = defineQuery(`
  coalesce(
    *[_type == "siteSettings" && _id == "drafts.siteSettings"][0],
    *[_type == "siteSettings" && _id == "siteSettings"][0]
  ){
    contactEmail,
    contactPhone,
    contactAddress,
    googleMapsUrl,
    instagramUrl,
    facebookUrl,
    linkedinUrl,
    twitterUrl,
    youtubeUrl,
    newsletterUrl,
    footerTagline,
    footerBrand,
    footerCopyright,
    footerQuickLinksHeading,
    footerContactHeading,
    footerEmailLabel,
    footerPhoneLabel,
    footerAddressLabel,
    calendarDirectUrl,
    calendarEmbedUrl,
    missionTitle,
    missionBody,
    valuesTitle,
    valuesIntro,
    valuesPillars
  }
`);

export type SiteSettingsData = {
  contactEmail?: string | null;
  contactPhone?: string | null;
  contactAddress?: string | null;
  googleMapsUrl?: string | null;
  instagramUrl?: string | null;
  facebookUrl?: string | null;
  linkedinUrl?: string | null;
  twitterUrl?: string | null;
  youtubeUrl?: string | null;
  newsletterUrl?: string | null;
  footerTagline?: string | null;
  footerBrand?: string | null;
  footerCopyright?: string | null;
  footerQuickLinksHeading?: string | null;
  footerContactHeading?: string | null;
  footerEmailLabel?: string | null;
  footerPhoneLabel?: string | null;
  footerAddressLabel?: string | null;
  calendarDirectUrl?: string | null;
  calendarEmbedUrl?: string | null;
  missionTitle?: string | null;
  missionBody?: string | null;
  valuesTitle?: string | null;
  valuesIntro?: string | null;
  valuesPillars?: string[] | null;
} | null;
