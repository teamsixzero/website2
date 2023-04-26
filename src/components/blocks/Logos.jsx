import React from "react";
import { graphql } from "gatsby";

import SanityImage from "../SanityImage";

const Logos = ({ data }) => {
  const { logos } = data;

  return (
    <ul className="block-logos">
      {logos.length > 0 &&
        logos.map((logo) => (
          <li key={logo?._key}>
            <SanityImage src={logo} />
          </li>
        ))}
    </ul>
  );
};

export default Logos;

export const query = graphql`
  fragment BlockLogos on SanityLogos {
    logos {
      _key
      ...ImageWithPreview
      alt
    }
  }
`;
