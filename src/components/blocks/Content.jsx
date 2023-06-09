import React from "react";
import { graphql } from "gatsby";

import RichText from "../RichText";

const Content = ({ data }) => {
  const { text, textColor, backgroundColor } = data;
  return (
    <div
      className={`block-content ${
        backgroundColor?.value?.hex ? `has-background` : ``
      }`}
      style={{
        color: textColor?.value?.hex,
        backgroundColor: backgroundColor?.value?.hex,
      }}
    >
      <div className="block-content__wrapper">
        <RichText content={text} />
      </div>
    </div>
  );
};

export default Content;

export const query = graphql`
  fragment BlockContent on SanityContent {
    text: _rawText(resolveReferences: { maxDepth: 10 })
    textColor {
      value {
        hex
      }
    }
    backgroundColor {
      value {
        hex
      }
    }
  }
`;
