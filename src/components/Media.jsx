import React from "react";

import SanityImage from "./SanityImage";
import Video from "./Video";

const Media = ({ media, className, style, imgStyle }) => {
  const { type, image, video } = media;

  switch (type) {
    case "image":
      return (
        image?.asset && (
          <SanityImage
            src={image}
            className={className}
            style={style}
            imgStyle={imgStyle}
          />
        )
      );

    case "video":
      return (
        video?.src && (
          <Video video={video} className={className} style={style} />
        )
      );

    default:
      return null;
  }
};

export default Media;
