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
      type: 'altImage',
      validation: (Rule) => Rule.required(),
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
