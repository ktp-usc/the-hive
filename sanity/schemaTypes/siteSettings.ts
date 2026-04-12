import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  groups: [
    {name: 'contact', title: 'Contact & Social'},
    {name: 'urls', title: 'Key URLs'},
    {name: 'pages', title: 'Page-specific URLs'},
  ],
  fields: [
    // ── Contact info (Footer + Contact page) ────────────────────────────────
    defineField({
      name: 'contactEmail',
      title: 'Contact email',
      type: 'string',
      description: 'Shown in the footer and on the Contact page. e.g. hello@thehivecc.org',
      group: 'contact',
    }),
    defineField({
      name: 'contactPhone',
      title: 'Contact phone',
      type: 'string',
      description: 'Displayed in the footer and Contact page. e.g. 803-888-7725',
      group: 'contact',
    }),
    defineField({
      name: 'contactAddress',
      title: 'Contact address',
      type: 'string',
      description: 'Street address shown in footer and Contact page.',
      group: 'contact',
    }),
    defineField({
      name: 'googleMapsUrl',
      title: 'Google Maps URL',
      type: 'string',
      description: 'Full Google Maps link for the address on the Contact page.',
      group: 'contact',
    }),

    // ── Social media (Contact page + Footer) ────────────────────────────────
    defineField({
      name: 'instagramUrl',
      title: 'Instagram URL',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'facebookUrl',
      title: 'Facebook URL',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'twitterUrl',
      title: 'Twitter / X URL',
      type: 'string',
      group: 'contact',
    }),

    // ── Footer brand copy ────────────────────────────────────────────────────
    defineField({
      name: 'footerTagline',
      title: 'Footer tagline',
      type: 'text',
      rows: 2,
      description: 'Short mission statement shown under "The Hive" in the footer.',
      group: 'contact',
    }),

    // ── Donate & volunteer (Navbar + Donations page) ─────────────────────────
    defineField({
      name: 'donateUrl',
      title: 'Donate button URL',
      type: 'string',
      description: 'Used in the navbar donate button and hero CTAs across multiple pages.',
      group: 'urls',
    }),
    defineField({
      name: 'volunteerSignupUrl',
      title: 'Volunteer sign-up URL',
      type: 'string',
      description: 'Volunteer platform link (e.g. pointapp.org). Used on the Donations page.',
      group: 'urls',
    }),

    // ── Newsletter (Contact page) ─────────────────────────────────────────
    defineField({
      name: 'newsletterUrl',
      title: 'Newsletter sign-up URL',
      type: 'string',
      description: 'External newsletter CTA link on the Contact page.',
      group: 'urls',
    }),

    // ── Donations page ───────────────────────────────────────────────────────
    defineField({
      name: 'amazonWishlistUrl',
      title: 'Amazon Wishlist URL',
      type: 'string',
      description: 'Casita of Care Amazon wishlist link on the Donations page.',
      group: 'pages',
    }),
    defineField({
      name: 'keepersContactEmail',
      title: "Keepers Club contact email",
      type: 'string',
      description: "Email shown in the Keepers Club section (e.g. chio@thehivecc.org).",
      group: 'pages',
    }),

    // ── Events page ──────────────────────────────────────────────────────────
    defineField({
      name: 'calendarEmbedUrl',
      title: 'Google Calendar embed URL',
      type: 'string',
      description: 'Full iframe src URL for the embedded Google Calendar on the Events page.',
      group: 'pages',
    }),
    defineField({
      name: 'calendarDirectUrl',
      title: 'Google Calendar direct URL',
      type: 'string',
      description: 'Direct "view in Google Calendar" link shown on the Events page.',
      group: 'pages',
    }),

    // ── Awareness / Prevention page ──────────────────────────────────────────
    defineField({
      name: 'calendlyUrl',
      title: 'Calendly booking URL',
      type: 'string',
      description: '"Book a Discovery Call" button on the Awareness page.',
      group: 'pages',
    }),
    defineField({
      name: 'trainingCatalogUrl',
      title: 'Training catalog URL',
      type: 'string',
      description: '"Download Training Catalog" link on the Awareness page (can be a /public PDF path or external URL).',
      group: 'pages',
    }),
    defineField({
      name: 'trainingContactEmail',
      title: 'Training contact email',
      type: 'string',
      description: '"Contact Our Team" button on the Awareness page (mailto: address).',
      group: 'pages',
    }),

    // ── Support page ─────────────────────────────────────────────────────────
    defineField({
      name: 'safetyPlanUrl',
      title: 'Safety Plan PDF URL',
      type: 'string',
      description: '"Emotional Safety Plan" download button on the Support page.',
      group: 'pages',
    }),

    // ── Partners page ─────────────────────────────────────────────────────────
    defineField({
      name: 'beeBoxContactEmail',
      title: 'Bee Box partner contact email',
      type: 'string',
      description: 'Email for Bee Box partnership inquiries shown on the Our Partners page.',
      group: 'pages',
    }),
  ],
  preview: {
    prepare() {
      return {title: 'Site Settings'}
    },
  },
})
