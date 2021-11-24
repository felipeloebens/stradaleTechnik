import React from "react";
import { Col, Row } from "react-bootstrap";
import logoBflash from "../../Assets/logoBflash.svg";
import Dimsport from "../../Assets/Dimsport.png";
import "../../style.css";



function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img alt="Bflash" src={logoBflash} style={{ width: "110px"}}/> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img alt="Dim" src={Dimsport}  style={{ width: "110px"}}/> 
      </Col>
    </Row>
  );
}

export default Toolstack;
