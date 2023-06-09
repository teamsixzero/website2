import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'linkGroup',
  title: 'Link group',
  type: 'object',
  icon: () => '⛓️',
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
      description: 'This field is optional. http://, https://, mailto: and tel: are allowed',
      validation: (Rule) =>
        Rule.uri({
          allowCredentials: true,
          allowRelative: true,
          relativeOnly: false,
          scheme: [/^http/, /^https/, /^mailto/, /^tel/],
        }),
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'link',
          title: 'Link',
          type: 'link',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      url: 'url',
      links: 'links',
    },
    prepare: ({title, url, links}) => ({
      title: title,
      subtitle: `${url ? `${url}` : ''}${url && links?.length ? ` + ` : ``}${
        links?.length
          ? links?.length > 1
            ? ` ${links?.length} links`
            : ` ${links?.length} link`
          : ``
      }`,
    }),
  },
})
