
import React from 'react';
import './Css/About.css';
import profileImage from './photos/prem photo.jpg';
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Hello, I'm Santosh Mourya</h1>
        <p className="hero-description">
          I'm a student at the National Institute of Technology Goa with a strong interest in front-end development, business analysis, and in the electrical field.
        </p>
         <Link to="/More" className="hero-button"> More about me</Link>
      </div>
      <div className="hero-image">
        <img src={profileImage} alt="Santosh Mourya" className="profile-image" />
      </div>
    </section>
  );
};

export default Hero;
