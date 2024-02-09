import React from "react";
import { Link } from "gatsby";

import { renderLinks } from "../utils/helpers";

const HeaderNavigation = ({ data }) => {
  return (
    <nav className="navigation menu">
      <ul>{renderLinks(data?.menu?.links)}</ul>

      <Link className="btn" to={data?.menu?.button?.url}>
        {data?.menu?.button?.title}
      </Link>
    </nav>
  );
};

export default HeaderNavigation;
