import React, { useState, useEffect, Suspense, lazy } from "react";
import { graphql } from "gatsby";

import PageBuilder from "../components/PageBuilder";
import Seo from "../components/Seo";

import { token, sanityFetch } from "../utils/sanity";
import { pageQuery } from "../utils/groq";

const previewDrafts = process.env.GATSBY_SANITY_API_PREVIEW_DRAFTS === "true";

const PreviewProvider = lazy(() => import("../provider/PreviewProvider"));

const PageTemplate = ({ location, data: { sanityPage: data } }) => {
  const slug = location.pathname === "/" ? "index" : location.pathname;
  const [sanityData, setSanityData] = useState(null);

  useEffect(() => {
    if (!previewDrafts) return;

    const fetchSanityData = async () => {
      const data = await sanityFetch(previewDrafts, pageQuery, {
        slug,
      });
      setSanityData(data);
    };

    fetchSanityData();
  }, [slug]);

  return (
    <div className="template-page">
      {previewDrafts ? (
        <Suspense fallback={<PageBuilder blocks={data?.blocks} />}>
          <PreviewProvider token={token}>
            <PageBuilder data={sanityData} slug={slug} />
          </PreviewProvider>
        </Suspense>
      ) : (
        <PageBuilder data={data?.blocks} />
      )}
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
