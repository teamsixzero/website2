import React from "react";

import SanityImage from "./SanityImage";
import Video from "./Video";

const Media = ({ media, className, style, imgStyle }) => {
  switch (media?.type) {
    case "image":
      return (
        media?.image?.asset && (
          <SanityImage
            src={media?.image}
            className={className}
            style={style}
            imgStyle={imgStyle}
          />
        )
      );

    case "video":
      return (
        media?.video?.src && (
          <Video video={media?.video} className={className} style={style} />
        )
      );

    default:
      return null;
  }
};

export default Media;
