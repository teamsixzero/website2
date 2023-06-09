import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'formField.select',
  title: 'Select Field',
  type: 'object',
  description:
    'For use with a multiple choice question. e.g. "How did you hear about us? Google, Facebook, Twitter"',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'label',
      title: 'label',
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
        title: name || `Select Field`,
        subtitle: label,
      }
    },
  },
})
