import React from "react";

export default function Research() {
  return (
    <div className="App-content full-page">
      {/* Project 1 */}
      <section className="research-item">
        <h2>Battery Subsystem</h2>
        <h3>MIT Solar Electric Vehicle Team</h3>
        <p><strong>Skills:</strong> SOLIDWORKS, Ansys, Altium Designer</p>
        <br></br>
        <ul className="research-list">
          <li>
            Leading manufacturing of 768 cell Li-ion battery pack to power 
            multi-occupant solar electric vehicle to compete in American Solar Challenge 2026.
          </li>
          <li>
            Designed and validated battery cooling system, running CFD simulations in 
            Ansys to verify batteries kept below their maximum charging temperature in worst-case scenarios.
          </li>
        </ul>
      </section>

      {/* Project 2 */}
      <section className="research-item">
        <h2>Lab Data Processing</h2>
        <h3>Endless Health</h3>
        <p><strong>Skills:</strong> Python, Git</p>
        <br></br>
        <p>
          <ul className="research-list">
          <li>
            Developed Python software to automate processing of lab data.
          </li>
          <li>
            Verified software tools through testing and analysis of 5 new biomedical assays.
          </li>
        </ul>
        </p>
      </section>

      {/* Project 3 */}
      <section className="research-item">
        <h2>Personal Projects</h2>
        <h3>C++ Audio Processing & Visualization</h3>
        <p><strong>Skills:</strong> C++, signal processing</p>
        <br></br>
        <p>
          <ul className="research-list">
          <li>
            Built program for real-time audio capture, analysis, and visualization.
          </li>
          <li>
            Implemented Fast Fourier Transform with Hanning windowing to extract spectral features.
          </li>
        </ul>
        </p>
        <br></br>
        <h3>Deep Learning for EMG Signal Processing</h3>
        <p><strong>Skills:</strong> Python, ML (PyTorch, scikit-learn), signal processing</p>
        <br></br>
        <p>
          <ul className="research-list">
          <li>
            Trained Convolutional Neural Network on public dataset of 15,000+ EMG records.
          </li>
          <li>
            Applied deep learning to improve biomedical signal interpretation.
          </li>
        </ul>
        </p>
        <br></br>
        <h3>ESP32-based Servo System with Biomechanical Actuation</h3>
        <p><strong>Skills:</strong> C, embedded programming, ESP-IDF framework</p>
        <br></br>
        <p>
          <ul className="research-list">
          <li>
            Designed a servo control system interfacing an ESP32 with a flex sensor for biomechanical actuation.
          </li>
          <li>
            Verified system performance through hardware testing.
          </li>
        </ul>
        </p>
        <br></br>
        <h3>Personal Website</h3>
        <p><strong>Skills:</strong> React, JavaScript, HTML/CSS</p>
        <br></br>
        <p>
          <ul className="research-list">
          <li>
            Developed this portfolio website using React.
          </li>
        </ul>
        </p>
      </section>
    </div>
  );
}
