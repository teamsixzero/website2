import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import ContactCallout from "../components/contact-callout";

const AboutPage = () => {
  return (
    <Layout>
      <Helmet>
        <body className="page-about" />
      </Helmet>

      <section className="page-header">
        <div className="page-header_copy">
          <h1>
            We believe more than anything in the power of{" "}
            <span className="highlight">listening</span>
          </h1>
        </div>
      </section>

      <section className="page-content">
        <p>
          We don't believe in acting like an authority on great ideas, instead
          we like to act as facilitators. We believe the job of a designer is to
          bring the best ideas out of the people who understand the problem most
          intimately. In our experience the very best ideas often come from the
          quietest voice or the most unsuspecting place, not from some hotshot
          designer sitting alone in a room.
        </p>
        <p>
          Listening to people and fully understanding their needs allows us to
          figure out what is really going to make the biggest impact in that
          person's life. It allows companies to find key advantages that no one
          is seeing and turn that into an amazing product.
        </p>
        <p>
          Listening to your customers is how you get product market fit.
          Listening to your customers is how you take a good product and make it
          great. Listening to your customers is how you design amazing things.
          In our opinion, listening is the only way to build anything these
          days.
        </p>
        <p>
          We help companies take ideas and turn them into amazing products. We
          will work together to help you pinpoint customers needs, design a
          beautiful intuitive interface, and build it.
        </p>
        <p>
          Do you have an idea you want to turn into an amazing product? We would
          love to work together, you've already caught our attention.
        </p>
        <p>We're listening.</p>
      </section>

      <section className="about-map">
        <div className="about-map_copy">
          <h5>Our office</h5>
          <p>
            228 Esplanade E <br />
            Unit 101 <br />
            North Vancouver, B.C. <br />
            V7L 1A3
          </p>
          <a
            className="text-link"
            href="https://goo.gl/maps/HMD7zL5HAkiBwNb49"
            target="_blank"
            rel="noreferrer"
          >
            Get directions →
          </a>
        </div>
      </section>

      <ContactCallout />
    </Layout>
  );
};

export default AboutPage;
