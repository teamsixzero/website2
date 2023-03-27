import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import PostSummary from "../components/PostSummary";
import RichText from "../components/RichText";

const PostTemplate = ({ data, children }) => {
  // const options = {};

  return (
    <Layout>
      <article className="post">
        <section className="post-image">
          {data.contentfulPost.featureImage ? (
            <GatsbyImage
              image={getImage(data.contentfulPost.featureImage)}
              alt={data.contentfulPost.featureImage.description}
            />
          ) : null}
        </section>
        <section className="post-heading">
          <h1 className="h2">{data.contentfulPost.title}</h1>
          <p className="date accent accent--grey-dark">
            Published {data.contentfulPost.date}
          </p>
        </section>
        <section className="post-content">
          {data.contentfulPost.summary && (
            <PostSummary summaryText={data.contentfulPost.summary.summary} />
          )}
          <RichText content={data.contentfulPost.content} />
        </section>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    contentfulPost(id: { eq: $id }) {
      title
      date(formatString: "MMMM D, YYYY")
      summary {
        summary
      }
      featureImage {
        description
        gatsbyImageData(
          width: 1440
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
      content {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            title
            description
            gatsbyImageData(
              width: 1440
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
            __typename
          }
          ... on ContentfulHtmlEmbed {
            contentful_id
            embedCode {
              embedCode
            }
            __typename
          }
        }
      }
    }
  }
`;

export default PostTemplate;

export function Head({ data }) {
  return (
    <>
      <title>{data.contentfulPost.title} | Sixzero</title>
      <body className="single-post has-no-box-shadow" />
    </>
  );
}
