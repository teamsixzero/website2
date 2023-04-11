import {defineField, defineType} from 'sanity'
import {MdTextFields} from 'react-icons/md'

import {portableTextPreview} from '../../utils/preview'

export default defineType({
  name: 'content',
  title: 'Content',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'richText',
    }),
    defineField({
      name: 'textColor',
      title: 'Text Color',
      type: 'reference',
      to: [{type: 'colorPalette'}],
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'reference',
      to: [{type: 'colorPalette'}],
    }),
  ],
  preview: {
    select: {
      text: 'text',
    },
    prepare: ({text}) => ({
      title: 'Content',
      subtitle: portableTextPreview(text),
      media: MdTextFields,
    }),
  },
})
