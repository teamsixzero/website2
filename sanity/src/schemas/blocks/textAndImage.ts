import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'textAndImage',
  title: 'Text And Image',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'richText',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'hasBackground',
      title: 'Has Background?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'imageAlign',
      title: 'Image Align',
      type: 'string',
      initialValue: 'Left',
      validation: (Rule) => Rule.required(),
      options: {
        list: ['Left', 'Right'],
        layout: 'dropdown',
      },
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Text And Image',
    }),
  },
})
