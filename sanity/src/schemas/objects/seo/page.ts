import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'seo.page',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: `Used for both search engine results and social cards. If left blank, the title field or site title will be used instead.`,
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: `Used for both search engine results and social cards. If left blank, the default site description will be used instead.`,
      validation: (Rule) =>
        Rule.max(155).warning('Longer descriptions may be truncated by search engines'),
    }),
    defineField({
      name: `keywords`,
      title: `Keywords`,
      type: `array`,
      of: [{type: `string`}],
      description: `Used for search engine results. Keywords should be separated by commas.`,
      options: {layout: `tags`},
    }),
    defineField({
      name: `socialImage`,
      title: `Social image`,
      type: `altImage`,
      description: `Used for both search engine results and social cards. Image should have a 16:9 aspect ratio. eg. 1200 x 675 pixels`,
    }),
  ],
})
