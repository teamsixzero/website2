import React from "react";
import { Slice } from "gatsby";

import useSanitySettings from "../hooks/useSanitySettings";

import Link from "./Link";

const Footer = () => {
  const { footer } = useSanitySettings();

  return (
    <footer className="footer">
      <Slice alias="navigation" links={footer?.links} />

      <p className="footnote">
        <span>© {new Date().getFullYear()} Sixzero</span>

        {footer?.email && (
          <>
            <span> - </span>
            <Link to={footer?.email}>
              {footer?.email?.replace("mailto:", "")}
            </Link>
          </>
        )}
      </p>
    </footer>
  );
};

export default Footer;
