import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'imageFullWidth',
  title: 'Image Full Width',
  type: 'object',
  description: 'A full width image',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          description: 'Important for SEO and accessiblity.',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      image: 'image',
      alt: 'image.alt',
    },
    prepare: ({image, alt}) => {
      return {
        title: 'Image Full Width',
        subtitle: alt,
        media: image,
      }
    },
  },
})
