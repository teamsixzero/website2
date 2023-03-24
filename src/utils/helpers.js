import React from "react";

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
