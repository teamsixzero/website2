import React from "react";
import { graphql } from "gatsby";

import Layout from "../../components/Layout";
import ProjectBuilder from "../../components/ProjectBuilder";

const Project = ({ data: { contentfulTemplateProject: data } }) => {
  return (
    <Layout>
      <div className="template-project">
        <header className="project-header">
          <h1>{data.title}</h1>
          <p className="project-description h6">{data.description.text}</p>
        </header>

        <ProjectBuilder blocks={data?.blocks} />
      </div>
    </Layout>
  );
};

export default Project;

export function Head({ data: { contentfulTemplateProject: data } }) {
  return <title>{data.title} | Sixzero</title>;
}

export const query = graphql`
  query ($slug: String) {
    contentfulTemplateProject(slug: { eq: $slug }) {
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
