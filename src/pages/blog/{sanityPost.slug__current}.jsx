import React from "react";
import { graphql } from "gatsby";

import Layout from "../../components/Layout";
import Image from "../../components/Image";
import RichText from "../../components/RichText";

const BlogTemplate = ({ data, children }) => {
  const { title, date, featureImage, content } = data.sanityPost;

  return (
    <Layout>
      <article className="template-blog">
        <header className="template-blog__heading">
          <h1 className="h2">{title}</h1>
          <p className="text-book">Published {date}</p>
        </header>

        <Image src={featureImage?.asset} alt={featureImage?.alt} />

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
      <title>{data.sanityPost.title} | Sixzero</title>
    </>
  );
}

export const query = graphql`
  query ($id: String) {
    sanityPost(id: { eq: $id }) {
      title
      date(formatString: "MMMM D, YYYY")
      summary
      featureImage {
        asset {
          gatsbyImageData(
            width: 1440
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
        alt
      }
      content: _rawContent(resolveReferences: { maxDepth: 10 })
    }
  }
`;
