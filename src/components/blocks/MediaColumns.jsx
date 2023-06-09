import React from "react";
import { graphql } from "gatsby";

import Media from "../Media";

const MediaColumns = ({ data }) => {
  const { columns } = data;

  return (
    <div className="block-media-columns">
      {columns?.length > 0 &&
        columns?.map((med) => (
          <div
            key={med?._key}
            className={`block-media-columns__wrapper ${
              med?.backgroundColor?.value?.hex ? "has-background" : ""
            }`}
            style={{ backgroundColor: med?.backgroundColor?.value?.hex }}
          >
            <Media media={med?.source} />
          </div>
        ))}
    </div>
  );
};

export default MediaColumns;

export const query = graphql`
  fragment BlockMediaColumns on SanityMediaColumns {
    columns {
      _key
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
  }
`;
