import React, { useState, useEffect, lazy, Suspense } from "react";
import { Slice } from "gatsby";

import useSanitySettings from "../hooks/useSanitySettings";

import Link from "./Link";

import { token, sanityFetch } from "../utils/sanity";
import { footerQuery } from "../utils/groq";

const previewDrafts = process.env.GATSBY_SANITY_API_PREVIEW_DRAFTS === "true";

const PreviewProvider = lazy(() => import("../provider/PreviewProvider"));

const Footer = () => {
  const { footer } = useSanitySettings();
  const [sanityData, setSanityData] = useState(null);

  useEffect(() => {
    if (!previewDrafts) return;

    const fetchSanityData = async () => {
      const data = await sanityFetch(previewDrafts, footerQuery);
      setSanityData(data);
    };

    fetchSanityData();
  }, []);

  return (
    <footer className="footer">
      {previewDrafts ? (
        <Suspense
          fallback={<Slice alias="navigation" data={footer} type="footer" />}
        >
          <PreviewProvider token={token}>
            <Slice
              alias="navigation"
              data={sanityData}
              type="footer"
              query={footerQuery}
            />
          </PreviewProvider>
        </Suspense>
      ) : (
        <Slice alias="navigation" data={footer} type="footer" />
      )}

      <p className="footnote">
        <span>© {new Date().getFullYear()} Sixzero</span>

        {footer?.email && (
          <>
            <span> - </span>
            <Link to={footer?.email}>
              {footer?.email?.replace("mailto:", "")}
            </Link>
          </>
        )}
      </p>
    </footer>
  );
};

export default Footer;
