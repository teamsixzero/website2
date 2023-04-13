import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Case Study',
  name: 'caseStudy',
  type: 'object',
  fields: [
    defineField({
      name: 'project',
      title: 'Project',
      type: 'reference',
      validation: (Rule) => Rule.required(),
      to: [
        {
          type: 'project',
        },
      ],
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'altImage',
    }),
    defineField({
      name: 'alignment',
      title: 'Alignment',
      type: 'string',
      options: {
        list: ['Left', 'Right', 'Left (Full Height)', 'Right (Full Height)'],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'textColor',
      title: 'Text Color',
      type: 'reference',
      to: [{type: 'colorPalette'}],
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
      title: 'project.title',
      image: 'image',
    },
    prepare: ({title, image}) => ({
      title: 'Case Study',
      subtitle: title,
      media: image,
    }),
  },
})
