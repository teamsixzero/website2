import {defineArrayMember, defineField} from 'sanity'

export default defineField({
  name: 'blocks',
  title: 'Blocks',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'caseStudy',
    }),
    defineArrayMember({
      type: 'contactCallout',
    }),
    defineArrayMember({
      type: 'contactForm',
    }),
    defineArrayMember({
      type: 'content',
    }),
    defineArrayMember({
      type: 'header',
    }),
    defineArrayMember({
      type: 'logos',
    }),
    defineArrayMember({
      type: 'mediaColumns',
    }),
    defineArrayMember({
      type: 'mediaGrid',
    }),
    defineArrayMember({
      type: 'mediaSection',
    }),
    defineArrayMember({
      type: 'multiSection',
    }),
    defineArrayMember({
      type: 'nextProject',
    }),
    defineArrayMember({
      type: 'orderedList',
    }),
    defineArrayMember({
      type: 'projectInfo',
    }),
    defineArrayMember({
      type: 'testimonial',
    }),
    defineArrayMember({
      type: 'textAndMedia',
    }),
    defineArrayMember({
      type: 'threeColumnSection',
    }),
  ],
})
