import React from 'react'
import styled from 'styled-components'
import {defineField, defineType} from 'sanity'

const Color = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({value}) => value}
  border: 1px solid var(--card-shadow-outline-color);
  border-radius: 0.1875rem;

  & + * {
    display: none !important;
  }
`

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
      icon: `seoIcon`,
    },
    prepare: ({name, value, icon}) => ({
      title: name,
      subtitle: value,
      media: icon || <Color value={value} />,
    }),
  },
})