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
      links: 'links',
    },
    prepare: ({title, links}) => ({
      title: title,
      subtitle: links.length > 1 ? `${links.length} links` : `${links.length} link`,
    }),
  },
})
