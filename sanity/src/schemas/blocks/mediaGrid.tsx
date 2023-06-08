import {defineArrayMember, defineField, defineType} from 'sanity'
import {BsGrid1X2Fill} from 'react-icons/bs'

import MediaGridRadio from '../../components/MediaGridRadio'

export default defineType({
  name: 'mediaGrid',
  title: 'Media Grid',
  type: 'object',
  fields: [
    defineField({
      name: 'gridItems',
      title: 'Grid Items',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'mediaBlock',
        }),
      ],
      validation: (Rule) => Rule.min(3).max(3),
    }),
    defineField({
      name: 'style',
      title: 'Style',
      type: 'string',
      initialValue: 'Style 1',
      options: {
        list: [
          {title: 'Style 1', value: 'Style 1'},
          {title: 'Style 2', value: 'Style 2'},
        ],
        layout: 'radio',
      },
      components: {
        input: MediaGridRadio,
      },
    }),
  ],
  preview: {
    select: {
      style: 'style',
    },
    prepare: ({style}) => ({
      title: 'Media Grid',
      subtitle: style,
      media: BsGrid1X2Fill,
    }),
  },
})
