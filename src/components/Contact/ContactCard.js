import React, {useState, useRef } from "react";
import { Card, Col, Button, Form, Row } from "react-bootstrap";
import emailjs from '@emailjs/browser'

function ContactCard() {

  const [validated, setValidated] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const form = useRef();

  const handleChange = (e) => {
    const numberValue = e.target.value;
    e.preventDefault();
    if(numberValue.length <= 10){
      setPhoneNumber(numberValue.toString().replace(/(\d{2})(\d{4})(\d{4})/, "($1)$2-$3"));
      }else if(numberValue.length > 10){
    setPhoneNumber(numberValue.toString().replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, "($1) $2 $3-$4"));
    }
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
    emailjs.sendForm(process.env.REACT_APP_SERVICE_MAIL_ID, process.env.REACT_APP_TEMPLATE_ID_MAIL, form, process.env.REACT_APP_PUBLIC_KEY_MAIL)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();

  };




  return (
    <Card bg={'transparent'} style={{alignItems: 'center', justifyContent: 'center', marginBottom: '80px'}}>
      <Card.Header style={{marginBottom: '30px'}}> Se tem alguma dúvida ou solicitação de orçamento não hesite em em nos contatar!</Card.Header>
      <Form noValidate validated={validated} ref={form} onSubmit={sendEmail}>
      <Row style={{marginBottom: '15px'}}>
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nome"
            name="name"
            defaultValue=""
            value={name}
            onChange={handleChangeName}
          />
          <Form.Control.Feedback>Nome ok!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Telefone</Form.Label>
          <Form.Control
            required
            type="text"
            name="phone"
            placeholder="Telefone"
            defaultValue="(DDD)99999-1234"
            value={phoneNumber}
            onChange={handleChange}
          />
          <Form.Control.Feedback>Telefone ok!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row>
      <Form.Group  as={Col} md="12" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Digite sua mensagem...</Form.Label>
        <Form.Control 
          as="textarea" 
          name="message"
          rows={5} 
          value={message}
          onChange={handleChangeMessage}
          />
        <Form.Control.Feedback>Mensagem ok!</Form.Control.Feedback>
      </Form.Group>
      </Row>
      <Button type="submit" value="Send">Enviar</Button>
    </Form>
    </Card>
  );
}

export default ContactCard;
