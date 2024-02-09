import React from "react";
import { Slice } from "gatsby";

import useSanitySettings from "../hooks/useSanitySettings";

import Link from "./Link";

import { footerQuery } from "../utils/groq";

const Footer = () => {
  const { footer } = useSanitySettings();

  return (
    <footer className="footer">
      <Slice alias="navigation-footer" data={{ footer }} query={footerQuery} />

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
