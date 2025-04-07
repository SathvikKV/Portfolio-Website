import React from "react";
import "./Work.css";
import itcInfotechLogo from "../images/itcinfotech.png";
import itcPSPSDLogo from "../images/itcpspd.png";
import dSystemsLogo from "../images/dsystems.jpeg";
import universalRobotsLogo from "../images/ur.png";

function Work() {
  return (
    <section className="work-section">
      <h2 className="section-title">Work Experience</h2>

      {/* Work Experience Cards */}
      <div className="work-container">
        {/* ITC Infotech */}
        <div className="work-card">
          <img
            src={itcInfotechLogo}
            alt="ITC Infotech Logo"
            className="company-logo"
          />
          <div className="work-details">
            <h3 className="job-title">PLM Intern</h3>
            <p className="company-title">ITC Infotech USA</p>
            <p className="location-duration">
              Frederick, MD | Sept 2022 – Oct 2023
            </p>
            <ul>
              <li>
                Developed & executed test cases for PTC Windchill to ensure
                seamless CAD data integration.
              </li>
              <li>
                Managed CAD data version control & change management for
                optimized workflows.
              </li>
              <li>
                Configured Windchill to align with business needs, improving
                productivity.
              </li>
            </ul>
          </div>
        </div>

        {/* ITC PSPD */}
        <div className="work-card">
          <img
            src={itcPSPSDLogo}
            alt="ITC PSPD Logo"
            className="company-logo"
          />
          <div className="work-details">
            <h3 className="job-title">Data Analyst Intern</h3>
            <p className="company-title">
              ITC Ltd (Paperboards and Specialty Papers Division)
            </p>
            <p className="location-duration">
              Hyderabad, India | June 2021 – Aug 2021
            </p>
            <ul>
              <li>
                Applied lean methodologies to analyze production processes and
                identify inefficiencies.
              </li>
              <li>
                Calibrated IoT proximity sensors on forklifts, improving safety
                & real-time detection.
              </li>
              <li>
                Designed a real-time KPI dashboard in Tableau for operational
                insights.
              </li>
            </ul>
          </div>
        </div>

        {/* Dassault Systems */}
        <div className="work-card">
          <img
            src={dSystemsLogo}
            alt="Dassault Systems Logo"
            className="company-logo"
          />
          <div className="work-details">
            <h3 className="job-title">Process Consultant Intern</h3>
            <p className="company-title">Dassault Systems</p>
            <p className="location-duration">
              Bangalore, India | May 2020 – July 2020
            </p>
            <ul>
              <li>
                Optimized client workflows in manufacturing & engineering
                through process consulting.
              </li>
              <li>
                Worked with Dassault’s 3D design software to support data-driven
                decision-making.
              </li>
              <li>
                Developed client reports to showcase process improvements &
                recommendations.
              </li>
            </ul>
          </div>
        </div>

        {/* Universal Robots */}
        <div className="work-card">
          <img
            src={universalRobotsLogo}
            alt="Universal Robots Logo"
            className="company-logo"
          />
          <div className="work-details">
            <h3 className="job-title">Engineering Intern</h3>
            <p className="company-title">Universal Robots A/S</p>
            <p className="location-duration">India | June 2019 – July 2019</p>
            <ul>
              <li>
                Developed automation solutions using UR10 collaborative robots.
              </li>
              <li>
                Automated 80% of tasks across 3 industrial stations, reducing
                manual labor.
              </li>
              <li>
                Led the installation of a collaborative robot for a palletizing
                application.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
