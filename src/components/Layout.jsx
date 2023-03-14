import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, showBookCallout, showContactCallout }) => {
  return (
    <>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
