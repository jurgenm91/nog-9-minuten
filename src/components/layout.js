/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react"
import PropTypes from "prop-types"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./layout.css"
import "./style.css"

const Layout = ({ children }) => {

  return (
    <>
     
      <div>
        <main>{children}</main>
        
      </div>
      <footer>
        <Container className="footer">
        <Row>
        <Col md>&copy; {new Date().getFullYear()} - NOG NEGEN MINUTEN</Col>
        </Row>
        <Row>
        <Col md>Webdesign: <a href="https://docs.google.com/forms/d/e/1FAIpQLSfa3ZIMHrfMJm-eSwF8SeGiG_pJ_ZsWRdRCgXGj58SvYwRTpA/viewform">Jürgen Muls</a></Col>
          </Row>
          </Container>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
