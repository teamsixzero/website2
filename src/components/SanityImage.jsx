import React from "react";
import Image, { imageUrl } from "gatsby-plugin-sanity-image";

const SanityImage = ({
  className,
  objectFit = "contain",
  src,
  width = 1440,
  style,
  imgStyle,
}) => {
  const imgWidth = src?.asset?.metadata?.dimensions?.width;
  const imgHeight = src?.asset?.metadata?.dimensions?.height;
  const aspectRatio = imgHeight / imgWidth;

  return (
    <figure
      className={`gatsby-image${className ? ` ${className}` : ``}`}
      style={style}
    >
      <picture
        style={{
          "--ratio": aspectRatio,
        }}
      >
        {src?.mobile && (
          <source
            srcSet={imageUrl(src?.mobile?.asset)}
            media="(max-width: 1024px)"
            alt={src?.alt || ""}
            title={src?.alt}
            width={src?.mobile?.asset?.metadata?.dimensions?.width}
            height={src?.mobile?.asset?.metadata?.dimensions?.height}
          />
        )}
        <Image
          className="gatsby-image__image"
          width={width}
          htmlWidth={imgWidth}
          htmlHeight={imgHeight}
          style={{
            objectFit,
            ...imgStyle,
          }}
          sizes={`(max-width: ${width}px) 100vw, 75vw, 50vw, ${width}px`}
          title={src?.alt}
          alt={src?.alt || ""}
          {...src}
          // options={{ __experimentalAspectRatio: true }}
        />
      </picture>
    </figure>
  );
};

export default SanityImage;
