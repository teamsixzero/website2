import React from "react";
import { graphql } from "gatsby";

import Image from "../Image";
import RichText from "../RichText";

const TextAndImage = ({ data }) => {
  const { text, image, hasBackground, imageAlign } = data;

  return (
    <div
      className={`block-text-and-image${
        hasBackground ? ` has-background` : ``
      }`}
    >
      <header>
        <RichText content={text} />
      </header>

      <figure className={`align-${imageAlign.toLowerCase()}`}>
        <Image src={image} alt={image?.title} />
      </figure>
    </div>
  );
};

export default TextAndImage;

export const query = graphql`
  fragment BlockTextAndImage on ContentfulBlockTextAndImage {
    id
    text {
      raw
    }
    image {
      gatsbyImageData(
        quality: 100
        width: 1440
        placeholder: BLURRED
        formats: [AUTO, WEBP, AVIF]
      )
      title
    }
    imageAlign
    hasBackground
  }
`;
