import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Talentsphere
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main className="main">
        <section id="hero" className="hero">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h1 className="hero-title">Hire Top Talent</h1>
                <p className="hero-description">
                  We help companies find the best software engineers,
                  product managers, data scientists, and more.
                </p>
                <a href="#contact" className="btn btn-primary btn-lg">
                  Get Started
                </a>
              </div>
              <div className="col-lg-6">
                {/* Add an image or video here to showcase your brand */}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                {/* Add some content about your startup */}
              </div>
              <div className="col-lg-6">
                {/* Add an image or video related to your startup */}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services">
          <div className="container">
            <h2 className="section-title">Our Services</h2>
            <div className="row">
              <div className="col-lg-4">
                {/* Add service 1 */}
              </div>
              <div className="col-lg-4">
                {/* Add service 2 */}
              </div>
              <div className="col-lg-4">
                {/* Add service 3 */}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {/* Add footer content */}
            </div>
            <div className="col-lg-6">
              {/* Add social media links or any other relevant information */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
