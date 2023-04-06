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
      type: 'content',
    }),
    defineArrayMember({
      type: 'header',
    }),
    defineArrayMember({
      type: 'imageFullWidth',
    }),
    defineArrayMember({
      type: 'imageGrid',
    }),
    defineArrayMember({
      type: 'imageThreeColumns',
    }),
    defineArrayMember({
      type: 'imageTwoColumns',
    }),
    defineArrayMember({
      type: 'logos',
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
      type: 'textAndImage',
    }),
  ],
})
