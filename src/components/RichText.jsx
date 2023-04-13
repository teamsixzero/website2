import React from "react";
import { PortableText } from "@portabletext/react";

import * as PT from "../components/portableText";

const defaultPortableTextComponents = {
  types: {
    altImage: PT.Image,
    image: PT.Image,
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
    h1: ({ children }) => <h2 className="h1">{children}</h2>,
    h2: ({ children }) => <h2>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
    h4: ({ children }) => <h4>{children}</h4>,
    h5: ({ children }) => <h5>{children}</h5>,
    h6: ({ children }) => <h6>{children}</h6>,
    normal: ({ children }) => {
      if (!children[0]) return <></>;
      return <p className="text-normal">{children}</p>;
    },
    blockquote: PT.Quote,
  },
  list: {
    bullet: ({ children }) => <ul>{children}</ul>,
    number: ({ children }) => <ol>{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => (
      <li style={{ listStyleType: "disc" }}>{children}</li>
    ),
    number: ({ children }) => (
      <li style={{ listStyleType: "decimal" }}>{children}</li>
    ),
  },
};

const RichText = ({ content, options }) => {
  return (
    <div className="rich-text">
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
