import React, { useState, useEffect, lazy, Suspense } from "react";
import { Slice } from "gatsby";

import useSanitySettings from "../hooks/useSanitySettings";

import Link from "./Link";

import { token, sanityFetch } from "../utils/sanity";
import { headerQuery } from "../utils/groq";

const previewDrafts = process.env.GATSBY_SANITY_API_PREVIEW_DRAFTS === "true";

const PreviewProvider = lazy(() => import("../provider/PreviewProvider"));

const Header = () => {
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
    <header className="header">
      <Link className="logo" to="/">
        <img
          src="/images/sixzero-logo-dark.svg"
          alt="Sixzero logo"
          width="152"
          height="24"
        />
      </Link>

      {previewDrafts ? (
        <Suspense
          fallback={
            <Slice
              alias="navigation-header"
              data={{ menu }}
              query={headerQuery}
            />
          }
        >
          <PreviewProvider token={token}>
            <Slice
              alias="navigation-header"
              data={sanityData}
              query={headerQuery}
            />
          </PreviewProvider>
        </Suspense>
      ) : (
        <Slice alias="navigation-header" data={{ menu }} query={headerQuery} />
      )}
    </header>
  );
};

export default Header;
