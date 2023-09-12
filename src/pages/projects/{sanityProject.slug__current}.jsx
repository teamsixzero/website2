import React, {
  useState,
  useEffect,
  Suspense,
  lazy,
  useDeferredValue,
} from "react";
import { graphql } from "gatsby";
import { useLiveQuery } from "@sanity/preview-kit";

import ProjectBuilder from "../../components/ProjectBuilder";
import Seo from "../../components/Seo";

import { token, sanityFetch } from "../../utils/sanity";
import { projectQuery } from "../../utils/groq";

const previewDrafts = process.env.GATSBY_SANITY_API_PREVIEW_DRAFTS === "true";

const PreviewProvider = lazy(() => import("../../provider/PreviewProvider"));

const ProjectTemplate = ({ location, data: { sanityProject: data } }) => {
  const slug = location.pathname.replace("/projects/", "").split("/")[0];

  const [sanityData, setSanityData] = useState(null);

  useEffect(() => {
    if (!previewDrafts) return;

    const fetchSanityData = async () => {
      const data = await sanityFetch(previewDrafts, projectQuery, {
        slug,
      });
      setSanityData(data);
    };

    fetchSanityData();
  }, [slug]);
  return (
    <div className="template-project">
      {previewDrafts ? (
        <Suspense fallback={<ProjectBuilder blocks={data?.blocks} />}>
          <PreviewProvider token={token}>
            <ProjectHeader data={sanityData} slug={slug} />
            <ProjectBuilder data={sanityData} slug={slug} />
          </PreviewProvider>
        </Suspense>
      ) : (
        <>
          <ProjectHeader data={data} slug={slug} />
          <ProjectBuilder data={data?.blocks} />
        </>
      )}
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

const ProjectHeader = ({ data: initialData = null, slug }) => {
  const [snapshot] = useLiveQuery(
    initialData,
    `*[_type == "project" && slug.current == $slug][0] {
    title,
    description,
}`,
    { slug }
  );
  const data = useDeferredValue(snapshot);

  return (
    <header className="project-header">
      <h1>{data?.title}</h1>
      {data?.description && (
        <p className="project-description h6">{data?.description}</p>
      )}
    </header>
  );
};
