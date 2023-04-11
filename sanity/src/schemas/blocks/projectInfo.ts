import {defineArrayMember, defineField, defineType} from 'sanity'
import {MdInfoOutline} from 'react-icons/md'

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
    defineField({
      name: 'textColor',
      title: 'Text Color',
      type: 'reference',
      to: [{type: 'colorPalette'}],
      initialValue: {
        _ref: '499df272-1e2e-488b-81da-d0c0427da745',
      },
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'reference',
      to: [{type: 'colorPalette'}],
      initialValue: {
        _ref: '2f41e465-06ff-4ede-83e2-3585450a276f',
      },
    }),
  ],
  preview: {
    prepare: () => ({
      title: 'Project Info',
      media: MdInfoOutline,
    }),
  },
})
