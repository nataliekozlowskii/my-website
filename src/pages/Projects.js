import React from "react";
import battery_box from "../assets/battery_box_and_cell_layout.png"; 
import module from "../assets/individual_battery_module.png"; 

export default function Research() {
  return (
    <div className="App-content full-page">
      {/* Project 1 */}
      <section className="research-item">
        <h2>Battery Subsystem</h2>
        <h3>MIT Solar Electric Vehicle Team</h3>
        <p><strong>Skills:</strong> SOLIDWORKS, Ansys, Altium Designer</p>
        <br></br>
        <p>
          I'm on the Electrical Engineering subteam of MIT's Solar Electric Vehicle Team,
          where I am working on a 768 cell Li-ion battery module to power a multi-occupant
          solar electric vehicle that will compete in the American Solar Challenge in 2026.
          I led computational fluid dynamics simulations in Ansys to model the thermal performance
          of our battery and verify module safety under peak charging conditions, and I am collaborating
          across subteams to help integrate the battery with other subsystems.
        </p>
        <h4>CAD of entire battery box (left) and overall cell layout (right)</h4>
        <img 
          src={battery_box} 
          alt="Image of entire battery box CAD and cell layout" 
          className="research-image"
        />
        <h4>Individual battery module CAD</h4>
        <img 
          src={module} 
          alt="Image of individual battery module" 
          className="research-image"
        />
      </section>

      {/* Project 2 */}
      <section className="research-item">
        <h2>Lab Data Processing</h2>
        <h3>Endless Health</h3>
        <p><strong>Skills:</strong> Python, Git</p>
        <br></br>
        <p>
          I developed workflows in Python to automate data analysis on a new ELISA instrument in the lab,
          helping make assay validation more efficient and supporting the expansion of a hormone panel
          by 5 additional biomarkers.
        </p>
      </section>

      {/* Project 3 */}
      <section className="research-item">
        <h2>Personal Projects</h2>
        <h3>C++ Audio Processing & Visualization</h3>
        <p><strong>Skills:</strong> C++, signal processing</p>
        <br></br>
        <p>
          I built a program for real-time audio capture, analysis, and visualization using C++,
          implementing a Fast Fourier Transform algorithm with Hanning windowing to extract spectral
          features and implemented signal processing techniques like audio equalization for audio
          processing.
        </p>
        <br></br>
        <h3>Deep Learning for EMG Signal Processing</h3>
        <p><strong>Skills:</strong> Python, machine learning (PyTorch, scikit-learn), signal processing</p>
        <br></br>
        <p>
          I trained a Convolutional Neural Network on a public dataset of 15,000+ EMG records
          for gesture classification.
        </p>
        <br></br>
        <h3>ESP32-based Servo System with Biomechanical Actuation</h3>
        <p><strong>Skills:</strong> C, embedded programming, ESP-IDF framework</p>
        <br></br>
        <p>
          I designed a servo control system, interfacing an ESP32 with a flex sensor
          for biomechanical actuation and verifying system performance via hardware testing.
        </p>
        <br></br>
        <h3>Personal Website</h3>
        <p><strong>Skills:</strong> React, JavaScript, HTML/CSS</p>
        <br></br>
        <p>
          I developed this personal website using React!
        </p>
      </section>
    </div>
  );
}
