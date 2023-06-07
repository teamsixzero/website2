import {defineArrayMember, defineField, defineType} from 'sanity'
import {BiCarousel} from 'react-icons/bi'

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
          type: 'altImage',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      image: 'logos.0.asset',
    },
    prepare: ({image}) => ({
      title: 'Logos',
      media: image || BiCarousel,
    }),
  },
})
