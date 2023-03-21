import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Image = ({ src, alt }) => {
  const image = getImage(src);

  return (
    <div className="gatsby-image">
      <GatsbyImage image={image} alt={alt} title={alt} />
    </div>
  );
};

export default Image;
