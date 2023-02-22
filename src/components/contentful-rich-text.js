import React from 'react'
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const website_url = 'https://sixzero.co';

const options = {
  renderMark: {
  },
  renderNode: {
    [INLINES.HYPERLINK]: ({ data }, children) => {
      if((data.uri).includes('player.vimeo.com/video')) {
        return <div className="embed-container">
          <iframe src={data.uri} frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>
      } else {
        return <a href={data.uri} target={`${data.uri.startsWith(website_url) ? '_self' : '_blank'}`} rel={`${data.uri.startsWith(website_url) ? '' : 'noopener noreferrer'}`}>{children}</a>
      }
    },
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { gatsbyImageData, title, description } = node.data.target

      return (
        <figure>
          <GatsbyImage
            image={getImage(gatsbyImageData)}
            alt={description}
          />
          {description && <figcaption>{description}</figcaption>}
        </figure>
      )
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      const { __typename, embedCode } = node.data.target

      if(__typename === 'ContentfulHtmlEmbed') {
        return (
          <div dangerouslySetInnerHTML={{ __html: embedCode.embedCode }}></div>
        )
      }
    },
  },
}

const ContentfulRichText = ({ richText }) => {
  return <>{renderRichText(richText, options)}</>
}

export default ContentfulRichText
