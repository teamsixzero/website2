import { graphql } from "gatsby";

import { blockBuilder } from "../utils/blocks.js";

const PageBuilder = ({ blocks }) => {
  return blockBuilder(blocks);
};

export default PageBuilder;

export const query = graphql`
  fragment PageBuilder on ContentfulTemplatePage {
    blocks {
      __typename

      ...BlockContactCallout
      ...BlockContent
      ...BlockHeader
      ...BlockImageFullWidth
      ...BlockImageGrid
      ...BlockImageThreeColumns
      ...BlockImageTwoColumns
      ...BlockMultiSection
      ...BlockNextProject
      ...BlockOrderedList
      ...BlockPageTitle
      ...BlockProjectInfo
      ...BlockTestimonial
      ...BlockTextAndImage
    }
  }
`;
