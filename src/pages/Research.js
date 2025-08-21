import React from "react";
import ann_model_graphs from "../assets/ANN_model_results.png"; 

export default function Research() {
  return (
    <div className="App-content full-page">
      {/* Project 1 */}
      <section className="research-item">
        <h2>Machine Learning for Computational Chemistry</h2>
        <h3>
          <a 
            href="https://hjkgrp.mit.edu/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="header-button"
          >
            📍 Kulik Research Group @ MIT
          </a>
        </h3>

        <p>
          <strong>Skills: </strong>
          Python, ML (PyTorch, scikit-learn), Bash, SLURM, Linux shell, High-Performance Computing
        </p>
        <br></br>

        <ul className="research-list">
          <li>
            Trained Artificial Neural Networks (ANNs) and regression models including Random Forest,
            Gradient Boosted Decision Trees, and Kernel Ridge Regression Models for molecular
            property prediction including adsorption energy for faster materials discovery.
          </li>
          <li>
            Developed an active learning framework that trains ANNs
            by selecting training data based on distances in the model's
            latent space, improving accuracy while reducing the amount of data needed.
          </li>
          <li>
            Ran Molecular Dynamics and Monte Carlo simulations on high-performance clusters using
            Bash scripting and SLURM for job submission.
          </li>
        </ul>

        <img 
          src={ann_model_graphs} 
          alt="Graphs showing ANN model performance" 
          className="research-image"
        />
      </section>
    </div>
  );
}