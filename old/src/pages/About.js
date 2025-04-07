import React from "react";
import profilePicture from "../images/profile.jpeg"; // Adjust filename if needed
import "./About.css"; // Ensure this file is created for styling

function About() {
  return (
    <section className="about-container">
      {/* Profile Section */}
      <div className="about-header">
        <img src={profilePicture} alt="Profile" className="profile-picture" />
        <h2 className="section-title">
          Hi, I'm <span className="highlight">Sathvik Vadavatha</span> 👋
        </h2>
        <p className="intro-text">
          Master’s student in{" "}
          <span className="highlight">Information Systems</span> at Northeastern
          University, with a background in{" "}
          <span className="highlight">Mechanical Engineering</span> from UIUC.
        </p>
      </div>

      {/* About Content Sections */}
      <div className="about-content">
        {/* 🚀 Introduction */}
        <div className="about-section">
          <h3 className="about-subtitle">🚀 Introduction</h3>
          <p>
            My journey has taken me from{" "}
            <span className="highlight">engineering design</span> to the dynamic
            world of{" "}
            <span className="highlight">
              data science, analytics, and software development
            </span>
            . I thrive on solving complex problems through{" "}
            <span className="highlight">
              data-driven insights, AI, and scalable software solutions
            </span>
            .
          </p>
        </div>

        {/* 💻 Technical Skills */}
        <div className="about-section">
          <h3 className="about-subtitle">💻 Technical Skills</h3>
          <ul className="about-list">
            <li>
              🔹 <span className="highlight">Programming:</span> Python, SQL,
              Java, R
            </li>
            <li>
              📊 <span className="highlight">Data Science & Analytics:</span>{" "}
              Pandas, NumPy, TensorFlow, Keras, Tableau
            </li>
            <li>
              🛢️ <span className="highlight">Databases & Big Data:</span>{" "}
              PostgreSQL, Snowflake, MongoDB, Hadoop
            </li>
            <li>
              ☁️ <span className="highlight">Cloud & Web Technologies:</span>{" "}
              React, Vue.js, AWS, GCP, Azure, Docker, FastAPI
            </li>
            <li>
              ⚙️ <span className="highlight">Project Tools:</span> Jira,
              Confluence, Git, Airflow
            </li>
          </ul>
        </div>

        {/* 🔥 Passion & Interests */}
        <div className="about-section">
          <h3 className="about-subtitle">🔥 Passion & Interests</h3>
          <ul className="about-list">
            <li>
              🚀{" "}
              <span className="highlight">
                Turning raw data into actionable insights
              </span>{" "}
              with AI & analytics
            </li>
            <li>
              🌍 <span className="highlight">Building intelligent systems</span>{" "}
              that enhance decision-making
            </li>
            <li>
              ⚙️ <span className="highlight">Optimizing workflows</span> with
              AI-powered automation
            </li>
            <li>
              💡{" "}
              <span className="highlight">Exploring emerging technologies</span>{" "}
              like Generative AI & Agentic architectures
            </li>
          </ul>
        </div>

        {/* 🎯 Goals */}
        <div className="about-section">
          <h3 className="about-subtitle">🎯 Goals</h3>
          <p>
            <span className="highlight">Short-Term:</span> Secure a{" "}
            <span className="highlight">
              Summer 2025 Data Science, Data Analytics, or Software Engineering
              internship
            </span>{" "}
            to apply my skills in real-world projects.
          </p>
          <p>
            <span className="highlight">Long-Term:</span>
          </p>
          <ul className="about-list">
            <li>
              ✅ Build{" "}
              <span className="highlight">scalable AI-driven applications</span>{" "}
              that solve business challenges
            </li>
            <li>
              ✅ Work at the{" "}
              <span className="highlight">
                intersection of data, AI, and software development
              </span>
            </li>
            <li>
              ✅ Continue{" "}
              <span className="highlight">learning & contributing</span> to
              open-source & industry projects
            </li>
            <li>
              ✅ Take on <span className="highlight">leadership roles</span> in
              data-driven decision-making
            </li>
          </ul>
        </div>

        {/* 📩 Let's Connect */}
        <div className="about-section">
          <h3 className="about-subtitle">📩 Let's Connect</h3>
          <p>
            I’m always open to new opportunities, collaborations, and
            discussions about{" "}
            <span className="highlight">data science, AI, and automation</span>.
            Feel free to reach out!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
