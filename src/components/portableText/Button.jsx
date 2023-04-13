import React from "react";

const Button = ({ value }) => {
  const { link, text } = value;

  return (
    <a className="btn" href={link} target="_blank" rel="noreferrer">
      {text}
    </a>
  );
};

export default Button;
