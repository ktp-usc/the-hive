import {defineField, defineType} from 'sanity'

export const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        'URL key for this page in the app. Prefer: landing, support, awareness, donations (Impact the Hive), about, events — one document per site page that pulls from the CMS.',
      options: {source: 'title', maxLength: 96},
      validation: (Rule) =>
        Rule.required().custom(async (value, context) => {
          if (!value?.current) return true
          const client = context.getClient({apiVersion: '2026-03-30'})
          const id = context.document?._id?.replace(/^drafts\./, '') || ''
          const params = {
            slug: value.current,
            draftId: id ? `drafts.${id}` : '',
            publishedId: id,
          }
          const count = await client.fetch(
            `count(*[_type == "page" && slug.current == $slug && !(_id in [$draftId, $publishedId])])`,
            params
          )
          return count === 0 ? true : 'Slug must be unique.'
        }),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description:
        'Optional short intro for pages that render a subtitle/intro paragraph below the title.',
    }),
    defineField({
      name: 'landingPopup',
      title: 'Landing popup',
      type: 'object',
      description: 'Optional promotional popup shown on the home page. Only used on the "landing" page.',
      fields: [
        defineField({
          name: 'enabled',
          title: 'Show popup',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'image',
          title: 'Popup image',
          type: 'image',
          options: {hotspot: true},
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
          description: '/path or https://...',
        }),
      ],
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {type: 'sectionRichText'},
        {type: 'sectionImageText'},
        {type: 'sectionHero'},
        {type: 'sectionCardGrid'},
        {type: 'sectionVolunteerCards'},
        {type: 'sectionDonationOpportunity'},
        {type: 'sectionPartnerLogos'},
        {type: 'sectionTeam'},
        {type: 'sectionGallery'},
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
    },
    prepare({title, slug}) {
      return {
        title,
        subtitle: slug ? `/${slug}` : undefined,
      }
    },
  },
})
