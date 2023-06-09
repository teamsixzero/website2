import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
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
      name: 'featureMedia',
      title: 'Feature Media',
      type: 'media',
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
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo.page',
      group: 'seo',
      options: {
        collapsible: true,
        collapsed: false,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      image: 'featureMedia.image',
      video: 'featureMedia.video',
    },
    prepare: ({title, date, image, video}) => {
      const media = image?.asset || video?.poster?.asset
      return {
        title,
        subtitle: date,
        media: media,
      }
    },
  },
})
