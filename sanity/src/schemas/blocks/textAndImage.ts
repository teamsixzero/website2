import {defineField, defineType} from 'sanity'

import {portableTextPreview} from '../../utils/preview'

export default defineType({
  name: 'textAndImage',
  title: 'Text And Image',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'richText',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'imageBlock',
    }),
    defineField({
      name: 'align',
      title: 'Image Align',
      type: 'string',
      initialValue: 'Left',
      description: 'Align the image to the left or right of the text. Only applies to desktop.',
      options: {
        list: ['Left', 'Left (Full Bleed)', 'Right', 'Right (Full Bleed)'],
        layout: 'radio',
      },
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
      image: 'image.source',
    },
    prepare: ({image, text}) => ({
      title: 'Text And Image',
      subtitle: portableTextPreview(text),
      media: image,
    }),
  },
})
