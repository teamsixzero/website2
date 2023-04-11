import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'altImage',
  title: 'Image (with alt)',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: 'alt',
      title: 'Alternative text',
      type: 'string',
      description: 'Important for SEO and accessiblity.',
    }),
  ],
})
