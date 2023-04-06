import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'orderedList',
  title: 'Ordered List',
  type: 'object',
  fields: [
    defineField({
      name: 'listItems',
      title: 'List Items',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'listItem',
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Ordered List',
    }),
  },
})
