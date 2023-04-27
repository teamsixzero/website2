/* eslint-disable camelcase */
import React, { createContext, useEffect, useState, useMemo } from "react";

import useWindowSize from "../hooks/useWindowSize";

export const AppContext = createContext({});

/** ============================================================================
 * @context
 * Global application data.
 */
const AppProvider = ({ children }) => {
  // ---------------------------------------------------------------------------
  // context / ref / state
  const size = useWindowSize();
  const [menuActive, setMenuActive] = useState(false);

  // ---------------------------------------------------------------------------
  // methods

  // ...

  // ---------------------------------------------------------------------------
  // lifecycle
  useEffect(() => {
    if (size.width > 1024) setMenuActive(false);
  }, [size]);

  // ---------------------------------------------------------------------------
  // render

  const providerProps = useMemo(() => ({
    menuActive,
    setMenuActive,
  }));

  return (
    <AppContext.Provider value={providerProps}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
