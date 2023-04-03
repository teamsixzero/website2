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
          <li key={item?.id} className="block-ordered-list__item">
            {item?.image && (
              <figure className="block-ordered-list__item__image">
                <Image src={item?.image} alt={item?.image?.title} />
              </figure>
            )}

            <div>
              <p className="text-bold block-ordered-list__item__index">
                {item?.step || indexNumber}
              </p>

              <div className="block-ordered-list__item__content">
                <h3 className="h6">{item?.title}</h3>
                <p className="text-normal">{item?.content?.text}</p>
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
  fragment BlockOrderedList on ContentfulBlockOrderedList {
    listItems {
      id
      step
      title
      content: text {
        text
      }
      image {
        gatsbyImageData(
          quality: 100
          width: 1440
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
        title
      }
    }
  }
`;
