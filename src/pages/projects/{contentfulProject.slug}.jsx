import React from "react";
import { graphql } from "gatsby";

import Layout from "../../components/Layout";
import ProjectBuilder from "../../components/ProjectBuilder";

const Project = ({ data: { contentfulProject: data } }) => {
  return (
    <Layout>
      <h1>{data.title}</h1>
      <ProjectBuilder blocks={data?.blocks} />
    </Layout>
  );
};

export default Project;

export function Head({ data: { contentfulProject: data } }) {
  return <title>{data.title} | Sixzero</title>;
}

export const query = graphql`
  query ($slug: String) {
    contentfulProject(slug: { eq: $slug }) {
      id
      title
      slug

      ...ProjectBuilder
    }
  }
`;
