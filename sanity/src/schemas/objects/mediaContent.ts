import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'mediaContent',
  title: 'Media Content',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'richText',
    }),
  ],
})
