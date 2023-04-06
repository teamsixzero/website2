import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'nextProject',
  title: 'Next Project',
  type: 'object',
  fields: [
    defineField({
      name: 'project',
      title: 'Project',
      type: 'reference',
      to: [
        {
          type: 'project',
        },
      ],
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Next Project',
    }),
  },
})
