import {defineField, defineType} from 'sanity'

export const page = defineType({
    name: 'page',
    title: 'Page',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'localizedString',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description:
                'URL key for this page in the app. Prefer: landing, support, awareness, invest-in-the-hive, about, events - one document per site page that pulls from the CMS.',
            options: {source: 'title.en', maxLength: 96},
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
            type: 'localizedText',
            description:
                'Optional short intro for pages that render a subtitle/intro paragraph below the title.',
        }),
        defineField({
            name: 'landingPopup',
            title: 'Homepage popup',
            type: 'landingPopup',
            description:
                'Shown only on the site homepage when enabled and an image is set. Does not affect other pages.',
            hidden: ({document}) => (document?.slug as {current?: string} | undefined)?.current !== 'landing',
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
                {type: 'sectionVolunteerCards'},
                {type: 'sectionDonationOpportunity'},
                {type: 'sectionDonationsHero'},
                {type: 'sectionDonationsTabsIntro'},
                {type: 'sectionDonationsCasitaOverview'},
                {type: 'sectionDonationsCasitaRefuge'},
                {type: 'sectionDonationsCasitaCommunity'},
                {type: 'sectionDonationsCasitaWays'},
                {type: 'sectionDonationsCasitaBeeBox'},
                {type: 'sectionDonationsCasitaClosing'},
                {type: 'sectionDonationsKeepersOverview'},
                {type: 'sectionDonationsKeepersBenefits'},
                {type: 'sectionDonationsKeepersTiers'},
                {type: 'sectionDonationsKeepersImpact'},
                {type: 'sectionPartnerLogos'},
                {type: 'sectionTeam'},
                {type: 'sectionGallery'},
                {type: 'sectionAwarenessHero'},
                {type: 'sectionAwarenessValues'},
                {type: 'sectionAwarenessPrograms'},
                {type: 'sectionAwarenessTraining'},
                {type: 'sectionAwarenessTechAssist'},
                {type: 'sectionAwarenessCta'},
                {type: 'sectionSupportHero'},
                {type: 'sectionSupportIntro'},
                {type: 'sectionSupportServices'},
                {type: 'sectionSupportAccessibility'},
                {type: 'sectionSupportResources'},
                {type: 'sectionImpactHero'},
                {type: 'sectionImpactMedia'},
                {type: 'sectionImpactAwards'},
                {type: 'sectionImpactDocuments'},
                {type: 'sectionContactHero'},
                {type: 'sectionContactNewsletter'},
                {type: 'sectionContactForm'},
                {type: 'sectionContactInfo'},
                {type: 'sectionEventsHero'},
                {type: 'sectionEventsUpcoming'},
                {type: 'sectionPartnersOpportunities'},
            ],
        }),
    ],
    preview: {
        select: {
            title: 'title.en',
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