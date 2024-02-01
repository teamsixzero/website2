import {defineField, defineType} from 'sanity'
import {MdOutlineReviews} from 'react-icons/md'

export default defineType({
  name: 'testimonials',
  title: 'Testimonials',
  type: 'object',
  fields: [
    defineField({
      name: 'persons',
      title: 'Persons',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'person'}]}],
      validation: (Rule) => Rule.required(),
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
      persons: 'persons',
    },
    prepare: ({persons}) => {
      return {
        title: 'Testimonials',
        subtitle: persons.length + ` ${persons.length === 1 ? 'person' : 'people'}`,
        media: MdOutlineReviews,
      }
    },
  },
})
