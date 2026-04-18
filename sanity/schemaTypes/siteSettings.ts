import { defineField, defineType } from "sanity";
import { localizedString, localizedText } from "./localized";

export const siteSettings = defineType({
    name: "siteSettings",
    title: "Site Settings",
    type: "document",
    groups: [
        { name: "contact", title: "Contact & Social" },
        { name: "footer", title: "Footer Text" },
        { name: "calendar", title: "Calendar" },
        { name: "about", title: "About / Mission & Values" },
        { name: "misc", title: "Misc" },
    ],
    fields: [
        // ── Contact info (Footer + Contact page) ────────────────────────────────
        defineField({
            name: "contactEmail",
            title: "Contact email",
            type: "string",
            description: "Shown in the footer and Contact page. e.g. hello@thehivecc.org",
            group: "contact",
        }),
        defineField({
            name: "contactPhone",
            title: "Contact phone",
            type: "string",
            description: "Displayed in footer and Contact page. e.g. 803-888-7725",
            group: "contact",
        }),
        defineField({
            name: "contactAddress",
            title: "Contact address",
            type: "string",
            description: "Street address shown in footer and Contact page.",
            group: "contact",
        }),
        defineField({
            name: "googleMapsUrl",
            title: "Google Maps URL",
            type: "string",
            description: "Full Google Maps link for the address on the Contact page.",
            group: "contact",
        }),

        // ── Social media ─────────────────────────────────────────────────────────
        defineField({
            name: "instagramUrl",
            title: "Instagram URL",
            type: "string",
            group: "contact",
        }),
        defineField({
            name: "facebookUrl",
            title: "Facebook URL",
            type: "string",
            group: "contact",
        }),
        defineField({
            name: "linkedinUrl",
            title: "LinkedIn URL",
            type: "string",
            group: "contact",
        }),
        defineField({
            name: "twitterUrl",
            title: "Twitter / X URL",
            type: "string",
            group: "contact",
        }),
        defineField({
            name: "youtubeUrl",
            title: "YouTube URL",
            type: "string",
            group: "contact",
        }),

        // ── Footer text ──────────────────────────────────────────────────────────
        defineField({
            name: "footerTagline",
            title: "Footer tagline",
            type: "localizedText",
            description: "Short mission statement shown under 'The Hive' in the footer.",
            group: "footer",
        }),
        defineField({
            name: "footerBrand",
            title: "Footer brand name",
            type: "localizedString",
            description: "Large heading in the footer, defaults to 'The Hive'.",
            group: "footer",
        }),
        defineField({
            name: "footerCopyright",
            title: "Footer copyright line",
            type: "localizedString",
            description: 'e.g. "© 2026 The Hive Community Circle"',
            group: "footer",
        }),
        defineField({
            name: "footerQuickLinksHeading",
            title: 'Footer "Quick Links" heading',
            type: "localizedString",
            group: "footer",
        }),
        defineField({
            name: "footerContactHeading",
            title: 'Footer "Contact" column heading',
            type: "localizedString",
            group: "footer",
        }),
        defineField({
            name: "footerEmailLabel",
            title: "Footer email label",
            type: "localizedString",
            description: 'Text before the email address, e.g. "Email:"',
            group: "footer",
        }),
        defineField({
            name: "footerPhoneLabel",
            title: "Footer phone label",
            type: "localizedString",
            description: 'Text before the phone number, e.g. "Phone:"',
            group: "footer",
        }),
        defineField({
            name: "footerAddressLabel",
            title: "Footer address label",
            type: "localizedString",
            description: 'Text before the address, e.g. "Address:"',
            group: "footer",
        }),

        // ── Calendar ─────────────────────────────────────────────────────────────
        defineField({
            name: "calendarDirectUrl",
            title: "Calendar direct URL",
            type: "string",
            description: 'Google Calendar link for the "Open Full Calendar" button on the Events page.',
            group: "calendar",
        }),
        defineField({
            name: "calendarEmbedUrl",
            title: "Calendar embed URL",
            type: "string",
            description: "Google Calendar embed src used in the iframe on the Events page.",
            group: "calendar",
        }),

        // ── About / Mission & Values ─────────────────────────────────────────────
        defineField({
            name: "missionTitle",
            title: "Mission title",
            type: "string",
            description: 'Shown in the About page team section header, e.g. "Our Mission".',
            group: "about",
        }),
        defineField({
            name: "missionBody",
            title: "Mission body",
            type: "text",
            rows: 4,
            description: "Mission statement shown in the About page team section.",
            group: "about",
        }),
        defineField({
            name: "valuesTitle",
            title: "Values title",
            type: "string",
            description: 'e.g. "Our Values".',
            group: "about",
        }),
        defineField({
            name: "valuesIntro",
            title: "Values intro text",
            type: "text",
            rows: 3,
            group: "about",
        }),
        defineField({
            name: "valuesPillars",
            title: "Values pillars",
            type: "array",
            of: [{ type: "string" }],
            description: "List of value pillars shown as pills in the About page.",
            group: "about",
        }),

        // ── Misc ─────────────────────────────────────────────────────────────────
        defineField({
            name: "newsletterUrl",
            title: "Newsletter sign-up URL",
            type: "string",
            description: "External newsletter link shown on the Contact page.",
            group: "misc",
        }),
    ],
    preview: {
        prepare() {
            return { title: "Site Settings" };
        },
    },
});