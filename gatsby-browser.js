import "./src/styles/main.scss";
import RootElement from "./root-element";
import PageElement from "./page-element";

export const wrapRootElement = RootElement;
export const wrapPageElement = PageElement;

export const onRouteUpdate = () => {
  const mainEl = document?.querySelector(".main");
  if (mainEl?.scrollTop) {
    mainEl.scrollTop = 0;
  }
};
