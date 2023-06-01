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
  ],
  preview: {
    select: {
      title: 'project.title',
      image: 'project.caseStudy.media.image',
      video: 'project.caseStudy.media.video',
    },
    prepare: ({image, title, video}) => {
      const media = image?.asset || video?.poster?.asset
      return {
        title: 'Case Study',
        subtitle: title,
        media: media,
      }
    },
  },
})
