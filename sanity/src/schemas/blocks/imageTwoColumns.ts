import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'imageTwoColumns',
  title: 'Image Two Columns',
  type: 'object',
  fields: [
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
        }),
      ],
      validation: (Rule) => Rule.required().min(2),
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Image Two Columns',
    }),
  },
})
