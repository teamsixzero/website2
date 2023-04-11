import {defineArrayMember, defineField, defineType} from 'sanity'
import {GrMultiple} from 'react-icons/gr'

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
      media: GrMultiple,
    }),
  },
})
