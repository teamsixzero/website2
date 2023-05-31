import React, { useEffect, useRef } from "react";

const Video = ({ video, className, style }) => {
  const { src, poster, isIframe, autoplay, loop, controls, muted } = video;

  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    // if we want the video to auto play we need to mute the video
    if (autoplay) {
      // open bug since 2017 that you cannot set muted in video element https://github.com/facebook/react/issues/10389
      ref.current.defaultMuted = true;
      ref.current.muted = true;
    }
  }, [autoplay]);

  if (isIframe) {
    let newSrc = `${src}?playsinline=1`;
    if (autoplay) {
      newSrc = `${newSrc}&autoplay=1`;
    } else {
      newSrc = `${newSrc}&autoplay=0`;
    }
    if (loop) {
      newSrc = `${newSrc}&loop=1`;
    } else {
      newSrc = `${newSrc}&loop=0`;
    }
    if (controls) {
      newSrc = `${newSrc}&controls=1`;
    } else {
      newSrc = `${newSrc}&controls=0`;
    }
    if (muted) {
      newSrc = `${newSrc}&muted=1`;
    } else {
      newSrc = `${newSrc}&muted=0`;
    }

    return (
      <div className={`video__wrapper ${className ? className : ``}`}>
        <iframe
          ref={ref}
          className="video__iframe"
          style={style}
          src={newSrc}
          allow="accelerometer; autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          webkitallowfullscreen=""
          mozallowfullscreen=""
          allowFullScreen=""
        ></iframe>
      </div>
    );
  }

  return (
    <video
      ref={ref}
      className={className}
      style={style}
      autoPlay={autoplay}
      loop={loop}
      playsInline
      poster={poster?.asset?.url}
    >
      <source src={src} />
    </video>
  );
};

export default Video;
