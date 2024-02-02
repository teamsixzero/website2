import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'step',
  title: 'Step',
  type: 'object',

  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'reference',
      to: [{type: 'colorPalette'}],
      initialValue: {
        _ref: '1e93eea1-7ad1-4d79-9afb-878c3570e4ed',
      },
    }),
  ],
})
