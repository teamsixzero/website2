import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'formField.radio',
  title: 'Radio Field',
  type: 'object',
  description:
    'For use with a multiple choice question. e.g. "How satisfied are you with our service? Very, Somewhat, Not at all"',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
    }),
    defineField({
      name: 'options',
      title: 'Options',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    }),
  ],
  preview: {
    select: {
      name: 'name',
      label: 'label',
    },
    prepare: ({name, label}) => {
      return {
        title: name || `Radio Field`,
        subtitle: label,
      }
    },
  },
})
