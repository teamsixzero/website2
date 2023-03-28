import { graphql } from "gatsby";

import { blockBuilder } from "../utils/blocks";

const ProjectBuilder = ({ blocks }) => {
  return blockBuilder(blocks);
};

export default ProjectBuilder;

export const query = graphql`
  fragment ProjectBuilder on ContentfulTemplateProject {
    blocks {
      __typename

      ...BlockCaseStudy
      ...BlockContactCallout
      ...BlockContent
      ...BlockHeader
      ...BlockImageFullWidth
      ...BlockImageGrid
      ...BlockImageThreeColumns
      ...BlockImageTwoColumns
      ...BlockLogos
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
