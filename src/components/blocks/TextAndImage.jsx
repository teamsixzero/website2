import React from "react";
import { graphql } from "gatsby";

import SanityImage from "../SanityImage";
import RichText from "../RichText";

const TextAndImage = ({ data }) => {
  const { text, image, align, backgroundColor } = data;

  let fullBleed;
  let imageAlignClass;

  switch (align) {
    case "Right":
      imageAlignClass = "align-right";
      break;

    case "Right (Full Bleed)":
      fullBleed = "full-bleed right";
      imageAlignClass = "align-right full-bleed";
      break;

    case "Left (Full Bleed)":
      fullBleed = "full-bleed left";
      imageAlignClass = "align-left full-bleed";
      break;

    case "Left":
    default:
      imageAlignClass = "align-left";
      break;
  }

  return (
    <div
      className={`block-text-and-image${
        backgroundColor?.value?.hex ? " has-background" : ""
      }${fullBleed ? ` ${fullBleed}` : ""}`}
      style={{ backgroundColor: backgroundColor?.value?.hex }}
    >
      <header>
        <RichText content={text} />
      </header>

      <SanityImage
        className={`block-text-and-image__image ${imageAlignClass} ${
          image?.backgroundColor?.value?.hex ? "has-background" : ""
        }`}
        style={{ backgroundColor: image?.backgroundColor?.value?.hex }}
        src={image?.source}
      />
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
