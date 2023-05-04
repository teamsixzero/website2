import React from "react";
import { graphql } from "gatsby";

import Media from "../Media";

const MediaSection = ({ data }) => {
  const { media, fullWidth, backgroundColor } = data;

  return (
    <div
      className={`block-media-section ${
        backgroundColor?.value?.hex ? "has-background" : ""
      } ${fullWidth ? "full-width" : ""}`}
      style={{ backgroundColor: backgroundColor?.value?.hex }}
    >
      <Media media={media} />
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
      }
    }
    fullWidth
    backgroundColor {
      value {
        hex
      }
    }
  }
`;
