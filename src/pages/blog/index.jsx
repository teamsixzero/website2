import React from "react";
import { Link, graphql } from "gatsby";

import Media from "../../components/Media";

const BlogPage = ({ data }) => {
  const blogs = data.allSanityBlog.edges.map(({ node }) => node);

  return (
    <div className="page-blog">
      <ul className="blog-grid">
        {blogs.map((blog) => (
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
                {blog.excerpt && <p>{blog.excerpt}</p>}
                <p className="accent accent--grey-normal">
                  Published {blog.date}
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
    <>
      <title id="title">Blog | Sixzero</title>
      <meta id="og:title" property="og:title" content="Blog | Sixzero" />
      <meta id="og:url" property="og:url" content={location?.href} />
    </>
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
