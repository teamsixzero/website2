import React, { useDeferredValue } from "react";
import { useLiveQuery } from "@sanity/preview-kit";

import { renderLinks } from "../utils/helpers";

const FooterNavigation = ({ data: initialData = null, query }) => {
  const [snapshot] = useLiveQuery(initialData, query);
  const data = useDeferredValue(snapshot);

  return (
    <nav className="navigation menu">
      <ul>{renderLinks(data?.footer?.links)}</ul>
    </nav>
  );
};

export default FooterNavigation;
