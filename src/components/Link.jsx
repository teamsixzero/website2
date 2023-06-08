import React from "react";
import { Link as GatsbyLink } from "gatsby";

const Link = ({ className, to, children, onClick, style }) => {
  const regex = /^(http|https|mailto|tel):/;
  const isExternal = regex.test(to);

  if (isExternal)
    return (
      <a
        href={to}
        target="_blank"
        rel="noreferrer"
        className={className}
        onClick={onClick}
        style={style}
      >
        {children}
      </a>
    );

  return (
    <GatsbyLink to={to} onClick={onClick} className={className} style={style}>
      {children}
    </GatsbyLink>
  );
};

export default Link;
