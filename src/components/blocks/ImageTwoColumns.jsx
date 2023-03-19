import React from "react";
import { graphql } from "gatsby";

import Image from "../Image";

const ImageTwoColumns = ({ data }) => {
  const { imageOne, imageTwo } = data;

  return (
    <div className="block-image-two-columns">
      <figure>
        <Image src={imageOne} alt={imageOne?.title} />
      </figure>

      <figure>
        <Image src={imageTwo} alt={imageTwo?.title} />
      </figure>
    </div>
  );
};

export default ImageTwoColumns;

export const query = graphql`
  fragment BlockImageTwoColumns on ContentfulBlockImageTwoColumns {
    id
    imageOne {
      gatsbyImageData(
        quality: 100
        width: 1440
        placeholder: BLURRED
        formats: [AUTO, WEBP, AVIF]
      )
      title
    }
    imageTwo {
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
