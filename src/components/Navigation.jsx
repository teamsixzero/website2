import React from "react";
import { Link } from "gatsby";

const MenuLink = ({ link, setActive }) => {
  const regex = /^(http|https|mailto|tel):/;
  const isExternal = regex.test(link?.url);

  if (isExternal)
    return (
      <a
        href={link.url}
        target="_blank"
        rel="noreferrer"
        className="accent"
        onClick={() => setActive && setActive(false)}
      >
        {link.title}
      </a>
    );

  return (
    <Link
      to={link.url}
      onClick={() => setActive && setActive(false)}
      className="text-normal"
    >
      {link.title}
    </Link>
  );
};

const Navigation = ({ links, active, setActive }) => {
  return (
    <nav className={`menu${active ? ` active` : ``}`}>
      <ul>
        {links.map((link) => {
          if (link.__typename === "SanityLinkGroup")
            return (
              <li className="has-dropdown" key={link?._key}>
                <button className="accent">{link?.title}</button>
                <ul className="dropdown">
                  {link.links.map((sublink) => (
                    <li key={sublink?._key}>
                      <MenuLink link={sublink} setActive={setActive} />
                    </li>
                  ))}
                </ul>
              </li>
            );

          return (
            <li key={link?._key}>
              <MenuLink link={link} setActive={setActive} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
