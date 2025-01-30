import React from 'react';
// import './Experience.css'; // Import the CSS file for styling

const Experience = () => {
  return (
    <section className="experience-container">
      

      <div className="experience-details">
        <div className="experience-item">
        <div className="header">
        <h1 className="experience-title">Experience</h1>
      </div>
      <br/>
          <span className="experience-date">15 Jan 2024 - 15 Oct 2024</span>
          <h2 className="experience-role">Java Fullstack Developer</h2>
          <span className="experience-position">Intern</span>
          <div className="experience-description">
            <ul>
              <li>Assist in building responsive and interactive user interfaces using HTML, CSS, and JavaScript.</li>
              <li>Learn to test and ensure cross-browser compatibility for front-end code.</li>
              <li>Explore the creation and use of web components for encapsulated, reusable elements across different or frame.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
