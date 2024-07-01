import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'mediaBlock',
  title: 'Media Block',
  type: 'object',
  fieldsets: [
    {
      name: 'content',
      title: 'Content',
    },
  ],
  fields: [
    defineField({
      name: 'source',
      title: 'Source',
      type: 'media',
      options: {
        collapsible: false,
      },
    }),
    defineField({
      name: 'contentHeading',
      title: 'Heading',
      type: 'string',
      fieldset: 'content',
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'richText',
      fieldset: 'content',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'reference',
      to: [{type: 'colorPalette'}],
    }),
    defineField({
      name: 'paddingAlign',
      title: 'Padding Align',
      type: 'string',
      options: {
        list: ['Auto', 'Top', 'Bottom'],
        layout: 'radio',
      },
      initialValue: 'Auto',
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
        title: alt || 'Media Block',
        media,
      }
    },
  },
})
