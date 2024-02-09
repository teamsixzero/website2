import React, { lazy, useContext, Suspense } from "react";

import { PreviewContext } from "../context/PreviewContext";
const SanityPreview = lazy(() => import("./SanityPreview"));

const SanityPreviewConnector = ({ children, token }) => {
  const { activePreview } = useContext(PreviewContext);

  return (
    <>
      {activePreview ? (
        <Suspense fallback={children}>
          <SanityPreview token={token}>{children}</SanityPreview>
        </Suspense>
      ) : (
        children
      )}
    </>
  );
};

export default SanityPreviewConnector;
