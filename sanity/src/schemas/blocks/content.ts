import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'content',
  title: 'Content',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'richText',
    }),
    defineField({
      name: 'hasBackground',
      title: 'Has Background?',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Content',
    }),
  },
})
