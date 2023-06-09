import {defineArrayMember, defineType} from 'sanity'
import {FaHighlighter} from 'react-icons/fa'

import ColorRenderer from '../../components/richText/ColorRenderer'
import BackgroundColorRenderer from '../../components/richText/BackgroundColorRenderer'
import TitleRenderer from '../../components/richText/TitleRenderer'
import SmallRenderer from '../../components/richText/SmallRenderer'
/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
export default defineType({
  title: `Rich Text`,
  name: `richText`,
  type: `array`,
  of: [
    {
      title: `Block`,
      type: `block`,
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        {title: `Normal`, value: `normal`},
        {
          title: 'Small',
          value: 'small',
          component: SmallRenderer,
        },
        {
          title: 'Title',
          value: 'title',
          component: TitleRenderer,
        },
        {title: 'Heading 1', value: 'h1'},
        {title: 'Heading 2', value: 'h2'},
        {title: 'Heading 3', value: 'h3'},
        {title: 'Heading 4', value: 'h4'},
        {title: 'Heading 5', value: 'h5'},
        {title: 'Heading 6', value: 'h6'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [{title: `Bullet`, value: `bullet`}],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          {title: `Strong`, value: `strong`},
          {title: `Emphasis`, value: `em`},
          {title: `Underline`, value: `underline`},
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: `URL`,
            name: `link`,
            type: `object`,
            fields: [
              {
                name: `href`,
                title: `URL`,
                type: `string`,
              },
            ],
          },
          {
            name: `textColor`,
            title: `Text Color`,
            type: `object`,
            icon: () => `🎨`,
            fields: [
              {
                name: `reference`,
                title: `Color`,
                type: `reference`,
                to: [{type: `colorPalette`}],
              },
            ],
            components: {
              annotation: ColorRenderer,
            },
          },
          {
            name: `highlightColor`,
            title: `Highlight Color`,
            type: `object`,
            icon: FaHighlighter,
            fields: [
              {
                name: `reference`,
                title: `Color`,
                type: `reference`,
                to: [{type: `colorPalette`}],
              },
            ],
            components: {
              annotation: BackgroundColorRenderer,
            },
          },
        ],
      },
    },
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    defineArrayMember({
      title: `Alt Image`,
      type: `altImage`,
    }),
    defineArrayMember({
      title: `Image`,
      type: `image`,
    }),
    defineArrayMember({
      title: `Button`,
      type: `button`,
    }),
  ],
})
