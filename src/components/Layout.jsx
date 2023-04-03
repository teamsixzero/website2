import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const navLinks = [
  {
    id: 1,
    name: "What We Do",
    sublinks: [
      {
        id: 1,
        name: "UX/UI Design",
        url: "/ux-ui-design",
      },
      {
        id: 2,
        name: "User Research",
        url: "/user-research",
      },
      {
        id: 3,
        name: "Development",
        url: "/development",
      },
    ],
  },
  {
    id: 2,
    name: "Work",
    url: "/projects",
  },
  {
    id: 3,
    name: "Book",
    url: "https://sixzero.co/startusertesting/",
    external: true,
  },
  {
    id: 4,
    name: "Blog",
    url: "/blog",
  },
  {
    id: 5,
    name: "About",
    url: "/about",
  },
  {
    id: 6,
    name: "Contact",
    url: "mailto:hello@sixzero.co",
    external: true,
  },
];

const Layout = ({ children }) => {
  return (
    <>
      <Header links={navLinks} />
      <main className="main">{children}</main>
      <Footer links={navLinks} />
    </>
  );
};

export default Layout;
