import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../../components/Layout";
import SanityImage from "../../components/SanityImage";

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
                {blog.featureImage && <SanityImage src={blog?.featureImage} />}
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

export function Head({ location }) {
  return (
    <>
      <title id="title">Blog | Sixzero</title>
      <meta id="og:title" property="og:title" content="Blog | Sixzero" />
      <meta id="og:url" property="og:url" content={location?.href} />
      {/* <body className="page-blog has-no-box-shadow" /> */}
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
            ...ImageWithPreview
            alt
          }
        }
      }
    }
  }
`;
