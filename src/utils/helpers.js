import React from "react";
import { v4 as uuidv4 } from "uuid";

export const replaceParenthesesWords = (str, restProps = {}) => {
  const regex = /(\(.*?\))/g; // Matches words wrapped in parentheses
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

export const replaceWordsWithColours = (str, restProps = {}, Node = `span`) => {
  const regex = /(\(.*?\)\[.*?\])/g; // Matches words wrapped in parentheses and square brackets

  if (str?.match(regex)) {
    const splitWords = str?.split(regex);

    return splitWords.map((word) => {
      if (word.match(regex)) {
        const content = word.split(/\[|\]/); //split word by square brackets

        return (
          <Node key={uuidv4()} {...restProps} style={{ color: content[1] }}>
            {content[0].slice(1, -1)}
          </Node>
        );
      }

      return (
        <Node key={uuidv4()} {...restProps}>
          {word}
        </Node>
      );
    });
  }

  return (
    <Node key={uuidv4()} {...restProps}>
      {str}
    </Node>
  );
};

export const addColour = (children = []) =>
  children.flatMap((child) => {
    if (typeof child === "string") return replaceWordsWithColours(child);

    // objects/ <strong>/ <em> are too hard at the moment to figure out because of nested elements
    // if (typeof child === "object") {
    //   const { children: content, className, href, rel, target } = child.props;

    //   if (typeof content === "string") {
    //     return replaceWordsWithColours(
    //       content,
    //       {
    //         className,
    //         href,
    //         rel,
    //         target,
    //       },
    //       child?.type
    //     );
    //   }

    //   return replaceWordsWithColours(
    //     content[0],
    //     {
    //       className,
    //       href,
    //       rel,
    //       target,
    //     },
    //     child?.type
    //   );
    // }

    return child;
  });

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
