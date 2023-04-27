import React from "react";

import useSanitySettings from "../hooks/useSanitySettings";

import Navigation from "./Navigation";

const Footer = () => {
  const { footer } = useSanitySettings();

  return (
    <footer className="footer">
      <Navigation links={footer?.links} />
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
