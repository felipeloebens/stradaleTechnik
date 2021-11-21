import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/logo.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A <span className="purple"> SOLUÇÃO IDEAL </span> PARA O SEU VEÍCULO!
            </h1>
            <p className="home-about-body">
            Temos um vasto know-how em preparação de motores diesel, gasolina, álcool e flex, sempre contando com os melhores equipamentos aliado de nossos parceiros.
              <br />
              <br />Fornecendo as melhores soluções de software 
              <i>
                <b className="purple"> da Europa e América </b>
              </i>
              , proporcionando ao seu veículo o acerto mais fino e adequado para a proposta de seu projeto. 
              <br />
              <br />
              Solução &nbsp;
              <i>
                <b className="purple">sem dor de cabeça </b> você
                encontra aqui!
              </i>
              <br />
              <br />
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>SIGA-NOS NAS REDES SOCIAIS</h1>
            <p>
              Sinta-se em casa e <span className="purple"> prende o grito!</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/s.o.u.m.y.a_j.i.t/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineWhatsApp />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
