import {defineField, defineType} from 'sanity'

export const contentCard = defineType({
  name: 'contentCard',
  title: 'Card',
  type: 'document',
  fields: [
    defineField({
      name: 'key',
      title: 'Stable key',
      type: 'string',
      description:
        'Optional kebab-case id for the app (e.g. peer-advocacy). Used for keys and icon mapping when wired up.',
      validation: (Rule) =>
        Rule.custom((value) => {
          if (!value) return true
          if (/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value)) return true
          return 'Use lowercase letters, numbers, and hyphens only (kebab-case).'
        }),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localizedString',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'localizedString',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'localizedText',
      description:
        'Main body copy for the card. When the site reads from Sanity, this maps to the card summary paragraph in the UI.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'details',
      title: 'Details',
      type: 'array',
      of: [{type: 'localizedString'}],
    }),
    defineField({
      name: 'cta',
      title: 'Call to action',
      type: 'object',
      fields: [
        defineField({
          name: 'label',
          title: 'Label',
          type: 'localizedString',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'href',
          title: 'Link',
          type: 'string',
          description: 'Allowed: /path, https://..., tel:..., mailto:...',
          validation: (Rule) =>
            Rule.custom((value) => {
              if (!value) return true
              if (
                value.startsWith('/') ||
                value.startsWith('https://') ||
                value.startsWith('http://') ||
                value.startsWith('tel:') ||
                value.startsWith('mailto:')
              ) {
                return true
              }
              return 'Use /internal-path, http(s)://, tel:, or mailto:'
            }),
        }),
      ],
    }),
    defineField({
      name: 'badge',
      title: 'Badge',
      type: 'localizedString',
    }),
  ],
  preview: {
    select: {
      title: 'title.en',
      subtitle: 'subtitle.en',
      key: 'key',
    },
    prepare({title, subtitle, key}) {
      return {
        title,
        subtitle: subtitle || key || undefined,
      }
    },
  },
})
