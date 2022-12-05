import { Col, Row } from "react-bootstrap";

import React from "react";
import Footer from "./Footer";
import Nav2 from "./navs/Nav2";

export default function PracticeArea() {
  return (
    <div>
      <Row>
        <Nav2 />
      </Row>
      <Row className="practice-area-page">
        <Col>
          <Row className="justify-content-md-center">
            <Col
              md="auto"
              className=" practice-area-page-heading">
              <Row className="justify-content-md-center practice-area-page-heading1">
                Practice Area/Expertise
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className="practice-area-page-heading1-description">
              <p>
                SV&R is a full-service law firm with Corporate Law and
                Intellectual Property practice as its core focus area. The firm
                also offers legal services in Media and Technology Law,
                Regulatory Affairs, and Dispute Resolution. The firm is based
                out of Chennai, India with satellite office in Dubai.
              </p>
              <br />
              <p>
                The partners have served hundreds of diverse clients, from
                Fortune 500 Global companies to the Union of India. We also
                represent and consult an elite list of private clients.
              </p>
              <br />
              <p className="practice-area-page-heading1-list">
                <ul>
                  <li> Intellectual Property Rights </li>
                  <li> Corporate and Commercial Law </li>
                  <li> Environmental Law </li>
                  <li> Real Estate </li>
                  <li> Dispute Resolution </li>
                  <li> Media, Entertainment and Technology Law </li>
                </ul>
              </p>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col
              md="auto"
              className="practice-area-page-heading2">
              Intellectual Property Rights
            </Col>
            <Row>
              <Col className="practice-area-page-heading2-description">
                <p>
                  Our experienced IP attorneys, some of them have held senior
                  positions at the Intellectual Property Office of India, with
                  right blend of legal knowledge, skill, industry exposure and
                  business insights work with the clients throughout the
                  Intellectual Property Life Cycle from creating to protecting,
                  exploiting and enforcing it. Hence, our clients find value in
                  our client-centric focus and approach. We represent some of
                  the most innovative companies of the world.
                </p>
                <br />
                <p className="practice-area-page-heading2-list">
                  <ul>
                    <li> Filing and prosecuting IPR applications </li>
                    <li> Opposition, Rectification, Revocation, </li>
                    <li> Infringement and Invalidity </li>
                    <li> IP Search: Novelty, freedom to practice etc. </li>
                    <li> Commercialization and monetization of IP Assets </li>
                  </ul>
                </p>
              </Col>
            </Row>
          </Row>
          <Row className="justify-content-md-center">
            <Col
              md="auto"
              className="practice-area-page-heading2">
              Corporate and Commercial Law
            </Col>
            <Row>
              <Col className="practice-area-page-heading2-description">
                <p>
                  Our core team handling corporate law and regulatory affairs
                  are one of the best in the business. We represent large Indian
                  companies, public sector organisations, multinational
                  corporations and private individuals. Our team appear before
                  every authority and tribunal in India. From drafting
                  commercial contracts to securing necessary regulatory
                  approvals, SV&R Partners have the competency and the necessary
                  skill to handle even the most complex of cases.
                </p>
                <br />
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>

      <Footer />
    </div>
  );
}
