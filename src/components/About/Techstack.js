import React from "react";
import { Col, Row } from "react-bootstrap";
import logoSerrano from "../../Assets/SerranoLogo.png";
import logoACB from "../../Assets/ACBEng.png";
import "../../style.css";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
          <img alt="Serrano" src={logoSerrano} width="100%" /> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
          <img alt="ACB" src={logoACB} width="100%" style={{ marginTop: "25%"}}/> 
      </Col>
    </Row>
  );
}

export default Techstack;
