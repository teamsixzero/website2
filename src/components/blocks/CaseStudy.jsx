import React from "react";
import { graphql, Link } from "gatsby";

import Media from "../Media";

const CaseStudy = ({ data }) => {
  const { project, summary, media, alignment, backgroundColor, textColor } =
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
          <span>See Project →</span>
        </Link>
      </header>

      {media && <Media className="block-case-study__wrapper" media={media} />}
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
    media {
      type
      image {
        ...ImageWithPreview
        alt
        mobile {
          asset {
            _id
          }
        }
      }
      video {
        src
        poster {
          asset {
            url
          }
        }
        isIframe
        autoplay
        loop
      }
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
