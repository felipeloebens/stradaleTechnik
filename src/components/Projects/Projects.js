import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import $ from 'jquery';


    function Projects() {
      
      const [publicacoes, setPublicacoes] = useState([])
      const [currentPost, setCurrentPost] = useState(0)


      useEffect(() => {
        async function dadosApi() {
          const resp = await $.get("https://graph.instagram.com/me/media?access_token=" + process.env.REACT_APP_API_TOKEN + 
          "&fields=media_url,media_type,caption,permalink&limit="+currentPost+"").then(function(response){
            return response.data;
            })
            setPublicacoes(resp)
        }
        dadosApi()
      }, [currentPost])
      console.log(publicacoes)

      useEffect(() =>{
        const intersectionObserver = new IntersectionObserver((entries) => {

          if(entries.some((entry) => entry.isIntersecting)){
            setCurrentPost((currentPostInsideState) => currentPostInsideState + 4);
          }
          
        });

        intersectionObserver.observe(document.querySelector('#sentinela'));

        return () => intersectionObserver.disconnect();
      }, [])

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Acompanhe as <strong className="purple">Novidades </strong>
        </h1>
        <p style={{ color: "white" }}>
          Fique por dentro do nosso feed.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        {publicacoes.map((publicacao) => 
          <Col key={publicacao.id}  md={6} className="project-card">   
          <ProjectCard
            keyId={publicacao.id}
            mediaType={publicacao.media_type}
            imgPath={publicacao.media_url}
            isBlog={false}
            description={publicacao.caption}
            link={publicacao.permalink}
          />
        </Col>
        )}
        <Col id="sentinela"/>
        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
