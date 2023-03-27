import React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../components/Layout";
import BookCallout from "../components/BookCallout";
import ContactCallout from "../components/ContactCallout";

const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Sixzero | UX/UI design agency in Vancouver BC.</title>
        <body className="page-index" />
      </Helmet>

      <section className="page-header">
        <div className="page-header_copy">
          <h1>
            We design apps and software with{" "}
            <span className="highlight">measurable impact</span>
          </h1>
        </div>
      </section>

      <section className="client-strip">
        <img src="/images/index/client-asana.svg" alt="Asana logo" />
        <img
          src="/images/index/client-uofa.svg"
          alt="University of Alberta logo"
        />
        <img src="/images/index/client-squadcast.svg" alt="SquadCast logo" />
        <img src="/images/index/client-kinzoo.s=vg" alt="Kinzoo logo" />
        <img src="/images/index/client-stc.svg" alt="STC logo" />
      </section>

      <section
        className="project-summary project-summary--image-left project-summary--desktop project-summary--text-light"
        style={{ background: "rgba(31, 40, 66, 0.9)" }}
      >
        <div className="project-summary_copy">
          <h2 className="h3">SquadCast</h2>
          <p>
            SquadCast is one of the industry's most popular remote recording
            platforms that empower podcasters by capturing studio-quality audio
            and video conversations while allowing users to work remotely.
          </p>
          <Link to="/projects/squadcast" className="btn">
            See Project →
          </Link>
        </div>
        <div className="project-summary_image-wrapper">
          <div className="project-summary_image">
            <img src="/images/projects/squadcast-project-summary.png" alt="" />
          </div>
        </div>
      </section>

      <section className="testimonial">
        <div className="testimonial-quote">
          <h4>
            “The work that we at SquadCast.fm have done with Sixzero has been
            phenomenal. The amount of user{" "}
            <span className="highlight">
              <span>research</span> <span>and</span> <span>processes</span>
            </span>{" "}
            they use have always concluded with a killer final product. Quality
            work every time!”
          </h4>
        </div>
        <div className="testimonial-author">
          <img
            src="/images/index/testimonial-alexander-whedbee.jpg"
            alt="Alexander Whedbee"
          />
          <div className="testimonial-author_name">
            <p className="accent">Alexander Whedbee</p>
            <p className="accent accent--grey-normal">
              Chief Design Officer, Squadcast
            </p>
          </div>
        </div>
      </section>

      <section
        className="project-summary project-summary--image-right project-summary--desktop"
        style={{ background: "#F2F5FB" }}
      >
        <div className="project-summary_copy">
          <h2 className="h3">Wizebank</h2>
          <p>
            Wizebank is a platform that helps online course creators capture
            their e-learning business insights in one easy to navigate work
            space.
          </p>
          <Link to="/projects/wizebank" className="btn">
            See Project →
          </Link>
        </div>
        <div className="project-summary_image-wrapper">
          <div className="project-summary_image">
            <img src="/images/projects/wizebank-project-summary.png" alt="" />
          </div>
        </div>
      </section>

      <section className="testimonial">
        <div className="testimonial-quote">
          <h4>
            “Sixzero really impressed us with their ability to{" "}
            <span className="highlight">
              <span>empathize</span> <span>with</span> <span>the</span>{" "}
              <span>consumer</span>
            </span>{" "}
            and the job they are trying to accomplish, including a little
            entertainment and fun. They took the time to imagine what an awesome
            outcome looks like.”
          </h4>
        </div>
        <div className="testimonial-author">
          <img
            src="/images/index/testimonial-ryan-smith.jpg"
            alt="Ryan Smith"
          />
          <div className="testimonial-author_name">
            <p className="accent">Ryan Smith</p>
            <p className="accent accent--grey-normal">CEO, FTSY</p>
          </div>
        </div>
      </section>

      <section
        className="project-summary project-summary--image-left project-summary--mobile project-summary--text-light"
        style={{ background: "rgba(26, 47, 51, 0.9)" }}
      >
        <div className="project-summary_copy">
          <h2 className="h3">Yave</h2>
          <p>
            Yave has re-imagined the brand recognition and buying experience
            that consumers have when they purchase from independently owned
            shops.
          </p>
          <Link to="/blog/yave-ux-design-case-study" className="btn">
            See Project →
          </Link>
        </div>
        <div className="project-summary_image-wrapper">
          <div className="project-summary_image">
            <img src="/images/projects/yave-project-summary-left.png" alt="" />
          </div>
          <div className="project-summary_image">
            <img src="/images/projects/yave-project-summary-right.png" alt="" />
          </div>
        </div>
      </section>

      <section className="testimonial">
        <div className="testimonial-quote">
          <h4>
            “Working with Sixzero has been a game changer. Not only did they
            make our app look great, their{" "}
            <span className="highlight">
              <span>obsession</span> <span>with</span> <span>getting</span>{" "}
              <span>to</span> <span>know</span> <span>and</span>{" "}
              <span>understand</span>
            </span>{" "}
            our customers helped us build Olive into something truly valuable.”
          </h4>
        </div>
        <div className="testimonial-author">
          <img
            src="/images/index/testimonial-chris-heard.jpg"
            alt="Chris Heard"
          />
          <div className="testimonial-author_name">
            <p className="accent">Chris Heard</p>
            <p className="accent accent--grey-normal">CEO, Olive App</p>
          </div>
        </div>
      </section>

      <section
        className="project-summary project-summary--image-right project-summary--mobile"
        style={{ background: "rgba(199, 166, 101, 0.5)" }}
      >
        <div className="project-summary_copy">
          <h2 className="h3">FTSY</h2>
          <p>
            FTSY helps take the stress out of online shoe shopping using
            proprietary AI-driven foot scanning technology.
          </p>
          <Link to="/projects/ftsy" className="btn">
            See Project →
          </Link>
        </div>
        <div className="project-summary_image-wrapper">
          <div className="project-summary_image">
            <img src="/images/projects/ftsy-project-summary-left.png" alt="" />
          </div>
          <div className="project-summary_image">
            <img src="/images/projects/ftsy-project-summary-right.png" alt="" />
          </div>
        </div>
      </section>

      <section className="testimonial">
        <div className="testimonial-quote">
          <h4>
            “Working with Sixzero has been a game changer. Not only did they
            make our app look great, their{" "}
            <span className="highlight">
              <span>obsession</span> <span>with</span> <span>getting</span>{" "}
              <span>to</span> <span>know</span> <span>and</span>{" "}
              <span>understand</span>
            </span>{" "}
            our customers helped us build Olive into something truly valuable.”
          </h4>
        </div>
        <div className="testimonial-author">
          <img
            src="/images/index/testimonial-chris-heard.jpg"
            alt="Chris Heard"
          />
          <div className="testimonial-author_name">
            <p className="accent">Chris Heard</p>
            <p className="accent accent--grey-normal">CEO, Olive App</p>
          </div>
        </div>
      </section>

      <section
        className="project-summary project-summary--image-left project-summary--desktop"
        style={{ background: "rgba(8, 141, 239, 0.1)" }}
      >
        <div className="project-summary_copy">
          <h2 className="h3">Olive</h2>
          <p>
            Olive connects technology buyers with the right solutions and
            technology vendors with their target customers. In other words,
            Olive is out to kill steak dinner handshake deals and biased RFPs.
            We helped Olive bring both sides together into app.
          </p>
          <Link to="/projects/olive" className="btn">
            See Project →
          </Link>
        </div>
        <div className="project-summary_image-wrapper">
          <div className="project-summary_image">
            <img src="/images/projects/olive-project-summary.png" alt="" />
          </div>
        </div>
      </section>

      <section className="what-we-do">
        <div className="what-we-do_copy">
          <h2 className="h1">
            What we do: <br />
            <span className="highlight">
              Take your idea from sketch to reality
            </span>
          </h2>
        </div>
        <ul className="what-we-do_list">
          <li>
            <div className="wwd-item">
              <div className="wwd-item_image">
                <img
                  src="/images/index/what-we-do-user-research.png"
                  alt="User research icon"
                />
              </div>
              <div className="wwd-item_copy">
                <span className="accent accent--grey-dark">Discover</span>
                <h3 className="h5 wwd-item_title">User research</h3>
                <p>
                  We obsess over your users to understand what they are really
                  thinking and doing. We obsess over your users to understand
                  what they are really thinking and doing. We obsess over your
                  users to understand what they are really thinking and doing.
                </p>
                <Link to="/user-research" className="text-link">
                  Learn More →
                </Link>
              </div>
            </div>
          </li>
          <li>
            <div className="wwd-item">
              <div className="wwd-item_image">
                <img
                  src="/images/index/what-we-do-ux-ui-design.png"
                  alt="Interface design icon"
                />
              </div>
              <div className="wwd-item_copy">
                <span className="accent accent--grey-dark">Design</span>
                <h3 className="h5 wwd-item_title">Interface design</h3>
                <p>
                  We make beautiful, clean, and super intuitive interfaces. We
                  make beautiful, clean, and super intuitive interfaces. We make
                  beautiful, clean, and super intuitive interfaces. We make
                  beautiful, clean, and super intuitive interfaces. We make
                  beautiful, clean, and super intuitive interfaces.
                </p>
                <Link to="/ux-ui-design" className="text-link">
                  Learn More →
                </Link>
              </div>
            </div>
          </li>
          <li>
            <div className="wwd-item">
              <div className="wwd-item_image">
                <img
                  src="/images/index/what-we-do-development.png"
                  alt="Development icon"
                />
              </div>
              <div className="wwd-item_copy">
                <span className="accent accent--grey-dark">Build</span>
                <h3 className="h5 wwd-item_title">Development</h3>
                <p>
                  We'll bring your app to life and get it out in the world.
                  We'll bring your app to life and get it out in the world.
                  We'll bring your app to life and get it out in the world.
                  We'll bring your app to life and get it out in the world.
                  We'll bring your app to life and get it out in the world.
                </p>
                <Link to="/development" className="text-link">
                  Learn More →
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <BookCallout />
      <ContactCallout />
    </Layout>
  );
};

export default IndexPage;
