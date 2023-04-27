import React from "react";
import { Link } from "gatsby";

import useSanitySettings from "../hooks/useSanitySettings";

import Navigation from "./Navigation";

const Header = () => {
  const { menu } = useSanitySettings();

  return (
    <header className="header">
      <Link className="logo" to="/">
        <img src="/images/sixzero-logo-dark.svg" alt="Sixzero logo" />
      </Link>

      <Navigation links={menu?.links} />
    </header>
  );
};

export default Header;
