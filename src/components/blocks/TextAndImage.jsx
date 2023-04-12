import React from "react";
import { graphql } from "gatsby";

import Image from "../Image";
import RichText from "../RichText";

const TextAndImage = ({ data }) => {
  const { text, image, align, backgroundColor } = data;

  return (
    <div
      className={`block-text-and-image ${
        backgroundColor?.value?.hex ? "has-background" : ""
      }`}
      style={{ backgroundColor: backgroundColor?.value?.hex }}
    >
      <header>
        <RichText content={text} />
      </header>

      <figure className={`align-${align.toLowerCase()}`}>
        <Image src={image?.source?.asset} alt={image?.source?.alt} />
      </figure>
    </div>
  );
};

export default TextAndImage;

export const query = graphql`
  fragment BlockTextAndImage on SanityTextAndImage {
    text: _rawText(resolveReferences: { maxDepth: 10 })
    image {
      source {
        asset {
          gatsbyImageData(
            width: 1440
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
        alt
      }
    }
    align
    backgroundColor {
      value {
        hex
      }
    }
  }
`;
