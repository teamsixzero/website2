import React from "react";
import { graphql } from "gatsby";

import Media from "../Media";
import RichText from "../RichText";

const MediaColumns = ({ data }) => {
  const { columns } = data;

  console.log(`columns`, columns);

  return (
    <div className="block-media-columns">
      {columns?.length > 0 &&
        columns?.map((med) => (
          <div
            key={med?._key}
            className={`block-media-columns__wrapper ${
              med?.backgroundColor?.value?.hex ? "has-background" : ""
            }`}
            style={{ backgroundColor: med?.backgroundColor?.value?.hex }}
          >
            <Media media={med?.source} />
            {(med?.contentHeading || med?.text?.length > 0) && (
              <div className="block-media-columns__text">
                {med?.contentHeading && (
                  <h3 className="h5">{med.contentHeading}</h3>
                )}
                <RichText content={med?.text} />
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default MediaColumns;

export const query = graphql`
  fragment BlockMediaColumns on SanityMediaColumns {
    columns {
      _key
      source {
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
              metadata {
                dimensions {
                  width
                  height
                }
              }
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
          controls
          muted
        }
      }
      contentHeading
      text: _rawText(resolveReferences: { maxDepth: 10 })
      backgroundColor {
        value {
          hex
        }
      }
    }
  }
`;
