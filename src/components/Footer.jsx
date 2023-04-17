import React from "react";
import Navigation from "./Navigation";

const Footer = ({ links }) => {
  return (
    <footer className="footer">
      <Navigation links={links} />
      <p className="footnote">
        © {new Date().getFullYear()} Sixzero —{" "}
        <a href="mailto:hello@sixzero.co" target="_blank" rel="noreferrer">
          hello@sixzero.co
        </a>
      </p>
    </footer>
  );
};

export default Footer;
