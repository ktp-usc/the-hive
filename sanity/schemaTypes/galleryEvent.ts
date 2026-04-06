import {defineField, defineType} from 'sanity'

export const galleryEvent = defineType({
  name: 'galleryEvent',
  title: 'Past event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'video',
      title: 'Video file',
      type: 'file',
      options: {
        accept: 'video/*',
      },
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      description: 'Embed or external video link (e.g. YouTube, Vimeo).',
    }),
  ],
  validation: (Rule) =>
    Rule.custom((_, context) => {
      const doc = context.document as
        | {image?: unknown; video?: unknown; videoUrl?: string | null}
        | undefined
      if (!doc) return true
      const hasImage = Boolean(doc.image)
      const hasVideoFile = Boolean(doc.video)
      const hasVideoUrl = Boolean(doc.videoUrl?.trim())
      if (hasImage || hasVideoFile || hasVideoUrl) return true
      return 'Add an image, a video file, or a video URL.'
    }),
  preview: {
    select: {
      title: 'title',
      date: 'date',
      media: 'image',
    },
    prepare({title, date, media}) {
      return {
        title,
        subtitle: date ? new Date(date).toLocaleDateString() : undefined,
        media,
      }
    },
  },
})
