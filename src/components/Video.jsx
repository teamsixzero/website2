import React, { useEffect, useRef } from "react";

const Video = ({ video, className, style }) => {
  const { src, poster, isIframe, autoplay, loop } = video;

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
    return (
      <iframe
        className={className}
        style={style}
        src={src}
        autoPlay={autoplay}
        loop={loop}
      ></iframe>
    );
  }

  return (
    <video
      className={className}
      style={style}
      autoPlay={autoplay}
      loop={loop}
      poster={poster?.asset?.url}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default Video;
