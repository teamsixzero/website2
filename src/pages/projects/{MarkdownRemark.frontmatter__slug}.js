import React from "react"
import { graphql } from "gatsby"
import Helmet from "react-helmet"
import Layout from "../../components/layout"
import ContactCallout from "../../components/contact-callout"

const Project = ({ data, children }) => {
  return (
    <Layout>
      <Helmet>
        <title>{data.markdownRemark.frontmatter.seo_title}</title>
        <body className={data.markdownRemark.frontmatter.body_class} />
      </Helmet>
      <article className="project" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      <ContactCallout />
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    markdownRemark(id: {eq: $id}) {
      frontmatter {
        title
        seo_title
        seo_description
        body_class
      },
      html
    }
  }
`

export default Project