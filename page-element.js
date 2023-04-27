import React from "react";

import Layout from "./src/components/Layout";

const Page = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

export default Page;
