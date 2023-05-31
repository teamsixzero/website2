import React from "react";
import { Script, Slice } from "gatsby";

import useApp from "../hooks/useApp";
import useSanitySettings from "../hooks/useSanitySettings";

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

      <Slice alias="menuToggle" />

      <Slice alias="navigation" className="mobile-menu" links={menu?.links} />

      <div className={`body-content${menuActive ? ` active` : ``}`}>
        <Slice alias="siteHeader" />
        <main className="main">
          <>{children}</>
          <Slice alias="footer" />
        </main>
      </div>
    </>
  );
};

export default Layout;
