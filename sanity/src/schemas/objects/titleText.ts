import {defineField, defineType} from 'sanity'
import {BsDot} from 'react-icons/bs'

import {portableTextPreview} from '../../utils/preview'

export default defineType({
  name: 'titleText',
  title: 'Title Text',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [
        {
          title: `Block`,
          type: `block`,
          styles: [{title: `Normal`, value: `normal`}],
          lists: [],
          marks: {
            decorators: [],
            annotations: [
              {
                title: `URL`,
                name: `link`,
                type: `object`,
                fields: [
                  {
                    name: `href`,
                    title: `URL`,
                    type: `string`,
                  },
                ],
              },
            ],
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      text: 'text',
    },
    prepare: ({title, text}) => ({
      title,
      subtitle: portableTextPreview(text),
      media: BsDot,
    }),
  },
})
