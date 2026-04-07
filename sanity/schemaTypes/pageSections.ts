import {defineField, defineType} from 'sanity'

export const sectionRichText = defineType({
  name: 'sectionRichText',
  title: 'Rich text',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
  preview: {
    select: {heading: 'heading'},
    prepare({heading}) {
      return {title: heading || 'Rich text'}
    },
  },
})

export const sectionImageText = defineType({
  name: 'sectionImageText',
  title: 'Image & text',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'text',
      rows: 8,
    }),
  ],
  preview: {
    select: {heading: 'heading', media: 'image'},
    prepare({heading, media}) {
      return {title: heading || 'Image & text', media}
    },
  },
})

export const sectionHero = defineType({
  name: 'sectionHero',
  title: 'Hero',
  type: 'object',
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
    }),
    defineField({
      name: 'subheadline',
      title: 'Subheadline',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          title: 'Image',
          options: {hotspot: true},
        },
      ],
    }),
    defineField({
      name: 'ctaLabel',
      title: 'Button label',
      type: 'string',
    }),
    defineField({
      name: 'ctaHref',
      title: 'Button link',
      type: 'string',
      description: '/path, https://..., etc.',
    }),
  ],
  preview: {
    select: {headline: 'headline'},
    prepare({headline}) {
      return {title: headline || 'Hero'}
    },
  },
})

export const sectionCardGrid = defineType({
  name: 'sectionCardGrid',
  title: 'Card grid',
  type: 'object',
  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Section title',
      type: 'string',
    }),
    defineField({
      name: 'intro',
      title: 'Intro',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'contentCard'}]}],
    }),
  ],
  preview: {
    select: {title: 'sectionTitle'},
    prepare({title}) {
      return {title: title || 'Card grid'}
    },
  },
})

export const sectionPartnerLogos = defineType({
  name: 'sectionPartnerLogos',
  title: 'Partner logos',
  type: 'object',
  fields: [
    defineField({
      name: 'groupLabel',
      title: 'Group label',
      type: 'string',
      description: 'e.g. Philanthropic, Corporate',
    }),
    defineField({
      name: 'partners',
      title: 'Partners',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'partnerLogo'}]}],
    }),
  ],
  preview: {
    select: {label: 'groupLabel'},
    prepare({label}) {
      return {title: label || 'Partner logos'}
    },
  },
})

export const sectionTeam = defineType({
  name: 'sectionTeam',
  title: 'Team',
  type: 'object',
  fields: [
    defineField({
      name: 'groupLabel',
      title: 'Group label',
      type: 'string',
      description:
        'Heading for this block (e.g. Founder/CEO, Team Members, Board of Directors). Each team member has a Section field — keep this label aligned with that grouping.',
    }),
    defineField({
      name: 'members',
      title: 'Members',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'teamMember'}]}],
    }),
  ],
  preview: {
    select: {label: 'groupLabel'},
    prepare({label}) {
      return {title: label || 'Team'}
    },
  },
})

export const sectionGallery = defineType({
  name: 'sectionGallery',
  title: 'Past events gallery',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'galleryEvent'}]}],
    }),
  ],
  preview: {
    select: {heading: 'heading'},
    prepare({heading}) {
      return {title: heading || 'Past events gallery'}
    },
  },
})

export const pageSectionTypes = [
  sectionRichText,
  sectionImageText,
  sectionHero,
  sectionCardGrid,
  sectionPartnerLogos,
  sectionTeam,
  sectionGallery,
] as const
