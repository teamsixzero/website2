import React from "react";

import { renderLinks } from "../utils/helpers";

const FooterNavigation = ({ data }) => {
  return (
    <nav className="navigation menu">
      <ul>{renderLinks(data?.footer?.links)}</ul>
    </nav>
  );
};

export default FooterNavigation;
