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
    defineField({
      name: 'mobile',
      title: 'Mobile Image',
      type: 'image',
      description: 'Image for mobile devices. Cropping is currently not possible.',
    }),
  ],
})
