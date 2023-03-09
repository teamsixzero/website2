import React from "react";
import { Link } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../../components/layout";
import ContactCallout from "../../components/contact-callout";

const ProjectsPage = ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>Work | Sixzero</title>
        <body className="page-projects" />
      </Helmet>

      <section className="page-header">
        <div className="page-header_copy">
          <h1>
            A showcase of our favorite <span className="highlight">work</span>
          </h1>
        </div>
      </section>

      <ul className="projects-list">
        <li>
          <section
            className="project-summary project-summary--image-left project-summary--desktop project-summary--text-light"
            style={{ background: "rgba(31, 40, 66, 0.9)" }}
          >
            <div className="project-summary_copy">
              <h2 className="h3">SquadCast</h2>
              <p>
                SquadCast is one of the industry's most popular remote recording
                platforms that empower podcasters by capturing studio-quality
                audio and video conversations while allowing users to work
                remotely.
              </p>
              <Link to="/projects/squadcast" className="btn">
                See Project →
              </Link>
            </div>
            <div className="project-summary_image-wrapper">
              <div className="project-summary_image">
                <img
                  src="/images/projects/squadcast-project-summary.png"
                  alt=""
                />
              </div>
            </div>
          </section>
        </li>
        <li>
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
                <img
                  src="/images/projects/wizebank-project-summary.png"
                  alt=""
                />
              </div>
            </div>
          </section>
        </li>
        <li>
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
                <img
                  src="/images/projects/yave-project-summary-left.png"
                  alt=""
                />
              </div>
              <div className="project-summary_image">
                <img
                  src="/images/projects/yave-project-summary-right.png"
                  alt=""
                />
              </div>
            </div>
          </section>
        </li>
        <li>
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
                <img
                  src="/images/projects/ftsy-project-summary-left.png"
                  alt=""
                />
              </div>
              <div className="project-summary_image">
                <img
                  src="/images/projects/ftsy-project-summary-right.png"
                  alt=""
                />
              </div>
            </div>
          </section>
        </li>
        <li>
          <section
            className="project-summary project-summary--image-left project-summary--desktop"
            style={{ background: "rgba(8, 141, 239, 0.1)" }}
          >
            <div className="project-summary_copy">
              <h2 className="h3">Olive</h2>
              <p>
                Olive connects technology buyers with the right solutions and
                technology vendors with their target customers. In other words,
                Olive is out to kill steak dinner handshake deals and biased
                RFPs. We helped Olive bring both sides together into app.
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
        </li>
        <li>
          <section
            className="project-summary project-summary--image-right project-summary--desktop"
            style={{ background: "#F4F5F7" }}
          >
            <div className="project-summary_copy">
              <h2 className="h3">Thinkific</h2>
              <p>
                Thinkific is a platform that allows anyone create, market, sell,
                and deliver their own online courses. It’s used by thousands of
                people daily to learn and spread knowledge, changing lives in
                the process.
              </p>
              <Link to="/projects/thinkific" className="btn">
                See Project →
              </Link>
            </div>
            <div className="project-summary_image-wrapper">
              <div className="project-summary_image">
                <img
                  src="/images/projects/thinkific-project-summary.png"
                  alt=""
                />
              </div>
            </div>
          </section>
        </li>
        <li>
          <section
            className="project-summary project-summary--image-left project-summary--text-light project-summary--desktop"
            style={{ background: "#3F5364" }}
          >
            <div className="project-summary_copy">
              <h2 className="h3">Vanbex</h2>
              <p>
                Vanbex is a leading blockchain consulting firm. Since 2013 they
                have been helping cutting edge companies bring their projects to
                life. We helped make their marketing website more effective with
                a human focused redesign.
              </p>
              <Link to="/projects/vanbex" className="btn">
                See Project →
              </Link>
            </div>
            <div className="project-summary_image-wrapper">
              <div className="project-summary_image">
                <img src="/images/projects/vanbex-project-summary.png" alt="" />
              </div>
            </div>
          </section>
        </li>
      </ul>

      <ContactCallout />
    </Layout>
  );
};

export default ProjectsPage;
