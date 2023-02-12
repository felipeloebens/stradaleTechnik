import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactCard from "./ContactCard";
import Particle from "../Particle";

function Contact() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
            Entre em <strong className="main-name-red"> CONTATO </strong> conosco...
            </h1>
          </Col>    
          </Row>   
          <ContactCard/>
      </Container>
    </Container>
  );
}

export default Contact;
