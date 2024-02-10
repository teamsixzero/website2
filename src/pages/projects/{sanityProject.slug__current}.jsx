import React from "react";
import { graphql } from "gatsby";

import { usePreview } from "../../hooks/usePreview";

import ProjectBuilder from "../../components/ProjectBuilder";
import Seo from "../../components/Seo";
import UnPublished from "../../components/UnPublished";

import { projectQuery } from "../../utils/groq";
import { isEmpty } from "../../utils/helpers";

const ProjectTemplate = ({ data: { sanityProject: initialData } }) => {
  const { previewData, previewIsLoading } = usePreview(
    initialData,
    projectQuery
  );

  // Show a Loading message
  if (previewIsLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="template-project">
      {isEmpty(previewData) && <UnPublished />}

      <header className="project-header">
        <h1>{previewData?.title}</h1>
        {previewData?.description && (
          <p className="project-description h6">{previewData?.description}</p>
        )}
      </header>

      <ProjectBuilder data={previewData || initialData} />
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
