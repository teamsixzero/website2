import React from "react";
import { graphql } from "gatsby";

import SanityImage from "../SanityImage";

const ImageGrid = ({ data }) => {
  const { images, style } = data;

  const gridClass = style.toLowerCase().replace(` `, `-`);

  return (
    <div className={`block-image-grid ${gridClass}`}>
      {images.map((image) => (
        <div
          className="block-image-grid__image"
          key={image?.id}
          style={{ backgroundColor: image?.backgroundColor?.value?.hex }}
        >
          <SanityImage src={image?.source} />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;

export const query = graphql`
  fragment BlockImageGrid on SanityImageGrid {
    images {
      source {
        ...ImageWithPreview
        alt
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
