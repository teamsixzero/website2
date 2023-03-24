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
    [BLOCKS.HEADING_2]: (node, children) => (
      <h1 className="h2">{addColour(children)}</h1>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <h1 className="h3">{addColour(children)}</h1>
    ),
    [BLOCKS.HEADING_4]: (node, children) => (
      <h1 className="h4">{addColour(children)}</h1>
    ),
    [BLOCKS.HEADING_5]: (node, children) => (
      <h1 className="h5">{addColour(children)}</h1>
    ),
    [BLOCKS.HEADING_6]: (node, children) => (
      <h1 className="h6">{addColour(children)}</h1>
    ),
  },
};

const PageTitle = ({ data }) => {
  const { content } = data;

  return (
    <div className="block-page-title">
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
