import React from "react";
import { graphql } from "gatsby";

const MultiSection = ({ data }) => {
  const { title, blocks } = data;

  console.log(`blocks`, blocks);

  return <article>MultiSection</article>;
};

export default MultiSection;

export const query = graphql`
  fragment BlockMultiSection on ContentfulBlockMultiSection {
    id
    title
    blocks {
      __typename
      ... on ContentfulBlockContent {
        id
        title
        text {
          raw
        }
      }
      ... on ContentfulBlockOrderedList {
        id
        title
      }
    }
  }
`;
