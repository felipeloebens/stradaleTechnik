import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
    {props.mediaType !== "VIDEO" ? 
    <Card.Img variant="top" src={props.imgPath} alt="card-img" /> : 
    <video style={{margin:"1.25rem"}}>
       <source src= {props.imgPath} type="video/mp4"></source>
    </video>}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.link} target="_blank">
          <BiLinkExternal /> &nbsp;
          {props.isBlog ? "View Blog" : "Ver publicação"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
