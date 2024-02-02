import React from "react";
import { LiveQueryProvider } from "@sanity/preview-kit";
import { client } from "../utils/sanity";

const PreviewProvider = ({ children, token }) => {
  if (!token) throw new TypeError("Missing token");

  return (
    <LiveQueryProvider client={client} token={token}>
      {children}
    </LiveQueryProvider>
  );
};

export default PreviewProvider;
