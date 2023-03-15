import React from "react";
import { graphql } from "gatsby";

import Image from "../Image";

const ImageFullWidth = ({ data }) => {
  const { source } = data;

  return (
    <figure className="block-image-full-width">
      <Image src={source} alt={source.title} />
    </figure>
  );
};

export default ImageFullWidth;

export const query = graphql`
  fragment BlockImageFullWidth on ContentfulBlockImageFullWidth {
    source {
      gatsbyImageData(
        width: 1440
        placeholder: BLURRED
        formats: [AUTO, WEBP, AVIF]
      )
      title
    }
  }
`;
