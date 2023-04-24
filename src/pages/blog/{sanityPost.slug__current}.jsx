import React from "react";
import { graphql } from "gatsby";

import Layout from "../../components/Layout";
import Image from "../../components/Image";
import RichText from "../../components/RichText";
import Seo from "../../components/Seo";

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

export function Head({ location, data: { sanityPost: data } }) {
  return (
    <Seo>
      <title id="title">{data?.seo?.title || data?.title} | Sixzero</title>;
      <meta
        id="og:title"
        property="og:title"
        content={`${data.title} | Sixzero`}
      />
      <meta id="og:url" property="og:url" content={location?.href} />
      {data?.seo?.description && (
        <meta
          id="description"
          property="og:description"
          content={data.seo.description}
        />
      )}
      {data?.seo?.keywords && (
        <meta id="keywords" name="keywords" content={data.seo.keywords} />
      )}
      {data?.seo?.socialImage?.asset?.url && (
        <meta
          id="social-image"
          property="og:image"
          content={data.seo.socialImage.asset.url}
        />
      )}
    </Seo>
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
      seo {
        title
        description
        keywords
        socialImage {
          asset {
            url
          }
          alt
        }
      }
    }
  }
`;
