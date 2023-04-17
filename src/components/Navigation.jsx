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
      className="accent"
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
                <p className="accent">{link?.title}</p>
                <ul className="dropdown">
                  <div />

                  <nav>
                    {link.links.map((sublink) => (
                      <li key={sublink?._key}>
                        <MenuLink link={sublink} setActive={setActive} />
                      </li>
                    ))}
                  </nav>
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
