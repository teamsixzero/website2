import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'mediaBlock',
  title: 'Media Block',
  type: 'object',
  fields: [
    defineField({
      name: 'source',
      title: 'Source',
      type: 'media',
      options: {
        collapsible: false,
      },
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'reference',
      to: [{type: 'colorPalette'}],
    }),
  ],
  preview: {
    select: {
      media: 'source',
      alt: 'source.alt',
    },
    prepare: ({media, alt}) => ({
      title: alt || 'Media Block',
      media,
    }),
  },
})
