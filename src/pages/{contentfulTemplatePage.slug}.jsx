import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import PageBuilder from "../components/PageBuilder";

const Page = ({ data: { contentfulTemplatePage: data } }) => {
  return (
    <Layout>
      <div className="template-page">
        <PageBuilder blocks={data?.blocks} />
      </div>
    </Layout>
  );
};

export default Page;

export function Head({ data: { contentfulTemplatePage: data } }) {
  return <title>{data.title} | Sixzero</title>;
}

export const query = graphql`
  query ($slug: String) {
    contentfulTemplatePage(slug: { eq: $slug }) {
      id
      title
      slug

      ...PageBuilder
    }
  }
`;
