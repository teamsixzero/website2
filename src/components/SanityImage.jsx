import React from "react";
import Image, { imageUrl } from "gatsby-plugin-sanity-image";

const SanityImage = ({
  className,
  objectFit = "contain",
  src,
  width = 1440,
  style,
}) => {
  return (
    <figure
      className={`gatsby-image${className ? ` ${className}` : ``}`}
      style={style}
    >
      <picture
        style={{
          maxHeight: "inherit",
        }}
      >
        {src?.mobile && (
          <source
            srcSet={imageUrl(src?.mobile?.asset)}
            media="(max-width: 1024px)"
            alt={src?.alt}
            title={src?.alt}
          />
        )}
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
