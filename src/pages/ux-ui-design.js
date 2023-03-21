import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import ContactCallout from "../components/ContactCallout";

const UXUIDesignPage = () => {
  return (
    <Layout>
      <Helmet>
        <body className="page-ux-ui-design" />
      </Helmet>

      <section className="page-header">
        <div className="page-header_copy">
          <h1>
            Great <span className="highlight">UX design</span> goes beyond
            creating something beautiful
          </h1>
        </div>
      </section>

      <section className="ping-pong ping-pong--image-left">
        <div className="ping-pong_image">
          <img
            src="/images/ux-ui-design/ux-ui-design-knowledge-image.png"
            alt=""
          />
        </div>
        <div className="ping-pong_copy">
          <h2 className="h4">
            We design based on knowledge and data, not&nbsp;assumptions
          </h2>
          <p>
            Our design process unites your industry and customer prowess with
            the data uncovered through our mastery in gathering user insights.
            By combining our respective expertise, we can build a product that
            is not only eye-catching but a super intuitive and unforgettable
            experience.
          </p>
          <p>
            Our method is simple, efficient, and hyper-focused on humans. It is
            guided by detailed user research that supplies a rich understanding
            of how your product operates in the hands of your customer.
          </p>
        </div>
      </section>

      <section className="ping-pong ping-pong--image-right ping-pong--bleed-right">
        <div className="ping-pong_image">
          <img
            src="/images/ux-ui-design/ux-ui-design-collaboration-image.png"
            alt=""
          />
        </div>
        <div className="ping-pong_copy">
          <h2 className="h4">Smart collaboration is our crux of success</h2>
          <p>
            In our experience, the most remarkable solutions often come from the
            most unsuspecting of places. That's why working with all the experts
            on your team is the key to creating a truly impactful product. We
            not only encourage cross-department collaboration but consult with
            developers during the design phase to ensure that our vision for the
            product is feasible in development. This two-way dialogue is
            essential for us as it streamlines the process and elevates the end
            results.
          </p>
        </div>
      </section>

      <section className="design-process">
        <ul className="design-process_grid">
          <li>
            <div className="card card--heading">
              <h3 className="h4 card-title">
                Our design process is simple, efficient & hyper focused on
                humans.
              </h3>
            </div>
          </li>
          <li>
            <div className="card card--design-process">
              <div className="card-image">
                <img
                  src="/images/ux-ui-design/ux-ui-design-process-placeholder.png"
                  alt=""
                />
              </div>
              <div className="card-copy">
                <span className="accent accent--grey-dark">Step one</span>
                <h3 className="h5 card-title">Understand</h3>
                <p>
                  We meet with stakeholders to solidify a shared vision of the
                  problem. We discuss goals, purpose and define what success
                  looks like while ensuring everyone is aligned on what the
                  solutions should be.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="card card--design-process">
              <div className="card-image">
                <img
                  src="/images/ux-ui-design/ux-ui-design-process-placeholder.png"
                  alt=""
                />
              </div>
              <div className="card-copy">
                <span className="accent accent--grey-dark">Step two</span>
                <h3 className="h5 card-title">Design</h3>
                <p>
                  We define how to reach our goals, choose features and create a
                  product prototype, all while verifying feasibility with
                  development.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="card card--design-process">
              <div className="card-image">
                <img
                  src="/images/ux-ui-design/ux-ui-design-process-placeholder.png"
                  alt=""
                />
              </div>
              <div className="card-copy">
                <span className="accent accent--grey-dark">Step three</span>
                <h3 className="h5 card-title">Test</h3>
                <p>
                  We meticulously test your product prototype with your target
                  customer to uncover their needs, behaviour and potential
                  setbacks when using your product.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="card card--design-process">
              <div className="card-image">
                <img
                  src="/images/ux-ui-design/ux-ui-design-process-placeholder.png"
                  alt=""
                />
              </div>
              <div className="card-copy">
                <span className="accent accent--grey-dark">Step four</span>
                <h3 className="h5 card-title">Iterate</h3>
                <p>
                  Then, we use the insights gathered during user testing to
                  improve usability and build a solution that brings true value
                  to your users.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="card card--design-process">
              <div className="card-image">
                <img
                  src="/images/ux-ui-design/ux-ui-design-process-placeholder.png"
                  alt=""
                />
              </div>
              <div className="card-copy">
                <span className="accent accent--grey-dark">Step five</span>
                <h3 className="h5 card-title">Repeat</h3>
                <p>
                  Our process is never one and done. We repeat it as many times
                  we need to until we've confidently designed a product your
                  users will not want to live without.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <ContactCallout />
    </Layout>
  );
};

export default UXUIDesignPage;
