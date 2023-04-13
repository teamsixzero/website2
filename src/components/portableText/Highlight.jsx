import React from "react";

const Highlight = ({ children, value }) => {
  const { reference } = value;
  return (
    <span
      className="portable-text-highlight"
      style={{ backgroundColor: reference?.value?.hex }}
    >
      {children}
    </span>
  );
};

export default Highlight;
