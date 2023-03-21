import React from "react";
import { graphql } from "gatsby";

const ContactCallout = ({ data }) => {
  const { heading, subHeading, buttonText, buttonUrl } = data;

  return (
    <section className="block-contact-callout">
      <div className="block-contact-callout__wrapper">
        <h2 className="h3">{heading}</h2>
        <p className="h6">{subHeading}</p>
        <a
          className="btn"
          href={`mailto:${buttonUrl}`}
          target="_blank"
          rel="noreferrer"
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
};

export default ContactCallout;

export const query = graphql`
  fragment BlockContactCallout on ContentfulBlockContactCallout {
    heading
    subHeading
    buttonText
    buttonUrl
  }
`;
