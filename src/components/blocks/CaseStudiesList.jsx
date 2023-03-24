import React from "react";
import { graphql, Link } from "gatsby";

import Image from "../Image";

const CaseStudies = ({ data }) => {
  const { caseStudies } = data;

  return (
    <ul className="block-case-studies-list">
      {caseStudies.map((project) => (
        <li key={project?.id}>
          <section
            className={`case-study align-${
              project?.alignment ? project?.alignment.toLowerCase() : `left`
            } text-${
              project?.summaryTextColor
                ? project?.summaryTextColor.toLowerCase()
                : `dark`
            }`}
            style={{ background: project?.summaryBackgroundColor }}
          >
            <header className="case-study__header">
              <h2 className="h3">{project?.title}</h2>

              <p className="text-normal">{project?.summary?.content}</p>

              <Link
                to={project?.slug}
                className={`btn ${
                  project?.summaryTextColor
                    ? project?.summaryTextColor.toLowerCase()
                    : `dark`
                }`}
              >
                See Project →
              </Link>
            </header>

            <Image
              className="case-study__image"
              src={project?.summaryImage[0]}
              alt={project?.summaryImage?.title}
            />
          </section>
        </li>
      ))}
    </ul>
  );
};

export default CaseStudies;

export const query = graphql`
  fragment BlockCaseStudiesList on ContentfulBlockCaseStudiesList {
    id
    title
    caseStudies {
      id
      title
      slug
      summary {
        content: summary
      }
      summaryImage {
        gatsbyImageData(
          quality: 100
          width: 1440
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
        title
      }
      alignment
      summaryBackgroundColor
      summaryTextColor
    }
  }
`;