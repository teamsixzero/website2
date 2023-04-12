import React from "react";
import { graphql } from "gatsby";

import RichText from "../RichText";

const Header = ({ data }) => {
  const { content } = data;
  return (
    <div className="block-header">
      <RichText content={content} />
    </div>
  );
};

export default Header;

export const query = graphql`
  fragment BlockHeader on SanityHeader {
    content: _rawContent
  }
`;
