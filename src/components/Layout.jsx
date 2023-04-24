import React from "react";
import { Script } from "gatsby";

import { useSanitySettings } from "../hooks/useSanitySettings";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const { menu, scripts } = useSanitySettings();

  return (
    <>
      {scripts?.length > 0 &&
        scripts.map((script) => (
          <Script key={script?._key} id={script?._key}>
            {script?.value}
          </Script>
        ))}

      <Header links={menu?.links} />
      <main className="main">{children}</main>
      <Footer links={menu?.links} />
    </>
  );
};

export default Layout;
