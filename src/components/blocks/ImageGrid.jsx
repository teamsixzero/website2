import React from "react";
import { graphql } from "gatsby";

import Image from "../Image";

const ImageGrid = ({ data }) => {
  const { images, style } = data;

  const gridClass = style.toLowerCase().replace(` `, `-`);

  return (
    <div className={`block-image-grid ${gridClass}`}>
      {images.map((image) => (
        <figure
          key={image?.id}
          style={{ backgroundColor: image?.backgroundColor?.value?.hex }}
        >
          <Image
            src={image?.source?.asset}
            alt={image?.source?.alt}
            objectFit="contain"
          />
        </figure>
      ))}
    </div>
  );
};

export default ImageGrid;

export const query = graphql`
  fragment BlockImageGrid on SanityImageGrid {
    images {
      source {
        asset {
          gatsbyImageData(
            width: 1440
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
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
