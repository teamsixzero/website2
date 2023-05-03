import {defineArrayMember, defineField, defineType} from 'sanity'
import ColmunsMedia from '../../components/ColumnsMedia'

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
      media: 'media',
    },
    prepare: ({media}) => ({
      title: 'Media Columns',
      subtitle: `${media.length} column${media.length > 1 ? 's' : ''}`,
      media: () => <ColmunsMedia media={media.map((m) => m?.source)} />,
    }),
  },
})
