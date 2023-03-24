import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Image = ({ src, alt, className }) => {
  const image = getImage(src);

  return (
    <div className={`gatsby-image${className ? ` ${className}` : ``}`}>
      <GatsbyImage image={image} alt={alt} title={alt} />
    </div>
  );
};

export default Image;
