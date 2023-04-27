import React from "react";
import { Link } from "gatsby";

import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="header">
      <Link className="logo" to="/">
        <img src="/images/sixzero-logo-dark.svg" alt="Sixzero logo" />
      </Link>

      <Navigation />
    </header>
  );
};

export default Header;
