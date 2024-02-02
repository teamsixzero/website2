import React, { useDeferredValue } from "react";
import { useLiveQuery } from "@sanity/preview-kit";

import { renderLinks } from "../utils/helpers";

const MobileNavigation = ({ data: initialData = null, query }) => {
  const [snapshot] = useLiveQuery(initialData, query);
  const data = useDeferredValue(snapshot);

  const links = [...(data?.menu?.links || [])];

  links?.unshift({
    url: "/",
    title: "Home",
  });

  links?.push({
    url: data?.menu?.button?.url,
    title: data?.menu?.button?.title,
  });

  return (
    <nav className={`navigation mobile-menu`}>
      <ul>{renderLinks(links)}</ul>
    </nav>
  );
};

export default MobileNavigation;
