import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'projectInfo',
  title: 'Project Info',
  type: 'object',
  fields: [
    defineField({
      name: 'info',
      title: 'Info',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'titleText',
        }),
      ],
      initialValue: [
        {
          title: `Expertise`,
          text: `UX Research, Design`,
        },
        {
          title: `Platforms`,
          text: `iOS`,
        },
        {
          title: `Deliverables`,
          text: `UI, UX, Desktop, Web, Strategy, User Research`,
        },
        {
          title: `Interested`,
          text: `Try SquadCast`,
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Project Info',
    }),
  },
})
