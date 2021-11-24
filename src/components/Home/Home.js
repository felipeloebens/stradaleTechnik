import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import logoSerrano from "../../Assets/SerranoLogo.png";
import logoACB from "../../Assets/ACBEng.png";
import Tilt from "react-parallax-tilt";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Seja muito bem-vindo! <span className="wave" role="img" aria-labelledby="wave">💪🏻</span>
              </h1>

              <h1 className="heading-name">
              somos a 
                <strong className="main-name"> STRADALE </strong>
                <span className="main-nameTech">TECHNIK</span> 
              </h1>

              <div style={{ padding: 50, textAlign: "left", marginBottom:"3rem" }}>
                <Type />
              </div>


            </Col>

            <Col md={4} style={{ paddingBottom: 20, marginLeft:"3rem"}}>
              <img src={logoSerrano} alt="home pic1" className="img-fluid" style={{ maxWidth:"200px", marginRight:"3rem", marginBottom:"3rem",  margintop:"3rem"  }} />
              <img src={logoACB} alt="home pic2" className="img-fluid" style={{ maxWidth:"200px", position:"center" }} />
            </Col> 
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
