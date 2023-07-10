import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import {
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaBirthdayCake,
} from "react-icons/fa";
import "./Css/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      
      <a href="https://www.instagram.com/santosh_05_05/">
        <FaInstagram />
      </a>
      <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </a>
      <a href="https://www.linkedin.com/in/example" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://github.com/example" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      </div>
    <div className="bio-data">
            <p>
              <FaMapMarkerAlt  /> Address: Margao, Goa, India
            </p>
            <p>
              <FaPhone className="rotated-icon" /> Phone: 8080449247
            </p>
            <p>
              <FaEnvelope /> Email: mouryasantosh209@gmail.com
            </p>
            <p>
              <FaBirthdayCake /> Date of Birth: May 5, 2002
            </p>
          </div>
        </div>
  );
}

export default Footer;