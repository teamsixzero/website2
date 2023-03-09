import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import ContactCallout from "../components/contact-callout";

const DevelopmentPage = () => {
  return (
    <Layout>
      <Helmet>
        <body className="page-development" />
      </Helmet>

      <section className="page-header page-header--development">
        <div className="page-header_copy">
          <h1>
            We’re here to help you navigate{" "}
            <span className="highlight">development</span> through to completion
          </h1>
          <p className="h4">
            Whether partnering with your in-house team or a third-party
            developer, our approach is always collaborative
          </p>
        </div>
      </section>

      <section className="project-ipads">
        <img src="/images/development/development-ipad-left.png" alt="" />
        <img src="/images/development/development-ipad-right.png" alt="" />
      </section>

      <section className="centered-content">
        <h2 className="h3">We connect design and development, effectively</h2>
        <p>
          Developers are involved early on in the planning and design stages so
          that they are consulted on the feasibility of all features. This
          ensures that our vision for an intuitive user experience can actually
          be brought into reality.
        </p>
        <p>
          Seeking early input from developers leads to shortened timelines for
          development and more accurate outcomes early, resulting in more
          cost-effective solutions.
        </p>
      </section>

      <section className="ping-pong ping-pong--image-right">
        <div className="ping-pong_image">
          <img
            src="/images/development/development-ping-pong-image.png"
            alt=""
          />
        </div>
        <div className="ping-pong_copy">
          <h2 className="h4">
            We’re committed to delivering the perfect&nbsp;product
          </h2>
          <p>
            “This is what you asked for” isn’t in our vocabulary. We know that
            deliverables can evolve with new data and are committed to
            partnering with you until the final product is just right.
          </p>
        </div>
      </section>

      <ContactCallout />
    </Layout>
  );
};

export default DevelopmentPage;
