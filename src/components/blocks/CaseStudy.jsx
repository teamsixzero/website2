import React from "react";
import { graphql, Link } from "gatsby";

import Image from "../Image";

const CaseStudy = ({ data }) => {
  const { project, summary, image, alignment, backgroundColor, textColor } =
    data;

  let alignmentClass = `align-left`;

  switch (alignment) {
    case `Left`:
      alignmentClass = `align-left`;
      break;
    case `Right`:
      alignmentClass = `align-right`;
      break;
    case `Left (Full Height)`:
      alignmentClass = `align-left-full-height`;
      break;
    case `Right (Full Height)`:
      alignmentClass = `align-right-full-height`;
      break;

    default:
      break;
  }

  return (
    <div
      className={`block-case-study ${alignmentClass} text-${
        textColor ? textColor.toLowerCase() : `dark`
      }`}
      style={{ background: backgroundColor }}
    >
      <header className="block-case-study__header">
        <p className="text-normal">{summary}</p>

        <Link
          to={`/projects/${project?.slug?.current}`}
          className={`btn ${textColor ? textColor.toLowerCase() : `dark`}`}
        >
          See Project →
        </Link>
      </header>

      <Image
        className="block-case-study__image"
        src={image?.asset}
        alt={image?.alt}
      />
    </div>
  );
};

export default CaseStudy;

export const query = graphql`
  fragment BlockCaseStudy on SanityCaseStudy {
    project {
      slug {
        current
      }
    }
    summary
    image {
      asset {
        gatsbyImageData(
          width: 1440
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
      alt
    }
    alignment
    backgroundColor
    textColor
  }
`;
