import React from "react";
import { Link } from "gatsby";

const Navigation = ({ links, active, setActive }) => {
  return (
    <nav className={`menu${active ? ` active` : ``}`}>
      <ul>
        {links.map((link) => {
          if (link.sublinks)
            return (
              <li className="has-dropdown" key={link.id}>
                <button className="accent">{link.name}</button>
                <ul className="dropdown">
                  {link.sublinks.map((sublink) => (
                    <li key={sublink.id}>
                      <Link
                        to={sublink.url}
                        onClick={() => setActive(false)}
                        className="text-normal"
                      >
                        {sublink.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            );

          return (
            <li key={link.id}>
              {link.external ? (
                <a
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="accent"
                  onClick={() => setActive(false)}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  to={link.url}
                  onClick={() => setActive(false)}
                  className="accent"
                >
                  {link.name}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
