import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'formField.checkbox',
  title: 'Checkbox Field',
  type: 'object',
  description: 'For use with a yes or no question. e.g. "Sign up for newsletter?"',
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
  ],
  preview: {
    select: {
      name: 'name',
      label: 'label',
    },
    prepare: ({name, label}) => {
      return {
        title: name || `Checkbox Field`,
        subtitle: label,
      }
    },
  },
})
