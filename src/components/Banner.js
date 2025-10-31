import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import my from "../assets/img/my.jpg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Data Analyst", "Business Analyst"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Sneha `}
                    <br />
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Data Analyst", "Business Analyst" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>

                  <p>
                    I'm <b>Sneha Rajendra Gatlewar</b>, a dedicated{" "}
                    <b>Data and Business Analyst</b> from Nagpur with hands-on
                    experience in{" "}
                    <b>Python, Excel, SQL, Power BI, and Data Visualization</b>.
                    I worked on real-world data projects during my internship at{" "}
                    <b>The Sparks Foundation</b>, focusing on data cleaning,
                    analysis, and dashboard creation. With a background in{" "}
                    <b>Electronics & Telecommunications Engineering</b> and a
                    passion for analytics, I aim to turn data into meaningful
                    insights and support data-driven decisions.
                  </p>

                  <button
                    onClick={() => {
                      const link = document.createElement("a");
                      // ✅ Correct path for public folder files:
                      link.href = process.env.PUBLIC_URL + "/cv/Sneha_Gatlewar_DA.pdf";
                      link.download = "Sneha_Gatlewar_DA.pdf";
                      link.click();
                    }}
                  >
                    Download CV
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <img src={my} alt="Header Img" className="header-img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
