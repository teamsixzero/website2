import React, { useState, useEffect, lazy, Suspense } from "react";
import { Slice } from "gatsby";

import useSanitySettings from "../hooks/useSanitySettings";

import { token, sanityFetch } from "../utils/sanity";
import { headerQuery } from "../utils/groq";

const previewDrafts = process.env.GATSBY_SANITY_API_PREVIEW_DRAFTS === "true";

const PreviewProvider = lazy(() => import("../provider/PreviewProvider"));

const Mobile = () => {
  const { menu } = useSanitySettings();
  const [sanityData, setSanityData] = useState(null);

  useEffect(() => {
    if (!previewDrafts) return;

    const fetchSanityData = async () => {
      const data = await sanityFetch(previewDrafts, headerQuery);
      setSanityData(data);
    };

    fetchSanityData();
  }, []);

  return (
    <>
      {previewDrafts ? (
        <Suspense
          fallback={
            <Slice
              alias="navigation-mobile"
              data={{ menu }}
              query={headerQuery}
            />
          }
        >
          <PreviewProvider token={token}>
            <Slice
              alias="navigation-mobile"
              data={sanityData}
              query={headerQuery}
            />
          </PreviewProvider>
        </Suspense>
      ) : (
        <>
          <Slice
            alias="navigation-mobile"
            data={{ menu }}
            query={headerQuery}
          />
        </>
      )}
    </>
  );
};

export default Mobile;
