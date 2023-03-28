import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../../components/Layout";
import BlogSummary from "../../components/BlogSummary";
import RichText from "../../components/RichText";

const BlogTemplate = ({ data, children }) => {
  return (
    <Layout>
      <article className="post">
        <section className="post-image">
          {data.contentfulTemplateBlog.featureImage ? (
            <GatsbyImage
              image={getImage(data.contentfulTemplateBlog.featureImage)}
              alt={data.contentfulTemplateBlog.featureImage.description}
            />
          ) : null}
        </section>
        <section className="post-heading">
          <h1 className="h2">{data.contentfulTemplateBlog.title}</h1>
          <p className="date accent accent--grey-dark">
            Published {data.contentfulTemplateBlog.date}
          </p>
        </section>
        <section className="post-content">
          {data.contentfulTemplateBlog.summary && (
            <BlogSummary
              summaryText={data.contentfulTemplateBlog.summary.summary}
            />
          )}
          <RichText content={data.contentfulTemplateBlog.content} />
        </section>
      </article>
    </Layout>
  );
};

export default BlogTemplate;

export function Head({ data }) {
  return (
    <>
      <title>{data.contentfulTemplateBlog.title} | Sixzero</title>
      <body className="single-post has-no-box-shadow" />
    </>
  );
}

export const query = graphql`
  query ($id: String) {
    contentfulTemplateBlog(id: { eq: $id }) {
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
