import React from "react";
import { graphql, Link } from "gatsby";

import Media from "../Media";

import { luminance } from "../../utils/contrast";

const CaseStudy = ({ data }) => {
  const { project } = data;
  const { summary, media, alignment, backgroundColor, textColor } =
    project?.caseStudy;

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
  const { r, g, b } = textColor?.value?.rgb;

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
            color: luminance(r, g, b) > 0.5 ? `#000` : `#fff`,
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
      caseStudy {
        summary
        media {
          type
          image {
            ...ImageWithPreview
            asset {
              metadata {
                dimensions {
                  width
                  height
                }
              }
            }
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
            rgb {
              r
              g
              b
            }
          }
        }
      }
    }
  }
`;
