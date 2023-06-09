import {defineField, defineType} from 'sanity'
import {MdOutlineNextWeek} from 'react-icons/md'

export default defineType({
  name: 'nextProject',
  title: 'Next Project',
  type: 'object',
  fields: [
    defineField({
      name: 'project',
      title: 'Project',
      type: 'reference',
      to: [
        {
          type: 'project',
        },
      ],
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'altImage',
    }),
  ],
  preview: {
    select: {
      title: 'project.title',
      image: 'coverImage',
    },
    prepare: ({image, title}) => ({
      title: 'Next Project',
      subtitle: title,
      media: image || MdOutlineNextWeek,
    }),
  },
})
