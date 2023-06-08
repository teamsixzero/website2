import React from "react";
import { v4 as uuidv4 } from "uuid";

import useApp from "../hooks/useApp";

import Link from "./Link";

const MenuLink = ({ link, dropdown }) => {
  const { closeMenu } = useApp();
  const textClass = dropdown ? "text-normal" : "accent";

  return (
    <Link to={link.url} onClick={closeMenu} className={`link ${textClass}`}>
      {link.title}
    </Link>
  );
};

const Navigation = ({ className, links }) => {
  const renderLinks = links?.map((link) => {
    if (link.__typename === "SanityLinkGroup")
      return (
        <li className="has-dropdown" key={`${link?._key}-${uuidv4()}`}>
          {link?.url ? (
            <MenuLink link={link} />
          ) : (
            <p className="accent">{link?.title}</p>
          )}

          <ul className="dropdown">
            <div />

            <nav>
              {link?.links?.map((sublink) => (
                <li key={sublink?._key}>
                  <MenuLink link={sublink} dropdown />
                </li>
              ))}
            </nav>
          </ul>
        </li>
      );

    return (
      <li key={`${link?._key}-${uuidv4()}`}>
        <MenuLink link={link} />
      </li>
    );
  });

  return (
    <>
      <nav className={`navigation ${className ? className : "menu"}`}>
        <ul>{renderLinks}</ul>
      </nav>
    </>
  );
};

export default Navigation;
