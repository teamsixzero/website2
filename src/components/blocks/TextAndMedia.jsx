import React from "react";
import { graphql } from "gatsby";

import Media from "../Media";
import RichText from "../RichText";

const TextAndMedia = ({ data }) => {
  const { text, mediaBlock, align, backgroundColor } = data;

  let fullBleed;
  let alignClass;

  switch (align) {
    case "Right":
      alignClass = "align-right";
      break;

    case "Right (Full Bleed)":
      fullBleed = "full-bleed right";
      alignClass = "align-right full-bleed";
      break;

    case "Left (Full Bleed)":
      fullBleed = "full-bleed left";
      alignClass = "align-left full-bleed";
      break;

    case "Left":
    default:
      alignClass = "align-left";
      break;
  }

  return (
    <div
      className={`block-text-and-media${
        backgroundColor?.value?.hex ? " has-background" : ""
      }${fullBleed ? ` ${fullBleed}` : ""}`}
      style={{ backgroundColor: backgroundColor?.value?.hex }}
    >
      <header>
        <RichText content={text} />
      </header>

      <Media
        media={mediaBlock?.source}
        className={`block-text-and-media__wrapper ${alignClass} ${
          mediaBlock?.backgroundColor?.value?.hex ? "has-background" : ""
        }`}
        style={{ backgroundColor: mediaBlock?.backgroundColor?.value?.hex }}
      />
    </div>
  );
};

export default TextAndMedia;

export const query = graphql`
  fragment BlockTextAndMedia on SanityTextAndMedia {
    text: _rawText(resolveReferences: { maxDepth: 10 })
    mediaBlock {
      source {
        type
        image {
          ...ImageWithPreview
          asset {
            metadata {
              dimensions {
                width
                height
              }
            }
          }
          alt
          mobile {
            asset {
              _id
            }
          }
        }
        video {
          src
          poster {
            asset {
              url
            }
          }
          isIframe
          autoplay
          loop
          controls
          muted
        }
      }
      backgroundColor {
        value {
          hex
        }
      }
    }
    align
    backgroundColor {
      value {
        hex
      }
    }
  }
`;
