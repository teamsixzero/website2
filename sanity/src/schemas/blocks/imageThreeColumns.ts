import {defineArrayMember, defineField, defineType} from 'sanity'
import {TbColumns3} from 'react-icons/tb'

export default defineType({
  name: 'imageThreeColumns',
  title: 'Image Three Columns',
  type: 'object',
  fields: [
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'altImage',
        }),
      ],
      validation: (Rule) => Rule.required().min(3),
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Image Three Columns',
      media: TbColumns3,
    }),
  },
})
