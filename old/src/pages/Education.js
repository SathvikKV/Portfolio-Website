import React from "react";
import "./Education.css"; // Ensure the CSS is updated
import neuLogo from "../images/neu.png"; // Northeastern University logo
import uiucLogo from "../images/uiuc.png"; // UIUC logo

function Education() {
  return (
    <section className="education-container">
      <h2 className="section-title">Education</h2>

      {/* Northeastern University - Master's Degree */}
      <div className="education-card">
        <img
          src={neuLogo}
          alt="Northeastern University Logo"
          className="institution-logo"
        />
        <div className="education-content">
          <h3 className="degree-title">
            Master’s in Computer Information Systems
          </h3>
          <p className="institution-title">Northeastern University</p>
          <p className="location-duration">
            Boston, MA | January 2024 – Present
          </p>

          <h4 className="course-section-title">Relevant Coursework</h4>
          <div className="course-list">
            <div className="course-item">
              <span className="course-title">
                Prompt Engineering & AI (INFO 7390):
              </span>
              <span className="course-description">
                AI-driven chatbot development and prompt design.
              </span>
            </div>
            <div className="course-item">
              <span className="course-title">
                Advances in Data Science (INFO 7375):
              </span>
              <span className="course-description">
                Exploration of the latest methodologies in data science and
                scalable architectures.
              </span>
            </div>
            <div className="course-item">
              <span className="course-title">
                Application Engineering (INFO 5100):
              </span>
              <span className="course-description">
                Full-stack development, application design, and software
                engineering principles.
              </span>
            </div>
            <div className="course-item">
              <span className="course-title">
                Big Data Systems (INFO 7245):
              </span>
              <span className="course-description">
                Scalable data processing techniques and distributed computing
                concepts.
              </span>
            </div>
            <div className="course-item">
              <span className="course-title">
                Data Science Methods (INFO 6105):
              </span>
              <span className="course-description">
                Machine learning models, data wrangling, and predictive
                analytics.
              </span>
            </div>
            <div className="course-item">
              <span className="course-title">
                Program Structures (INFO 6205):
              </span>
              <span className="course-description">
                Algorithmic problem-solving, data structures, and Java
                programming.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* University of Illinois Urbana-Champaign - Bachelor's Degree */}
      <div className="education-card">
        <img src={uiucLogo} alt="UIUC Logo" className="institution-logo" />
        <div className="education-content">
          <h3 className="degree-title">Bachelor’s in Mechanical Engineering</h3>
          <p className="institution-title">
            University of Illinois Urbana-Champaign
          </p>
          <p className="location-duration">
            Champaign, IL | August 2018 – May 2022
          </p>

          <h4 className="course-section-title">Relevant Coursework</h4>
          <div className="course-list">
            <div className="course-item">
              <span className="course-title">
                Applied Design Thinking (ME 371):
              </span>
              <span className="course-description">
                Innovation methodologies and product development strategies.
              </span>
            </div>
            <div className="course-item">
              <span className="course-title">
                Computer-Aided Design (ME 190):
              </span>
              <span className="course-description">
                3D modeling, CAD principles, and design automation.
              </span>
            </div>
            <div className="course-item">
              <span className="course-title">
                Manufacturing Systems (ME 451):
              </span>
              <span className="course-description">
                Integration of manufacturing processes and automation
                technologies.
              </span>
            </div>
            <div className="course-item">
              <span className="course-title">Control Systems (ME 461):</span>
              <span className="course-description">
                Advanced control theory, feedback systems, and real-time
                applications.
              </span>
            </div>
            <div className="course-item">
              <span className="course-title">
                Design for Manufacturability (ME 270):
              </span>
              <span className="course-description">
                Engineering design strategies optimized for efficient
                manufacturing.
              </span>
            </div>
            <div className="course-item">
              <span className="course-title">Fluid Mechanics (ME 310):</span>
              <span className="course-description">
                Study of fluid flow, aerodynamics, and real-world applications.
              </span>
            </div>
            <div className="course-item">
              <span className="course-title">Heat Transfer (ME 320):</span>
              <span className="course-description">
                Thermal energy systems, conduction, convection, and radiation.
              </span>
            </div>
            <div className="course-item">
              <span className="course-title">
                Senior Design Project (ME 470):
              </span>
              <span className="course-description">
                Capstone project applying mechanical engineering principles.
              </span>
            </div>
            <div className="course-item">
              <span className="course-title">Solid Mechanics (TAM 251):</span>
              <span className="course-description">
                Stress-strain analysis, material deformation, and structural
                mechanics.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
