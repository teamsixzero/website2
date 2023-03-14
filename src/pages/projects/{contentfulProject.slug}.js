import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../../components/layout";
import ContactCallout from "../../components/contact-callout";

const Project = ({ data: { contentfulProject: data }, children }) => {
  return (
    <Layout>
      <Helmet>
        <title>{data.title} | Sixzero</title>
      </Helmet>
      <h1>{data.title}</h1>
      <ContactCallout />
    </Layout>
  );
};

export const query = graphql`
  query ($slug: String) {
    contentfulProject(slug: { eq: $slug }) {
      id
      title
      slug
    }
  }
`;

export default Project;
