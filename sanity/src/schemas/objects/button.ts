import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'button',
  title: 'Button',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      text: 'text',
      link: 'link',
    },
    prepare: ({text, link}) => ({
      title: 'Button',
      subtitle: `${text} - ${link}`,
    }),
  },
})
