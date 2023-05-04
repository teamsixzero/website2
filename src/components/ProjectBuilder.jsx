import { graphql } from "gatsby";

import { blockBuilder } from "../utils/blocks";

const ProjectBuilder = ({ blocks }) => {
  return blockBuilder(blocks);
};

export default ProjectBuilder;

export const query = graphql`
  fragment ProjectBuilder on SanityProject {
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
    }
  }
`;
