import React from "react";

import AppProvider from "./src/context/AppContext";

const Provider = ({ element }) => (
  <>
    <AppProvider>{element}</AppProvider>
  </>
);

export default Provider;
