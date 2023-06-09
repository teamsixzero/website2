import React from "react";
import { graphql } from "gatsby";

import Media from "../Media";

const MediaGrid = ({ data }) => {
  const { gridItems, style } = data;

  return (
    <div className={`block-media-grid ${style}`}>
      {gridItems?.length > 0 &&
        gridItems.map((med) => (
          <div
            className="block-media-grid__wrapper"
            key={med?._key}
            style={{ backgroundColor: med?.backgroundColor?.value?.hex }}
          >
            <Media media={med?.source} />
          </div>
        ))}
    </div>
  );
};

export default MediaGrid;

export const query = graphql`
  fragment BlockMediaGrid on SanityMediaGrid {
    gridItems {
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
      backgroundColor {
        value {
          hex
        }
      }
    }
    style
  }
`;
