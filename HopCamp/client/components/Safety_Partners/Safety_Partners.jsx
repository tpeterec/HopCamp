import React, { useState, useEffect } from "react";
import "./Safety_Partners.css"

function Safety_Partners () {

    return (
        <div className="component-container">
            <h1 className="heading">Safety Partners</h1>
            <div className="card-container">
                <div className="partner-card">
                    <div className="card-content">
                        <img 
                        src="https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_550,q_auto/internal/recreate_responsibly_text.png"
                        className="card-image"
                        ></img>
                    </div>
                    <div className="card_button">
                        <a
                        // className="card-button"
                        href="https://www.recreateresponsibly.org/"
                        title="Learn More"
                        ></a>
                    </div>
                </div>
                <div className="partner-card">
                    <div className="card-content">
                        <img
                        src="https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_550,q_auto/internal/leave_no_trace_text.png"
                        className="card-image"
                        ></img>
                    </div>
                    <a
                    className="card-button"
                    href="https://lnt.org/why/7-principles/"
                    title="Learn More"
                    ></a>
                </div>
                <div className="partner-card">
                    <div className="card-content">
                        <img
                        src="https://hipcamp-res.cloudinary.com/f_auto,c_limit,w_550,q_auto/internal/national_weather_service_text.png"
                        className="card-image"
                        ></img>
                    </div>
                    <a
                    className="card-button"
                    href="https://www.hipcamp.com/journal/company-news/fire-safety-introducing-national-weather-service-integration"
                    title="Learn More"
                    ></a>
                </div>
            </div>
        </div>
    )

}

export default Safety_Partners;