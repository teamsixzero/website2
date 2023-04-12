import React from "react";
import { graphql } from "gatsby";

import Image from "../Image";

const ImageGrid = ({ data }) => {
  const { images, style } = data;

  const gridClass = style.toLowerCase().replace(` `, `-`);

  return (
    <div className={`block-image-grid ${gridClass}`}>
      {images.map((image) => (
        <figure key={image?.id}>
          <Image src={image?.asset} alt={image?.alt} />
        </figure>
      ))}
    </div>
  );
};

export default ImageGrid;

export const query = graphql`
  fragment BlockImageGrid on SanityImageGrid {
    images {
      asset {
        gatsbyImageData(
          width: 1440
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
      alt
    }
    style
  }
`;
