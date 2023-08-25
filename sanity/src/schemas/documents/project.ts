import {defineField, defineType} from 'sanity'
import {FaRegFolderOpen} from 'react-icons/fa'

import pageBuilder from '../../utils/pageBuilder'

export default defineType({
  name: 'project',
  title: 'Case Study',
  type: 'document',
  groups: [
    {
      name: 'caseStudy',
      title: 'Case Study',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'This is the text that will appear on the case study page.',
    }),
    // case study
    defineField({
      name: 'caseStudy',
      title: 'Case Study',
      type: 'projectCaseStudy',
      group: 'caseStudy',
    }),
    //
    pageBuilder,
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo.page',
      group: 'seo',
      options: {
        collapsible: true,
        collapsed: false,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug.current',
    },
    prepare: ({title, slug}) => ({
      title,
      subtitle: `/${slug}/`,
      media: FaRegFolderOpen,
    }),
  },
})
