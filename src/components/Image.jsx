import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Image = ({ src, alt }) => {
  const image = getImage(src);

  return <GatsbyImage image={image} alt={alt} />;
};

export default Image;
