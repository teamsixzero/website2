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
      type: 'altImage',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      text: 'text',
      step: 'step',
      image: 'image',
    },
    prepare: ({title, text, step, image}) => ({
      title: title ? `${step}: ${title}` : 'List Item',
      subtitle: text,
      media: image,
    }),
  },
})
