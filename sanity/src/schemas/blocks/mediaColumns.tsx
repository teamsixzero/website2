import {defineArrayMember, defineField, defineType} from 'sanity'
import {BsImages} from 'react-icons/bs'

import ColmunsMedia from '../../components/ColumnsMedia'

export default defineType({
  name: 'mediaColumns',
  title: 'Media Columns',
  type: 'object',
  fields: [
    defineField({
      name: 'columns',
      title: 'Columns',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'mediaBlock',
        }),
      ],
      validation: (Rule) => Rule.required().min(2).max(2),
    }),
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          {title: '1/2 - 1/2', value: 'layout-1'},
          {title: '1/3 - 2/3', value: 'layout-2'},
          {title: '2/3 - 1/3', value: 'layout-3'},
        ],
        layout: 'radio',
      },
      initialValue: '1/2-1/2',
    }),
  ],
  preview: {
    select: {
      columns: 'columns',
    },
    prepare: ({columns}) => ({
      title: 'Media Columns',
      subtitle: `${columns.length} column${columns.length > 1 ? 's' : ''}`,
      media:
        columns?.length > 0
          ? () => <ColmunsMedia media={columns.map((media) => media?.source)} />
          : BsImages,
    }),
  },
})
