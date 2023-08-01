import React from 'react';
import './App.css';
import FeaturedCompaniesSection from './FeaturedCompaniesSection';

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
              <img
                  src="/1.png" 
                  alt="Talentsphere Logo"
                  className="img-fluid rounded-circle"
              />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h2 className="section-title">About Talentsphere</h2>
                <p>
                  Talentsphere is a leading recruitment startup that connects
                  top companies with highly skilled professionals in the tech
                  industry. Our mission is to empower businesses to hire the
                  right talent and help job seekers find their dream roles.
                </p>
              </div>
              <div className="col-lg-6">
                <img
                  src="1.png"
                  alt="About Talentsphere"
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services">
          <div className="container">
            <h2 className="section-title">Our Services</h2>
            <div className="row">
              <div className="col-lg-4">
                <div className="service-card">
                  <img
                    src="/2.jpg"
                    alt="Service 1"
                    className="img-fluid rounded"
                  />
                  <h3>Software Engineering</h3>
                  <p>
                    Find talented software engineers who can turn your ideas
                    into reality.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="service-card">
                  <img
                    src="/3.jpg"
                    alt="Service 2"
                    className="img-fluid rounded"
                  />
                  <h3>Product Management</h3>
                  <p>
                    Discover visionary product managers to lead your product
                    development.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="service-card">
                  <img
                    src="/4.jpg"
                    alt="Service 3"
                    className="img-fluid rounded"
                  />
                  <h3>Data Science</h3>
                  <p>
                    Unlock the potential of data with skilled data scientists.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="featured-companies-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="section-title">Top Companies on TalentSphere</h2>
                <div className="featured-companies-list">
                  <div className="featured-company-banner">
                    <img src="./5.png" alt="Company 1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <p>&copy; {new Date().getFullYear()} Talentsphere. All rights reserved.</p>
            </div>
            <div className="col-lg-6">
              <ul className="social-links">
                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
