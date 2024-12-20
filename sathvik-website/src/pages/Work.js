import React from "react";
import "./Work.css"; // Import the Work.css file for styling
import itcInfotechLogo from "../images/itcinfotech.png";
import itcPSPSDLogo from "../images/itcpspd.png";
import dSystemsLogo from "../images/dsystems.jpeg";
import universalRobotsLogo from "../images/ur.png"; // Add this line for Universal Robots logo

function Work() {
  return (
    <section className="work-section fade-in">
      <h2 className="section-title">Work Experience</h2>

      <div className="work-item">
        <img
          src={itcInfotechLogo}
          alt="ITC Infotech Logo"
          className="company-logo"
        />
        <div className="work-content">
          <h3 className="job-title">PLM Intern</h3>
          <p className="company-title">ITC Infotech USA</p>
          <p className="location-duration">
            Frederick, MD | September 2022 – October 2023
          </p>
          <ul>
            <li>
              Developed and executed test cases for PTC Windchill, a Product
              Lifecycle Management (PLM) platform, to ensure seamless
              integration and functionality of CAD data.
            </li>
            <li>
              Organized and maintained CAD data, focusing on version control and
              change management to streamline design processes.
            </li>
            <li>
              Configured Windchill to align with business requirements,
              optimizing workflows for data handling and increasing
              productivity.
            </li>
          </ul>
        </div>
      </div>

      <div className="work-item">
        <img src={itcPSPSDLogo} alt="ITC PSPD Logo" className="company-logo" />
        <div className="work-content">
          <h3 className="job-title">Data Analyst Intern</h3>
          <p className="company-title">
            ITC Ltd (Paperboards and Specialty Papers Division)
          </p>
          <p className="location-duration">
            Hyderabad, India | June 2021 – August 2021
          </p>
          <ul>
            <li>
              Analyzed production processes using lean methodologies to identify
              waste reduction opportunities.
            </li>
            <li>
              Calibrated IoT proximity sensors on forklifts, enhancing safety
              and improving real-time detection.
            </li>
            <li>
              Built a Tableau dashboard for KPIs, enabling real-time
              decision-making and operational improvements.
            </li>
          </ul>
        </div>
      </div>

      <div className="work-item">
        <img
          src={dSystemsLogo}
          alt="Dassault Systems Logo"
          className="company-logo"
        />
        <div className="work-content">
          <h3 className="job-title">Process Consultant Intern</h3>
          <p className="company-title">Dassault Systems</p>
          <p className="location-duration">
            Bangalore, India | May 2020 – July 2020
          </p>
          <ul>
            <li>
              Assisted in process consulting projects to optimize operational
              workflows for clients in manufacturing and engineering.
            </li>
            <li>
              Gained experience with Dassault's suite of 3D design and
              engineering software, contributing to data analysis.
            </li>
            <li>
              Supported the development of client reports, showcasing process
              optimization results and recommendations.
            </li>
          </ul>
        </div>
      </div>

      {/* Universal Robots Section */}
      <div className="work-item">
        <img
          src={universalRobotsLogo}
          alt="Universal Robots Logo"
          className="company-logo"
        />
        <div className="work-content">
          <h3 className="job-title">Engineering Intern</h3>
          <p className="company-title">Universal Robots A/S</p>
          <p className="location-duration">India | June 2019 – July 2019</p>
          <ul>
            <li>
              Evaluated implementation and impact of collaborative robots by
              programming them for various industrial applications.
            </li>
            <li>
              Programmed a collaborative robot UR10 to drive 80% automation
              across three stations, reducing human effort by 10 FTE.
            </li>
            <li>
              Led the installation of a collaborative robot for a palletizing
              application on-site with custom client specifications.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Work;
