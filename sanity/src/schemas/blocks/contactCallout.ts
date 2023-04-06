import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contactCallout',
  title: 'Contact Callout',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subHeading',
      title: 'Sub Heading',
      type: 'string',
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
    }),
    defineField({
      name: 'buttonUrl',
      title: 'Button URL',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          allowCredentials: true,
          allowRelative: true,
          relativeOnly: false,
          scheme: [/^http/, /^https/],
        }),
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Contact Callout',
    }),
  },
})
