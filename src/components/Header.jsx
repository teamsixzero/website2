import React from "react";
import { Slice } from "gatsby";

import useSanitySettings from "../hooks/useSanitySettings";

import Link from "./Link";

const Header = () => {
  const { menu } = useSanitySettings();

  return (
    <header className="header">
      <Link className="logo" to="/">
        <img
          src="/images/sixzero-logo-dark.svg"
          alt="Sixzero logo"
          width="152"
          height="24"
        />
      </Link>

      <Slice alias="navigation-header" data={{ menu }} />
    </header>
  );
};

export default Header;
