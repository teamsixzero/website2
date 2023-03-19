import React from "react";
import { INLINES, BLOCKS } from "@contentful/rich-text-types";
import { renderRichText } from "gatsby-source-contentful/rich-text";

import Image from "./Image";

const website_url = "https://sixzero.co";

const options = {
  renderMark: {},
  renderNode: {
    [INLINES.HYPERLINK]: ({ data }, children) => {
      if (data.uri.includes("player.vimeo.com/video")) {
        return (
          <div className="embed-container">
            <iframe
              title="video-player"
              src={data.uri}
              frameborder="0"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
            ></iframe>
          </div>
        );
      } else {
        return (
          <a
            href={data.uri}
            target={`${data.uri.startsWith(website_url) ? "_self" : "_blank"}`}
            rel={`${
              data.uri.startsWith(website_url) ? "" : "noopener noreferrer"
            }`}
          >
            {children}
          </a>
        );
      }
    },
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
    [BLOCKS.HEADING_1]: (node, children) => <h2 className="h1">{children}</h2>,
    [BLOCKS.PARAGRAPH]: (node, children) => {
      if (!children[0]) return <></>;

      return <p className="text-normal">{children}</p>;
    },
  },
};

const ContentfulRichText = ({ content }) => {
  return <>{renderRichText(content, options)}</>;
};

export default ContentfulRichText;
