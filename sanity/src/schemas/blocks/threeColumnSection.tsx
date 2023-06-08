import {defineArrayMember, defineField, defineType} from 'sanity'
import {BsLayoutThreeColumns} from 'react-icons/bs'

import ColmunsMedia from '../../components/ColumnsMedia'

export default defineType({
  name: 'threeColumnSection',
  title: 'Three Column Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'richText',
    }),
    defineField({
      name: 'columns',
      title: 'Columns',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'column',
        }),
      ],
    }),
  ],

  preview: {
    select: {
      title: 'title',
      columns: 'columns',
    },
    prepare: ({title, columns}) => ({
      title: 'Three Column Section',
      subtitle: `${columns.length} column${columns.length > 1 ? 's' : ''}`,
      media:
        columns?.length > 0
          ? () => (
              <ColmunsMedia media={columns.map((col) => ({type: 'image', image: col?.image}))} />
            )
          : BsLayoutThreeColumns,
    }),
  },
})
