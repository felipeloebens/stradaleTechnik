import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import $ from 'jquery';


import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

const token = "IGQVJYTTloTVRjWGNuQnpwSUN3SHdzaXE0SHpvejdCNnprbzNGTmJFRTZAYVDg5RjhrNjgwME56WWk4R1g1Unh1MV8wbmdqR3QycEU1T0lTdFpLUVg4Q1RaY1B5UGlORi0yclNFWXduLWhyM2Yxd3E5dwZDZD";
const url = "https://graph.instagram.com/me/media?access_token=" + token + "&fields=media_url,media_type,caption,permalink";

    function Projects() {
      const [publicacoes, setPublicacoes] = useState([])
  
      useEffect(() => {
        async function dadosApi() {
          const resp = await $.get(url).then(function(response){
            return response.data;
            })
            setPublicacoes(resp)
        }
        dadosApi()
      }, [])
      console.log(publicacoes)

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        {publicacoes.map(publicacao => 
          <Col md={6} className="project-card">   
          <ProjectCard
            imgPath={publicacao.media_url}
            isBlog={false}
            title="FELIPE MASSA"
            description={publicacao.caption}
            link={publicacao.permalink}
          />
        </Col>
        )}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
