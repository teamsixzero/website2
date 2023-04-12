import React from "react";
import { graphql } from "gatsby";

import { blockBuilder } from "../../utils/blocks";

const MultiSection = ({ data }) => {
  const { blocks, hasBackground } = data;

  return (
    <article
      className={`block-multi-section${hasBackground ? ` has-background` : ``}`}
    >
      <div className="block-multi-section__wrapper">{blockBuilder(blocks)}</div>
    </article>
  );
};

export default MultiSection;

export const query = graphql`
  fragment BlockMultiSection on SanityMultiSection {
    blocks {
      __typename

      ...BlockContent
      ...BlockImageFullWidth
      ...BlockOrderedList
    }
  }
`;
