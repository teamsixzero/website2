import React from "react";

const Link = ({ children, value }) => {
  const target = (value?.href || "").startsWith("http") ? "_blank" : undefined;

  return (
    <a
      className="portable-text-link"
      href={value?.href}
      target={target}
      rel={target === "_blank" && "noindex nofollow"}
    >
      {children}
    </a>
  );
};

export default Link;
