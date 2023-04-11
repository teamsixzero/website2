import {defineField, defineType} from 'sanity'

import {BsDot} from 'react-icons/bs'

export default defineType({
  name: 'titleText',
  title: 'Title Text',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      text: 'text',
    },
    prepare: ({title, text}) => ({
      title,
      subtitle: text,
      media: BsDot,
    }),
  },
})
