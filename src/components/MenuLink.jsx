import React from "react";

import useApp from "../hooks/useApp";
import Link from "../components/Link";

const MenuLink = ({ link, dropdown }) => {
  const { closeMenu } = useApp();
  const textClass = dropdown ? "text-normal" : "accent";

  return (
    <Link to={link.url} onClick={closeMenu} className={`link ${textClass}`}>
      {link.title}
    </Link>
  );
};

export default MenuLink;
