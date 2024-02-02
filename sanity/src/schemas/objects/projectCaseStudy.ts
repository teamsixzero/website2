import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'projectCaseStudy',
  title: 'Case Study',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: false,
  },
  fields: [
    defineField({
      name: 'summary',
      title: 'Card Summary',
      type: 'text',
      description: 'This is the text that will appear on the case study card.',
    }),
    defineField({
      name: 'media',
      title: 'Media',
      type: 'media',
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
})
