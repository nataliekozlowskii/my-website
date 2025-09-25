import React from "react";
import ann_model_graphs from "../assets/ANN_model_results.png"; 

export default function Research() {
  return (
    <div className="App-content full-page">
      {/* Project 2 */}
      <section className="research-item">
        <h2>Signal Processing & Machine Learning</h2>
        <h3>
          <a
            href="https://www.media.mit.edu/groups/fluid-interfaces/overview/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="header-button"
            >
            📍 Fluid Interfaces Group, Media Lab @ MIT
          </a>
        </h3>
        <p>
          <strong>Skills: </strong>
          Python, Machine Learning, Signal Processing, Data Analysis, Git
        </p>
        <br></br>
        <p> This project is a partnership between the Fluid Interfaces Group in the
          Media Lab and a clinical study with Mass. General Hospital focusing on minimally
          verbal autistic adult populations. In this project, I
          am building end-to-end signal processing pipelines in  Python for multimodal EOG, EEG,
          and EMG data analysis for better integration with brain-computer interface devices that
          help us understand differences resulting from neurodivergence.
        </p>
      </section>
      {/* Project 1 */}
      <section className="research-item">
        <h2>Machine Learning for Computational Science</h2>
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
          Python, Machine Learning (PyTorch, scikit-learn), Bash, SLURM, Linux shell, High-Performance Computing, Git
        </p>
        <br></br>
        <p>
          In this project, I focused on developing ML models in Python for molecular property prediction of 
          metal-organic frameworks. I ran over 2,000 Monte Carlo and molecular dynamics simulations on
          San Diego Supercomputer Center's Expanse cluster, using SLURM and bash scripting for job submission.
          I featurized this simulation data and used it to train models including Artificial Neural Networks (ANNs)
          and regression models like Random Forest, Gradient Boosted Decision Trees, and Kernel Ridge Regression
          models. By developing an active learning workflow that trains ANNs by selecting training data based on
          relative distance in the models' latent space, I was able to improve model performance by over 40%
          on test data while reducing the amount of training data needed.
        </p>

        <img 
          src={ann_model_graphs} 
          alt="Graphs showing ANN model performance" 
          className="research-image"
        />
      </section>
    </div>
  );
}