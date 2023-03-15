import React from "react";
import { Link } from "gatsby";

const Navigation = () => {
  return (
    <nav>
      <ul className="menu">
        <li className="has-dropdown">
          <button>What We Do</button>
          <ul className="dropdown">
            <li>
              <Link to="/ux-ui-design">UX/UI Design</Link>
            </li>
            <li>
              <Link to="/ux-research">User Research</Link>
            </li>
            <li>
              <Link to="/development">Development</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/projects">Work</Link>
        </li>
        <li>
          <a
            href="https://sixzero.co/startusertesting/"
            target="_blank"
            rel="noreferrer"
          >
            Book
          </a>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <a href="mailto:hello@sixzero.co" target="_blank" rel="noreferrer">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
