import React from "react";
import { Link } from "gatsby";

import { renderLinks } from "../utils/helpers";

const HeaderNavigation = ({ data }) => {
  return (
    <nav className="navigation menu">
      <ul>{renderLinks(data?.menu?.links)}</ul>

      <Link className="btn btn-header" to={data?.menu?.button?.url}>
        <span>{data?.menu?.button?.title}</span>
      </Link>
    </nav>
  );
};

export default HeaderNavigation;
