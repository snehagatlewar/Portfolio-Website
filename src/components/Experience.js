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
          <span className="experience-date">1 June 2022 - 1 July 2022</span>
          <h2 className="experience-role">Data Science & Bussiness Analytics</h2>
          <span className="experience-position">Intern</span>
          <div className="experience-description">
            <ul>
              <li>Utilized <b>Python</b> (Pandas, NumPy, Matplotlib, Seaborn) for exploratory data analysis and data visualization tasks.</li>
              <li>Implemented <b>machine learning models</b> (Linear Regression, K-Means Clustering) to derive actionable business insights from datasets.</li>
              <li>Collaborated in an <b>online data science community</b>, performing peer evaluations and sharing knowledge with global interns.</li>

            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
