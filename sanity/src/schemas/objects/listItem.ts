import {defineField, defineType} from 'sanity'

import {portableTextPreview} from '../../utils/preview'

export default defineType({
  name: 'listItem',
  title: 'List Item',
  type: 'object',
  fields: [
    defineField({
      name: 'step',
      title: 'Step',
      type: 'step',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'richText',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'altImage',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      text: 'text',
      step: 'step.text',
      image: 'image',
    },
    prepare: ({title, text, step, image}) => ({
      title: title ? `${step ? `${step}: ` : ``}${title}` : 'List Item',
      subtitle: portableTextPreview(text),
      media: () => image || `⚫️`,
    }),
  },
})
