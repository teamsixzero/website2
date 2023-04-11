import {defineField, defineType} from 'sanity'
import {FaHeading} from 'react-icons/fa'

import {portableTextPreview} from '../../utils/preview'

export default defineType({
  name: 'header',
  title: 'Header',
  type: 'object',
  fields: [
    defineField({
      name: 'content',
      title: 'Content',
      type: 'richText',
    }),
  ],
  preview: {
    select: {
      content: 'content',
    },
    prepare: ({content}) => ({
      title: 'Header',
      subtitle: portableTextPreview(content),
      media: FaHeading,
    }),
  },
})
