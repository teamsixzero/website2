import React from "react";
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";

import Image from "./Image";

import { addColour } from "../utils/helpers";

const website_url = "https://sixzero.co";

const defaultOptions = {
  renderMark: {
    [MARKS.BOLD]: (text) => <strong>{text}</strong>,
    [MARKS.ITALIC]: (text) => <em>{text}</em>,
    [MARKS.UNDERLINE]: (text) => <u>{text}</u>,
  },
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { gatsbyImageData, description } = node.data.target;
      return (
        <figure>
          <Image src={gatsbyImageData} alt={description} />
          {description && <figcaption>{description}</figcaption>}
        </figure>
      );
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      const { __typename, embedCode } = node.data.target;
      if (__typename === "ContentfulHtmlEmbed") {
        return (
          <div dangerouslySetInnerHTML={{ __html: embedCode.embedCode }}></div>
        );
      }
    },
    [BLOCKS.HEADING_1]: (node, children) => (
      <h2 className="h1">{addColour(children)}</h2>
    ),
    [BLOCKS.HEADING_2]: (node, children) => <h2>{addColour(children)}</h2>,
    [BLOCKS.HEADING_3]: (node, children) => <h3>{addColour(children)}</h3>,
    [BLOCKS.HEADING_4]: (node, children) => <h4>{addColour(children)}</h4>,
    [BLOCKS.HEADING_5]: (node, children) => <h5>{addColour(children)}</h5>,
    [BLOCKS.HEADING_6]: (node, children) => <h6>{addColour(children)}</h6>,
    [BLOCKS.PARAGRAPH]: (node, children) => {
      if (!children[0]) return <></>;

      return <p className="text-normal">{addColour(children)}</p>;
    },
    [BLOCKS.QUOTE]: (node, children) => (
      <blockquote className="h5">{children}</blockquote>
    ),
    [INLINES.HYPERLINK]: (node, children) => {
      const { uri } = node.data;

      if (uri.includes("player.vimeo.com/video")) {
        return (
          <div className="embed-container">
            <iframe
              title="video-player"
              src={uri}
              frameborder="0"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
            ></iframe>
          </div>
        );
      }
      return (
        <a
          href={uri}
          className="underline"
          target={`${uri.startsWith(website_url) ? "_self" : "_blank"}`}
          rel={`${uri.startsWith(website_url) ? "" : "noopener noreferrer"}`}
        >
          {children}
        </a>
      );
    },
  },
};

const ContentfulRichText = ({ content, options }) => {
  return (
    <div className="rich-text">
      {renderRichText(content, options || defaultOptions)}
    </div>
  );
};

export default ContentfulRichText;
