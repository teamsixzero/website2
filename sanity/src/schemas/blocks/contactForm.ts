import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'contactForm',
  title: 'Contact Form',
  type: 'object',
  groups: [
    {
      name: 'placeholder',
      title: 'Placeholder',
    },
    {
      name: 'formFields',
      title: 'Form Fields',
    },
  ],
  fields: [
    defineField({
      name: 'content',
      title: 'Content',
      type: 'richText',
    }),
    defineField({
      name: 'namePlaceholder',
      title: 'Name Placeholder',
      type: 'string',
      group: 'placeholder',
    }),
    defineField({
      name: 'emailPlaceholder',
      title: 'Email Placeholder',
      type: 'string',
      group: 'placeholder',
    }),
    defineField({
      name: 'messagePlaceholder',
      title: 'Message Placeholder',
      type: 'string',
      group: 'placeholder',
    }),
    defineField({
      name: 'submitText',
      title: 'Submit Text',
      type: 'string',
      group: 'placeholder',
    }),
    defineField({
      name: 'additionalFields',
      title: 'Additional Fields',
      type: 'array',
      of: [
        {
          type: 'formField.checkbox',
        },
        {
          type: 'formField.email',
        },
        {
          type: 'formField.radio',
        },
        {
          type: 'formField.select',
        },
        {
          type: 'formField.text',
        },
        {
          type: 'formField.textarea',
        },
      ],
    }),
    defineField({
      name: 'successMessage',
      title: 'Success Message',
      type: 'richText',
    }),
    defineField({
      name: 'errorMessage',
      title: 'Error Message',
      type: 'richText',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'image',
    },
    prepare: () => ({
      title: 'Contact Form',
    }),
  },
})
