import React from "react";

import SanityPreviewConnector from "./src/provider/SanityPreviewConnector";
import { PreviewProvider } from "./src/context/PreviewContext";

import RootElement from "./root-element";
import PageElement from "./page-element";

import { sanityConfig } from "./src/utils/sanity";

import "./src/styles/main.scss";

export const wrapRootElement = ({ element }) => (
  <PreviewProvider>
    <SanityPreviewConnector token={sanityConfig.token}>
      <RootElement element={element} />
    </SanityPreviewConnector>
  </PreviewProvider>
);
export const wrapPageElement = PageElement;

export const onRouteUpdate = () => {
  const mainEl = document?.querySelector(".main");
  if (mainEl?.scrollTop) {
    mainEl.scrollTop = 0;
  }

  if (process.env.NODE_ENV !== "production") {
    return null;
  }

  let pagePath;
  if (typeof window !== "undefined") {
    pagePath = window.location
      ? window.location.pathname + window.location.search + window.location.hash
      : undefined;
  }

  setTimeout(() => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", { page_path: pagePath });
    }
  }, 100);

  return true;
};
