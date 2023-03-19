import React from "react";
import { graphql } from "gatsby";

const OrderedList = ({ data }) => {
  const { listItems } = data;

  return (
    <ol className="block-ordered-list">
      {listItems.map((item, itemIndex) => {
        const index = itemIndex + 1;
        const indexNumber = index > 10 ? index : `0${index}`;

        return (
          <li key={item?.id} className="block-ordered-list__item">
            <p className="text-bold block-ordered-list__item__index">
              {indexNumber}
            </p>

            <div className="block-ordered-list__item__content">
              <h3 className="h6">{item?.title}</h3>
              <p className="text-normal">{item?.content?.text}</p>
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
      title
      content: text {
        text
      }
    }
  }
`;
