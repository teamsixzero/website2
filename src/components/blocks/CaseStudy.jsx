import React from "react";
import { graphql, Link } from "gatsby";

import SanityImage from "../SanityImage";

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
      className={`block-case-study ${alignmentClass}`}
      style={{
        background: backgroundColor?.value?.hex,
        color: textColor?.value?.hex,
      }}
    >
      <header className="block-case-study__header">
        <h2 className="h3">{project?.title}</h2>

        <p className="text-normal">{summary}</p>

        <Link
          to={`/projects/${project?.slug?.current}`}
          className="btn"
          style={{
            backgroundColor: textColor?.value?.hex,
            color: backgroundColor?.value?.hex,
          }}
        >
          See Project →
        </Link>
      </header>

      {image && <SanityImage className="block-case-study__image" src={image} />}
    </div>
  );
};

export default CaseStudy;

export const query = graphql`
  fragment BlockCaseStudy on SanityCaseStudy {
    project {
      title
      slug {
        current
      }
    }
    summary
    image {
      ...ImageWithPreview
      alt
    }
    alignment
    backgroundColor {
      value {
        hex
      }
    }
    textColor {
      value {
        hex
      }
    }
  }
`;
