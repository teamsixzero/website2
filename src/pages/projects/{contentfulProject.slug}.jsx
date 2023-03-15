import React from "react";
import { graphql } from "gatsby";

import Layout from "../../components/Layout";
import ProjectBuilder from "../../components/ProjectBuilder";

const Project = ({ data: { contentfulProject: data } }) => {
  return (
    <Layout>
      <header className="project-header">
        <h1>{data.title}</h1>
        <p class="project-description h6">{data.description.text}</p>
      </header>

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

      description {
        text: description
      }

      ...ProjectBuilder
    }
  }
`;
