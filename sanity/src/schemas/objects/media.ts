import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'media',
  title: 'Media',
  type: 'object',
  fields: [
    defineField({
      name: `type`,
      title: `Type`,
      type: `string`,
      options: {
        list: [
          {title: `Image`, value: `image`},
          {title: `Video`, value: `video`},
        ],
        layout: `dropdown`,
      },
      initialValue: `image`,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: `image`,
      title: `Image`,
      type: `altImage`,
      options: {
        hotspot: true,
        collapsed: false,
      },
      hidden: ({parent}) => parent?.type !== `image`,
    }),
    defineField({
      name: `video`,
      title: `Video`,
      type: `video`,
      options: {
        collapsed: false,
      },
      hidden: ({parent}) => parent?.type !== `video`,
    }),
  ],
})
