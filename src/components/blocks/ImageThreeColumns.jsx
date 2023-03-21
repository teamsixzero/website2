import React from "react";
import { graphql } from "gatsby";

import Image from "../Image";

const ImageThreeColumns = ({ data }) => {
  const { images } = data;

  return (
    <div className="block-image-three-columns">
      {images.map((image) => (
        <figure key={image?.id}>
          <Image src={image} alt={image?.title} />
        </figure>
      ))}
    </div>
  );
};

export default ImageThreeColumns;

export const query = graphql`
  fragment BlockImageThreeColumns on ContentfulBlockImageThreeColumns {
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
  }
`;
