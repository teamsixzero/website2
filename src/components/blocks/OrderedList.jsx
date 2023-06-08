import React from "react";
import { graphql } from "gatsby";

import RichText from "../RichText";
import SanityImage from "../SanityImage";

const OrderedList = ({ data }) => {
  const { listItems } = data;

  return (
    <ol className="block-ordered-list">
      {listItems.map((item, itemIndex) => {
        const index = itemIndex + 1;
        const indexNumber = index > 10 ? index : `0${index}`;

        switch (item.__typename) {
          case "SanityTitleCard":
            return (
              <li
                key={item?._key}
                className="block-ordered-list__card block-ordered-list__card__title"
                style={{
                  color: item?.textColor?.value?.hex,
                  backgroundColor: item?.backgroundColor?.value?.hex,
                }}
              >
                <h2 className="h4">{item?.title}</h2>
              </li>
            );

          case "SanityListItem":
          default:
            return (
              <li
                key={item?._key}
                className="block-ordered-list__card block-ordered-list__card__item"
              >
                {item?.image?.asset && (
                  <SanityImage
                    className="block-ordered-list__card__item__image"
                    src={item?.image}
                  />
                )}

                <div>
                  <p
                    className="block-ordered-list__card__item__index text-small"
                    style={{ color: item?.step?.color?.value?.hex }}
                  >
                    {item?.step?.text || indexNumber}
                  </p>

                  <div className="block-ordered-list__card__item__content">
                    <h3 className="h6">{item?.title}</h3>
                    <RichText content={item?.text} />
                  </div>
                </div>
              </li>
            );
        }
      })}
    </ol>
  );
};

export default OrderedList;

export const query = graphql`
  fragment BlockOrderedList on SanityOrderedList {
    listItems {
      __typename

      ... on SanityListItem {
        _key
        step {
          text
          color {
            value {
              hex
            }
          }
        }
        title
        text: _rawText
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
        }
      }

      ... on SanityTitleCard {
        _key
        title
        textColor {
          value {
            hex
          }
        }
        backgroundColor {
          value {
            hex
          }
        }
      }
    }
  }
`;
