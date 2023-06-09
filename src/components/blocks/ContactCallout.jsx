import React from "react";
import { graphql } from "gatsby";

import Link from "../Link";

const ContactCallout = ({ data }) => {
  const { heading, subHeading, buttonText, buttonUrl } = data;

  return (
    <div className="block-contact-callout">
      <div className="block-contact-callout__wrapper">
        <h2 className="h3">{heading}</h2>
        <p className="h6">{subHeading}</p>
        <Link className="btn" to={buttonUrl}>
          <span>{buttonText}</span>
        </Link>
      </div>
    </div>
  );
};

export default ContactCallout;

export const query = graphql`
  fragment BlockContactCallout on SanityContactCallout {
    heading
    subHeading
    buttonText
    buttonUrl
  }
`;
