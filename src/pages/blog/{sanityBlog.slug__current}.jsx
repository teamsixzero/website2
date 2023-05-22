import React from "react";
import { graphql } from "gatsby";

import Media from "../../components/Media";
import RichText from "../../components/RichText";
import Seo from "../../components/Seo";

const BlogTemplate = ({ data }) => {
  const { title, date, featureMedia, content } = data.sanityBlog;

  return (
    <article className="template-blog">
      <header className="template-blog__heading">
        <h1 className="h2">{title}</h1>
        <p className="text-book">Published {date}</p>
      </header>

      <Media media={featureMedia} />

      <section className="template-blog__content">
        <RichText content={content} />
      </section>
    </article>
  );
};

export default BlogTemplate;

export function Head({ location, data: { sanityBlog: data } }) {
  return (
    <Seo>
      <title id="title">{data?.seo?.title || data?.title} | Sixzero</title>;
      <meta
        id="og:title"
        property="og:title"
        content={`${data?.seo?.title || data?.title} | Sixzero`}
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
    sanityBlog(id: { eq: $id }) {
      title
      date(formatString: "MMMM D, YYYY")
      summary
      featureMedia {
        type
        image {
          ...ImageWithPreview
          asset {
            metadata {
              dimensions {
                width
                height
              }
            }
          }
          alt
          mobile {
            asset {
              _id
            }
          }
        }
        video {
          src
          poster {
            asset {
              url
            }
          }
          isIframe
          autoplay
          loop
          controls
          muted
        }
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
