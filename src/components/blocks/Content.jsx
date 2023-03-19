import React from "react";
import { graphql } from "gatsby";

import RichText from "../RichText";

const Content = ({ data }) => {
  const { text } = data;
  return (
    <div className="block-content">
      <RichText content={text} />
    </div>
  );
};

export default Content;

export const query = graphql`
  fragment BlockContent on ContentfulBlockContent {
    text {
      raw
    }
  }
`;
