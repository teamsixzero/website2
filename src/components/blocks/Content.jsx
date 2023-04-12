import React from "react";
import { graphql } from "gatsby";

import RichText from "../RichText";

const Content = ({ data }) => {
  const { text, hasBackground } = data;
  return (
    <div className={`block-content${hasBackground ? ` has-background` : ``}`}>
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
  }
`;
