import React from "react";

class ContactCallout extends React.Component {
  render() {
    return (
      <section className="contact-callout">
        <div className="contact-callout_copy">
          <h2 className="h3">Let's work together</h2>
          <p className="h6">We will help you design something people love.</p>
          <a
            className="btn"
            href="mailto:hello@sixzero.co"
            target="_blank"
            rel="noreferrer"
          >
            Contact us
          </a>
        </div>
      </section>
    );
  }
}

export default ContactCallout;
