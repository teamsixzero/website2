import React from "react";
import { v4 as uuidv4 } from "uuid";

import MenuLink from "../components/MenuLink";

export const replaceParenthesesWords = (str, restProps = {}) => {
  const regex = /(\([\s\S]*?\))/g; // Matches words wrapped in parentheses
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
  const regex = /(\([\s\S]*?\)\[[\s\S]*?\])/g; // Matches words wrapped in parentheses and square brackets

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

export const toCamelCase = (str) => {
  const regex = /[^a-zA-Z0-9]+(.)/g;
  str = str.toLowerCase();
  return str.replace(regex, (_, character) => character.toUpperCase());
};

export const renderLinks = (links = []) => {
  if (links?.length === 0) return null;

  return links?.map((link) => {
    if (link?._type?.toLowerCase()?.includes(`linkgroup`))
      return (
        <li className="has-dropdown" key={`${link?._key}-${uuidv4()}`}>
          {link?.url ? (
            <MenuLink link={link} />
          ) : (
            <p className="accent">{link?.title}</p>
          )}

          <nav className="dropdown">
            <div />
            <ul>
              {link?.links?.length > 0 &&
                link?.links?.map((sublink) => (
                  <li key={sublink?._key}>
                    <MenuLink link={sublink} dropdown />
                  </li>
                ))}
            </ul>
          </nav>
        </li>
      );

    return (
      <li key={`${link?._key}-${uuidv4()}`}>
        <MenuLink link={link} />
      </li>
    );
  });
};

export const isEmpty = (obj) => {
  if (obj === null || obj === undefined) {
    return true;
  }
  
  for (let key in obj) {
    if (obj[key] !== null && obj[key] !== undefined) {
      if (Array.isArray(obj[key]) && obj[key].length > 0) {
        return false;
      } else if (!Array.isArray(obj[key]) && obj[key] !== "") {
        return false;
      }
    }
  }
  return true;
};
