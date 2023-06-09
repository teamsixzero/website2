import React from "react";

const TextColor = ({ children, value }) => {
  const { reference } = value;
  return (
    <span
      className="portable-text-color"
      style={{ color: reference?.value?.hex }}
    >
      {children}
    </span>
  );
};

export default TextColor;
