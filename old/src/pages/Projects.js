import React from "react";
import "./Projects.css";
import fuseImg from "../images/fuse.PNG";
import gearImg from "../images/gear.jpg";
import robotImg from "../images/robot.PNG";
import trayImg from "../images/tray.PNG";
import aiImg from "../images/summary.png";
import quickieImg from "../images/quickie.PNG";

function Projects() {
  return (
    <section className="projects-section">
      <h2 className="section-title">Projects</h2>

      {/* Information Systems Projects */}
      <div className="project-category">
        <h3 className="category-title">Information Systems Projects</h3>

        <div className="project-card">
          <img src={aiImg} alt="AI Text Summarizer" className="project-image" />
          <div className="project-details">
            <h3>Automated Data Ingestion & AI-Powered Summarization</h3>
            <ul>
              <li>
                Developed an Airflow-based data pipeline integrating S3 and
                Snowflake.
              </li>
              <li>
                Built an interactive FastAPI & Streamlit UI for document
                exploration.
              </li>
              <li>
                Containerized and deployed using Docker on a public cloud.
              </li>
            </ul>
            <a
              href="https://github.com/BigDataIA-Fall2024-TeamB8/Assignment-2"
              className="project-link"
            >
              View Project
            </a>
          </div>
        </div>

        <div className="project-card">
          <img src={quickieImg} alt="Quickie" className="project-image" />
          <div className="project-details">
            <h3>Ultra-Fast Grocery Delivery Platform</h3>
            <ul>
              <li>
                Developed an order management system using Java, MySQL, and
                Google Maps API.
              </li>
              <li>
                Implemented real-time tracking, admin dashboards, and
                data-driven analytics.
              </li>
              <li>
                Optimized order fulfillment for 10-minute grocery deliveries.
              </li>
            </ul>
            <a
              href="https://github.com/SathvikKV/INFO5100-FinalProject-Team11"
              className="project-link"
            >
              View Project
            </a>
          </div>
        </div>

        <div className="project-card">
          <div
            className="project-image-placeholder"
            id="bitcoin-analysis"
          ></div>
          <div className="project-details">
            <h3>Bitcoin Price Analysis & Trend Prediction</h3>
            <ul>
              <li>
                Developed a Python-based system for historical Bitcoin data
                analysis.
              </li>
              <li>
                Implemented ARIMA models and K-means clustering for price
                forecasting.
              </li>
              <li>Created visualizations using Matplotlib and Seaborn.</li>
            </ul>
            <a href="#" className="project-link">
              View Project
            </a>
          </div>
        </div>
      </div>

      {/* Mechanical Engineering Projects */}
      <div className="project-category">
        <h3 className="category-title">Mechanical Engineering Projects</h3>

        <div className="project-card">
          <img src={fuseImg} alt="Fuse Design" className="project-image" />
          <div className="project-details">
            <h3>Fuse Element Design for Littelfuse Inc.</h3>
            <ul>
              <li>
                Designed & optimized a new fuse element for electric vehicles.
              </li>
              <li>
                Performed FEA and fatigue testing, improving durability by 83%.
              </li>
              <li>Conducted overload tests to enhance reliability.</li>
            </ul>
            <a
              href="https://docs.google.com/presentation/d/1n_T33HZPz9eYb9_Qu4yyI0YgiJCRmbqX/edit?usp=sharing"
              className="project-link"
            >
              View Project
            </a>
          </div>
        </div>

        <div className="project-card">
          <img
            src={gearImg}
            alt="Manual Transmission System"
            className="project-image"
          />
          <div className="project-details">
            <h3>Manual Transmission System</h3>
            <ul>
              <li>Designed a planetary gear system with three power modes.</li>
              <li>Performed gear train calculations and 3D modeling.</li>
              <li>Built a functional prototype using 3D printing.</li>
            </ul>
            <a href="#" className="project-link">
              View Project
            </a>
          </div>
        </div>

        <div className="project-card">
          <img src={robotImg} alt="Robot Line" className="project-image" />
          <div className="project-details">
            <h3>Wall Sensing & Color Recognition Robot</h3>
            <ul>
              <li>Developed a two-wheeled autonomous robot using TI C2000.</li>
              <li>
                Integrated Raspberry Pi 4 and various sensors for automation.
              </li>
              <li>Implemented live tracking in LabView.</li>
            </ul>
            <a
              href="https://www.hackster.io/sathvik-vadavatha/obstacle-detecting-and-color-following-robot-pair-2b60ba"
              className="project-link"
            >
              View Project
            </a>
          </div>
        </div>

        <div className="project-card">
          <img
            src={trayImg}
            alt="Test Tube Dispensing Mechanism"
            className="project-image"
          />
          <div className="project-details">
            <h3>Test Tube Dispensing Mechanism</h3>
            <ul>
              <li>
                Designed a four-bar linkage system for automated test tube
                handling.
              </li>
              <li>
                Integrated a rack-and-pinion mechanism for precise adjustments.
              </li>
              <li>
                Conducted torque analysis to optimize gear train performance.
              </li>
            </ul>
            <a
              href="https://www.youtube.com/watch?v=j3S8Jn7C3iE&ab_channel=SathvikVadavatha"
              className="project-link"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
