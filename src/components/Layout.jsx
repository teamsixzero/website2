import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      sanitySettings {
        menu {
          links {
            __typename
            ... on SanityLink {
              _key
              title
              url
            }
            ... on SanityLinkGroup {
              _key
              title
              links {
                _key
                title
                url
              }
            }
          }
        }
      }
    }
  `);

  const { menu } = data.sanitySettings;

  return (
    <>
      <Header links={menu?.links} />
      <main className="main">{children}</main>
      <Footer links={menu?.links} />
    </>
  );
};

export default Layout;
