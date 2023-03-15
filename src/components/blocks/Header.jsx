import React from "react";
import { graphql } from "gatsby";

import RichText from "../RichText";

const Header = ({ data }) => {
  const { content } = data;
  return <RichText content={content} />;
};

export default Header;

export const query = graphql`
  fragment BlockHeader on ContentfulBlockHeader {
    content {
      raw
    }
  }
`;
