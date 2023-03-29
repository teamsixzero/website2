import React from "react";
import { graphql } from "gatsby";

import Layout from "../../components/Layout";
import Image from "../../components/Image";
import RichText from "../../components/RichText";

const BlogTemplate = ({ data, children }) => {
  const { title, date, featureImage, content } = data.contentfulTemplateBlog;

  return (
    <Layout>
      <article className="template-blog">
        <header className="template-blog__heading">
          <h1 className="h2">{title}</h1>
          <p className="text-book">Published {date}</p>
        </header>

        <Image src={featureImage} alt={featureImage?.title} />

        <section className="template-blog__content">
          <RichText content={content} />
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
        title
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
