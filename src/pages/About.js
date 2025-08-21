import React from "react";
import headshot from "../assets/headshot.jpg"; 
import resume from "../assets/EECS @ MIT - Natalie Kozlowski.pdf"

export default function About() {
  return (
    <div className="App-content full-page about-section">
      <div className="about-container">
        {/* Headshot */}
        <img src={headshot} alt="My headshot" className="about-headshot" />

        {/* Text */}
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hello! I'm a 2nd-year undergraduate student at MIT majoring in Electrical Engineering & 
            Computer Science. I have experience with software, hardware, and AI/ML.
          </p>

          {/* Resume Button */}
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-button"
          >
            View My Resume
          </a>
        </div>
      </div>
    </div>
  );
}