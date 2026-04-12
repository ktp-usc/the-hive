import { defineQuery } from "next-sanity";

export const siteSettingsQuery = defineQuery(`
  *[_type == "siteSettings" && _id == "site-settings"][0]{
    footerTagline,
    contactEmail,
    contactPhone,
    contactAddress,
    googleMapsUrl,
    donateUrl,
    instagramUrl,
    facebookUrl,
    linkedinUrl,
    twitterUrl,
    newsletterUrl,
    amazonWishlistUrl,
    keepersContactEmail,
    calendarEmbedUrl,
    calendarDirectUrl,
    calendlyUrl,
    trainingCatalogUrl,
    trainingContactEmail,
    safetyPlanUrl,
    beeBoxContactEmail,
  }
`);

export type SiteSettingsData = {
  footerTagline?: string | null;
  contactEmail?: string | null;
  contactPhone?: string | null;
  contactAddress?: string | null;
  googleMapsUrl?: string | null;
  donateUrl?: string | null;
  instagramUrl?: string | null;
  facebookUrl?: string | null;
  linkedinUrl?: string | null;
  twitterUrl?: string | null;
  newsletterUrl?: string | null;
  amazonWishlistUrl?: string | null;
  keepersContactEmail?: string | null;
  calendarEmbedUrl?: string | null;
  calendarDirectUrl?: string | null;
  calendlyUrl?: string | null;
  trainingCatalogUrl?: string | null;
  trainingContactEmail?: string | null;
  safetyPlanUrl?: string | null;
  beeBoxContactEmail?: string | null;
} | null;
