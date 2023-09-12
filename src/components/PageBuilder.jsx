import React, { useDeferredValue } from "react";
import { graphql } from "gatsby";
import { useLiveQuery } from "@sanity/preview-kit";

import BlocksBuilder from "../components/BlocksBuilder";
import { pageQuery } from "../utils/groq";

const PageBuilder = ({ data: initialData = null, slug }) => {
  const [snapshot] = useLiveQuery(initialData, pageQuery, { slug });
  const data = useDeferredValue(snapshot);

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
      ...BlockTextAndMedia
      ...BlockThreeColumnSection
    }
  }
`;
