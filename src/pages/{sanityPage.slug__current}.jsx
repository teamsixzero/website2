import React, { useEffect, useContext } from "react";
import { graphql } from "gatsby";
import { useLiveQuery } from "@sanity/preview-kit";

import { PreviewContext } from "../context/PreviewContext";

import PageBuilder from "../components/PageBuilder";
import Seo from "../components/Seo";
import UnPublished from "../components/UnPublished";

import { pageQuery } from "../utils/groq";

const PageTemplate = ({ data: { sanityPage: initialData } }) => {
  const [previewData, sanityPreviewIsLoading] = useLiveQuery(
    initialData,
    pageQuery,
    {
      slug: initialData.slug.current,
    }
  );

  const {
    setActivePreview,
    setPreviewContextData,
    setPreviewIsLoading,
    setPreviewValidationData,
    setIsNewUnpublishedDoc,
    isNewUnpublishedDoc,
  } = useContext(PreviewContext);

  useEffect(() => {
    setPreviewIsLoading(sanityPreviewIsLoading);
  }, [sanityPreviewIsLoading]);

  useEffect(() => {
    // Get URL params
    const urlSearchParams = new URLSearchParams(window.location.search);
    const previewModeParameter = urlSearchParams.get("previewMode");
    const previewDatasetParameter = urlSearchParams.get("previewDataset");
    const previewValidationDataParameter = urlSearchParams.get("validation");
    const previewIsNewUnpublishedDocParameter =
      urlSearchParams.get("isNewUnpublishedDoc") === "true";

    if (previewValidationDataParameter) {
      setPreviewValidationData(JSON.parse(previewValidationDataParameter));
    }

    if (previewModeParameter) {
      setActivePreview(true);
    }
    if (previewDatasetParameter) {
      setPreviewContextData({ previewDataset: previewDatasetParameter });
    }

    if (previewIsNewUnpublishedDocParameter) {
      setIsNewUnpublishedDoc(previewIsNewUnpublishedDocParameter);
    }
  }, []);

  // Show a Loading message
  if (sanityPreviewIsLoading) {
    return <div>Loading...</div>;
  }

  // // Non published document message
  // if (!sanityPreviewIsLoading && isNewUnpublishedDoc) {
  //   return (
  //     <div className="template-page">
  //       <UnPublished />
  //     </div>
  //   );
  // }

  return (
    <div className="template-page">
      {previewData.blocks === null && <UnPublished />}
      <PageBuilder data={previewData} />
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
