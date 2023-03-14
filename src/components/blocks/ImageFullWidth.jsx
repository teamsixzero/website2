import React from "react";
import { graphql } from "gatsby";

const ImageFullWidth = ({ data }) => {
  const { id, source } = data;

  return (
    <figure className="block-image-full-width">
      <img src={source.url} alttext={source.title} />
    </figure>
  );
};

export default ImageFullWidth;

export const query = graphql`
  fragment BlockImageFullWidth on ContentfulBlockImageFullWidth {
    id
    source {
      url
      title
    }
  }
`;
