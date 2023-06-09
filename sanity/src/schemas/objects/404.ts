import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'notFoundPage',
  title: '404 page',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'text',
    }),
  ],
})
