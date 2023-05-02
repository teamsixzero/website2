import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'imageFullWidth',
  title: 'Image',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'altImage',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'media',
      title: 'Media',
      type: 'media',
    }),
    defineField({
      name: 'fullWidth',
      title: 'Full Width?',
      type: 'boolean',
      initialValue: false,
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
        title: 'Image',
        subtitle: alt,
        media: image,
      }
    },
  },
})
