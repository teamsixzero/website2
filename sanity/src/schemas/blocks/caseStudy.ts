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
      type: 'image',
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
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
    }),
    defineField({
      name: 'textColor',
      title: 'Text Color',
      type: 'string',
      options: {
        list: ['Light', 'Dark'],
        layout: 'radio',
      },
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Case Study',
    }),
  },
})
