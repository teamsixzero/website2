import React from "react";

import { useSanitySettings } from "../hooks/useSanitySettings";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const { menu } = useSanitySettings();

  return (
    <>
      <Header links={menu?.links} />
      <main className="main">{children}</main>
      <Footer links={menu?.links} />
    </>
  );
};

export default Layout;
