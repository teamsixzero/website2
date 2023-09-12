import React, {
  useState,
  useEffect,
  lazy,
  useDeferredValue,
  Suspense,
} from "react";
import { graphql } from "gatsby";
import { useLiveQuery } from "@sanity/preview-kit";

import Media from "../../components/Media";
import RichText from "../../components/RichText";
import Seo from "../../components/Seo";

import { token, sanityFetch } from "../../utils/sanity";
import { blogQuery } from "../../utils/groq";

const previewDrafts = process.env.GATSBY_SANITY_API_PREVIEW_DRAFTS === "true";

const PreviewProvider = lazy(() => import("../../provider/PreviewProvider"));

const BlogTemplate = ({ location, data }) => {
  const slug = location.pathname.replace("/blog/", "").split("/")[0];

  const [sanityData, setSanityData] = useState(null);

  useEffect(() => {
    if (!previewDrafts) return;

    const fetchSanityData = async () => {
      const data = await sanityFetch(previewDrafts, blogQuery, {
        slug,
      });
      setSanityData(data);
    };

    fetchSanityData();
  }, [slug]);

  return (
    <div className="template-blog">
      {previewDrafts ? (
        <>
          <Suspense fallback={<BlogContent data={data} slug={slug} />}>
            <PreviewProvider token={token}>
              <BlogContent data={sanityData} slug={slug} />
            </PreviewProvider>
          </Suspense>
        </>
      ) : (
        <>
          <BlogContent data={data} slug={slug} />
        </>
      )}
    </div>
  );
};

export default BlogTemplate;

export function Head({ location, data: { sanityBlog: data } }) {
  return (
    <Seo>
      <title id="title">{data?.seo?.title || data?.title} | Sixzero</title>;
      <meta
        id="og:title"
        property="og:title"
        content={`${data?.seo?.title || data?.title} | Sixzero`}
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
    sanityBlog(id: { eq: $id }) {
      title
      date(formatString: "MMMM D, YYYY")
      summary
      featureMedia {
        type
        image {
          ...ImageWithPreview
          asset {
            metadata {
              dimensions {
                width
                height
              }
            }
          }
          alt
          mobile {
            asset {
              _id
              metadata {
                dimensions {
                  width
                  height
                }
              }
            }
          }
        }
        video {
          src
          poster {
            asset {
              url
            }
          }
          isIframe
          autoplay
          loop
          controls
          muted
        }
      }
      content: _rawContent(resolveReferences: { maxDepth: 10 })
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

const BlogContent = ({ data: initialData = null, slug }) => {
  console.log(`initialData`, initialData);
  const [snapshot] = useLiveQuery(initialData, blogQuery, { slug });
  const data = useDeferredValue(snapshot);

  return (
    <>
      <header className="template-blog__heading">
        <h1 className="h2">{data?.title}</h1>
        <p className="text-book text-grey-normal">
          Published <time dateTime={data?.date}>{data?.date}</time>
        </p>
      </header>

      <Media media={data?.featureMedia} />

      <section className="template-blog__content">
        <RichText content={data?.content} />
      </section>
    </>
  );
};
