import React from "react";
import { Slice } from "gatsby";

import useSanitySettings from "../hooks/useSanitySettings";

const Mobile = () => {
  const { menu } = useSanitySettings();

  return <Slice alias="navigation-mobile" data={{ menu }} />;
};

export default Mobile;
