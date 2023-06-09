import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const useApp = () => {
  const app = useContext(AppContext);

  const closeMenu = () => {
    app.setMenuActive(false);
  };

  const openMenu = () => {
    app.setMenuActive(true);
  };

  const toggleMenu = () => {
    app.setMenuActive(!app.menuActive);
  };

  return { ...app, closeMenu, openMenu, toggleMenu };
};

export default useApp;
