import React from "react";
import { Script } from "gatsby";

import useApp from "../hooks/useApp";
import useSanitySettings from "../hooks/useSanitySettings";

const SCHEMA_MARKUP = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Sixzero",
  url: "https://sixzero.co",
  logo: "https://sixzero.co/images/sixzero-logo-dark.svg",
  description:
    "UX design agency helping software companies build user-centered digital products through user research, UI design, and staff augmentation.",
  foundingDate: "2017",
  email: "hello@sixzero.co",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vancouver",
    addressRegion: "BC",
    addressCountry: "CA",
  },
  areaServed: "North America",
  serviceType: ["UX Design", "User Research", "Staff Augmentation"],
};

import Footer from "./Footer";
import Header from "./Header";
import Mobile from "./Mobile";
import MenuToggle from "./MenuToggle";

const Layout = ({ children }) => {
  const { menuActive } = useApp();
  const { scripts } = useSanitySettings();

  return (
    <>
      <Script
        id="schema-markup"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(SCHEMA_MARKUP),
        }}
      />

      {scripts?.length > 0 &&
        scripts?.map((script) => {
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

      <Mobile />

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
