import React from "react";
import { graphql } from "gatsby";

import BlocksBuilder from "../components/BlocksBuilder";

const ProjectBuilder = ({ data }) => {
  return <BlocksBuilder blocks={data?.blocks} />;
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
      ...BlockTestimonials
      ...BlockTextAndMedia
      ...BlockThreeColumnSection
    }
  }
`;
