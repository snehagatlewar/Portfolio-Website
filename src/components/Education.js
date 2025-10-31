import React from 'react';
import educationBg from '../assets/img/banner-bg.png'; 
import  Experience from './Experience'

const Education = () => {
  return (
    <section className="education" style={{ backgroundImage: `url(${educationBg})` }}>
       <Experience/>
      <div className="row">
        <h1 className="big-4">Education</h1>
        {/* <div className="underline"></div> */}
      </div>
      <br />

      <div className="row">
        <div className="col-md-5">
          <div className="resume-wrap ftco-animate">
            <span className="date">2021-2024</span>
            <h2>Bachelor of Technology</h2>
            <span className="position">Govindrao Wanjari College of Engineering & Technology, Nagpur.</span>
            <p className="mt-4">CGPA: 7.7</p>
          </div>
        </div>

        <div className="col-md-5">
          <div className="resume-wrap ftco-animate">
            <span className="date">2019-2021</span>
            <h2>Diploma in Computer Engineering</h2>
            <span className="position">Dharampeth Polytechnic, Nagpur.</span>
            <p className="mt-4">Percentage: 79.71%</p>
          </div>
        </div>

        <div className="col-md-5" style={{marginTop: "20px", marginBottom: "100px"}}>
          <div className="resume-wrap ftco-animate">
            <span className="date">2017</span>
            <h2>School</h2>
            <span className="position">Vinaykrao Deshmukh Highschool, Nagpur.</span>
            <p className="mt-4">Percentage: 79.60%</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
