import { graphql } from "gatsby";

import { blockBuilder } from "../utils/blocks.js";

const ProjectBuilder = ({ blocks }) => {
  return blockBuilder(blocks);
};

export default ProjectBuilder;

export const query = graphql`
  fragment ProjectBuilder on ContentfulTemplateProject {
    blocks {
      __typename

      ...BlockCaseStudiesList
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
