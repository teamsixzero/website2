import React from "react";
import { graphql } from "gatsby";

import SanityImage from "../SanityImage";

const ImageTwoColumns = ({ data }) => {
  const { images } = data;

  return (
    <div className="block-image-two-columns">
      {images.map((image) => (
        <figure
          key={image?._key}
          className={`block-image-two-columns__figure ${
            image?.backgroundColor?.value?.hex ? "has-background" : ""
          }`}
          style={{ backgroundColor: image?.backgroundColor?.value?.hex }}
        >
          <SanityImage src={image?.source} />
        </figure>
      ))}
    </div>
  );
};

export default ImageTwoColumns;

export const query = graphql`
  fragment BlockImageTwoColumns on SanityImageTwoColumns {
    images {
      _key
      source {
        ...ImageWithPreview
        alt
      }
      backgroundColor {
        value {
          hex
        }
      }
    }
  }
`;
