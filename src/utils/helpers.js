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

export const replaceParenthesesWords = (str, restProps = {}) => {
  const regex = /(\([\w\s]+\))/g; // Matches words wrapped in parentheses
  const splitWords = str.split(regex);

  return splitWords.map((word) => {
    if (word.match(regex)) {
      // Matched word is wrapped in parentheses
      return (
        <span className="highlight" {...restProps}>
          {word.slice(1, -1)}
        </span>
      );
    }
    // Word is not wrapped in parentheses
    return word;
  });
};

export const replaceWordsWithColours = (str, restProps = {}) => {
  const regex = /(\(.*?\)\[.*?\])/g; // Matches words wrapped in parentheses and square brackets

  if (str?.match(regex)) {
    const splitWords = str?.split(regex);

    return splitWords.map((word) => {
      if (word.match(regex)) {
        const content = word.split(/\[|\]/); //split word by square brackets

        return (
          <span {...restProps} style={{ color: content[1] }}>
            {content[0].slice(1, -1)}
          </span>
        );
      }

      return word;
    });
  }

  return str;
};

export const addColour = (children = []) => {
  const mappedChildren = children.flatMap((child) => {
    if (typeof child === "string") {
      return replaceWordsWithColours(child);
    }

    if (typeof child === "object") {
      const { content, className } = child.props;

      return replaceWordsWithColours(content, { className });
    }

    return child;
  });

  return mappedChildren;
};

export const addHighlight = (children = []) => {
  const mappedChildren = children.flatMap((child) => {
    if (typeof child === "string") {
      return replaceParenthesesWords(child);
    }

    if (typeof child === "object") {
      const { content, className } = child.props;
      return replaceParenthesesWords(content, { className });
    }

    return child;
  });

  return mappedChildren;
};
