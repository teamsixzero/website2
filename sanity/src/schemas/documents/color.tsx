import {defineField, defineType} from 'sanity'

import Color from '../../components/Color'

export default defineType({
  name: 'colorPalette',
  title: 'Color',
  type: 'document',
  fields: [
    defineField({
      name: `name`,
      title: `Name`,
      type: `string`,
    }),
    defineField({
      name: `value`,
      title: `Value`,
      type: `color`,
    }),
  ],
  preview: {
    select: {
      name: `name`,
      value: `value.hex`,
    },
    prepare: ({name, value}) => ({
      title: name,
      subtitle: value,
      media: <Color value={value} />,
    }),
  },
})