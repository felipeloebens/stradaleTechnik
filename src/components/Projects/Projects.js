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




/* 
    $.get(url).then(function(response){
    // console.log('retorno', response.data);
    
    let dadosJson = response.data;
    })
 */
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
          <Col md={4} className="project-card">   
          <ProjectCard
            imgPath={publicacao.media_url}
            isBlog={false}
            title="FELIPE MASSA"
            description={publicacao.caption}
            link={publicacao.permalink}
          />
        </Col>
        )}
          

{/*           <Col md={4} className="project-card">
            <ProjectCard
            imgPath={GetInstagram.dadosJson[1].media_url}
            isBlog={false}
            title={GetInstagram.dadosJson[1].caption}
            description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
            link= {GetInstagram.dadosJson[1].permalink}
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              link="https://github.com/soumyajit4419/Editor.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              link="https://github.com/soumyajit4419/Bits-0f-C0de"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              link="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
