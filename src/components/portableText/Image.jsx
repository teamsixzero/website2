import React from "react";
import SanityImage from "gatsby-plugin-sanity-image";

const Image = ({ value }) => {
  return (
    <SanityImage
      className="portable-text-image"
      asset={value?.asset}
      alt={value?.altText}
      width={800}
      sizes="(max-width: 800px) 75vw, 50vw, 800px"
    />
  );
};

export default Image;
