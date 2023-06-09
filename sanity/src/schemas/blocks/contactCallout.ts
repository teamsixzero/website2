import {defineField, defineType} from 'sanity'
import {BsMegaphone} from 'react-icons/bs'

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
      initialValue: 'Let’s work together',
    }),
    defineField({
      name: 'subHeading',
      title: 'Sub Heading',
      type: 'string',
      initialValue: 'We will help you design something people love.',
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      initialValue: 'Contact Us',
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
          scheme: [/^http/, /^https/, /^mailto/, /^tel/],
        }),
      initialValue: 'mailto:hello@sixzero.com',
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Contact Callout',
      media: BsMegaphone,
    }),
  },
})
