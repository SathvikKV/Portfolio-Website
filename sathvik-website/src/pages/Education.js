import React from "react";
import "./Education.css"; // Import the Education.css file for styling
import neuLogo from "../images/neu.png"; // Path for Northeastern University logo
import uiucLogo from "../images/uiuc.png"; // Path for UIUC logo

function Education() {
  return (
    <section className="education-section fade-in">
      <h2 className="section-title">Education</h2>

      {/* Northeastern University - Master's Degree */}
      <div className="education-item">
        <div className="education-content">
          <h3 className="degree-title">
            Master’s in Computer Information Systems
          </h3>
          <p className="institution-title">Northeastern University</p>
          <p className="location-duration">
            Boston, MA | January 2024 – Present
          </p>
          <div className="course-card">
            <div className="course-icon"></div>
            <div className="course-details">
              <span className="course-title">
                Application Engineering and Development (INFO 5100):
              </span>{" "}
              Course on software engineering and application design.
            </div>
          </div>
          <div className="course-card">
            <div className="course-icon"></div>
            <div className="course-details">
              <span className="course-title">
                Big Data Systems and Intelligence Analytics (INFO 7245):
              </span>{" "}
              Focus on big data processing and analytical techniques.
            </div>
          </div>
          <div className="course-card">
            <div className="course-icon"></div>
            <div className="course-details">
              <span className="course-title">
                Data Science Engineering Methods and Tools (INFO 6105):
              </span>{" "}
              Data science methodologies and tools for data analysis.
            </div>
          </div>
          <div className="course-card">
            <div className="course-icon"></div>
            <div className="course-details">
              <span className="course-title">
                Program Structures and Algorithms (INFO 6205):
              </span>{" "}
              Programming and algorithmic design structures.
            </div>
          </div>
        </div>
        <img
          src={neuLogo}
          alt="Northeastern University Logo"
          className="institution-logo"
        />
      </div>

      {/* University of Illinois Urbana-Champaign - Bachelor's Degree */}
      <div className="education-item">
        <div className="education-content">
          <h3 className="degree-title">Bachelor’s in Mechanical Engineering</h3>
          <p className="institution-title">
            University of Illinois Urbana-Champaign
          </p>
          <p className="location-duration">
            Champaign, IL | August 2018 – May 2022
          </p>
          <div className="course-card">
            <div className="course-icon"></div>
            <div className="course-details">
              <span className="course-title">
                Applied Design Thinking (ME 371):
              </span>{" "}
              Techniques for innovation and product development.
            </div>
          </div>
          <div className="course-card">
            <div className="course-icon"></div>
            <div className="course-details">
              <span className="course-title">
                Computer Aided Design (ME 190):
              </span>{" "}
              Principles of CAD modeling and design.
            </div>
          </div>
          <div className="course-card">
            <div className="course-icon"></div>
            <div className="course-details">
              <span className="course-title">
                Computer Aided Manufacturing Systems (ME 451):
              </span>{" "}
              Integration of manufacturing systems and technologies.
            </div>
          </div>
          <div className="course-card">
            <div className="course-icon"></div>
            <div className="course-details">
              <span className="course-title">Control Systems (ME 461):</span>{" "}
              Design and analysis of control systems.
            </div>
          </div>
          <div className="course-card">
            <div className="course-icon"></div>
            <div className="course-details">
              <span className="course-title">
                Design for Manufacturability (ME 270):
              </span>{" "}
              Design processes to enhance manufacturability.
            </div>
          </div>
          <div className="course-card">
            <div className="course-icon"></div>
            <div className="course-details">
              <span className="course-title">Fluid Mechanics (ME 310):</span>{" "}
              Study of fluid dynamics and applications.
            </div>
          </div>
          <div className="course-card">
            <div className="course-icon"></div>
            <div className="course-details">
              <span className="course-title">Heat Transfer (ME 320):</span>{" "}
              Fundamentals of heat transfer and applications.
            </div>
          </div>
          <div className="course-card">
            <div className="course-icon"></div>
            <div className="course-details">
              <span className="course-title">
                Senior Design Project (ME 470):
              </span>{" "}
              Capstone project applying engineering principles in a team
              environment.
            </div>
          </div>
          <div className="course-card">
            <div className="course-icon"></div>
            <div className="course-details">
              <span className="course-title">Solid Mechanics (TAM 251):</span>{" "}
              Analysis of stress, strain, and deformation in materials.
            </div>
          </div>
        </div>
        <img src={uiucLogo} alt="UIUC Logo" className="institution-logo" />
      </div>
    </section>
  );
}

export default Education;
