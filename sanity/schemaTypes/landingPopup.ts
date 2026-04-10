import {defineField, defineType} from 'sanity'

export const landingPopup = defineType({
  name: 'landingPopup',
  title: 'Landing popup',
  type: 'object',
  description:
    'Optional homepage modal (only used for the page with slug "landing"). Shows image, CTA, and close when enabled.',
  fields: [
    defineField({
      name: 'enabled',
      title: 'Show popup',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'ctaLabel',
      title: 'CTA button label',
      type: 'string',
    }),
    defineField({
      name: 'ctaHref',
      title: 'CTA link',
      type: 'string',
      description: 'Path (e.g. /donations) or full URL.',
    }),
  ],
})
