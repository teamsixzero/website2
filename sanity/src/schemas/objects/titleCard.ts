import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'titleCard',
  title: 'Title Card',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'textColor',
      title: 'Text Color',
      type: 'reference',
      to: [{type: 'colorPalette'}],
      initialValue: {
        _ref: '499df272-1e2e-488b-81da-d0c0427da745',
      },
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'reference',
      to: [{type: 'colorPalette'}],
      initialValue: {
        _ref: '113ebbc9-93b2-4402-bd53-4755c6d25211',
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare: ({title}) => ({
      title: 'Title Card',
      subtitle: title,
      media: () => `⚪️`,
    }),
  },
})
