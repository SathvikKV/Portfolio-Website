import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects-section">
      <h2 className="section-title">Projects</h2>

      {/* Information Systems Projects */}
      <div className="project-category">
        <h3 className="category-title">Information Systems Projects</h3>

        <div className="project-card">
          <div className="project-image" id="data-ingestion"></div>
          <div className="project-details">
            <h3>
              Automated Data Ingestion and Client-Facing Application Development
            </h3>
            <p>
              Developed a robust data ingestion pipeline using Airflow to
              collect and upload data from CFA Institute Research Foundation
              Publications to Amazon S3, with subsequent storage in Snowflake.
              Built a user-friendly client-facing application with FastAPI and
              Streamlit, allowing users to explore documents, generate
              summaries, and interact through a Q&A interface utilizing
              multi-modal Retrieval-Augmented Generation (RAG) and NVIDIA
              services. The fully containerized application was deployed to the
              public cloud, enabling seamless document querying and incremental
              search.
            </p>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image" id="grocery-delivery"></div>
          <div className="project-details">
            <h3>
              Java Application Engineering: Ultra-Fast Grocery Delivery Platform
            </h3>
            <p>
              Engineered a real-time order management and delivery platform
              using Java, MySQL, and Google Maps API, designed to ensure
              10-minute grocery deliveries. The system featured real-time
              tracking, customer support integration, and administrative
              insights powered by Tableau for improved performance monitoring
              and data-driven decision-making.
            </p>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image" id="bitcoin-analysis"></div>
          <div className="project-details">
            <h3>Bitcoin Price Analysis and Trend Prediction</h3>
            <p>
              Developed a comprehensive analysis system for Bitcoin prices,
              leveraging Python, Pandas, and historical price data to identify
              trends and predict future price movements. Implemented ARIMA
              models for time series forecasting and applied K-means clustering
              to segment price trends based on volatility, providing insights
              into market behavior and investment strategies.
            </p>
          </div>
        </div>
      </div>

      {/* Mechanical Engineering Projects */}
      <div className="project-category">
        <h3 className="category-title">Mechanical Engineering Projects</h3>

        <div className="project-card">
          <div className="project-image" id="fuse-design"></div>
          <div className="project-details">
            <h3>Fuse Element Design for Littelfuse Inc.</h3>
            <p>
              Designed an advanced fuse element for Littelfuse’s 70V product
              line, enhancing durability for electric vehicles. Conducted Finite
              Element Analysis (FEA) and fatigue testing on various designs,
              achieving an 83% improvement in mechanical cycling fatigue and
              reducing arcing energy by 5% during overload tests.
            </p>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image" id="transmission-system"></div>
          <div className="project-details">
            <h3>Manual Transmission System</h3>
            <p>
              Designed a planetary gear transmission system with three distinct
              power modes, enabling it to lift various weight sets. Utilized
              gear train calculations and advanced 3D modeling techniques to
              create a fully functional prototype through 3D printing.
            </p>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image" id="robot-line"></div>
          <div className="project-details">
            <h3>Wall Sensing and Color Recognition Robot Line</h3>
            <p>
              Developed a two-wheeled autonomous robot equipped with
              wall-sensing and color recognition capabilities. Utilized a TI
              C2000 microprocessor, Raspberry Pi 4, and various sensors to
              enable autonomous operation, with live tracking in LabView.
            </p>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image" id="test-tube-dispensing"></div>
          <div className="project-details">
            <h3>Test Tube Dispensing Mechanism</h3>
            <p>
              Engineered a four-bar linkage system with a rack and pinion
              adjustment mechanism to facilitate precise test tube dispensing
              from a tray. Conducted PVA and torque analysis to ensure
              reliability and optimized a gear train to synchronize all
              mechanisms effectively.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
