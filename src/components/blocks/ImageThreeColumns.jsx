import React from "react";
import { graphql } from "gatsby";

import SanityImage from "../SanityImage";

const ImageThreeColumns = ({ data }) => {
  const { images } = data;

  return (
    <div className="block-image-three-columns">
      {images.map((image) => (
        <figure key={image?.id}>
          <SanityImage src={image} />
        </figure>
      ))}
    </div>
  );
};

export default ImageThreeColumns;

export const query = graphql`
  fragment BlockImageThreeColumns on SanityImageThreeColumns {
    images {
      ...ImageWithPreview
      alt
    }
  }
`;
