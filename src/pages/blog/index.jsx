import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../../components/Layout";
import Image from "../../components/Image";

const BlogPage = ({ data }) => {
  const blogs = data.allSanityPost.edges.map(({ node }) => node);

  return (
    <Layout>
      <ul className="blog-grid">
        {blogs.map((blog) => (
          <li>
            <Link
              to={`/blog/${blog?.slug?.current}`}
              key={blog.id}
              className="card card--post"
            >
              <div className="card-image">
                {blog.featureImage && (
                  <Image
                    src={blog?.featureImage?.asset}
                    alt={blog?.featureImage?.alt}
                  />
                )}
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
    </Layout>
  );
};

export default BlogPage;

export function Head() {
  return (
    <>
      <title>Blog | Sixzero</title>
      <body className="page-blog has-no-box-shadow" />
    </>
  );
}

export const query = graphql`
  query {
    allSanityPost(sort: { date: DESC }) {
      edges {
        node {
          title
          date(formatString: "MMMM D, YYYY")
          slug {
            current
          }
          excerpt
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
        }
      }
    }
  }
`;
