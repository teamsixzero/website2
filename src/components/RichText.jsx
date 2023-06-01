import React from "react";
import { PortableText } from "@portabletext/react";

import * as PT from "../components/portableText";
import SanityImage from "../components/SanityImage";

const defaultPortableTextComponents = {
  types: {
    altImage: ({ value }) => <SanityImage src={value} width={800} />,
    image: ({ value }) => <SanityImage src={value} width={800} />,
    button: PT.Button,
  },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    underline: ({ children }) => <u>{children}</u>,
    link: PT.Link,
    textColor: PT.TextColor,
    highlightColor: PT.Highlight,
  },
  block: {
    small: ({ children }) => <p className="accent">{children}</p>,
    title: ({ children }) => <h1>{children}</h1>,
    h1: ({ children }) => <h2 className="h1">{children}</h2>,
    h2: ({ children }) => <h2>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
    h4: ({ children }) => <h4 style={{ margin: `1.75rem 0` }}>{children}</h4>,
    h5: ({ children }) => <h5>{children}</h5>,
    h6: ({ children }) => <h6>{children}</h6>,
    normal: ({ children }) => {
      if (!children[0]) return <></>;
      return <p className="text-normal">{children}</p>;
    },
    blockquote: PT.Quote,
  },
  list: {
    bullet: ({ children }) => <ul className="text-normal">{children}</ul>,
    number: ({ children }) => <ol className="text-normal">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => (
      <li
        className="text-normal"
        style={{ listStyleType: "disc", marginLeft: "2ch" }}
      >
        {children}
      </li>
    ),
    number: ({ children }) => (
      <li
        className="text-normal"
        style={{ listStyleType: "decimal", marginLeft: "2ch" }}
      >
        {children}
      </li>
    ),
  },
};

const RichText = ({ content, options, className }) => {
  return (
    <div className={`rich-text ${className ? className : ``}`}>
      <PortableText
        value={content}
        components={options || defaultPortableTextComponents}
        onMissingComponent={(message, options) => {
          throw new Error(message, {
            // eg `someUnknownType`
            type: options.type,

            // 'block' | 'mark' | 'blockStyle' | 'listStyle' | 'listItemStyle'
            nodeType: options.nodeType,
          });
        }}
      />
    </div>
  );
};

export default RichText;
