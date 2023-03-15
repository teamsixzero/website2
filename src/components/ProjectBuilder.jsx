import React from "react";
import { graphql } from "gatsby";
import { v4 as uuidv4 } from "uuid";

import * as Blocks from "./blocks";

const ProjectBuilder = ({ blocks }) => {
  const b = [];

  blocks.forEach((block) => {
    if (Object.keys(block).length === 0) return;

    const blockName = block?.__typename.replace(`ContentfulBlock`, ``);
    const blockKey = `block-${blockName}-${uuidv4()}`;

    const Block = Blocks?.[blockName];

    if (!Block) {
      b.push(<React.Fragment key={blockKey} />);
    }

    b.push(
      <section id={blockKey} key={blockKey}>
        <Block data={block} />
      </section>
    );
  });

  return b;
};

export default ProjectBuilder;

export const query = graphql`
  fragment ProjectBuilder on ContentfulProject {
    blocks {
      __typename

      ...BlockImageFullWidth
      ...BlockProjectInfo
      ...BlockTextAndImage
    }
  }
`;
