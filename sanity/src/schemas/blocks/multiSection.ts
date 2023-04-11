import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'multiSection',
  title: 'Multi Section',
  type: 'object',
  fields: [
    defineField({
      name: 'blocks',
      title: 'Blocks',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'content',
        }),
        defineArrayMember({
          type: 'orderedList',
        }),
        defineArrayMember({
          type: 'imageFullWidth',
        }),
      ],
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'reference',
      to: [{type: 'colorPalette'}],
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Multi Section',
    }),
  },
})
