import { graphql } from "gatsby";

import { blockBuilder } from "../utils/blocks";

const PageBuilder = ({ blocks }) => {
  return blockBuilder(blocks);
};

export default PageBuilder;

export const query = graphql`
  fragment PageBuilder on SanityPage {
    blocks {
      __typename

      ...BlockCaseStudy
      ...BlockContactCallout
      ...BlockContactForm
      ...BlockContent
      ...BlockHeader
      ...BlockLogos
      ...BlockMediaColumns
      ...BlockMediaGrid
      ...BlockMediaSection
      ...BlockMultiSection
      ...BlockNextProject
      ...BlockOrderedList
      ...BlockProjectInfo
      ...BlockTestimonial
      ...BlockTextAndMedia
      ...BlockThreeColumnSection
    }
  }
`;
