import React from "react";
import urlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";

import { client } from "../../utils/sanity";

const Image = ({ value }) => {
  const { width, height } = getImageDimensions(value);
  const url = urlBuilder(client)
    .image(value)
    .width(800)
    .fit("max")
    .auto("format")
    .url();

  return (
    <img
      src={url}
      alt={value.alt || " "}
      loading="lazy"
      style={{
        // Avoid jumping around with aspect-ratio CSS property
        width: "100%",
        height: "auto",
        aspectRatio: width / height,
      }}
    />
  );
};

export default Image;
