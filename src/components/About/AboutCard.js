import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";



function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Nosso conceito de trabalho surgiu a partir da busca de nossos clientes e amigos, por serviços de preparação automativa no segmento premium.
            Sendo assim entregamos uma solução específica para cada tipo de veículo, marca, motorização, tração, câmbio e o pricipal que é
            o <span className="purple"> perfil do nosso cliente.</span>
            
            <br />
            <br />
           E sempre lembrando dos nossos parceiros que nos apoiam em cada projeto!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Deus
            </li>
            <li className="about-activity">
              <ImPointRight /> Família
            </li>
            <li className="about-activity">
              <ImPointRight /> Serrano Motorsport
            </li>
            <li className="about-activity">
              <ImPointRight /> ACB Engenharia Automativa
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "#d32121" }}>
            "A melhor propaganda é o serviço!"{" "}
          </p>
          
          <footer className="main-nameTech">Alfredo Arnaldo Fockink</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
