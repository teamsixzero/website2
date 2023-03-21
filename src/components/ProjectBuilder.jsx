import React from "react";
import { graphql } from "gatsby";

import { blockBuilder } from "../utils/helpers.js";

const ProjectBuilder = ({ blocks }) => {
  return blockBuilder(blocks);
};

export default ProjectBuilder;

export const query = graphql`
  fragment ProjectBuilder on ContentfulProject {
    blocks {
      __typename

      ...BlockContactCallout
      ...BlockContent
      ...BlockHeader
      ...BlockImageFullWidth
      ...BlockImageTwoColumns
      ...BlockMultiSection
      ...BlockOrderedList
      ...BlockProjectInfo
      ...BlockTestimonial
      ...BlockTextAndImage
    }
  }
`;
