import React from "react";
import { graphql } from "gatsby";

import BlocksBuilder from "../components/BlocksBuilder";

const PageBuilder = ({ data }) => {
  return <BlocksBuilder blocks={data?.blocks} />;
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
      ...BlockTestimonials
      ...BlockTextAndMedia
      ...BlockThreeColumnSection
    }
  }
`;
