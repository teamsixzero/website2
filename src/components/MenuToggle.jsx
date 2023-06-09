import React from "react";

import useApp from "../hooks/useApp";

const MenuToggle = () => {
  const { menuActive, toggleMenu } = useApp();

  return (
    <button
      name="toggle mobile menu"
      className="menu-toggle"
      onClick={toggleMenu}
    >
      <span className="sr-only">Open menu</span>
      <span className={`hamburger-icon${menuActive ? ` is-active` : ``}`}>
        <span className="hamburger-icon__line" />
        <span className="hamburger-icon__line" />
        <span className="hamburger-icon__line" />
      </span>
    </button>
  );
};

export default MenuToggle;
