import React from "react";
import { graphql } from "gatsby";

import SanityImage from "../SanityImage";

const ImageFullWidth = ({ data }) => {
  const { image, fullWidth, backgroundColor } = data;

  return (
    <figure
      className={`block-image-full-width ${
        backgroundColor?.value?.hex ? "has-background" : ""
      } ${fullWidth ? "full-width" : ""}`}
      style={{ backgroundColor: backgroundColor?.value?.hex }}
    >
      <SanityImage src={image} />
    </figure>
  );
};

export default ImageFullWidth;

export const query = graphql`
  fragment BlockImageFullWidth on SanityImageFullWidth {
    image {
      ...ImageWithPreview
      alt
    }
    fullWidth
    backgroundColor {
      value {
        hex
      }
    }
  }
`;
