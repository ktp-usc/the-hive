import {defineField, defineType} from 'sanity'

const hrefDescription =
    'Internal pages: paths like `/about` or `/contact`. External: full URL `https://…`.'

export const navLink = defineType({
    name: 'navLink',
    title: 'Link',
    type: 'object',
    fields: [
        defineField({
            name: 'labelEn',
            title: 'Label (English)',
            type: 'string',
            description: 'Optional. Leave blank to use the site default.',
        }),
        defineField({
            name: 'labelEsMx',
            title: 'Label (Spanish)',
            type: 'string',
            description: 'Optional. Leave blank to use the site default.',
        }),
        defineField({
            name: 'href',
            title: 'URL or path',
            type: 'string',
            description: hrefDescription,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'openInNewTab',
            title: 'Open in new tab',
            type: 'boolean',
            initialValue: false,
        }),
    ],
    preview: {
        select: {title: 'labelEn', subtitle: 'href'},
    },
})

export const navDropdown = defineType({
    name: 'navDropdown',
    title: 'Dropdown group',
    type: 'object',
    fields: [
        defineField({
            name: 'labelEn',
            title: 'Group label (English)',
            type: 'string',
            description: 'Optional. Leave blank to use the site default.',
        }),
        defineField({
            name: 'labelEsMx',
            title: 'Group label (Spanish)',
            type: 'string',
            description: 'Optional. Leave blank to use the site default.',
        }),
        defineField({
            name: 'items',
            title: 'Links',
            type: 'array',
            of: [{type: 'navLink'}],
            validation: (Rule) => Rule.required().min(1),
        }),
    ],
    preview: {
        select: {title: 'labelEn', items: 'items'},
        prepare({title, items}) {
            const count = Array.isArray(items) ? items.length : 0
            return {title, subtitle: count ? `${count} link(s)` : 'No links'}
        },
    },
})

export const navbarSettings = defineType({
    name: 'navbarSettings',
    title: 'Navigation',
    type: 'document',
    preview: {
        prepare() {
            return {title: 'Navigation'}
        },
    },
    fields: [
        defineField({
            name: 'items',
            title: 'Menu items',
            type: 'array',
            of: [{type: 'navLink'}, {type: 'navDropdown'}],
            description: 'Leave empty to use the built-in default menu on the site.',
        }),
        defineField({
            name: 'footerQuickLinks',
            title: 'Footer quick links',
            type: 'array',
            of: [{type: 'navLink'}],
            description: 'Leave empty to use the built-in default quick links on the site.',
        }),
        defineField({
            name: 'donate',
            title: 'Donate button',
            type: 'object',
            description:
                'Optional. If URL is left blank, the site uses the built-in donate button.',
            fields: [
                defineField({
                    name: 'labelEn',
                    title: 'Label (English)',
                    type: 'string',
                    description: 'Optional. Leave blank to use the site default.',
                }),
                defineField({
                    name: 'labelEsMx',
                    title: 'Label (Spanish)',
                    type: 'string',
                    description: 'Optional. Leave blank to use the site default.',
                }),
                defineField({
                    name: 'url',
                    title: 'URL',
                    type: 'url',
                    description: 'Optional. Leave blank to use the site default donate URL.',
                }),
                defineField({
                    name: 'openInNewTab',
                    title: 'Open in new tab',
                    type: 'boolean',
                    initialValue: true,
                }),
            ],
        }),
    ],
})