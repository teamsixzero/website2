import React from "react";
import { LiveQueryProvider } from "@sanity/preview-kit";

import { getSanityClient } from "../utils/sanity";

const SanityPreview = ({ token, children }) => {
  if (!token) throw new TypeError("Missing token");

  const client = getSanityClient({ preview: true });
  return (
    <LiveQueryProvider client={client} token={token}>
      {children}
    </LiveQueryProvider>
  );
};

export default SanityPreview;
