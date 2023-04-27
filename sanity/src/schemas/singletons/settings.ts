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
    {
      name: 'scripts',
      title: 'External Scripts',
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
    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'footer',
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
    // Scripts
    defineField({
      name: 'scripts',
      title: 'External Scripts',
      type: 'array',
      of: [
        {
          type: 'script',
        },
      ],
      group: 'scripts',
      description:
        'Add external scripts to the <head> of the document. For example, Google Analytics. These fields are not sanitized, so be careful what you put in here.',
    }),
  ],
})
