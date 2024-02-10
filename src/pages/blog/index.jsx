import React from "react";
import { graphql } from "gatsby";

import { usePreview } from "../../hooks/usePreview";

import Link from "../../components/Link";
import Media from "../../components/Media";
import Seo from "../../components/Seo";

import { blogsQuery } from "../../utils/groq";

const BlogPage = ({ data: { allSanityBlog: initialData } }) => {
  const { previewData, previewIsLoading } = usePreview(initialData, blogsQuery);

  const blogs =
    previewData?.length > 0
      ? previewData
      : initialData.edges.map(({ node }) => node);

  // Show a Loading message
  if (previewIsLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="page-blog">
      <ul className="blog-grid">
        {blogs?.length > 0 &&
          blogs.map((blog) => (
            <li key={blog?._id}>
              <Link
                to={`/blog/${blog?.slug?.current}`}
                key={blog.id}
                className="card card--post"
              >
                <div className="card-image">
                  {blog.featureMedia && <Media media={blog?.featureMedia} />}
                </div>
                <div className="card-copy">
                  <h2 className="h6">{blog.title}</h2>
                  {blog.excerpt && (
                    <p className="excerpt text-small">{blog.excerpt}</p>
                  )}
                  <p className="published text-small text-grey-normal">
                    Published <time dateTime={blog.date}>{blog.date}</time>
                  </p>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default BlogPage;

export function Head({ location }) {
  return (
    <Seo>
      <title id="title">Blog | Sixzero</title>
      <meta id="og:title" property="og:title" content="Blog | Sixzero" />
      <meta id="og:url" property="og:url" content={location?.href} />
    </Seo>
  );
}

export const query = graphql`
  query {
    allSanityBlog(sort: { date: DESC }) {
      edges {
        node {
          _id
          title
          date(formatString: "MMMM D, YYYY")
          slug {
            current
          }
          excerpt
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
                  metadata {
                    dimensions {
                      width
                      height
                    }
                  }
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
            }
          }
        }
      }
    }
  }
`;
