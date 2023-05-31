import React from "react";
import { Slice } from "gatsby";

import useSanitySettings from "../hooks/useSanitySettings";

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
            <a href={footer?.email} target="_blank" rel="noreferrer">
              {footer?.email?.replace("mailto:", "")}
            </a>
          </>
        )}
      </p>
    </footer>
  );
};

export default Footer;
