import React from "react";
import { graphql } from "gatsby";

import Media from "../Media";
import RichText from "../RichText";

const ThreeColumnSection = ({ data }) => {
  const { title, columns } = data;

  return (
    <div className="block-three-columns-section">
      <RichText content={title} />

      <ul className="block-three-columns-section__columns">
        {columns.map((column) => (
          <li
            key={column?._key}
            className="block-three-columns-section__columns__item"
          >
            {column?.image?.asset && (
              <Media
                media={{ type: "image", image: column?.image }}
                className="block-three-columns-section__columns__item__icon"
              />
            )}

            <h3 className="text-bold">{column?.title}</h3>
            <RichText content={column?.content} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThreeColumnSection;

export const query = graphql`
  fragment BlockThreeColumnSection on SanityThreeColumnSection {
    title: _rawTitle(resolveReferences: { maxDepth: 10 })
    columns {
      _key
      title
      content: _rawContent(resolveReferences: { maxDepth: 10 })
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
    }
  }
`;
