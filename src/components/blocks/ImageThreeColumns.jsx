import React from "react";
import { graphql } from "gatsby";

import Image from "../Image";

const ImageThreeColumns = ({ data }) => {
  const { images } = data;

  return (
    <div className="block-image-three-columns">
      {images.map((image) => (
        <figure key={image?.id}>
          <Image src={image?.asset} alt={image?.alt} />
        </figure>
      ))}
    </div>
  );
};

export default ImageThreeColumns;

export const query = graphql`
  fragment BlockImageThreeColumns on SanityImageThreeColumns {
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
  }
`;
