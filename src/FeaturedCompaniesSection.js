import React from 'react';
import './FeaturedCompaniesSection.css';

const FeaturedCompaniesSection = () => {
  return (
    <section id="featured-companies" className="featured-companies">
      <div className="container">
        <h2 className="section-title">Featured Companies on TalentSphere</h2>
        <div className="banner">
          <img src="/5.png" alt="Featured Companies Banner" className="banner-image" />
        </div>
        <div className="description">
          <p>
            We are proud to showcase some of the top companies that have found their talent through TalentSphere.
          </p>
          <p>
            Our platform connects skilled professionals with innovative companies, enabling them to work together and achieve their goals.
          </p>
          <p>
            Join TalentSphere today and discover your next career opportunity or find the perfect talent for your business.
          </p>
          <a href="#contact" className="btn btn-primary btn-lg">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCompaniesSection;
