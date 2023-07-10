import React from 'react';
import './Css/Experience.css';
import NioLogo from "./photos/National_Institute_of_Oceanography_logo.jpeg";
import ServonLogo from "./photos/servon.jpeg";
import SolvitudeLogo from "./photos/solvitude.jpeg";
import SparkLogo from "./photos/spark.webp";

function Education() {
  const experienceData = [
    {
      companyName: 'National Institute Of Oceanography (CSIR-NIO)',
      jobTitle: 'Research Intern',
      duration: 'May 2023 - Present',
      description: 'Worked as a research intern at CSIR-NIO Goa from 18th May to present. Designed a controller and observer for an underwater vehicle C-bot and implemented altitude control to the vehicle.',
      skills: ['Controller Design', 'Observer Design', 'MATLAB', 'Simulink'],
      logo: NioLogo
    },
    {
      companyName: 'SparkPlus Technologies',
      jobTitle: 'Front-end Developer Intern',
      duration: 'Jan 2023 - Apr 2023',
      description: 'Worked as a front-end developer intern at SparkPlus Technologies in Mapusa, Goa. Developed and tested tools using Postman, React.js, HTML, CSS, and JavaScript.',
      skills: ['React.js', 'HTML', 'CSS', 'JavaScript', 'Postman',"Redux"],
      logo: SparkLogo
    },
    {
      companyName: 'Servon Solution LLP',
      jobTitle: 'Subject Matter Expert',
      duration: 'Oct 2021 - Jan 2022',
      description: 'I had finished my three-month internship at Servon Solution LLP as a SME (MATHEMATICS). I collaborated on a team to create math content for the Brainly app using brainly CMS Portal and latex and answered live questions up to the K–12/JEE level.',
      skills: ['Mathematics', 'LaTeX', 'Geogebra', 'Desmos'],
      logo: ServonLogo
    },
    {
      companyName: 'Solvitude Solutions',
      jobTitle: 'Subject Matter Expert',
      duration: 'Nov 2021 - Jan 2022',
      description: 'I had a great experience during my four-month internship with Solvitude Solutions as a SME (MATHEMATICS). Live questions up to the K–12/JEE level were answered at the Gauth Expert app.',
      skills: ['Mathematics'],
      logo: SolvitudeLogo
    }
  ];

  return (
    <div className="experience">
      <h1 className="experience-title">Experience</h1>
      <div className="experience-list">
        {experienceData.map((experience, index) => (
          <div className="card" key={index}>
            <div className="card-header">
              <img className="company-logo" src={experience.logo} alt={experience.companyName} />
              <h3 className="company-name">{experience.companyName}</h3>
            </div>
            <div className="card-body">
              <p className="job-title">{experience.jobTitle}</p>
              <p className="duration">{experience.duration}</p>
              <p className="description">{experience.description}</p>
              <ul className="skill-list">
                {experience.skills.map((skill, index) => (
                  <li className="skill" key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
