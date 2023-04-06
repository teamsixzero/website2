import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'logos',
  title: 'Logos',
  type: 'object',
  fields: [
    defineField({
      name: 'logos',
      title: 'Logos',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Logos',
    }),
  },
})
