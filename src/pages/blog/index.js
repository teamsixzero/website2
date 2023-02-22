import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import Helmet from "react-helmet"

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>Blog | Sixzero</title>
        <body className="page-blog has-no-box-shadow" />
      </Helmet>
      <ul class="blog-grid">
        {
          data.allContentfulPost.nodes.map((node) => (
            <li>
              <Link to={`/blog/${node.slug}`} key={node.id} className="card card--post">
                <div className="card-image">
                  {node.featureImage ? (
                    <GatsbyImage
                      image={getImage(node.featureImage)}
                      alt={node.featureImage.description}
                    />
                  ) : null}
                </div>
                <div className="card-copy">
                  <h2 className="h6">{node.title}</h2>
                  {node.excerpt ? (<p>{node.excerpt.excerpt}</p>) : null}
                  <p className="accent accent--grey-normal">Published {node.date}</p>
                </div>
              </Link>
            </li>
          ))
        }
      </ul>
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query {
    allContentfulPost(sort: {fields: date, order: DESC}) {
      nodes {
        title
        date(formatString: "MMMM D, YYYY")
        slug
        excerpt {
          excerpt
        }
        featureImage {
          description
          gatsbyImageData
        }
      }
    }
  }
`
