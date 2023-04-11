import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'imageBlock',
  title: 'Image Block',
  type: 'object',
  fields: [
    defineField({
      name: 'source',
      title: 'Source',
      type: 'altImage',
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
      title: alt || 'Image Block',
      media,
    }),
  },
})
