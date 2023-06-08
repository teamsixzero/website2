import React from "react";

import Link from "../Link";

const Button = ({ value }) => {
  const { link, text } = value;

  return (
    <Link className="btn" to={link}>
      <span>{text}</span>
    </Link>
  );
};

export default Button;
