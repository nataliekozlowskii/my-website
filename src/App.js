import React, { useEffect, useRef } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import * as THREE from "three";

import About from "./pages/About";
import Projects from "./pages/Projects";
import Research from "./pages/Research";

import "./App.css";

function App() {
  const headerRef = useRef(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    window.THREE = THREE;
    import("vanta/dist/vanta.fog.min").then((module) => {
      const FOG = module.default;
      if (headerRef.current && !vantaRef.current) {
        vantaRef.current = FOG({
          el: headerRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: 0x358bff,
          midtoneColor: 0xc5e6ff,
          lowlightColor: 0x7a73a6,
          blurFactor: 0.57,
        });
      }
    });

    return () => {
      if (vantaRef.current) vantaRef.current.destroy();
    };
  }, []);

  return (
    <Router>

      {/* Vanta Header */}
      <header className="App-header" ref={headerRef}>
        <h1>Natalie Kozlowski</h1>
        <p>EECS @ MIT // nkozlo@mit.edu</p>
        {/* Prominent links */}
        <div className="header-links">
          <a href="https://github.com/nataliekozlowskii" target="_blank" rel="noreferrer" className="header-button">
            GitHub
          </a>
          <a href="https://linkedin.com/in/nataliekozlowskii" target="_blank" rel="noreferrer" className="header-button">
            LinkedIn
          </a>
          <a href="mailto:nkozlo@mit.edu" className="header-button">
            Email Me
          </a>
        </div>
      </header>

      <div className="App">
        {/* Navigation */}
        <nav className="App-nav">
          <div className="nav-item">
            <Link to="/about">
              About Me
            </Link>
          </div>

          <div className="nav-item">
            <Link to="/research">
              Research
            </Link>
          </div>

          <div className="nav-item">
            <Link to="/projects">
              Projects
            </Link>
          </div>
        </nav>

        {/* Page Content */}
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/research" element={<Research />} />
        </Routes>

        {/* Footer */}
        <footer className="App-footer">
          <p>
            Natalie Kozlowski{" • "}
            <a href="https://github.com/nataliekozlowskii" target="_blank" rel="noreferrer">
              GitHub
            </a>{" • "}
            <a href="https://linkedin.com/in/nataliekozlowskii" target="_blank" rel="noreferrer">
              LinkedIn
            </a>{" • "}
            <a href="mailto:nkozlo@mit.edu" className="email-button">Email Me</a>
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
