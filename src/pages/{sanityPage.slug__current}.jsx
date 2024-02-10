import React from "react";
import { graphql } from "gatsby";

import { usePreview } from "../hooks/usePreview";

import PageBuilder from "../components/PageBuilder";
import Seo from "../components/Seo";
import UnPublished from "../components/UnPublished";

import { pageQuery } from "../utils/groq";
import { isEmpty } from "../utils/helpers";

const PageTemplate = ({ data: { sanityPage: initialData } }) => {
  const { previewData, previewIsLoading } = usePreview(initialData, pageQuery);

  // Show a Loading message
  if (previewIsLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="template-page">
      {isEmpty(previewData) && <UnPublished />}
      <PageBuilder data={previewData || initialData} />
    </div>
  );
};

export default PageTemplate;

export function Head({ location, data: { sanityPage: data } }) {
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
  query ($id: String!) {
    sanityPage(id: { eq: $id }) {
      id
      title
      slug {
        current
      }

      ...PageBuilder

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
