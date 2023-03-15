import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import BookCallout from "../components/book-callout";
import ContactCallout from "../components/contact-callout";

const UXResearchPage = () => {
  return (
    <Layout>
      <Helmet>
        <body className="page-ux-research" />
      </Helmet>

      <section className="page-header page-header--ux-research">
        <div className="page-header_copy">
          <h1>
            We're hyper-focused on{" "}
            <span className="highlight">user research</span> that yields
            impactful results
          </h1>
        </div>
      </section>

      <section className="ping-pong ping-pong--why ping-pong--image-right ping-pong--gradient-bg">
        <div className="ping-pong_image">
          <img src="/images/ux-research/ux-research-why.png" alt="" />
          <div className="why-floater">
            <img
              src="/images/ux-research/ux-research-why-floater-01.png"
              alt=""
            />
          </div>
          <div className="why-floater">
            <img
              src="/images/ux-research/ux-research-why-floater-02.png"
              alt=""
            />
          </div>
          <div className="why-floater">
            <img
              src="/images/ux-research/ux-research-why-floater-03.png"
              alt=""
            />
          </div>
          <div className="why-floater">
            <img
              src="/images/ux-research/ux-research-why-floater-04.png"
              alt=""
            />
          </div>
          <div className="why-floater">
            <img
              src="/images/ux-research/ux-research-why-floater-05.png"
              alt=""
            />
          </div>
        </div>
        <div className="ping-pong_copy">
          <h2 className="h4">
            <strong>Why?</strong> Because it's impossible to build an app people
            actually love to use if you never talk to them
          </h2>
        </div>
      </section>

      <section className="ping-pong ping-pong--image-left ping-pong--bleed-left">
        <div className="ping-pong_image">
          <img src="/images/ux-research/ux-research-testing-image.png" alt="" />
        </div>
        <div className="ping-pong_copy">
          <h2 className="h5">
            We meticulously test your product with your target customer to
            uncover their needs, behaviours and setbacks. Then, we use those
            insights to improve usability and build something your users get
            real value from.
          </h2>
        </div>
      </section>

      <section className="user-testing">
        <div className="user-testing_copy">
          <h2 className="h1">
            Our method for insightful user testing:{" "}
            <span className="highlight">
              Efficient, effective &&nbsp;eye&nbsp;opening
            </span>
          </h2>
        </div>
        <ul className="user-testing_steps">
          <li className="user-testing-step">
            <div className="user-testing-step_image">
              <img
                src="/images/ux-research/ux-research-user-testing-step-01.png"
                alt=""
              />
            </div>
            <div className="user-testing-step_copy">
              <h3 className="h5">
                Build out the <br />
                foundations of a test
              </h3>
              <p>
                We work with you to identify what needs testing and build out
                the foundations of a test, including finding the right
                participants. Depending on the level of functionality and detail
                of your prototype or product, we create a true to life scenario
                that matches the complexity of the features you want to test.
              </p>
            </div>
          </li>
          <li className="user-testing-step">
            <div className="user-testing-step_image">
              <img
                src="/images/ux-research/ux-research-user-testing-step-02.png"
                alt=""
              />
            </div>
            <div className="user-testing-step_copy">
              <h3 className="h5">Conduct your user test</h3>
              <p>
                This is what we're here for. Now it's time to facilitate the
                test and empower participants to tell us how they really feel.
                Buckle up! This will be an eye-opening experience.
              </p>
            </div>
          </li>
          <li className="user-testing-step">
            <div className="user-testing-step_image">
              <img
                src="/images/ux-research/ux-research-user-testing-step-03.png"
                alt=""
              />
            </div>
            <div className="user-testing-step_copy">
              <h3 className="h5">Analyze and prioritize your results</h3>
              <p>
                Congrats! You've gained some valuable insight into how people
                use your product and what they need to be successful. Now it's
                time to take everything we've uncovered, prioritize and
                implement solutions, and turn your product into something people
                can't (and don't want to) live without.
              </p>
            </div>
          </li>
        </ul>
      </section>

      <BookCallout />
      <ContactCallout />
    </Layout>
  );
};

export default UXResearchPage;
