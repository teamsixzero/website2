import React from "react";
import { v4 as uuidv4 } from "uuid";
import * as BlockComponents from "../components/blocks";

export const blockBuilder = (blocks) => {
  const pageBlocks = [];

  blocks?.forEach((block) => {
    if (Object.keys(block).length === 0) return;

    const blockName = block?.__typename.replace(`ContentfulBlock`, ``);
    const blockKey = `block-${blockName}-${uuidv4()}`;

    const Block = BlockComponents?.[blockName];

    if (!Block) {
      pageBlocks.push(<React.Fragment key={blockKey} />);
    }

    pageBlocks.push(
      <section id={blockKey} key={blockKey}>
        <Block data={block} />
      </section>
    );
  });

  return pageBlocks;
};

export const createSpanFromMatches = (matches, text, restProps = {}) => {
  const content = text.split(`${matches[0]}[${matches[2]}]`);
  return [...new Set(content)] // get the unique values / avoid ["", ""] - when there are no other parts of text
    .map((text) =>
      text === "" ? ( // map over the unique values to replace that which was split
        <span {...restProps} style={{ color: `${matches[2]}` }}>
          {matches[1]}
        </span> // return the element with the colour
      ) : (
        text
      )
    ); // or return the text
};

export const addColour = (children = []) => {
  // flatMap returns a flattened array
  const mappedChildren = children.flatMap((child) => {
    if (typeof child === "string") {
      // the regex that handles parsing the actual string and extracting the text
      const matches = child.match(/\((.+)\)(?=\[(#\w+)\])/);
      if (matches) {
        return createSpanFromMatches(matches, child);
      }
    }
    if (typeof child === "object") {
      const content = child.props?.children;
      const className = child.props?.className;
      const matches =
        typeof content === "string" && content.match(/\((.+)\)(?=\[(#\w+)\])/);

      if (matches) {
        return createSpanFromMatches(matches, content, { className });
      }
    }
    // make sure to always return the content if there is no match to the regex
    return child;
  });
  return mappedChildren;
};
