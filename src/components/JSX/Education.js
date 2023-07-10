import React from 'react';
import './Css/Education.css';

import HolyLogo from "./photos/holy.jpg";
import DamodarLogo from "./photos/shreedamodar_logo.jpg";
import NitLogo from "./photos/NIT_Goa_logo.png";
function Experience() {
  const experienceData = [
    {
      SchoolName: 'Holy Spirit Institue Margao Goa',
      Board: 'Goa Board',
      duration1: '2018 -  2020',
      Percentage: '82.68%',
      logo:HolyLogo
    },
    {
      SchoolName: 'Shree Damodar Higher Secondary School Of Science',
      Board: 'Goa Board',
      duration1: '2018 -  2020',
      Percentage: '75%',
      logo:DamodarLogo
    },
    {
        SchoolName: 'National Institute Of Technology Goa',
        Board: 'Goa Board',
        duration1: '2020 -  2024',
        Percentage: '75.6 GPA',
        logo:NitLogo
      }
  ];

  return (
    <div>
    <div className="Education1" href= "Education">
    <h1>Education</h1>
      <div className='container1'>
     
      {experienceData.map((experience, index) => (
        <div class="card1">
        <div className="Education-item" key={index}>
        <div className="card1-header">
                <img className="company-logo" src={experience.logo} alt={experience.companyName} />
                <h3 className="company-name">{experience.companyName}</h3>
              </div>
          <h3>{experience.SchoolName}</h3>
          <p className="job-title1">{experience.Board}</p>
          <p className="duration1">{experience.duration1}</p>
          <p className="Percenatge1">{experience.Percentage}</p>
        </div>
        </div>
      ))}
      </div>
    </div>
    </div>
  );
}

export default Experience;

