import React from "react";
import { graphql } from "gatsby";

import { blockBuilder } from "../../utils/helpers.js";

const MultiSection = ({ data }) => {
  const { blocks } = data;

  return (
    <article className="block-multi-section">{blockBuilder(blocks)}</article>
  );
};

export default MultiSection;

export const query = graphql`
  fragment BlockMultiSection on ContentfulBlockMultiSection {
    id
    blocks {
      __typename

      ...BlockContent
      ...BlockOrderedList
    }
  }
`;
