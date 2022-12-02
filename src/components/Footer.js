import React, { Component } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import footer_logo from "./assets/images/footer-logo.png";

class Footer extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row className="footer">
            <Col
              md="auto"
              className="footer-col1">
              <Image
                width={200}
                src={footer_logo}></Image>
            </Col>
            <Col
              md="auto"
              className="footer-col2">
              <Row className="footer-col2-heading">Get in Touch</Row>
              <Row className="footer-col2-address">
                <Col className="footer-col2-address-box">
                  <span className="footer-col2-address-heading">
                    SV&R Partners - Chennai
                  </span>
                  <span className="footer-col2-address-content">
                    <br /> 65, Bishop Garden Raja Annamalai Puram Chennai
                    600028.
                    <br />
                    +91 44 4860, 7567/8567/9567
                  </span>
                </Col>
                <Col className="footer-col2-address-box">
                  <span className="footer-col2-address-heading">
                    SV&R Partners - Dubai
                  </span>
                  <span className="footer-col2-address-content">
                    <br />
                    C/O Eben Management Consultant, Dubai-UAE -181 608
                    <br />
                    +971503440935, +97143962840
                  </span>
                </Col>
              </Row>
            </Col>
            <Col
              md="auto"
              className="footer-col3">
              <Row className="footer-col3-heading">Contact</Row>
              <Row>
                <Col>
                  e-mail id <br />
                  info@svandr.com
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Footer;
