import React from "react";
import "./Success.css"; // Import the CSS file for styling

const Success = () => {
  return (
    <div className="success-container">
      <div className="success-card">
        <div className="success-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="checkmark"
            viewBox="0 0 52 52"
          >
            <circle
              className="checkmark-circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              className="checkmark-check"
              fill="none"
              d="M14 27l10 10 14-14"
            />
          </svg>
        </div>
        <h1 className="success-title">Payment Successful!</h1>
        <p className="success-message">
          Thank you for your purchase. Your payment has been processed
          successfully.
        </p>
        <a href="/" className="success-button">
          Go to Homepage
        </a>
      </div>
    </div>
  );
};

export default Success;
