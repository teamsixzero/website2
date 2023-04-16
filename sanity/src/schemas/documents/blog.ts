import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
      options: {timeFormat: 'H:mm'},
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      to: [{type: 'person'}],
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
    }),
    defineField({
      name: 'featureImage',
      title: 'Feature Image',
      type: 'altImage',
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'richText',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      image: 'featureImage',
    },
    prepare: ({title, date, image}) => ({
      title,
      subtitle: date,
      media: image,
    }),
  },
})
