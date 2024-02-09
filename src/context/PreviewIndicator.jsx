import React from "react";
import cx from "classnames";

const PreviewIndicator = ({ isLoading = false }) => {
  return (
    <div className="preview-indicator">
      <span className="preview-indicator__wrapper">
        <svg
          className={cx({
            "is-loading": isLoading,
          })}
          viewBox="0 0 6 6"
          aria-hidden="true"
        >
          <circle cx={3} cy={3} r={3} />
        </svg>
        {isLoading ? "Preview is loading" : "Preview up-to-date"}
      </span>
    </div>
  );
};

export default PreviewIndicator;
