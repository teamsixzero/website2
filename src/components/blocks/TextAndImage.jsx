import React from "react";
import { graphql } from "gatsby";

import SanityImage from "../SanityImage";
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

      <figure
        className={`block-text-and-image__figure align-${align.toLowerCase()} ${
          image?.backgroundColor?.value?.hex ? "has-background" : ""
        }`}
        style={{ backgroundColor: image?.backgroundColor?.value?.hex }}
      >
        <SanityImage src={image?.source} />
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
        ...ImageWithPreview
        alt
      }
      backgroundColor {
        value {
          hex
        }
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
