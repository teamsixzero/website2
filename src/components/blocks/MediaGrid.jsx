import React from "react";
import { graphql } from "gatsby";

import Media from "../Media";

const MediaGrid = ({ data }) => {
  const { gridItems, style } = data;

  const gridClass = style.toLowerCase().replace(` `, `-`);

  return (
    <div className={`block-media-grid ${gridClass}`}>
      {gridItems.map((med) => (
        <div
          className="block-media-grid__wrapper"
          key={med?._key}
          style={{ backgroundColor: med?.backgroundColor?.value?.hex }}
        >
          <Media
            media={med?.source}
            imgStyle={{ height: "100%", margin: "auto" }}
          />
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
      backgroundColor {
        value {
          hex
        }
      }
    }
    style
  }
`;
