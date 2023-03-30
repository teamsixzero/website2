import React from "react";
import { graphql } from "gatsby";

import Image from "../Image";

const Logos = ({ data }) => {
  const { logos } = data;

  return (
    <ul className="block-logos">
      {logos.length > 0 &&
        logos.map((logo) => (
          <li key={logo?.id}>
            <Image src={logo} alt={logo?.title} objectFit="contain" />
          </li>
        ))}
    </ul>
  );
};

export default Logos;

export const query = graphql`
  fragment BlockLogos on ContentfulBlockLogos {
    id
    logos {
      id
      gatsbyImageData(
        quality: 100
        width: 400
        placeholder: BLURRED
        formats: [AUTO, WEBP, AVIF]
      )
      title
    }
  }
`;