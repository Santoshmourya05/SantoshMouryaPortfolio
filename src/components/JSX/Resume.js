import React from 'react';
import './Css/Resume.css';
import resumePDF from './Support/Santosh_Resume.pdf';

const Resume = () => {
  return (
    <div className='Resume'>
      <div className="resume-container">
        <h1>Resume</h1>
        <p className="resume-description">Click the button below to download my resume:</p>
        <a href={resumePDF} download className="resume-button">Download Resume</a>
      </div>
    </div>
  );
};

export default Resume;
