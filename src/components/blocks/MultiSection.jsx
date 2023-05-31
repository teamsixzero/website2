import React from "react";
import { graphql } from "gatsby";

import Content from "./Content";
import MediaSection from "./MediaSection";
import OrderedList from "./OrderedList";

const MultiSection = ({ data }) => {
  const { blocks, backgroundColor } = data;

  const blocksBuilder = () => {
    const pageBlocks = [];

    blocks?.forEach((block) => {
      switch (block.__typename) {
        case "SanityContent":
          pageBlocks.push(<Content key={block._key} data={block} />);
          break;
        case "SanityMediaSection":
          pageBlocks.push(<MediaSection key={block._key} data={block} />);
          break;
        case "SanityOrderedList":
          pageBlocks.push(<OrderedList key={block._key} data={block} />);
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
