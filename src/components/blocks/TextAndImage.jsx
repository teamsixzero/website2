import React from "react";
import { graphql } from "gatsby";

import Image from "../Image";

const TextAndImage = ({ data }) => {
  const { title, text, image, hasBackground, imageAlign } = data;

  return (
    <div
      className={`block-text-and-image${
        hasBackground ? ` has-background` : ``
      }`}
    >
      <header>
        <h2 className="h4">{title}</h2>
        <p className="text-normal">{text?.content}</p>
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
    title
    text {
      content: text
    }
    image {
      title
      gatsbyImageData(
        quality: 100
        width: 1440
        placeholder: BLURRED
        formats: [AUTO, WEBP, AVIF]
      )
    }
    hasBackground
    imageAlign
  }
`;
