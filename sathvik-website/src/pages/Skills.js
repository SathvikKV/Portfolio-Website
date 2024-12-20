import React from "react";

function Skills() {
  return (
    <section className="skills-section">
      <h2 className="section-title">Skills</h2>
      <div className="icon-grid">
        {/* Sample Icons */}
        <div className="icon-card">
          <img src="path-to-html-icon" alt="HTML" />
        </div>
        <div className="icon-card">
          <img src="path-to-css-icon" alt="CSS" />
        </div>
        <div className="icon-card">
          <img src="path-to-js-icon" alt="JavaScript" />
        </div>
      </div>
    </section>
  );
}

export default Skills;
