import Nav2 from "./navs/Nav2";
import { Col, Row, Image, Figure } from "react-bootstrap";

import aboutUs_page_img1 from "./assets/images/aboutUs1.png";

import harshavardhan from "./assets/images/harshavardhan.png";
import sureshkumarm from "./assets/images/sureshkumarm.png";
import abrajasekaran from "./assets/images/abrajasekaran.png";
import salifa from "./assets/images/salifa.png";
import prashanthk from "./assets/images/prashanthk.png";
import shuha from "./assets/images/shuha.png";
import miteshravishankar from "./assets/images/miteshravishankar.png";

import React from "react";
import Footer from "./Footer";

export default function OurTeam() {
  return (
    <div>
      <Row>
        <Nav2 />
      </Row>
      <Row className="our-team-page-block1">
        <Col className="our-team-page-image1">
          <Image src={aboutUs_page_img1} />
          <div className="our-team-page-text1"></div>
          <p className="our-team-page-heading1">
            Meet <br />
            <span className="our-team-page-heading1-bold">Our Team</span>
          </p>
        </Col>
      </Row>
      <Row className="our-team-page">
        <Col>
          <Row>
            <Col>
              <div className="our-team-page-team-member">
                <Figure>
                  <Figure.Image
                    className="figure"
                    width={300}
                    alt="171x180"
                    src={sureshkumarm}
                  />
                  <div className="black-in-back"></div>
                  <Figure.Caption>
                    <p className="our-team-page-team-member-name">
                      Suresh Kumar M
                    </p>
                    <p className="our-team-page-team-member-name-description">
                      Suresh Kumar is an alumni of the Madras Law College and an
                      active member of the Madras Bar Association. As a member
                      of the Bar for over 30 years, he has represented several
                      high-profile and reported cases. His field of expertise
                      includes constitutional law, corporate, commercial
                      litigations, environment law, real estate and arbitration.
                      Suresh has appeared before all courts and tribunals on
                      behalf of private clients and government undertakings.
                    </p>
                  </Figure.Caption>
                </Figure>
              </div>
            </Col>
            <Col>
              <div className="our-team-page-team-member">
                <Figure>
                  <Figure.Image
                    className="figure"
                    width={300}
                    alt="171x180"
                    src={abrajasekaran}
                  />
                  <div className="black-in-back"></div>
                  <Figure.Caption>
                    <p className="our-team-page-team-member-name">
                      A.B. Rajasekaran
                    </p>
                    <p className="our-team-page-team-member-name-description">
                      Rajasekaran is a patent and trademark attorney having over
                      twenty years experience in Intellectual Property Rights
                      administration, prosecution and enforcement. He is a
                      Mechanical Engineer, has a Masters in Business
                      Administration, both from the University of Madras. He did
                      his LL.B from Dr. Ambedkar Law University, Chennai, and
                      LL.M specializing in Business Law from the National Law
                      School of India University Bengaluru with two gold medals.
                      He began his career as an Examiner of Patents at the
                      Indian Patent Office, Government of India. He is admitted
                      to practice in all courts in India.
                    </p>
                  </Figure.Caption>
                </Figure>
              </div>
            </Col>
            <Col>
              <div className="our-team-page-team-member">
                <Figure>
                  <Figure.Image
                    className="figure"
                    width={300}
                    alt="171x180"
                    src={salifa}
                  />
                  <div className="black-in-back"></div>
                  <Figure.Caption>
                    <p className="our-team-page-team-member-name">Safila</p>
                    <p className="our-team-page-team-member-name-description">
                      Safila is a Registered Indian Patent Agent. She is an
                      Information Technology engineering graduate from Mahatma
                      Gandhi University and an MBA from Madras University. She
                      was a software programmer in a large multinational
                      software company before becoming patent agent. She also
                      teaches Patent drafting in her free time. Her experiences
                      includes writing software programmes for a large software
                      company which helps her to write patent specifications for
                      computer related inventions and defend the invention
                      before the Patent Office and other tribunals.
                    </p>
                  </Figure.Caption>
                </Figure>
              </div>
            </Col>
            <Col>
              <div className="our-team-page-team-member">
                <Figure>
                  <Figure.Image
                    className="figure"
                    width={300}
                    alt="171x180"
                    src={harshavardhan}
                  />
                  <div className="black-in-back"></div>
                  <Figure.Caption>
                    <p className="our-team-page-team-member-name">
                      Harshavardhan
                    </p>
                    <p className="our-team-page-team-member-name-description">
                      Harshavardhan did his B.B.A.LL.B(Hons) degree from Sastra
                      Deemed to be University. He also attended and completed a
                      summer program at the American University – Washington
                      College of Law in Trade and Diplomacy, Damages and
                      Compensation in Commercial and Investment Arbitration,
                      Pharmaceutical Patent Litigation. Before joining SV&R, he
                      had assisted the Special Government Pleader in Local
                      Administration, Labor and Service, Education and
                      employment related matters.
                    </p>
                  </Figure.Caption>
                </Figure>
              </div>
            </Col>
            <Col>
              <div className="our-team-page-team-member">
                <Figure>
                  <Figure.Image
                    className="figure"
                    width={300}
                    alt="171x180"
                    src={shuha}
                  />
                  <div className="black-in-back"></div>
                  <Figure.Caption>
                    <p className="our-team-page-team-member-name">Shuha</p>
                    <p className="our-team-page-team-member-name-description">
                      Shuha is a B.Com.,LL.B (Hons.) Graduate from Sastra Deemed
                      to be University. She interned at the Center for
                      Innovation Intellectual Property and Competition, NLU
                      Delhi as a Field investigator for National Survey on
                      “Start-ups, Innovation & Intellectual Property (IP) and
                      analyzing Innovation & IP behavior of Indian Start-ups.
                      Her experience includes working with Start-ups, Angel
                      Investors, Equity Capital and commercial contracts,
                      international taxation, anti-dumping etc. Before joining
                      us she worked in World-bank projects negotiating the terms
                      of agreement and doing due-diligence.
                    </p>
                  </Figure.Caption>
                </Figure>
              </div>
            </Col>
            <Col>
              <div className="our-team-page-team-member">
                <Figure>
                  <Figure.Image
                    className="figure"
                    width={300}
                    alt="171x180"
                    src={prashanthk}
                  />
                  <div className="black-in-back"></div>
                  <Figure.Caption>
                    <p className="our-team-page-team-member-name">
                      Prashanth K
                    </p>
                    <p className="our-team-page-team-member-name-description">
                      Prasanth is a Registered Patent Agent. He is an
                      Electronics and Communication Engineer. Prasanth was a
                      software engineer at a reputed software company, before
                      becoming a patent agent, and joining us a Patent
                      Associate. His key skills include patent searching,
                      analysis, patent specification drafting, and responding to
                      office actions on inventions relating Electronics and
                      Communication.
                    </p>
                  </Figure.Caption>
                </Figure>
              </div>
            </Col>
            <Col md={4}></Col>
            <Col md={4}>
              <div className="our-team-page-team-member">
                <Figure>
                  <Figure.Image
                    className="figure"
                    width={300}
                    alt="171x180"
                    src={miteshravishankar}
                  />
                  <div className="black-in-back"></div>
                  <Figure.Caption>
                    <p className="our-team-page-team-member-name">
                      Mitesh Ravishankar
                    </p>
                    <p className="our-team-page-team-member-name-description">
                      Mitesh Ravishankar is a practicing Advocate in Madras High
                      Court. His skills and expertise includes Arbitration,
                      mediation, conciliation, negotiation and advocacy. He has
                      been accredited by KFCRI as Associate at Arbitration
                      Practice (AAP).
                    </p>
                  </Figure.Caption>
                </Figure>
              </div>
            </Col>
            <Col md={4}></Col>
          </Row>
        </Col>
      </Row>

      <Footer />
    </div>
  );
}
