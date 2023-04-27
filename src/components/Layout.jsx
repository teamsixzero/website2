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
  const { scripts } = useSanitySettings();

  return (
    <>
      {scripts?.length > 0 &&
        scripts.map((script) => (
          <Script key={script?._key} id={script?._key}>
            {script?.value}
          </Script>
        ))}

      <MenuToggle />

      <Navigation className="mobile-menu" />

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
