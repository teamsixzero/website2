import React from "react";
import { graphql } from "gatsby";
import { BLOCKS } from "@contentful/rich-text-types";

import RichText from "../RichText";

import { addColour } from "../../utils/helpers";

const options = {
  renderNode: {
    [BLOCKS.HEADING_1]: (node, children) => (
      <h1 className="h1">{addColour(children)}</h1>
    ),
  },
};

const PageTitle = ({ data }) => {
  const { content } = data;

  return (
    <div>
      <RichText content={content} options={options} />
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
