import React, { useDeferredValue } from "react";
import { Link } from "gatsby";
import { useLiveQuery } from "@sanity/preview-kit";

import { renderLinks } from "../utils/helpers";

const HeaderNavigation = ({ data: initialData = null, query }) => {
  const [snapshot] = useLiveQuery(initialData, query);
  const data = useDeferredValue(snapshot);

  return (
    <nav className="navigation menu">
      <ul>{renderLinks(data?.menu?.links)}</ul>

      <Link className="btn" to={data?.menu?.button?.url}>{data?.menu?.button?.title}</Link>
    </nav>
  );
};

export default HeaderNavigation;
