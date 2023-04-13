import React from "react";
import { graphql } from "gatsby";

import { blockBuilder } from "../../utils/blocks";

const MultiSection = ({ data }) => {
  const { blocks, backgroundColor } = data;

  return (
    <article
      className={`block-multi-section ${
        backgroundColor?.value?.hex ? `has-background` : ``
      }`}
      style={{ backgroundColor: backgroundColor?.value?.hex }}
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
    backgroundColor {
      value {
        hex
      }
    }
  }
`;
