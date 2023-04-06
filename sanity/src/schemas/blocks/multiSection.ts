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
      name: 'hasBackground',
      title: 'Has Background?',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Multi Section',
    }),
  },
})
