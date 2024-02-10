import React, { useState, useEffect, useRef } from "react";

const setIframeSrc = (src, { autoplay, loop, controls, muted }) => {
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

  return newSrc;
};

const Video = ({ video, className, style }) => {
  const { src, poster, isIframe, autoplay, loop, controls, muted } = video;

  const ref = useRef(null);
  const [source, setSource] = useState("");

  useEffect(() => {
    setTimeout(() => {
      if (isIframe) {
        const newSrc = setIframeSrc(src, { autoplay, loop, controls, muted });
        setSource(newSrc);
      } else {
        setSource(src);
      }
    }, 100);
  }, []);

  useEffect(() => {
    if (!source || !ref.current) return;

    // if we want the video to auto play we need to mute the video
    if (autoplay) {
      // open bug since 2017 that you cannot set muted in video element https://github.com/facebook/react/issues/10389
      ref.current.defaultMuted = true;
      ref.current.muted = true;
      ref.current.play();
    }
  }, [source, autoplay, ref.current]);

  if (isIframe) {
    return (
      <div className={`video__wrapper ${className ? className : ``}`}>
        <iframe
          title={`video-${src}`}
          className="video__iframe"
          style={style}
          src={source}
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
      src={source}
      className={className}
      style={style}
      autoPlay={autoplay}
      loop={loop}
      playsInline
      poster={poster?.asset?.url}
    >
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
