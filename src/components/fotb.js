import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../components/style.css'

class Fotb extends Component {
  render() {
    return (
        <Container className="fotb">
            <Row>
        <Col sm className="titel">FRIENDS OF THE BRAND</Col>
      </Row>
        <Row>
        <Col md className="link"><a href="https://open.spotify.com/artist/5gxCZXXCHpwrqcCJxq0VhJ">Patrick Hamilton music</a></Col>
        <Col md className="link"><a href="https://www.kurtstallaert.com/">Kurt Stallaert pictures</a></Col>
        <Col md className="link">Knits by Dellie</Col>
      </Row>
           <Row>
           <Col md className="link">Maison Moi kledij</Col>
           <Col md className="link">Marie Jo lingerie </Col>
           <Col md className="link">Dorien Bergen make-up</Col>
         </Row>
         <Row>
           <Col md className="link">August Antwerpen hotel</Col>
           <Col md className="link"><a href="https://docs.google.com/forms/d/e/1FAIpQLSfa3ZIMHrfMJm-eSwF8SeGiG_pJ_ZsWRdRCgXGj58SvYwRTpA/viewform">Jürgen Muls (webdesign)</a></Col>
           <Col md className="link"></Col>
         </Row>
 
      
      </Container> 
    );
  }
}

export default Fotb;
