import React from 'react';
import './Css/projects.css'
import waterLevelImage from './photos/waterlevel.png';
import irrigationImage from './photos/irrigation.jpg';
import MavenImage from './photos/Maven.png';
import SalesImage from './photos/Sales.png';
import EmailImage from './photos/Eamil.png';
import CryptoImage from './photos/Crypto.png';
import VideoPlayer from './video.js';

const Projects = () => {
  return (
    <>
    <section className="projects" id="projects">
      <h1 className="projects-title">Some of my Recent Projects</h1>
      <h2 className="projects-title" >IOT Projects</h2>
      <div className="projects-container">
        <div className="project-container project-card1">
          <VideoPlayer />
       
          <h3 className="project-title">Smart Water Level Controller with Wi-Fi Connectivity and Dry Run Protection</h3>
          <p className="project-details">
          The water level controller with dry run protection was developed using a NodeMCU microcontroller, which communicates with the Blynk IoT platform.
          </p>
          <p className="project-details">
          An ultrasonic sensor is used to measure water levels, and the readings are displayed on a 16x2 LCD display for real-time monitoring.Relays are employed to switch the water pump or valve based on the desired water level. The system incorporates dry run protection to detect water shortage and activate an alarm or temporarily disable the pump to prevent damage.</p>
          <p className="project-details">
           This comprehensive solution enables precise monitoring, control, and protection in water management.</p>
       
          <a href="https://github.com/Santoshmourya05/WaterLevelCode" target="_blank" className="project-link">Check it Out</a>
        </div>
        <div/>
       
        <div className="project-container project-card1">
          <img
            src={irrigationImage} alt="Irrigation" 
            alt="irrigation"
            loading="lazy"
            className="project-pic"
          />
                <h3 className="project-title">Smart Wi-Fi Irrigation System: Efficient Water Management with Wireless Connectivity</h3>
                
          <p className="project-details">
          The smart water level irrigation system utilizes the NodeMCU microcontroller and the Blynk IoT app for remote monitoring and control. 
          </p>
          <p className="project-details">
          It employs sensors to measure water levels and soil moisture, optimizing irrigation for efficient water usage. The system includes relays for switching the water pump or valves, ensuring precise control. An LCD screen provides real-time information on water levels and system status. With NTP client-server functionality, the system enables accurate scheduling of motor activation. </p>
          <p className="project-details">
          Overall, this comprehensive system enhances irrigation management, promoting water conservation and improved plant health.</p>
          <a href="https://github.com/Santoshmourya05/Smart-Irrigation" target="_blank" className="project-link">Check it Out</a>
        </div>
      </div>
        </section>
        <section className="projects" id="projects">
  
      <h2 className="projects-title">Power BI Projects</h2>
      <div className="projects-container">
        <div className="project-container project-card">
        <img src={CryptoImage} alt="Water Level" 
            loading="lazy"
            className="project-pic"
          />
          <h3 className="project-title">Crypto Currency Analysis</h3>
          <p className="project-details">
          In my  report using powerbidesktop, I analyzed cryptocurrency data and transformed it into interactive visuals. The project involved clustering CSV files, creating forecasts, and utilizing DAX functions for calculations. The observations revealed Bitcoin's dominance in market value and the shift in market leadership from Bitcoin to Tether over the years. 
          </p>
          <a href="https://www.linkedin.com/posts/santosh-mourya-b38389229_thedocumentisattachedhere-activity-6958672313231794176-aJmy?utm_source=share&utm_medium=member_desktop" target="_blank" className="project-link">Check it Out</a>
        </div>
        <div/>

        <div className="project-container project-card">
          <img
            src={SalesImage} alt="Sales" 
            alt="irrigation"
            loading="lazy"
            className="project-pic"
          />
          <h3 className="project-title">Super Store Analysis</h3>
          <p className="project-details">
          Developed a Power BI dashboard for analyzing Global Superstore Sales Data (2011-2014), uncovering valuable insights.Identified sales growth and profitability trends, highlighting North America as the top market.Leveraged Power BI features for data exploration and informed decision-making.

          <p>






          </p>

          </p>
          <a href="https://www.linkedin.com/posts/santosh-mourya-b38389229_powerbi-microsoftpowerbi-dataanalysis-activity-6952960365940862977-b7vg?utm_source=share&utm_medium=member_desktop" target="_blank" className="project-link">Check it Out</a>
        </div>

        <div className="project-container project-card">
          <img
            src={EmailImage} alt="Email" 
            alt="irrigation"
            loading="lazy"
            className="project-pic"
          />
          <h3 className="project-title"> Email Campaign Analysis</h3>
          <p className="project-details">
          Created an interactive report on Email Marketing data using Power BI Desktop, showcasing insights from an email campaign analysis.Utilized a dataset spanning from 2019 to 2021 to analyze user engagement with email links in an e-commerce business similar to Amazon.
          </p>
          <a href="https://www.linkedin.com/posts/santosh-mourya-b38389229_document-is-attached-below-activity-6961564476244418560-ZL6X?utm_source=share&utm_medium=member_desktop" target="_blank" className="project-link">Check it Out</a>
        </div>

        <div className="project-container project-card">
          <img
            src={MavenImage} alt="MAven" 
            
            loading="lazy"
            className="project-pic"
          />
          <h3 className="project-title"> Maven Space Analysis </h3>
          <p className="project-details">
          During the Maven Analytics #mavenspacemissionchallenge, I used Microsoft Power BI Desktop to analyze space mission data. Key insights include the high success rate of RVSN USSR missions, the occurrence of failures and their types, and the retirement rate of rockets. The most successful year was 2021, and the challenge was engaging and captivating.
          </p>
          <a href="https://www.linkedin.com/posts/santosh-mourya-b38389229_space-challenge-document-activity-6962665455941488640-Hv1g?utm_source=share&utm_medium=member_desktop" target="_blank" className="project-link">Check it Out</a>
        </div>
      </div>

      
        </section>
</>

    
  );
};

export default Projects;
