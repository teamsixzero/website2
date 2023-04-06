import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'listItem',
  title: 'List Item',
  type: 'object',
  fields: [
    defineField({
      name: 'step',
      title: 'Step',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'List Item',
    }),
  },
})
