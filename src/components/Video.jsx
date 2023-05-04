import React, { useEffect, useRef } from "react";

const Video = ({ video, className, style }) => {
  const { src, poster, autoplay, loop, controls, muted } = video;

  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    if (muted) {
      // open bug since 2017 that you cannot set muted in video element https://github.com/facebook/react/issues/10389
      ref.current.defaultMuted = true;
      ref.current.muted = true;
    }
  }, [muted]);

  return (
    <video
      className={className}
      style={style}
      autoPlay={autoplay}
      loop={loop}
      controls={controls}
      poster={poster?.asset?.url}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default Video;
