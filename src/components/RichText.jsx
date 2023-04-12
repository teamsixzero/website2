import React from "react";
import { PortableText } from "@portabletext/react";

import * as PT from "../components/portableText";

// import Image from "./Image";

// import { addColour } from "../utils/helpers";

// const website_url = "https://sixzero.co";

const defaultPortableTextComponents = {
  types: {
    altImage: PT.Image,
    image: PT.Image,
  },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    underline: ({ children }) => <u>{children}</u>,
    link: ({ children, value }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;

      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" && "noindex nofollow"}
        >
          {children}
        </a>
      );
    },
    textColor: ({ children, value }) => {
      const { reference } = value;
      return <span style={{ color: reference?.value?.hex }}>{children}</span>;
    },
    highlightColor: ({ children, value }) => {
      const { reference } = value;
      return (
        <span style={{ backgroundColor: reference?.value?.hex }}>
          {children}
        </span>
      );
    },
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
    blockquote: ({ children }) => (
      <blockquote className="h5">{children}</blockquote>
    ),
  },
};

const RichText = ({ content, options }) => {
  return (
    <div className="rich-text">
      <PortableText
        value={content}
        components={options || defaultPortableTextComponents}
      />
    </div>
  );
};

export default RichText;
