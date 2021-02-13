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
        <Col md><a href="https://open.spotify.com/artist/5gxCZXXCHpwrqcCJxq0VhJ">Patrick Hamilton</a></Col>
        <Col md><a href="https://www.kurtstallaert.com/">Kurt Stallaert</a></Col>
      </Row>
      </Container> 
    );
  }
}

export default Fotb;
