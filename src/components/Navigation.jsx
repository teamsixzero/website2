import React from "react";
import { Link } from "gatsby";

import useApp from "../hooks/useApp";

const MenuLink = ({ link, dropdown }) => {
  const { closeMenu } = useApp();

  const regex = /^(http|https|mailto|tel):/;
  const isExternal = regex.test(link?.url);

  const textClass = dropdown ? "text-normal" : "accent";

  if (isExternal)
    return (
      <a
        href={link.url}
        target="_blank"
        rel="noreferrer"
        className={`link ${textClass}`}
        onClick={closeMenu}
      >
        {link.title}
      </a>
    );

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
        <li className="has-dropdown" key={link?._key}>
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
      <li key={link?._key}>
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
