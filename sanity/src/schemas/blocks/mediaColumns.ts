import {defineArrayMember, defineField, defineType} from 'sanity'
import {TbColumns2} from 'react-icons/tb'

export default defineType({
  name: 'mediaColumns',
  title: 'Media Columns',
  type: 'object',
  fields: [
    defineField({
      name: 'media',
      title: 'Media',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'mediaBlock',
        }),
      ],
      validation: (Rule) => Rule.required().max(3),
    }),
  ],
  preview: {
    select: {
      columns: 'media',
    },
    prepare: ({columns}) => ({
      title: 'Media Columns',
      subtitle: `${columns.length} column${columns.length > 1 ? 's' : ''}`,
      media: TbColumns2,
    }),
  },
})
