import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import PageBuilder from "../components/PageBuilder";

const PageTemplate = ({ data: { sanityPage: data } }) => {
  return (
    <Layout>
      <div className="template-page">
        <PageBuilder blocks={data?.blocks} />
      </div>
    </Layout>
  );
};

export default PageTemplate;

export function Head({ data: { sanityPage: data } }) {
  return <title>{data.title} | Sixzero</title>;
}

export const query = graphql`
  query ($slug: String) {
    sanityPage(slug: { current: { eq: $slug } }) {
      id
      title
      slug {
        current
      }

      ...PageBuilder
    }
  }
`;
