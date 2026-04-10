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
          'URL key for this page in the app. Prefer: landing, support, awareness, invest-in-the-hive, about, events - one document per site page that pulls from the CMS.',
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
        {type: 'sectionDonationsHero'},
        {type: 'sectionDonationsTabsIntro'},
        {type: 'sectionDonationsCasitaOverview'},
        {type: 'sectionDonationsCasitaRefuge'},
        {type: 'sectionDonationsCasitaCommunity'},
        {type: 'sectionDonationsCasitaWays'},
        {type: 'sectionDonationsCasitaClosing'},
        {type: 'sectionDonationsKeepersOverview'},
        {type: 'sectionDonationsKeepersBenefits'},
        {type: 'sectionDonationsKeepersTiers'},
        {type: 'sectionDonationsKeepersImpact'},
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