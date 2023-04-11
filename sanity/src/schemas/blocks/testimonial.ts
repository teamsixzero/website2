import {defineField, defineType} from 'sanity'
import {SlSpeech} from 'react-icons/sl'

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
    prepare: () => ({
      title: 'Testimonial',
      media: SlSpeech,
    }),
  },
})
