import React, { useDeferredValue } from "react";
import { graphql } from "gatsby";
import { useLiveQuery } from "@sanity/preview-kit";

import BlocksBuilder from "../components/BlocksBuilder";
import { projectQuery } from "../utils/groq";

const ProjectBuilder = ({ data: initialData = null, slug }) => {
  const [snapshot] = useLiveQuery(initialData, projectQuery, { slug });
  const data = useDeferredValue(snapshot);

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
