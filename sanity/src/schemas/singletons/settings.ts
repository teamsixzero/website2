import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  groups: [
    {
      name: 'navigation',
      title: 'Navigation',
    },
    {
      name: 'notFoundPage',
      title: '404 page',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    // menu
    defineField({
      name: 'menu',
      title: 'Menu',
      type: 'menu',
      group: 'navigation',
      options: {
        collapsed: false,
        collapsible: true,
      },
    }),
    // 404 page
    defineField({
      name: 'notFoundPage',
      title: '404 page',
      type: 'notFoundPage',
      group: 'notFoundPage',
    }),
    // SEO
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo.settings',
      group: 'seo',
      options: {
        collapsed: false,
        collapsible: true,
      },
    }),
  ],
})
