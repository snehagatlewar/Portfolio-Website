import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Prediction Using Supervised ML",
      description: "To predict the percentage of a student based on no. of study hours. This is the Linear regression task as it involves just two variables.",
      imgUrl: projImg5,
    },

    {
      title: "Prediction Using Unsupervised ML",
      description: "To Predict The Optimum Number Of Clusters For The Iris Data Set. Iris Data Set Consists Of 3 Types Of Flower Namely Iris-Setosa Iris-Versicolour And Iris-Virginica.",
      imgUrl: projImg6,
    },

    {
      title: "Exploratory Data Analysis - Retail",
      description: "In This Task, We Have To Find Out The Weak Area Where We Can Work To Make More Profit.",
      imgUrl: projImg7,
    },
    
    {
      title: "E-COMMERCE WEBSITE ZUREA",
      description: "An online platform that allows users to browse, purchase, and sell products or services conveniently from anywhere.",
      imgUrl: projImg1,
    },
    {
      title: "PERSONAL PORTFOLIO",
      description: "A professional website showcasing my skills, experience, and projects as a software engineer.",
      imgUrl: projImg2,
    },
    {
      title: "DEVELOP MOBILE APPLICATION TO PROGRAM AND CONTROL ROBOT",
      description: "A Website designed to simplify robot control for enhanced accessibility.",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Showcasing my work in web development , including a Personal Portfolio, 
                  E-Commerce Website, and a Controlling Robotic Arm. Passionate about creating impactful, user-centered solutions.</p>
                 <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
