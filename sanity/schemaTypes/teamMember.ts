import {defineField, defineType} from 'sanity'

/** Matches About page tabs: Founder/CEO, Team Members, Board of Directors */
const GROUP_OPTIONS = [
  {title: 'Founder/CEO', value: 'founder'},
  {title: 'Team Members', value: 'team'},
  {title: 'Board of Directors', value: 'board'},
] as const

export const teamMember = defineType({
  name: 'teamMember',
  title: 'Team member',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role / Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Bio / Organization note',
      description: 'For board members: organization and title (e.g. "Ignite Leadership Solutions\\nCEO"). For the founder: a short profile summary.',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'group',
      title: 'Section',
      type: 'string',
      options: {list: [...GROUP_OPTIONS], layout: 'radio'},
      validation: (Rule) => Rule.required(),
    }),

    // ── Team member contact ────────────────────────────────────────────────
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      description: 'Displayed as a mailto link on the card (team members).',
    }),
    defineField({
      name: 'extension',
      title: 'Phone extension',
      type: 'string',
      description: 'e.g. ext 104',
    }),

    // ── Founder-only fields ────────────────────────────────────────────────
    defineField({
      name: 'storyEyebrow',
      title: 'Story eyebrow',
      type: 'string',
      description: 'Founder only — small label above the story heading (e.g. "Founder Story").',
    }),
    defineField({
      name: 'narrativeLabel',
      title: 'Narrative label',
      type: 'string',
      description: 'Founder only — label inside the narrative box (e.g. "Narrative").',
    }),
    defineField({
      name: 'narrativeParagraphs',
      title: 'Narrative paragraphs',
      type: 'array',
      of: [{type: 'text'}],
      description: 'Founder only — each item is one paragraph of the founder narrative.',
    }),
    defineField({
      name: 'sparkTitle',
      title: 'Founding spark title',
      type: 'string',
    }),
    defineField({
      name: 'sparkBody',
      title: 'Founding spark body',
      type: 'text',
      rows: 6,
    }),
    defineField({
      name: 'visionTitle',
      title: 'Vision today title',
      type: 'string',
    }),
    defineField({
      name: 'visionBody',
      title: 'Vision today body',
      type: 'text',
      rows: 6,
    }),
    defineField({
      name: 'profileBody',
      title: 'Profile summary',
      type: 'text',
      rows: 3,
      description: 'Founder only — short paragraph shown beneath the photo in the aside.',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      group: 'group',
      media: 'image',
    },
    prepare({title, subtitle, group, media}) {
      const groupLabel = GROUP_OPTIONS.find((g) => g.value === group)?.title
      return {
        title,
        subtitle: [subtitle, groupLabel].filter(Boolean).join(' · '),
        media,
      }
    },
  },
})
