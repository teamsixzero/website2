import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'column',
  title: 'Column',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'richText',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'altImage',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'content',
      media: 'image',
    },
  },
})
