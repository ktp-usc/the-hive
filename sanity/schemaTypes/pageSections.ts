import {defineField, defineType} from 'sanity'
import { localizedString, localizedText } from "./localized";

export const sectionRichText = defineType({
    name: "sectionRichText",
    title: "Rich text",
    type: "object",
    fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "localizedString" }),
        defineField({ name: "heading", title: "Heading", type: "localizedString" }),
        defineField({ name: "body", title: "Body text", type: "localizedText" }),
    ],
    preview: {
        select: { heading: "heading.en" },
        prepare({ heading }) { return { title: heading || "Rich text" } },
    },
})

export const sectionImageText = defineType({
    name: "sectionImageText",
    title: "Image & text",
    type: "object",
    fields: [
        defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
        defineField({ name: "heading", title: "Heading", type: "localizedString" }),
        defineField({ name: "body", title: "Body", type: "localizedText" }),
    ],
    preview: {
        select: { heading: "heading.en", media: "image" },
        prepare({ heading, media }) { return { title: heading || "Image & text", media } },
    },
})

export const carouselSlide = defineType({
    name: 'carouselSlide',
    title: 'Carousel slide',
    type: 'object',
    fields: [
        defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true }, validation: (Rule) => Rule.required() }),
        defineField({ name: 'title', title: 'Slide title', type: 'localizedString', validation: (Rule) => Rule.required() }),
        defineField({ name: 'caption', title: 'Caption', type: 'localizedText', validation: (Rule) => Rule.required() }),
        defineField({ name: 'alt', title: 'Alt text', type: 'string', description: 'Describe the image for screen readers.' }),
    ],
    preview: {
        select: { title: 'title.en', media: 'image' },
        prepare({ title, media }) { return { title: title || 'Carousel slide', media } },
    },
})

export const sectionImageCarousel = defineType({
    name: 'sectionImageCarousel',
    title: 'Image carousel',
    type: 'object',
    fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'localizedString', validation: (Rule) => Rule.required() }),
        defineField({ name: 'body', title: 'Intro text', type: 'localizedText' }),
        defineField({ name: 'slides', title: 'Slides', type: 'array', of: [{ type: 'carouselSlide' }], validation: (Rule) => Rule.min(1) }),
    ],
    preview: {
        select: { heading: 'heading.en' },
        prepare({ heading }) { return { title: heading || 'Image carousel' } },
    },
})

export const sectionHero = defineType({
    name: "sectionHero",
    title: "Hero",
    type: "object",
    fields: [
        defineField({ name: "headline", title: "Headline", type: "localizedString" }),
        defineField({ name: "subheadline", title: "Subheadline", type: "localizedText" }),
        defineField({ name: "images", title: "Images", type: "array", of: [{ type: "image", options: { hotspot: true } }] }),
        defineField({ name: "ctaLabel", title: "Button label", type: "localizedString" }),
        defineField({ name: "ctaHref", title: "Button link", type: "string" }),
    ],
    preview: {
        select: { headline: "headline.en" },
        prepare({ headline }) { return { title: headline || "Hero" } },
    },
})

export const sectionCardGrid = defineType({
    name: 'sectionCardGrid',
    title: 'Card grid',
    type: 'object',
    fields: [
        defineField({ name: 'sectionTitle', title: 'Section title', type: 'localizedString' }),
        defineField({ name: 'intro', title: 'Intro', type: 'localizedText' }),
        defineField({
            name: 'cards',
            title: 'Cards',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'title', title: 'Title', type: 'localizedString', validation: (Rule) => Rule.required() }),
                    defineField({ name: 'body', title: 'Description', type: 'localizedText', validation: (Rule) => Rule.required() }),
                ],
                preview: {
                    select: { title: 'title.en' },
                    prepare({ title }) { return { title: title || 'Card' } },
                },
            }],
        }),
    ],
    preview: {
        select: { title: 'sectionTitle.en' },
        prepare({ title }) { return { title: title || 'Card grid' } },
    },
})

export const sectionVolunteerCards = defineType({
    name: 'sectionVolunteerCards',
    title: 'Volunteer cards',
    type: 'object',
    fields: [
        defineField({ name: 'sectionTitle', title: 'Section title', type: 'localizedString' }),
        defineField({ name: 'intro', title: 'Intro', type: 'localizedText' }),
        defineField({
            name: 'cards', title: 'Cards', type: 'array',
            of: [{
                type: 'object',
                fields: [
                    defineField({ name: 'title', title: 'Title', type: 'localizedString', validation: (Rule) => Rule.required() }),
                    defineField({ name: 'description', title: 'Description', type: 'localizedText', validation: (Rule) => Rule.required() }),
                ],
                preview: {
                    select: { title: 'title.en' },
                    prepare({ title }) { return { title: title || 'Volunteer card' } },
                },
            }],
        }),
        defineField({ name: 'ctaLabel', title: 'Button label', type: 'localizedString' }),
        defineField({ name: 'ctaHref', title: 'Button link', type: 'string', description: '/path, https://..., etc.' }),
    ],
    preview: {
        select: { title: 'sectionTitle.en' },
        prepare({ title }) { return { title: title || 'Volunteer cards' } },
    },
})

export const sectionDonationOpportunity = defineType({
    name: 'sectionDonationOpportunity',
    title: 'Donation opportunity',
    type: 'object',
    fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'localizedString' }),
        defineField({ name: 'sectionTitle', title: 'Section title', type: 'localizedString' }),
        defineField({ name: 'body', title: 'Body', type: 'localizedText' }),
        defineField({ name: 'ctaLabel', title: 'Button label', type: 'localizedString' }),
        defineField({ name: 'ctaHref', title: 'Button link', type: 'string', description: '/path, https://..., etc.' }),
    ],
    preview: {
        select: { title: 'sectionTitle.en' },
        prepare({ title }) { return { title: title || 'Donation opportunity' } },
    },
})

export const donationsAction = defineType({
    name: 'donationsAction',
    title: 'Donations action',
    type: 'object',
    fields: [
        defineField({ name: 'label', title: 'Label', type: 'localizedString', validation: (Rule) => Rule.required() }),
        defineField({ name: 'href', title: 'Link', type: 'string', description: '/path, https://..., etc.', validation: (Rule) => Rule.required() }),
    ],
    preview: {
        select: { title: 'label.en', subtitle: 'href' },
        prepare({ title, subtitle }) { return { title: title || 'Action', subtitle } },
    },
})

export const donationsHighlight = defineType({
    name: 'donationsHighlight',
    title: 'Donations highlight',
    type: 'object',
    fields: [
        defineField({ name: 'title', title: 'Title', type: 'localizedString', validation: (Rule) => Rule.required() }),
        defineField({ name: 'body', title: 'Body', type: 'localizedText', validation: (Rule) => Rule.required() }),
    ],
    preview: {
        select: { title: 'title.en' },
        prepare({ title }) { return { title: title || 'Highlight' } },
    },
})

export const donationsInfoCard = defineType({
    name: 'donationsInfoCard',
    title: 'Donations info card',
    type: 'object',
    fields: [
        defineField({ name: 'title', title: 'Title', type: 'localizedString', validation: (Rule) => Rule.required() }),
        defineField({ name: 'description', title: 'Description', type: 'localizedText', validation: (Rule) => Rule.required() }),
    ],
    preview: {
        select: { title: 'title.en' },
        prepare({ title }) { return { title: title || 'Info card' } },
    },
})

export const donationsTier = defineType({
    name: 'donationsTier',
    title: 'Donations tier',
    type: 'object',
    fields: [
        defineField({ name: 'amount', title: 'Amount', type: 'localizedString', validation: (Rule) => Rule.required() }),
        defineField({ name: 'yearly', title: 'Yearly equivalent', type: 'localizedString', validation: (Rule) => Rule.required() }),
        defineField({ name: 'name', title: 'Tier name', type: 'localizedString', validation: (Rule) => Rule.required() }),
        defineField({ name: 'description', title: 'Description', type: 'localizedText', validation: (Rule) => Rule.required() }),
    ],
    preview: {
        select: { title: 'name.en', subtitle: 'amount.en' },
        prepare({ title, subtitle }) { return { title: title || 'Tier', subtitle } },
    },
})

export const donationsImpactArea = defineType({
    name: 'donationsImpactArea',
    title: 'Donations impact area',
    type: 'object',
    fields: [
        defineField({ name: 'title', title: 'Title', type: 'localizedString', validation: (Rule) => Rule.required() }),
        defineField({ name: 'alt', title: 'Image alt text', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true }, validation: (Rule) => Rule.required() }),
    ],
    preview: {
        select: { title: 'title.en', media: 'image' },
        prepare({ title, media }) { return { title: title || 'Impact area', media } },
    },
})

export const sectionDonationsHero = defineType({
    name: 'sectionDonationsHero',
    title: 'Donations hero',
    type: 'object',
    fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'localizedString' }),
        defineField({ name: 'primaryCta', title: 'Primary CTA', type: 'donationsAction' }),
        defineField({ name: 'secondaryCta', title: 'Secondary CTA', type: 'donationsAction' }),
        defineField({ name: 'highlights', title: 'Highlights', type: 'array', of: [{ type: 'donationsHighlight' }] }),
    ],
    preview: {
        select: { title: 'eyebrow.en' },
        prepare({ title }) { return { title: title || 'Donations hero' } },
    },
})

export const sectionDonationsTabsIntro = defineType({
    name: 'sectionDonationsTabsIntro',
    title: 'Donations tabs intro',
    type: 'object',
    fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'localizedString' }),
        defineField({ name: 'heading', title: 'Heading', type: 'localizedString' }),
        defineField({ name: 'casitaTabLabel', title: 'Casita tab label', type: 'localizedString' }),
        defineField({ name: 'keepersTabLabel', title: 'Keepers tab label', type: 'localizedString' }),
    ],
    preview: {
        select: { title: 'heading.en' },
        prepare({ title }) { return { title: title || 'Donations tabs intro' } },
    },
})

export const sectionDonationsCasitaOverview = defineType({
    name: 'sectionDonationsCasitaOverview',
    title: 'Casita overview',
    type: 'object',
    fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'localizedString' }),
        defineField({ name: 'title', title: 'Title', type: 'localizedString' }),
        defineField({ name: 'paragraphs', title: 'Paragraphs', type: 'array', of: [{ type: 'localizedText' }] }),
        defineField({ name: 'cta', title: 'CTA', type: 'donationsAction' }),
        defineField({ name: 'imageAlt', title: 'Image alt text', type: 'string' }),
        defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    ],
    preview: {
        select: { title: 'title.en', media: 'image' },
        prepare({ title, media }) { return { title: title || 'Casita overview', media } },
    },
})

export const sectionDonationsCasitaRefuge = defineType({
    name: 'sectionDonationsCasitaRefuge',
    title: 'Casita refuge',
    type: 'object',
    fields: [
        defineField({ name: 'title', title: 'Title', type: 'localizedString' }),
        defineField({ name: 'paragraphs', title: 'Paragraphs', type: 'array', of: [{ type: 'localizedText' }] }),
        defineField({ name: 'imageAlt', title: 'Image alt text', type: 'string' }),
        defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    ],
    preview: {
        select: { title: 'title.en', media: 'image' },
        prepare({ title, media }) { return { title: title || 'Casita refuge', media } },
    },
})

export const sectionDonationsCasitaCommunity = defineType({
    name: 'sectionDonationsCasitaCommunity',
    title: 'Casita community story',
    type: 'object',
    fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'localizedString' }),
        defineField({ name: 'title', title: 'Title', type: 'localizedString' }),
        defineField({ name: 'lead', title: 'Lead', type: 'localizedText' }),
        defineField({ name: 'paragraphs', title: 'Paragraphs', type: 'array', of: [{ type: 'localizedText' }] }),
    ],
    preview: {
        select: { title: 'title.en' },
        prepare({ title }) { return { title: title || 'Casita community story' } },
    },
})

export const sectionDonationsCasitaWays = defineType({
    name: 'sectionDonationsCasitaWays',
    title: 'Casita ways to help',
    type: 'object',
    fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'localizedString' }),
        defineField({ name: 'title', title: 'Title', type: 'localizedString' }),
        defineField({ name: 'body', title: 'Body', type: 'localizedText' }),
        defineField({ name: 'volunteerCta', title: 'Volunteer CTA', type: 'donationsAction' }),
        defineField({ name: 'wishlistCta', title: 'Wishlist CTA', type: 'donationsAction' }),
        defineField({ name: 'wishlistNote', title: 'Wishlist note', type: 'localizedText' }),
        defineField({ name: 'waysToGive', title: 'Ways to give', type: 'array', of: [{ type: 'donationsInfoCard' }] }),
    ],
    preview: {
        select: { title: 'title.en' },
        prepare({ title }) { return { title: title || 'Casita ways to help' } },
    },
})

export const sectionDonationsCasitaBeeBox = defineType({
    name: 'sectionDonationsCasitaBeeBox',
    title: 'Casita Bee Box',
    type: 'object',
    fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'localizedString' }),
        defineField({ name: 'title', title: 'Title', type: 'localizedString' }),
        defineField({ name: 'body', title: 'Body', type: 'localizedText' }),
        defineField({ name: 'imageAlt', title: 'Image alt text', type: 'string' }),
        defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    ],
    preview: {
        select: { title: 'title.en', media: 'image' },
        prepare({ title, media }) { return { title: title || 'Casita Bee Box', media } },
    },
})

export const sectionDonationsCasitaClosing = defineType({
    name: 'sectionDonationsCasitaClosing',
    title: 'Casita closing',
    type: 'object',
    fields: [
        defineField({ name: 'dedicationTitle', title: 'Dedication title', type: 'localizedString' }),
        defineField({ name: 'dedicationParagraphs', title: 'Dedication paragraphs', type: 'array', of: [{ type: 'localizedText' }] }),
        defineField({ name: 'thanksTitle', title: 'Thanks title', type: 'localizedString' }),
        defineField({ name: 'thanksBody', title: 'Thanks body', type: 'localizedText' }),
    ],
    preview: {
        select: { title: 'dedicationTitle.en' },
        prepare({ title }) { return { title: title || 'Casita closing' } },
    },
})

export const sectionDonationsKeepersOverview = defineType({
    name: 'sectionDonationsKeepersOverview',
    title: 'Keepers overview',
    type: 'object',
    fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'localizedString' }),
        defineField({ name: 'title', title: 'Title', type: 'localizedString' }),
        defineField({ name: 'paragraphs', title: 'Paragraphs', type: 'array', of: [{ type: 'localizedText' }] }),
        defineField({ name: 'cta', title: 'CTA', type: 'donationsAction' }),
        defineField({ name: 'imageAlt', title: 'Image alt text', type: 'string' }),
        defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    ],
    preview: {
        select: { title: 'title.en', media: 'image' },
        prepare({ title, media }) { return { title: title || 'Keepers overview', media } },
    },
})

export const sectionDonationsKeepersBenefits = defineType({
    name: 'sectionDonationsKeepersBenefits',
    title: 'Keepers benefits',
    type: 'object',
    fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'localizedString' }),
        defineField({ name: 'title', title: 'Title', type: 'localizedString' }),
        defineField({ name: 'benefits', title: 'Benefits', type: 'array', of: [{ type: 'localizedString' }] }),
        defineField({ name: 'contactLabel', title: 'Contact label', type: 'localizedString' }),
        defineField({ name: 'contactPrefix', title: 'Contact prefix', type: 'localizedText' }),
        defineField({ name: 'contactEmail', title: 'Contact email', type: 'string' }),
    ],
    preview: {
        select: { title: 'title.en' },
        prepare({ title }) { return { title: title || 'Keepers benefits' } },
    },
})

export const sectionDonationsKeepersTiers = defineType({
    name: 'sectionDonationsKeepersTiers',
    title: 'Keepers tiers',
    type: 'object',
    fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'localizedString' }),
        defineField({ name: 'title', title: 'Title', type: 'localizedString' }),
        defineField({ name: 'body', title: 'Body', type: 'localizedText' }),
        defineField({ name: 'focusedImpactTitle', title: 'Focused impact title', type: 'localizedString' }),
        defineField({ name: 'focusedImpactBody', title: 'Focused impact body', type: 'localizedText' }),
        defineField({ name: 'tiers', title: 'Tiers', type: 'array', of: [{ type: 'donationsTier' }] }),
    ],
    preview: {
        select: { title: 'title.en' },
        prepare({ title }) { return { title: title || 'Keepers tiers' } },
    },
})

export const sectionDonationsKeepersImpact = defineType({
    name: 'sectionDonationsKeepersImpact',
    title: 'Keepers impact areas',
    type: 'object',
    fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'localizedString' }),
        defineField({ name: 'title', title: 'Title', type: 'localizedString' }),
        defineField({ name: 'impactAreas', title: 'Impact areas', type: 'array', of: [{ type: 'donationsImpactArea' }] }),
    ],
    preview: {
        select: { title: 'title.en' },
        prepare({ title }) { return { title: title || 'Keepers impact areas' } },
    },
})

export const sectionPartnerLogos = defineType({
    name: 'sectionPartnerLogos',
    title: 'Partner logos',
    type: 'object',
    fields: [
        defineField({ name: 'groupLabel', title: 'Group label', type: 'localizedString', description: 'e.g. Philanthropic, Corporate' }),
        defineField({ name: 'partners', title: 'Partners', type: 'array', of: [{ type: 'reference', to: [{ type: 'partnerLogo' }] }] }),
    ],
    preview: {
        select: { label: 'groupLabel.en' },
        prepare({ label }) { return { title: label || 'Partner logos' } },
    },
})

export const sectionTeam = defineType({
    name: 'sectionTeam',
    title: 'Team',
    type: 'object',
    fields: [
        defineField({
            name: 'eyebrow',
            title: 'Eyebrow',
            type: 'localizedString',
            description: 'Small label above the section heading (e.g. "Team", "Leadership").',
        }),
        defineField({
            name: 'groupLabel',
            title: 'Group label / heading',
            type: 'localizedString',
            description: 'Heading for this block (e.g. Founder/CEO, Team Members, Board of Directors). Each team member has a Section field — keep this label aligned with that grouping.',
        }),
        defineField({ name: 'members', title: 'Members', type: 'array', of: [{ type: 'reference', to: [{ type: 'teamMember' }] }] }),
    ],
    preview: {
        select: { label: 'groupLabel.en' },
        prepare({ label }) { return { title: label || 'Team' } },
    },
})

// ── Awareness page ────────────────────────────────────────────────────────────

export const awarenessProgram = defineType({
    name: 'awarenessProgram',
    title: 'Awareness program',
    type: 'object',
    fields: [
        defineField({ name: 'title', title: 'Title', type: 'localizedString', validation: (Rule) => Rule.required() }),
        defineField({ name: 'body', title: 'Body', type: 'localizedText' }),
        defineField({ name: 'languages', title: 'Languages badge', type: 'localizedString', description: 'e.g. "Available in English & Spanish"' }),
        defineField({ name: 'badge', title: 'Badge', type: 'localizedString', description: 'e.g. "NEW"' }),
        defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    ],
    preview: {
        select: { title: 'title.en', media: 'image' },
        prepare({ title, media }) { return { title: title || 'Program', media } },
    },
})

export const awarenessTrainingItem = defineType({
    name: 'awarenessTrainingItem',
    title: 'Training item',
    type: 'object',
    fields: [
        defineField({ name: 'title', title: 'Title', type: 'localizedString', validation: (Rule) => Rule.required() }),
        defineField({ name: 'badge', title: 'Badge', type: 'localizedString', description: 'Optional e.g. "NEW"' }),
    ],
    preview: {
        select: { title: 'title.en' },
        prepare({ title }) { return { title: title || 'Training item' } },
    },
})

export const awarenessOffering = defineType({
    name: 'awarenessOffering',
    title: 'Technical assistance offering',
    type: 'object',
    fields: [
        defineField({ name: 'title', title: 'Title', type: 'localizedString', validation: (Rule) => Rule.required() }),
        defineField({ name: 'body', title: 'Body', type: 'localizedText' }),
    ],
    preview: {
        select: { title: 'title.en' },
        prepare({ title }) { return { title: title || 'Offering' } },
    },
})

export const awarenessCTAButton = defineType({
    name: 'awarenessCTAButton',
    title: 'CTA button',
    type: 'object',
    fields: [
        defineField({ name: 'label', title: 'Label', type: 'localizedString', validation: (Rule) => Rule.required() }),
        defineField({ name: 'href', title: 'URL or path', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({
            name: 'variant', title: 'Style', type: 'string',
            options: { list: [{ value: 'primary', title: 'Primary (orange)' }, { value: 'outline', title: 'Outline' }] },
            initialValue: 'primary',
        }),
    ],
    preview: {
        select: { title: 'label.en', subtitle: 'href' },
        prepare({ title, subtitle }) { return { title: title || 'Button', subtitle } },
    },
})

export const sectionAwarenessHero = defineType({
    name: 'sectionAwarenessHero',
    title: 'Awareness hero',
    type: 'object',
    fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'localizedString' }),
        defineField({ name: 'title', title: 'Title', type: 'localizedString' }),
        defineField({ name: 'body', title: 'Body', type: 'localizedText' }),
    ],
    preview: {
        select: { title: 'title.en' },
        prepare({ title }) { return { title: title || 'Awareness hero' } },
    },
})

export const sectionAwarenessValues = defineType({
    name: 'sectionAwarenessValues',
    title: 'Values / pillars',
    type: 'object',
    fields: [
        defineField({ name: 'title', title: 'Title', type: 'localizedString' }),
        defineField({ name: 'intro', title: 'Intro (before list)', type: 'localizedText' }),
        defineField({ name: 'pillars', title: 'Value pillars (highlighted in blue)', type: 'array', of: [{ type: 'localizedString' }] }),
        defineField({ name: 'outro', title: 'Outro (after list)', type: 'localizedText' }),
    ],
    preview: {
        select: { title: 'title.en' },
        prepare({ title }) { return { title: title || 'Values / pillars' } },
    },
})

export const sectionAwarenessPrograms = defineType({
    name: 'sectionAwarenessPrograms',
    title: 'Awareness programs',
    type: 'object',
    fields: [
        defineField({ name: 'title', title: 'Section title', type: 'localizedString' }),
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'localizedString' }),
        defineField({ name: 'body', title: 'Body', type: 'localizedText' }),
        defineField({ name: 'programs', title: 'Programs', type: 'array', of: [{ type: 'awarenessProgram' }] }),
    ],
    preview: {
        select: { title: 'title.en' },
        prepare({ title }) { return { title: title || 'Awareness programs' } },
    },
})

export const sectionAwarenessTraining = defineType({
    name: 'sectionAwarenessTraining',
    title: 'Training series',
    type: 'object',
    fields: [
        defineField({ name: 'title', title: 'Section title', type: 'localizedString' }),
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'localizedString' }),
        defineField({ name: 'body', title: 'Body', type: 'localizedText' }),
        defineField({ name: 'note', title: 'Italic note (below body)', type: 'localizedText' }),
        defineField({ name: 'trainingSeries', title: 'Training items', type: 'array', of: [{ type: 'awarenessTrainingItem' }] }),
        defineField({ name: 'contactNote', title: 'Contact note (below items)', type: 'localizedText' }),
    ],
    preview: {
        select: { title: 'title.en' },
        prepare({ title }) { return { title: title || 'Training series' } },
    },
})

export const sectionAwarenessTechAssist = defineType({
    name: 'sectionAwarenessTechAssist',
    title: 'Technical assistance',
    type: 'object',
    fields: [
        defineField({ name: 'title', title: 'Section title', type: 'localizedString' }),
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'localizedString' }),
        defineField({ name: 'body', title: 'Body', type: 'localizedText' }),
        defineField({ name: 'offerings', title: 'Offerings', type: 'array', of: [{ type: 'awarenessOffering' }] }),
    ],
    preview: {
        select: { title: 'title.en' },
        prepare({ title }) { return { title: title || 'Technical assistance' } },
    },
})

export const sectionAwarenessCta = defineType({
    name: 'sectionAwarenessCta',
    title: 'Awareness CTA',
    type: 'object',
    fields: [
        defineField({ name: 'title', title: 'Title', type: 'localizedString' }),
        defineField({ name: 'body', title: 'Body', type: 'localizedText' }),
        defineField({ name: 'buttons', title: 'Buttons', type: 'array', of: [{ type: 'awarenessCTAButton' }] }),
    ],
    preview: {
        select: { title: 'title.en' },
        prepare({ title }) { return { title: title || 'Awareness CTA' } },
    },
})

// ── Support page ──────────────────────────────────────────────────────────────

export const supportServiceCard = defineType({
    name: "supportServiceCard",
    title: "Support service card",
    type: "object",
    fields: [
        defineField({ name: "cardId", title: "Card ID", type: "string", description: "Slug for anchor links (e.g. peer-advocacy)." }),
        defineField({ name: "title", title: "Title", type: "localizedString" }),
        defineField({ name: "subtitle", title: "Subtitle", type: "localizedString" }),
        defineField({ name: "summary", title: "Summary", type: "localizedText" }),
        defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
        defineField({ name: "details", title: "Details (bullet points)", type: "array", of: [{ type: "localizedString" }] }),
        defineField({ name: "note", title: "Note", type: "localizedText" }),
        defineField({ name: "noteLinkLabel", title: "Note link label", type: "localizedString" }),
        defineField({ name: "noteLinkHref", title: "Note link URL", type: "string" }),
        defineField({ name: "ctaLabel", title: "CTA label", type: "localizedString" }),
        defineField({ name: "ctaHref", title: "CTA URL or path", type: "string" }),
    ],
    preview: {
        select: { title: "title.en", media: "image" },
        prepare({ title, media }) { return { title: title || "Service card", media } },
    },
})

export const supportResourceButton = defineType({
    name: "supportResourceButton",
    title: "Resource button",
    type: "object",
    fields: [
        defineField({ name: "label", title: "Label", type: "localizedString" }),
        defineField({ name: "href", title: "URL or path", type: "string" }),
    ],
    preview: {
        select: { title: "label.en", subtitle: "href" },
        prepare({ title, subtitle }) { return { title: title || "Button", subtitle } },
    },
})

export const sectionSupportHero = defineType({
    name: "sectionSupportHero",
    title: "Support hero",
    type: "object",
    fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "localizedString" }),
        defineField({ name: "title", title: "Title", type: "localizedString" }),
        defineField({ name: "body", title: "Body", type: "localizedText" }),
    ],
    preview: {
        select: { title: "title.en" },
        prepare({ title }) { return { title: title || "Support hero" } },
    },
})

export const sectionSupportIntro = defineType({
    name: "sectionSupportIntro",
    title: "Support intro",
    type: "object",
    fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "localizedString" }),
        defineField({ name: "title", title: "Title", type: "localizedString" }),
        defineField({ name: "body", title: "Body", type: "localizedText" }),
        defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
    ],
    preview: {
        select: { title: "title.en", media: "image" },
        prepare({ title, media }) { return { title: title || "Support intro", media } },
    },
})

export const sectionSupportServices = defineType({
    name: "sectionSupportServices",
    title: "Support services",
    type: "object",
    fields: [
        defineField({ name: "heading", title: "Heading", type: "localizedString" }),
        defineField({ name: "languageNote", title: "Language availability note", type: "localizedString" }),
        defineField({ name: "cards", title: "Service cards", type: "array", of: [{ type: "supportServiceCard" }] }),
    ],
    preview: {
        select: { title: "heading.en" },
        prepare({ title }) { return { title: title || "Support services" } },
    },
})

export const sectionSupportAccessibility = defineType({
    name: "sectionSupportAccessibility",
    title: "Support accessibility",
    type: "object",
    fields: [
        defineField({ name: "eyebrow", title: "Eyebrow", type: "localizedString" }),
        defineField({ name: "title", title: "Title", type: "localizedString" }),
        defineField({ name: "body", title: "Body", type: "localizedText" }),
        defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
    ],
    preview: {
        select: { title: "title.en", media: "image" },
        prepare({ title, media }) { return { title: title || "Support accessibility", media } },
    },
})

export const sectionSupportResources = defineType({
    name: "sectionSupportResources",
    title: "Support resources",
    type: "object",
    fields: [
        defineField({ name: "title", title: "Title", type: "localizedString" }),
        defineField({ name: "body", title: "Body", type: "localizedText" }),
        defineField({ name: "buttons", title: "Buttons", type: "array", of: [{ type: "supportResourceButton" }] }),
    ],
    preview: {
        select: { title: "title.en" },
        prepare({ title }) { return { title: title || "Support resources" } },
    },
})

// ── Our Impact page ───────────────────────────────────────────────────────────

export const impactMediaItem = defineType({
    name: 'impactMediaItem',
    title: 'Media item',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'localizedString',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Image (optional)',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'href',
            title: 'Link URL',
            type: 'string',
            description: 'External link for the card button.',
        }),
    ],
    preview: {
        select: { title: 'title.en', media: 'image' },
        prepare({ title, media }) { return { title: title || 'Media item', media } },
    },
})

export const impactAward = defineType({
    name: 'impactAward',
    title: 'Award',
    type: 'object',
    fields: [
        defineField({ name: 'name', title: 'Award name', type: 'localizedString', validation: (Rule) => Rule.required() }),
        defineField({ name: 'year', title: 'Year', type: 'string' }),
        defineField({ name: 'issuer', title: 'Issuing organization', type: 'localizedString' }),
        defineField({ name: 'description', title: 'Description', type: 'localizedText' }),
        defineField({
            name: 'image',
            title: 'Image (optional)',
            type: 'image',
            options: { hotspot: true },
        }),
    ],
    preview: {
        select: { title: 'name.en', subtitle: 'year', media: 'image' },
        prepare({ title, subtitle, media }) { return { title: title || 'Award', subtitle, media } },
    },
})

export const impactDocument = defineType({
    name: 'impactDocument',
    title: 'Report / document',
    type: 'object',
    fields: [
        defineField({ name: 'title', title: 'Title', type: 'localizedString', validation: (Rule) => Rule.required() }),
        defineField({ name: 'description', title: 'Description', type: 'localizedText' }),
        defineField({ name: 'href', title: 'Link or file path', type: 'string', description: '/public path or https://...', validation: (Rule) => Rule.required() }),
        defineField({ name: 'cta', title: 'Button label', type: 'localizedString', description: 'e.g. "Download PDF"' }),
        defineField({ name: 'external', title: 'Opens in new tab', type: 'boolean', initialValue: false }),
    ],
    preview: {
        select: { title: 'title.en' },
        prepare({ title }) { return { title: title || 'Document' } },
    },
})

export const sectionImpactHero = defineType({
    name: 'sectionImpactHero',
    title: 'Impact hero',
    type: 'object',
    fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow / headline', type: 'localizedString' }),
        defineField({ name: 'title', title: 'Title', type: 'localizedString' }),
        defineField({ name: 'body', title: 'Body', type: 'localizedText' }),
        defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    ],
    preview: {
        select: { title: 'eyebrow.en', media: 'image' },
        prepare({ title, media }) { return { title: title || 'Impact hero', media } },
    },
})

export const sectionImpactMedia = defineType({
    name: 'sectionImpactMedia',
    title: 'In the media',
    type: 'object',
    fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'localizedString' }),
        defineField({ name: 'title', title: 'Title', type: 'localizedString' }),
        defineField({ name: 'items', title: 'Media items', type: 'array', of: [{ type: 'impactMediaItem' }] }),
    ],
    preview: {
        select: { title: 'title.en' },
        prepare({ title }) { return { title: title || 'In the media' } },
    },
})

export const sectionImpactAwards = defineType({
    name: 'sectionImpactAwards',
    title: 'Awards & recognition',
    type: 'object',
    fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'localizedString' }),
        defineField({ name: 'title', title: 'Title', type: 'localizedString' }),
        defineField({ name: 'awards', title: 'Awards', type: 'array', of: [{ type: 'impactAward' }] }),
    ],
    preview: {
        select: { title: 'title.en' },
        prepare({ title }) { return { title: title || 'Awards & recognition' } },
    },
})

export const sectionImpactDocuments = defineType({
    name: 'sectionImpactDocuments',
    title: 'Reports & documents',
    type: 'object',
    fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'localizedString' }),
        defineField({ name: 'title', title: 'Title', type: 'localizedString' }),
        defineField({ name: 'documents', title: 'Documents', type: 'array', of: [{ type: 'impactDocument' }] }),
    ],
    preview: {
        select: { title: 'title.en' },
        prepare({ title }) { return { title: title || 'Reports & documents' } },
    },
})

// ── Contact page ──────────────────────────────────────────────────────────────

export const sectionContactHero = defineType({
    name: 'sectionContactHero',
    title: 'Contact hero',
    type: 'object',
    fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'localizedString' }),
        defineField({ name: 'title', title: 'Title', type: 'localizedString' }),
        defineField({ name: 'body', title: 'Body', type: 'localizedText' }),
    ],
    preview: {
        select: { title: 'title.en' },
        prepare({ title }) { return { title: title || 'Contact hero' } },
    },
})

export const sectionContactNewsletter = defineType({
    name: 'sectionContactNewsletter',
    title: 'Newsletter section',
    type: 'object',
    fields: [
        defineField({ name: 'title', title: 'Title', type: 'localizedString' }),
        defineField({ name: 'formTitle', title: 'Form title', type: 'localizedString' }),
        defineField({ name: 'emailLabel', title: 'Email field label', type: 'localizedString' }),
        defineField({ name: 'submitLabel', title: 'Submit button label', type: 'localizedString' }),
        defineField({ name: 'newsletterUrl', title: 'Newsletter CTA URL', type: 'string', description: 'Overrides the site-wide newsletter URL for this section.' }),
    ],
    preview: {
        select: { title: 'title.en' },
        prepare({ title }) { return { title: title || 'Newsletter section' } },
    },
})

export const contactFormSubjectOption = defineType({
    name: 'contactFormSubjectOption',
    title: 'Subject option',
    type: 'object',
    fields: [
        defineField({ name: 'value', title: 'Value (URL-safe)', type: 'string', description: 'e.g. general-inquiry' }),
        defineField({ name: 'label', title: 'Display label', type: 'localizedString', description: 'e.g. General Inquiry' }),
    ],
    preview: {
        select: { title: 'label.en' },
        prepare({ title }) { return { title: title || 'Subject option' } },
    },
})

export const sectionContactForm = defineType({
    name: 'sectionContactForm',
    title: 'Contact form section',
    type: 'object',
    fields: [
        defineField({ name: 'formTitle', title: 'Form heading', type: 'localizedString' }),
        defineField({ name: 'formDescription', title: 'Form description', type: 'localizedText' }),
        defineField({ name: 'nameLabel', title: 'Name field label', type: 'localizedString' }),
        defineField({ name: 'namePlaceholder', title: 'Name placeholder', type: 'localizedString' }),
        defineField({ name: 'emailLabel', title: 'Email field label', type: 'localizedString' }),
        defineField({ name: 'emailPlaceholder', title: 'Email placeholder', type: 'localizedString' }),
        defineField({ name: 'phoneLabel', title: 'Phone field label', type: 'localizedString' }),
        defineField({ name: 'phonePlaceholder', title: 'Phone placeholder', type: 'localizedString' }),
        defineField({ name: 'subjectLabel', title: 'Subject field label', type: 'localizedString' }),
        defineField({ name: 'subjectPlaceholder', title: 'Subject placeholder', type: 'localizedString' }),
        defineField({ name: 'commentLabel', title: 'Comment field label', type: 'localizedString' }),
        defineField({ name: 'commentPlaceholder', title: 'Comment placeholder', type: 'localizedString' }),
        defineField({ name: 'submitLabel', title: 'Submit button label', type: 'localizedString' }),
        defineField({
            name: 'subjectOptions', title: 'Subject options', type: 'array',
            of: [{ type: 'contactFormSubjectOption' }],
            description: 'Leave empty to use the default options from site copy.',
        }),
    ],
    preview: {
        select: { title: 'formTitle.en' },
        prepare({ title }) { return { title: title || 'Contact form section' } },
    },
})

export const sectionContactInfo = defineType({
    name: 'sectionContactInfo',
    title: 'Contact info section',
    type: 'object',
    fields: [
        defineField({ name: 'infoTitle', title: 'Info panel heading', type: 'localizedString' }),
        defineField({ name: 'infoDescription', title: 'Info panel description', type: 'localizedText' }),
        defineField({ name: 'stayConnectedLabel', title: '"Stay Connected" label', type: 'localizedString' }),
        defineField({ name: 'emailLabel', title: 'Email row label', type: 'localizedString' }),
        defineField({ name: 'phoneLabel', title: 'Phone row label', type: 'localizedString' }),
        defineField({ name: 'addressLabel', title: 'Address row label', type: 'localizedString' }),
    ],
    preview: {
        select: { title: 'infoTitle.en' },
        prepare({ title }) { return { title: title || 'Contact info section' } },
    },
})

// ── Events page ───────────────────────────────────────────────────────────────

export const sectionEventsHero = defineType({
    name: 'sectionEventsHero',
    title: 'Events hero',
    type: 'object',
    fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'localizedString' }),
        defineField({ name: 'title', title: 'Title', type: 'localizedString' }),
        defineField({ name: 'body', title: 'Body', type: 'localizedText' }),
        defineField({ name: 'openCalendarLabel', title: '"Open Calendar" button label', type: 'localizedString' }),
        defineField({ name: 'askAboutEventLabel', title: '"Ask About Event" button label', type: 'localizedString' }),
        defineField({ name: 'calendarIframeTitle', title: 'Calendar iframe title (accessibility)', type: 'localizedString' }),
    ],
    preview: {
        select: { title: 'title.en' },
        prepare({ title }) { return { title: title || 'Events hero' } },
    },
})

export const sectionEventsUpcoming = defineType({
    name: 'sectionEventsUpcoming',
    title: 'Upcoming events section',
    type: 'object',
    fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'localizedString' }),
        defineField({ name: 'title', title: 'Section heading', type: 'localizedString' }),
        defineField({ name: 'body', title: 'Body', type: 'localizedText' }),
        defineField({ name: 'openCalendarLabel', title: '"Open Calendar" button label', type: 'localizedString' }),
        defineField({ name: 'loadingLabel', title: 'Loading text', type: 'localizedString' }),
        defineField({ name: 'emptyLabel', title: 'Empty state text', type: 'localizedString' }),
        defineField({ name: 'privacyNote', title: 'Privacy note (for "Busy" events)', type: 'localizedText' }),
        defineField({ name: 'ctaLabel', title: 'Event card CTA label', type: 'localizedString' }),
        defineField({ name: 'allDayLabel', title: '"All day" time label', type: 'localizedString' }),
    ],
    preview: {
        select: { title: 'title.en' },
        prepare({ title }) { return { title: title || 'Upcoming events section' } },
    },
})

// ── Partners page ─────────────────────────────────────────────────────────────

export const sectionPartnersOpportunities = defineType({
    name: 'sectionPartnersOpportunities',
    title: 'Partnership opportunities section',
    type: 'object',
    fields: [
        defineField({ name: 'heading', title: 'Section heading', type: 'localizedString', description: 'e.g. "Partnership Opportunities"' }),
        defineField({ name: 'description', title: 'Section description', type: 'localizedText' }),
        defineField({ name: 'residencyLabel', title: 'Residency partnership label', type: 'localizedString', description: 'e.g. "Residency Partnership"' }),
        defineField({ name: 'resourceLabel', title: 'Resource partnership label', type: 'localizedString', description: 'e.g. "Resource Partnership"' }),
        defineField({ name: 'beeBoxContactText', title: 'Bee Box contact intro text', type: 'localizedText', description: 'Text before the contact email link in the Bee Box section.' }),
        defineField({ name: 'beeBoxEmail', title: 'Bee Box contact email', type: 'string' }),
    ],
    preview: {
        select: { title: 'heading.en' },
        prepare({ title }) { return { title: title || 'Partnership opportunities section' } },
    },
})

export const pageSectionTypes = [
    donationsAction,
    donationsHighlight,
    donationsInfoCard,
    donationsTier,
    donationsImpactArea,
    sectionRichText,
    sectionImageText,
    carouselSlide,
    sectionImageCarousel,
    sectionHero,
    sectionCardGrid,
    sectionVolunteerCards,
    sectionDonationOpportunity,
    sectionDonationsHero,
    sectionDonationsTabsIntro,
    sectionDonationsCasitaOverview,
    sectionDonationsCasitaRefuge,
    sectionDonationsCasitaCommunity,
    sectionDonationsCasitaWays,
    sectionDonationsCasitaBeeBox,
    sectionDonationsCasitaClosing,
    sectionDonationsKeepersOverview,
    sectionDonationsKeepersBenefits,
    sectionDonationsKeepersTiers,
    sectionDonationsKeepersImpact,
    sectionPartnerLogos,
    sectionTeam,
    // Awareness
    awarenessProgram,
    awarenessTrainingItem,
    awarenessOffering,
    awarenessCTAButton,
    sectionAwarenessHero,
    sectionAwarenessValues,
    sectionAwarenessPrograms,
    sectionAwarenessTraining,
    sectionAwarenessTechAssist,
    sectionAwarenessCta,
    // Support
    supportServiceCard,
    supportResourceButton,
    sectionSupportHero,
    sectionSupportIntro,
    sectionSupportServices,
    sectionSupportAccessibility,
    sectionSupportResources,
    // Our Impact
    impactMediaItem,
    impactAward,
    impactDocument,
    sectionImpactHero,
    sectionImpactMedia,
    sectionImpactAwards,
    sectionImpactDocuments,
    // Contact
    sectionContactHero,
    sectionContactNewsletter,
    contactFormSubjectOption,
    sectionContactForm,
    sectionContactInfo,
    // Events
    sectionEventsHero,
    sectionEventsUpcoming,
    // Partners
    sectionPartnersOpportunities,
] as const
