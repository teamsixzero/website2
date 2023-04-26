import React from "react";
import Image, { imageUrl } from "gatsby-plugin-sanity-image";

const SanityImage = ({
  className,
  objectFit = "contain",
  src,
  width = 1440,
}) => {
  // console.log(`image url:`, imageUrl(src?.asset));

  return (
    <figure className={`gatsby-image${className ? ` ${className}` : ``}`}>
      <picture
        style={{
          height: "100%",
          maxHeight: "inherit",
        }}
      >
        {/* <source srcset="mdn-logo-wide.png" media="(min-width: 600px)" /> */}
        <Image
          {...src}
          width={width}
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            maxHeight: "inherit",
            objectFit,
          }}
          sizes={`(max-width: ${width}px) 100vw, 75vw, 50vw, ${width}px`}
          title={src?.alt}
          options={{ __experimentalAspectRatio: true }}
        />
      </picture>
    </figure>
  );
};

export default SanityImage;
