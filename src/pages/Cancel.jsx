import React from "react";
import "./Cancel.css"; // Import the CSS file for styling

const Cancel = () => {
  return (
    <div className="cancel-container">
      <div className="cancel-card">
        <div className="cancel-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="crossmark"
            viewBox="0 0 52 52"
          >
            <circle
              className="crossmark-circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              className="crossmark-cross"
              fill="none"
              d="M17 17l18 18M17 35l18-18"
            />
          </svg>
        </div>
        <h1 className="cancel-title">Payment Canceled</h1>
        <p className="cancel-message">
          Oops! Something went wrong, and your payment was not completed.
        </p>
        <a href="/" className="cancel-button">
          Go Back to Homepage
        </a>
      </div>
    </div>
  );
};

export default Cancel;
