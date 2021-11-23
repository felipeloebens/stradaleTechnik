import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import aboutStradale from "../../Assets/aboutStradale.jpg";
import aboutStradale1 from "../../Assets/aboutStradale1.jpg";
import aboutStradale2 from "../../Assets/aboutStradale2.jpg";
import aboutStradale3 from "../../Assets/aboutStradale3.jpg";
import Toolstack from "./Toolstack";
import Tilt from "react-parallax-tilt";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
            Sobre a <strong className="main-name-red"> STRADALE </strong> <span className="main-nameTech">TECHNIK</span> 
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          > 
            
            <Carousel fade>
                <Carousel.Item>
                <Tilt>
                  <img
                    className="img-fluid"
                    src={aboutStradale}
                    alt="about"
                  />
                  </Tilt>
                </Carousel.Item>

                <Carousel.Item>
                <Tilt>
                  <img
                    className="img-fluid"
                    src={aboutStradale1}
                    alt="about"
                  />
                  </Tilt>
                </Carousel.Item>

                <Carousel.Item>
                <Tilt>
                  <img
                    className="img-fluid"
                    src={aboutStradale2}
                    alt="about"
                  />
                  </Tilt>
                </Carousel.Item>
              
                <Carousel.Item>
                <Tilt>
                  <img
                    className="img-fluid"
                    src={aboutStradale3}
                    alt="about"
                  />
                  </Tilt>
                </Carousel.Item>
            </Carousel>
            
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
