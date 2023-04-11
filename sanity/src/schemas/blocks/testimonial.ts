import {defineField, defineType} from 'sanity'
import {SlSpeech} from 'react-icons/sl'

import {portableTextPreview} from '../../utils/preview'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'object',
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'richText',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'person',
      title: 'Person',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      to: [
        {
          type: 'person',
        },
      ],
    }),
  ],
  preview: {
    select: {
      name: 'person.name',
      photo: 'person.photo',
      quote: 'quote',
    },
    prepare: ({name, photo, quote}) => ({
      title: 'Testimonial',
      subtitle: name + `: ` + portableTextPreview(quote),
      media: photo || SlSpeech,
    }),
  },
})
