import React, { useState, useEffect } from "react";
import "./Camp_safety.css";

function Camp_safety() {
  return (
    <div className="safety-component-container">
      <div className="safety-heading">Safety at Hopcamp</div>
      <div className="safety-card-container">
        <div className="safety-card">
          <div className="safety-card-content">
            <img
              src="https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_950,q_auto/internal/inclusion_policy_text_narrow.png"
              className="safety-card-image"
              altName="top1"
            ></img>
            <div className="logo">
              <img
                src="https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_256,q_auto/hipcamp_hand_hexqba.png"
                className="hipcamp-hand"
              />
            </div>
          </div>
          {/* <div className="card_button"> */}
          <a
            className="safety-card-button"
            href="https://support.hipcamp.com/hc/en-us/articles/360049636632/"
          >
            Learn More
          </a>
          {/* </div> */}
        </div>
        <div className="safety-card">
          <div className="safety-card-content">
            <img
              src="https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_950,q_auto/internal/hosting_standards_text.png"
              className="safety-card-image"
              altName="bot2"
            ></img>
          </div>
          <a
            className="safety-card-button"
            href="https://www.hipcamp.com/en-US/hoststandards"
          >
            Learn More
          </a>
        </div>
        <div className="safety-card">
          <div className="safety-card-content">
            <img
              src="https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_950,q_auto/internal/hipcamper_standards_text.png"
              className="safety-card-image"
              altName="bot3"
            ></img>
          </div>
          <a
            className="safety-card-button"
            href="https://www.hipcamp.com/journal/company-news/fire-safety-introducing-national-weather-service-integration"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}

export default Camp_safety;
