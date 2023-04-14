import {defineArrayMember, defineField, defineType} from 'sanity'
import {BsGrid1X2Fill} from 'react-icons/bs'

export default defineType({
  name: 'imageGrid',
  title: 'Image Grid',
  type: 'object',
  fields: [
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'imageBlock',
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
    prepare: () => ({
      title: 'Image Grid',
      media: BsGrid1X2Fill,
    }),
  },
})
