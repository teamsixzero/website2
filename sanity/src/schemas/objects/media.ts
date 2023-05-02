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
  preview: {
    select: {
      image: 'source.image',
      video: 'source.video',
    },
    prepare: ({image, video}) => {
      const media = image.asset || video.poster.asset
      const alt = image.alt || video.poster.alt

      return {
        title: alt || 'Image',
        media,
      }
    },
  },
})
