import {defineArrayMember, defineField, defineType} from 'sanity'
import {BsGrid1X2Fill} from 'react-icons/bs'

export default defineType({
  name: 'mediaGrid',
  title: 'Media Grid',
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
      validation: (Rule) => Rule.min(3),
    }),
    defineField({
      name: 'style',
      title: 'Style',
      type: 'string',
      initialValue: 'Style 1',
      options: {
        list: ['Style 1', 'Style 2'],
        layout: 'radio',
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
