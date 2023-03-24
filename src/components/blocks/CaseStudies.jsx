import React from "react";
import { graphql, Link } from "gatsby";

const CaseStudies = ({ data }) => {
  const projects = data.allContentfulTemplateProject.edges.map(
    ({ node }) => node
  );

  return (
    <ul className="block-case-studies">
      {projects.map((project) => (
        <li key={project?.id}>
          <section
            className="project-summary project-summary--image-left project-summary--desktop project-summary--text-light"
            style={{ background: "rgba(31, 40, 66, 0.9)" }}
          >
            <div className="project-summary_copy">
              <h2 className="h3">{project?.title}</h2>
              <p>{project?.summary?.content}</p>
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
      ))}
    </ul>
  );
};

export default CaseStudies;

export const query = graphql`
  fragment BlockCaseStudies on ContentfulBlockCaseStudies {
    id
  }
`;
