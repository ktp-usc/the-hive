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
      title: 'Role',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      rows: 8,
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
      description:
        'Which About tab this person belongs to. Use Founder/CEO for the leader profile; Team Members and Board of Directors match the other two tabs. If you use a Team block on a page, align its group label with this.',
      options: {
        list: [...GROUP_OPTIONS],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
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
