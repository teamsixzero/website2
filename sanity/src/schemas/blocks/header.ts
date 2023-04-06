import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'header',
  title: 'Header',
  type: 'object',
  fields: [
    defineField({
      name: 'content',
      title: 'Content',
      type: 'richText',
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Header',
    }),
  },
})
