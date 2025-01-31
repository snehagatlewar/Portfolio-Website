import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import my from "../assets/img/my.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Software Developer", "FrontEnd Developer", "BackEnd developer", "Java FullStack Developer" ];
   const period = 2000;

  useEffect (() => {
    let ticker = setInterval (() => {
      tick();
    }, delta)

    return () => { clearInterval(ticker) };
   }, [text])

   const tick = () => {
     let i = loopNum % toRotate.length;
     let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
           setDelta(prevDelta => prevDelta / 2);
           }
      
           if (!isDeleting && updatedText === fullText) {
             setIsDeleting(true);
             setIndex(prevIndex => prevIndex - 1);
             setDelta(period);
         } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
           } else {
           setIndex(prevIndex => prevIndex + 1);
           }
          }
  

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
          <TrackVisibility>
          {({ isVisible }) =>
          <div className={isVisible ? "animate__animated animate__fadeIn" : ""} >
            <span className="tagline" >Welcome to my Portfolio</span>
            <h1>
              {`Hi! I'm Sneha `}{""} 
              <br/>
              <span
                className="txt-rotate"
                dataPeriod="1000"
                data-rotate='[ "Software Developer", "FrontEnd Developer", "BackEnd developer", "Java FullStack Developer" ]'
              >
                <span className="wrap">{text}</span>
              </span>
            </h1>
            <p> I'm <b>Sneha Rajendra Gatlewar</b>, a passionate <b>Software Engineer</b> from Nagpur, specializing in 
                  both front-end and back-end development with skills in <b>HTML, CSS, JavaScript, Bootstrap, React js, Java </b>
                  and  <b>SQL</b>. I interned at <b>Anishree Technologies Pvt. Ltd.</b>, focusing on creating 
                  responsive, user-friendly websites. I hold a degree in Electronics & Telecommunications 
                  Engineering and have a strong passion for problem-solving. Always eager to learn and grow, 
                  I’m excited to continue exploring new challenges in the tech field.
            </p>
    

                <button onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/cv/Sneha _Gatlewar_new.pdf';
                  link.download = 'Sneha_Gatlewar_new.pdf'; 
                  link.click();
                    }}>
                    Download CV
                  </button>


            </div>}
            </TrackVisibility>
          </Col>

          <Col xs={12} md={6} xl={5}>
            {/* <img src={headerImg} alt="Header Img" /> */}
           <img src={my} alt="Header Img" className="header-img"  />
          </Col>
        </Row> 
      </Container>
    </section>
  );
}
