import {defineField, defineType} from 'sanity'
import pageBuilder from '../../utils/pageBuilder'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    pageBuilder,
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
    }),
    defineField({
      name: 'textColor',
      title: 'Text color',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
