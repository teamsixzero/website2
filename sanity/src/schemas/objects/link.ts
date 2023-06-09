import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  icon: () => '🔗',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      description: 'http://, https://, mailto: and tel: are allowed',
      validation: (Rule) =>
        Rule.uri({
          allowCredentials: true,
          allowRelative: true,
          relativeOnly: false,
          scheme: [/^http/, /^https/, /^mailto/, /^tel/],
        }),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      url: 'url',
    },
    prepare: ({title, url}) => ({
      title: title,
      subtitle: url,
    }),
  },
})
