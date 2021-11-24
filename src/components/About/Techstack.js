import React from "react";
import { Col, Row } from "react-bootstrap";
import logoSerrano from "../../Assets/SerranoLogo.png";
import logoACB from "../../Assets/ACBEng.png";
import "../../style.css";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
          <img alt="Serrano" src={logoSerrano} style={{ width: "120px"}} /> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
          <img alt="ACB" src={logoACB} style={{ marginTop: "5%", width: "120px"}}/> 
      </Col>
    </Row>
  );
}

export default Techstack;
