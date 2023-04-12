import React from "react";
import { graphql } from "gatsby";

import Image from "../Image";

const OrderedList = ({ data }) => {
  const { listItems } = data;

  return (
    <ol className="block-ordered-list">
      {listItems.map((item, itemIndex) => {
        const index = itemIndex + 1;
        const indexNumber = index > 10 ? index : `0${index}`;

        return (
          <li key={item?._key} className="block-ordered-list__item">
            {item?.image && (
              <figure className="block-ordered-list__item__image">
                <Image src={item?.image?.asset} alt={item?.image?.alt} />
              </figure>
            )}

            <div>
              <p className="text-bold block-ordered-list__item__index">
                {item?.step || indexNumber}
              </p>

              <div className="block-ordered-list__item__content">
                <h3 className="h6">{item?.title}</h3>
                <p className="text-normal">{item?.text}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
};

export default OrderedList;

export const query = graphql`
  fragment BlockOrderedList on SanityOrderedList {
    listItems {
      _key
      step
      title
      text
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
    }
  }
`;
