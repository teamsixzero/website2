import React from "react";
import { graphql } from "gatsby";

import Image from "../Image";

const ImageFullWidth = ({ data }) => {
  const { image } = data;

  return (
    <figure className="block-image-full-width">
      <Image src={image?.asset} alt={image?.alt} />
    </figure>
  );
};

export default ImageFullWidth;

export const query = graphql`
  fragment BlockImageFullWidth on SanityImageFullWidth {
    image {
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
