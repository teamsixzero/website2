import React from "react";
import { graphql } from "gatsby";
import { v4 as uuidv4 } from "uuid";

import Content from "./Content";
import MediaSection from "./MediaSection";
import OrderedList from "./OrderedList";

const MultiSection = ({ data }) => {
  const { blocks, backgroundColor } = data;

  const blocksBuilder = () => {
    const pageBlocks = [];

    blocks?.forEach((block) => {
      if (!block || Object.keys(block).length === 0) return;

      const blockName =
        block?.__typename.replace(`Sanity`, ``).charAt(0).toLowerCase() +
        block?.__typename.replace(`Sanity`, ``).slice(1);

      const blockKey = `block-${blockName}-${uuidv4()}`;

      switch (block.__typename) {
        case "SanityContent":
        case "content":
          pageBlocks.push(<Content key={blockKey} data={block} />);
          break;
        case "SanityMediaSection":
        case "mediaSection":
          pageBlocks.push(<MediaSection key={blockKey} data={block} />);
          break;
        case "SanityOrderedList":
        case "orderedList":
          pageBlocks.push(<OrderedList key={blockKey} data={block} />);
          break;
        default:
          pageBlocks.push(null);
          break;
      }
    });

    return pageBlocks;
  };

  return (
    <article
      className={`block-multi-section ${
        backgroundColor?.value?.hex ? `has-background` : ``
      }`}
      style={{ backgroundColor: backgroundColor?.value?.hex }}
    >
      <div className="block-multi-section__wrapper">{blocksBuilder()}</div>
    </article>
  );
};

export default MultiSection;

export const query = graphql`
  fragment BlockMultiSection on SanityMultiSection {
    blocks {
      __typename

      ...BlockContent
      ...BlockMediaSection
      ...BlockOrderedList
    }
    backgroundColor {
      value {
        hex
      }
    }
  }
`;
