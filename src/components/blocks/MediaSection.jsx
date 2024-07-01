import React from "react";
import { graphql } from "gatsby";

import Media from "../Media";
import RichText from "../RichText";

const MediaSection = ({ data }) => {
  const { media, mediaContent, fullWidth, backgroundColor } = data;

  return (
    <div
      className="block-media-section"
      style={{ backgroundColor: backgroundColor?.value?.hex }}
    >
      <div
        className={`block-media-section__wrapper ${
          backgroundColor?.value?.hex ? "has-background" : ""
        } ${fullWidth ? "full-width" : ""}`}
      >
        <Media media={media} />
      </div>

      {(mediaContent?.heading || mediaContent?.text?.length > 0) && (
        <div className="block-media-section__content">
          {mediaContent?.heading && (
            <h3 className="h5">{mediaContent.heading}</h3>
          )}
          <RichText content={mediaContent?.text} />
        </div>
      )}
    </div>
  );
};

export default MediaSection;

export const query = graphql`
  fragment BlockMediaSection on SanityMediaSection {
    media {
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
            metadata {
              dimensions {
                width
                height
              }
            }
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
    mediaContent: content {
      heading
      text: _rawText(resolveReferences: { maxDepth: 10 })
    }
    fullWidth
    backgroundColor {
      value {
        hex
      }
    }
  }
`;
