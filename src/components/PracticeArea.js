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
              className="practice-area-page-heading3">
              Corporate and Commercial Law
            </Col>
            <Row>
              <Col className="practice-area-page-heading3-description">
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
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
      <Row className="practice-area-page-heading3-dark justify-content-md-center">
        <Col md="auto">
          <Row>
            <Col
              md={4}
              className="practice-area-page-heading3-list">
              <span className="practice-area-page-heading3-list-bold">
                Banking and Finance
              </span>{" "}
              <br />• Acquisition Financing <br />• Real Estate Investment and
              Finance <br />• Corporate Lending <br />
              • Foreign Exchange <br />• Capital Markets
            </Col>
            <Col
              md={5}
              className="practice-area-page-heading3-list">
              <span className="practice-area-page-heading3-list-bold">
                Company Law
              </span>
              <br />• Contracts <br />• Setting up of companies,
              <br />• Merger and Acquisition <br />• Dissolution of Companies{" "}
              <br />
              • Insolvency and Bankruptcy <br />• Export/Import
            </Col>
            <Col
              md={3}
              className="practice-area-page-heading3-list">
              <span className="practice-area-page-heading3-list-bold">
                Taxation
              </span>{" "}
              <br />• Direct Taxes <br />• Indirect Taxes
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="practice-area-page">
        <Col>
          <Row>
            <Col>
              <Row className="justify-content-md-center">
                <Col
                  md="auto"
                  className="practice-area-page-heading4">
                  Environmental Law
                </Col>
                <Row>
                  <Col className="practice-area-page-heading4-description">
                    <p>
                      Existing environmental regulations and frameworks. Our
                      clientele consists of firms working in renewable energy,
                      which remains as one of our expertise in the field of
                      environmental law. We represent our clients on various
                      forums including the NGT, and Pollution Control Boards.
                    </p>
                    <br />
                    <p className="practice-area-page-heading4-list">
                      <Row>
                        <Col md="auto"> • Energy and Climate change </Col>
                        <Col md="auto"> • Environment Protection </Col>
                        <Col md="auto"> • Biodiversity </Col>
                      </Row>
                    </p>
                  </Col>
                </Row>
              </Row>
              <Row className="justify-content-md-center">
                <Col
                  md="auto"
                  className="practice-area-page-heading5">
                  Real Estate
                </Col>
                <Row>
                  <Col className="practice-area-page-heading5-description">
                    <p>
                      Our team advises and helps clients in dealing with real
                      estate transactions. Offering services ranging from
                      drafting lease and licensing agreements, to aiding in sale
                      and negotiation.
                    </p>
                    <br />
                    <Row className="practice-area-page-heading5-list">
                      <Col md={5}>
                        <Row>• Land Approval</Row>
                        <Row>• Lease agreement drafting</Row>
                      </Col>

                      <Col md={5}>
                        <Row>• Due diligence</Row>
                        <Row>• License agreements</Row>
                        <Row>• Legal opinions</Row>
                      </Col>

                      <Col></Col>
                    </Row>
                  </Col>
                </Row>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="practice-area-page-heading6-dark justify-content-md-center">
        <Col md="auto">
          <Row className="justify-content-md-center">
            <Col md="auto">
              <Row className="justify-content-md-center practice-area-page-heading6">
                Dispute Resolution
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className="practice-area-page-heading6-description">
              <p>
                Providing services to corporate firms entails specialising in
                dispute resolution. Our dispute resolution team work closely
                with our clients in reaching solutions out of court.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="practice-area-page-heading7-dark justify-content-md-center">
        <Col md="auto">
          <Row className="justify-content-md-center">
            <Col md="auto">
              <Row className="justify-content-md-center practice-area-page-heading7">
                Media, Entertainment and Technology Law
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className="practice-area-page-heading7-description">
              <p>
                Our team closely works with our clients to advice on regulation
                and compliance of telecommunication rules and laws. We help in
                governing data privacy and protection, and prosecution on the
                same matter. We help our clients in litigation and prosecution
                on telecom related matters. We assist our clients in such as
                Film distribution agreements, Broadcast Content licensing, Music
                licensing, Software/technology licensing, satellite broadcasting
                agreements etc. We also frame strategies for acquisition and
                licensing of various Intellectual Property Rights relating to
                movies, music etc. for our clients and provide legal opinions
                and litigation support on Anti Counterfeit and Anti-Piracy laws.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col md="auto">
              <hr className="practice-area-last" />
            </Col>
          </Row>
        </Col>
      </Row>
      <Footer />
    </div>
  );
}
