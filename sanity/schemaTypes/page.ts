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
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {type: 'sectionRichText'},
        {type: 'sectionImageText'},
        {type: 'sectionImageCarousel'},
        {type: 'sectionHero'},
        {type: 'sectionCardGrid'},
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
