import React from "react";
import { graphql } from "gatsby";

import RichText from "../RichText";

const PageTitle = ({ data }) => {
  const { content } = data;

  return (
    <div>
      <RichText content={content} />
    </div>
  );
};

export default PageTitle;

export const query = graphql`
  fragment BlockPageTitle on ContentfulBlockPageTitle {
    id
    content {
      raw
    }
  }
`;
