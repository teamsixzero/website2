import React from "react";
import { Script } from "gatsby";

import useApp from "../hooks/useApp";
import useSanitySettings from "../hooks/useSanitySettings";

import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./Navigation";
import MenuToggle from "./MenuToggle";

const Layout = ({ children }) => {
  const { menuActive } = useApp();
  const { scripts, menu } = useSanitySettings();

  return (
    <>
      {scripts?.length > 0 &&
        scripts.map((script) => {
          switch (script?.__typename) {
            case "SanityScriptSrc":
              return (
                <Script
                  key={script?._key}
                  id={script?._key}
                  src={script?.value}
                />
              );

            case "SanityScriptInline":
              return (
                <Script key={script?._key} id={script?._key}>
                  {script?.value}
                </Script>
              );

            default:
              return null;
          }
        })}

      <MenuToggle />

      <Navigation className="mobile-menu" links={menu?.links} />

      <div className={`body-content${menuActive ? ` active` : ``}`}>
        <Header />
        <main className="main">
          <>{children}</>
          <Footer />
        </main>
      </div>
    </>
  );
};

export default Layout;
