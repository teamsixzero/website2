import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'mediaSection',
  title: 'Media Section',
  type: 'object',
  fields: [
    defineField({
      name: 'media',
      title: 'Media',
      type: 'media',
    }),
    defineField({
      name: 'fullWidth',
      title: 'Full Width?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'reference',
      to: [{type: 'colorPalette'}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      image: 'media.image',
      video: 'media.video',
    },
    prepare: ({image, video}) => {
      const alt = image?.alt || video?.poster?.alt
      const media = image?.asset || video?.poster?.asset

      return {
        title: 'Media Section',
        subtitle: alt,
        media: media,
      }
    },
  },
})
