import React from "react";

import { renderLinks } from "../utils/helpers";

const MobileNavigation = ({ data }) => {
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
