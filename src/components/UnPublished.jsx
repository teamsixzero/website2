import React from "react";

const UnPublished = () => {
  return (
    <div className="unpublished">
      <div className="unpublished__wrapper">
        <div className="unpublished__wrapper__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4m0-4h0" />
          </svg>
        </div>
        <div className="unpublished__wrapper__content">
          <h3>
            <b>Preview mode info</b>
          </h3>
          {/* <p>
            You have created a new document that isn't yet published. Please
            publish to access preview mode.
          </p> */}
          <p>
            You have created a new document that isn't yet published. Start adding content to see a preview.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnPublished;
