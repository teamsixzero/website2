import React, { useDeferredValue } from "react";
import { useLiveQuery } from "@sanity/preview-kit";
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

const Navigation = ({ className, data: initialData = null, type, query }) => {
  const [snapshot] = useLiveQuery(initialData, query);
  const data = useDeferredValue(snapshot);

  const links = type === "footer" ? data?.footer?.links : data?.menu?.links;

  const renderLinks =
    links?.length > 0 &&
    links?.map((link) => {
      if (link._type.toLowerCase().includes(`linkgroup`))
        return (
          <li className="has-dropdown" key={`${link?._key}-${uuidv4()}`}>
            {link?.url ? (
              <MenuLink link={link} />
            ) : (
              <p className="accent">{link?.title}</p>
            )}

            <nav className="dropdown">
              <div />

              <ul>
                {link?.links?.length > 0 &&
                  link?.links?.map((sublink) => (
                    <li key={sublink?._key}>
                      <MenuLink link={sublink} dropdown />
                    </li>
                  ))}
              </ul>
            </nav>
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
