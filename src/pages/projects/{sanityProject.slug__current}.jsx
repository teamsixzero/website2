import React from "react";
import { graphql } from "gatsby";

import ProjectBuilder from "../../components/ProjectBuilder";
import Seo from "../../components/Seo";

const ProjectTemplate = ({ data: { sanityProject: data } }) => {
  return (
    <div className="template-project">
      <header className="project-header">
        <h1>{data?.title}</h1>
        {data?.description && (
          <p className="project-description h6">{data?.description}</p>
        )}
      </header>

      <ProjectBuilder data={data} />
    </div>
  );
};

export default ProjectTemplate;

export function Head({ location, data: { sanityProject: data } }) {
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
    sanityProject(id: { eq: $id }) {
      id
      title
      slug {
        current
      }

      description

      ...ProjectBuilder

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
