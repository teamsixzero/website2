import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'object',
  fields: [
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
        defineArrayMember({
          name: 'linkGroup',
          title: 'Link group',
          type: 'linkGroup',
        }),
      ],
      validation: (Rule) => Rule.max(6),
    }),
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      description: 'Will only accept mailto: links',
      validation: (Rule: any) =>
        Rule.uri({
          allowCredentials: true,
          allowRelative: true,
          relativeOnly: false,
          scheme: [/^mailto/],
        }),
    },
  ],
})
