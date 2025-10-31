import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Prediction Using Supervised ML",
      description:
        "To predict the percentage of a student based on the number of study hours. This is a Linear Regression task as it involves two variables.",
      imgUrl: projImg5,
    },
    {
      title: "Prediction Using Unsupervised ML",
      description:
        "To predict the optimum number of clusters for the Iris dataset, which consists of 3 flower types: Setosa, Versicolour, and Virginica.",
      imgUrl: projImg6,
    },
    {
      title: "Exploratory Data Analysis - Retail",
      description:
        "Analyzing retail data to identify weak areas and provide insights for improving profitability.",
      imgUrl: projImg7,
    },
    {
      title: "E-Commerce Website Zurea",
      description:
        "An online platform that allows users to browse, purchase, and sell products or services conveniently from anywhere.",
      imgUrl: projImg1,
    },
    {
      title: "Personal Portfolio",
      description:
        "A professional website showcasing my skills, experience, and projects as a data and business analyst.",
      imgUrl: projImg2,
    },
    {
      title: "Mobile App to Program and Control Robot",
      description:
        "A mobile app designed to simplify robot control and enhance accessibility for users.",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Showcasing my work in data analytics and web development —
                    including machine learning tasks, exploratory data analysis,
                    a personal portfolio, an e-commerce platform, and robotics
                    projects. I’m passionate about creating impactful,
                    data-driven solutions that bridge technology and insight.
                  </p>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible
                          ? "animate__animated animate__slideInUp"
                          : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="section">
                        <p>
                          More projects and experiments in progress — stay
                          tuned!
                        </p>
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <p>
                          I also enjoy collaborating on open-source analytics
                          projects and exploring AI-driven insights.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background decoration"
      />
    </section>
  );
};
