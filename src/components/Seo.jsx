import React from "react";

import useSanitySettings from "../hooks/useSanitySettings";

const Seo = ({ children }) => {
  const { seo } = useSanitySettings();

  return (
    <>
      {seo?.title && (
        <>
          <title id="title">{seo.title}</title>
          <meta id="og:title" property="og:title" content={seo.title} />
        </>
      )}
      {seo?.description && (
        <meta
          id="description"
          property="og:description"
          content={seo.description}
        />
      )}
      {seo?.keywords && (
        <meta id="keywords" name="keywords" content={seo.keywords} />
      )}
      {seo?.socialImage?.asset?.url && (
        <meta
          id="social-image"
          property="og:image"
          content={seo.socialImage.asset.url}
        />
      )}
      {seo?.favicon?.asset?.url && (
        <link id="favicon" rel="icon" href={seo.favicon.asset.url} />
      )}
      {children}
    </>
  );
};

export default Seo;
