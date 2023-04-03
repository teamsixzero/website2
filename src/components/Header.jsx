import React, { useState } from "react";
import { Link } from "gatsby";
import Navigation from "./Navigation";

const Header = ({ links }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <button className="menu-toggle" onClick={handleMenuToggle}>
        <span className="sr-only">Open menu</span>
        <span className={`hamburger-icon${menuOpen ? ` is-active` : ``}`}>
          <span className="hamburger-icon__line" />
          <span className="hamburger-icon__line" />
          <span className="hamburger-icon__line" />
        </span>
      </button>

      <Link className="logo" to="/">
        <img src="/images/sixzero-logo-dark.svg" alt="Sixzero logo" />
      </Link>

      <Navigation links={links} active={menuOpen} setActive={setMenuOpen} />
    </header>
  );
};

export default Header;
