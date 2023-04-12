import React from "react";
import { graphql } from "gatsby";

import Image from "../Image";

const Logos = ({ data }) => {
  const { logos } = data;

  return (
    <ul className="block-logos">
      {logos.length > 0 &&
        logos.map((logo) => (
          <li key={logo?._key}>
            <Image src={logo?.asset} alt={logo?.alt} objectFit="contain" />
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
      asset {
        gatsbyImageData(
          width: 400
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
      alt
    }
  }
`;
