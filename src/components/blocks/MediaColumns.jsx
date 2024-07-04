import React from "react";
import { graphql } from "gatsby";

import Media from "../Media";
import RichText from "../RichText";

const MediaColumns = ({ data }) => {
  const { columns, layout = "layout-1" } = data;

  return (
    <div className={`block-media-columns ${layout}`}>
      {columns?.length > 0 && (
        <>
          {columns?.map((med) => (
            <div className="block-media-columns__container" key={med?._key}>
              <div
                className={`block-media-columns__wrapper ${
                  med?.backgroundColor?.value?.hex ? "has-background" : ""
                }`}
                style={{ backgroundColor: med?.backgroundColor?.value?.hex }}
              >
                <Media media={med?.source} />
              </div>
            </div>
          ))}

          {columns.map((med) => (
            <>
              {(med?.mediaContent?.heading ||
                med?.mediaContent?.text?.length > 0) && (
                <div
                  key={med?._key}
                  className={`block-media-columns__content ${
                    med?.backgroundColor?.value?.hex ? "has-background" : ""
                  }`}
                  style={{ backgroundColor: med?.backgroundColor?.value?.hex }}
                >
                  {med?.mediaContent?.heading && (
                    <h3 className="h5">{med.mediaContent.heading}</h3>
                  )}
                  <RichText content={med?.mediaContent?.text} />
                </div>
              )}
            </>
          ))}
        </>
      )}
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
      mediaContent: content {
        heading
        text: _rawText(resolveReferences: { maxDepth: 10 })
      }
      backgroundColor {
        value {
          hex
        }
      }
    }
    layout
  }
`;
