import React from "react";
import profilePicture from "../images/profile.jpeg"; // Adjust filename if needed
import "./About.css"; // Ensure this file is created for styling

function About() {
  return (
    <section className="section about-section">
      <h2 className="section-title">About Me</h2>
      <img src={profilePicture} alt="Profile" className="profile-picture" />

      <div className="about-content">
        {/* Introduction */}
        <div className="about-section">
          <h3 className="about-subtitle">Introduction</h3>
          <p>
            Hello! I’m Sathvik Vadavatha, a passionate and driven graduate
            student in Computer Information Systems at Northeastern University.
            I am dedicated to transforming data into actionable insights and
            impactful solutions. My academic journey began with a Bachelor’s
            degree in Mechanical Engineering from the University of Illinois
            Urbana-Champaign, where I developed a strong analytical mindset and
            technical foundation.
          </p>
        </div>

        {/* Skills */}
        <div className="about-section">
          <h3 className="about-subtitle">Skills</h3>
          <p>
            I’m proficient in programming languages such as{" "}
            <strong>Java, Python, R, SQL, and SAS</strong>. I have extensive
            experience with data analysis and machine learning tools like{" "}
            <strong>Pandas, NumPy, TensorFlow, and Keras</strong>, and am
            skilled in data visualization with tools like{" "}
            <strong>Tableau, Matplotlib, and Seaborn</strong>. Additionally, I’m
            well-versed in web and cloud technologies like{" "}
            <strong>React, AWS, Docker, and Git</strong>, and big data tools
            such as <strong>Hadoop and MongoDB</strong>.
          </p>
        </div>

        {/* Experience */}
        <div className="about-section">
          <h3 className="about-subtitle">Professional Experience</h3>
          <p>
            My professional journey includes working as a PLM Intern at ITC
            Infotech, where I optimized CAD data management workflows, and as a
            Data Analyst Intern at ITC Ltd, where I applied lean methodologies
            and data-driven strategies to optimize production processes and
            improve decision-making with a custom-built Tableau dashboard.
          </p>
        </div>

        {/* Goals and Passion */}
        <div className="about-section">
          <h3 className="about-subtitle">Goals and Passion</h3>
          <p>
            I am genuinely enthusiastic about leveraging my technical skills and
            creativity to contribute to meaningful projects. Whether it’s
            building automated systems for data extraction, engineering
            high-performance applications, or uncovering insights from complex
            datasets, I am always eager to tackle challenging problems and make
            an impact in the tech industry.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
