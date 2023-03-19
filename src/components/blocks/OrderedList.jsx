import React from "react";
import { graphql } from "gatsby";

const OrderedList = () => {
  return <ol>OrderedList</ol>;
};

export default OrderedList;

export const query = graphql`
  fragment BlockOrderedList on ContentfulBlockOrderedList {
    title
  }
`;
