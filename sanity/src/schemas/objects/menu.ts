import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'menu',
  title: 'Menu',
  type: 'object',
  fields: [
    // Links
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

    defineField({
      name: 'button',
      title: 'CTA Button',
      type: 'link',
    }),
  ],
})
