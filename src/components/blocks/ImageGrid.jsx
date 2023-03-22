import React from "react";
import { graphql } from "gatsby";

import Image from "../Image";

const ImageGrid = ({ data }) => {
  const { images, style } = data;

  console.log(`style`, style);
  return (
    <div className="block-image-grid">
      {images.map((image) => (
        <figure key={image?.id}>
          <Image src={image} alt={image?.title} />
        </figure>
      ))}
    </div>
  );
};

export default ImageGrid;

export const query = graphql`
  fragment BlockImageGrid on ContentfulBlockImageGrid {
    images {
      id
      gatsbyImageData(
        quality: 100
        width: 1440
        placeholder: BLURRED
        formats: [AUTO, WEBP, AVIF]
      )
      title
    }
    style
  }
`;
