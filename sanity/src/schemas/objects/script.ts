import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'script',
  title: 'Script',
  type: 'object',
  icon: () => '📜',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'value',
      title: 'Value',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      value: 'value',
    },
    prepare: ({title, value}) => ({
      title,
      subtitle: value,
    }),
  },
})
