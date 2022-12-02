import Nav1 from "./navs/Nav1";
import { Col, Container, Row, Image, Figure, Button } from "react-bootstrap";

import aboutUs_page_img1 from "./assets/images/aboutUs1.png";
import aboutUs_page_img2 from "./assets/images/aboutUs2.png";
import aboutUs_page_img3 from "./assets/images/aboutUs3.png";
import aboutUs_page_img4 from "./assets/images/aboutUs4.png";
import ipr from "./assets/images/ipr.png";
import corporate from "./assets/images/corporate.png";
import disputeresolution from "./assets/images/disputeresolution.png";
import environmentallaw from "./assets/images/environmentallaw.png";
import media from "./assets/images/media.png";
import Harshavardhan from "./assets/images/harshavardhan.png";
import Suresh from "./assets/images/sureshkumarm.png";
import Rajasekaran from "./assets/images/abrajasekaran.png";
import realestate from "./assets/images/realestate.png";
import "react-multi-carousel/lib/styles.css";

import React, { Component } from "react";
import Carousel from "react-multi-carousel";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <Row>
            <Nav1 />
          </Row>
          <Container>
            <Row>
              <Col className="about-us-image1">
                <Image
                  width={700}
                  height={600}
                  src={aboutUs_page_img1}></Image>
              </Col>
              <Col className="about-us-text1">
                <p className="about-us-heading1">Where clients comes first</p>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col className="about-us-text2">
                <p className="about-us-heading2">
                  Thoughtful, and well-reasoned counsel on time.
                </p>
                <p className="about-us-heading2-content">
                  SV&R Partners is a sleek new age law firm founded by dedicated
                  and experienced advocates with exposure to global best
                  practices. SV&R Partners is formed by the merger of S and V
                  Law Offices and Rajasekaran Associates. Before the merger, for
                  over 20 years the merged firms each have represented a diverse
                  list of clients from Fortune 500 companies to highly
                  innovative startups, and small and medium enterprises;
                  govern-ments to some of the World’s best educational
                  institutes, and an elite list of private clients. The founding
                  partners have cumulative experience of more than 75 years at
                  the Bar, appearing before every legal fora from the district
                  Court to the Supreme Court; from the Patent Office to the
                  Company Law Appellate Tribunal. It is our single-minded focus
                  to set a new benchmark in terms of quality, service excellence
                  and responsiveness in satisfying the diversified needs of our
                  clients in the most cost-effective and efficient manner as
                  possible.
                </p>
              </Col>
              <Col className="about-us-image2">
                <Image
                  width={450}
                  height={800}
                  src={aboutUs_page_img2}></Image>
              </Col>
            </Row>
          </Container>
          <Row className="white">
            <Container>
              <Row>
                <Col className="about-us-text3">
                  <p className="about-us-heading3">The SVR Difference</p>
                  <p className="about-us-heading3-content">
                    <ul>
                      <li> Process oriented and Quality Assured Services </li>
                      <li>Secured Work environment </li>
                      <li> Secured state of the art IT Infrastructure </li>
                      <li> World-class proprietary docketing software </li>
                      <li> On time reporting and timely updates </li>
                      <li>
                        {" "}
                        100% quality check minimizing errors to zero every time,
                        all the time
                      </li>
                      <li> Transparent billing</li>
                    </ul>
                  </p>
                </Col>
                <Col></Col>
              </Row>
              <Row>
                <Col className="about-us-image3">
                  <Image
                    width={400}
                    src={aboutUs_page_img3}></Image>
                </Col>
                <Col className="about-us-text4">
                  <p className="about-us-heading4">
                    Experienced attorneys with exposure to global best practices
                  </p>
                </Col>
              </Row>
              <Row>
                <Col className="about-us-text4">
                  <p className="about-us-heading4-content">
                    SV&R is a full-service law firm with Corporate Law and
                    Intellectual Property practice as its core focus areas. The
                    firm also offers legal services in Media, Entertainment and
                    Technology Law, Regulatory Affairs, and Dispute Resolution.
                    The firm is based out of Chennai, India with satellite
                    office in Dubai.
                  </p>
                </Col>
                <Col className="about-us-image4">
                  <Image
                    width={500}
                    src={aboutUs_page_img4}></Image>
                </Col>
              </Row>
            </Container>
          </Row>
          <Row className="white">
            <Container className="box-body">
              <Row className="box">
                <Col className="box-inside">
                  <Figure>
                    <Figure.Image
                      className="figure"
                      width={180}
                      height={180}
                      alt="171x180"
                      src={ipr}
                    />
                    <Figure.Caption>
                      Intellectual <br />
                      Property Rights
                    </Figure.Caption>
                  </Figure>
                </Col>
                <Col className="box-inside">
                  <Figure>
                    <Figure.Image
                      className="figure"
                      width={180}
                      height={180}
                      alt="171x180"
                      src={corporate}
                    />
                    <Figure.Caption>
                      Corporate &<br /> Commercial Law{" "}
                    </Figure.Caption>
                  </Figure>
                </Col>
                <Col className="box-inside">
                  <Figure>
                    <Figure.Image
                      className="figure"
                      width={180}
                      height={180}
                      alt="171x180"
                      src={environmentallaw}
                    />
                    <Figure.Caption>
                      Environmental <br />
                      Law{" "}
                    </Figure.Caption>
                  </Figure>
                </Col>
              </Row>

              <Row className="box">
                <Col className="box-inside">
                  <Figure>
                    <Figure.Image
                      className="figure"
                      width={180}
                      height={180}
                      alt="171x180"
                      src={realestate}
                    />
                    <Figure.Caption>Real Estate </Figure.Caption>
                  </Figure>
                </Col>
                <Col className="box-inside">
                  <Figure>
                    <Figure.Image
                      className="figure"
                      width={180}
                      height={180}
                      alt="171x180"
                      src={disputeresolution}
                    />
                    <Figure.Caption>Dispute Resolution </Figure.Caption>
                  </Figure>
                </Col>
                <Col className="box-inside">
                  <Figure>
                    <Figure.Image
                      className="figure"
                      width={182}
                      height={182}
                      alt="171x180"
                      src={media}
                    />
                    <Figure.Caption>
                      Media, Entertainment and <br />
                      Technology Law{" "}
                    </Figure.Caption>
                  </Figure>
                </Col>
              </Row>
            </Container>
          </Row>
          <Container className="about-us-our-team">
            <Row>
              <Col className="about-us-our-team-heading">Our Team</Col>
            </Row>
            <Row>
              <Col>
                <Carousel responsive={responsive}>
                  <div className="team-member">
                    <Figure>
                      <Figure.Image
                        className="figure"
                        width={300}
                        alt="171x180"
                        src={Suresh}
                      />
                      <Figure.Caption>
                        <p className="team-member-name">Suresh Kumar M</p>
                        <p className="team-member-name-description">
                          Suresh Kumar is an alumni of the Madras Law College
                          and an active member of the Madras Bar Association. As
                          a member of the Bar for over 30 years, he has
                          represented several high-profile and reported cases.
                          His field of expertise includes constitutional law,
                          corporate, commercial litigations, environment law,
                          real estate and arbitration. Suresh has appeared
                          before all courts and tribunals on behalf of private
                          clients and government undertakings.
                        </p>
                      </Figure.Caption>
                    </Figure>
                  </div>
                  <div className="team-member">
                    <Figure>
                      <Figure.Image
                        className="figure"
                        width={300}
                        alt="171x180"
                        src={Rajasekaran}
                      />
                      <Figure.Caption>
                        <p className="team-member-name">A.B. Rajasekaran</p>
                        <p className="team-member-name-description">
                          Rajasekaran is a patent and trademark attorney having
                          over twenty years experience in Intellectual Property
                          Rights administration, prosecution and enforcement. He
                          is a Mechanical Engineer, has a Masters in Business
                          Administration, both from the University of Madras. He
                          did his LL.B from Dr. Ambedkar Law University,
                          Chennai, and LL.M specializing in Business Law from
                          the National Law School of India University Bengaluru
                          with two gold medals. He began his career as an
                          Examiner of Patents at the Indian Patent Office,
                          Government of India. He is admitted to practice in all
                          courts in India.
                        </p>
                      </Figure.Caption>
                    </Figure>
                  </div>
                  <div className="team-member">
                    <Figure>
                      <Figure.Image
                        className="figure"
                        width={300}
                        alt="171x180"
                        src={Harshavardhan}
                      />
                      <Figure.Caption>
                        <p className="team-member-name">Harshavardhan</p>
                        <p className="team-member-name-description">
                          Harshavardhan did his B.B.A.LL.B(Hons) degree from
                          Sastra Deemed to be University. He also attended and
                          completed a summer program at the American University
                          – Washington College of Law in Trade and Diplomacy,
                          Damages and Compensation in Commercial and Investment
                          Arbitration, Pharmaceutical Patent Litigation. Before
                          joining SV&R, he had assisted the Special Government
                          Pleader in Local Administration, Labor and Service,
                          Education and employment related matters.
                        </p>
                      </Figure.Caption>
                    </Figure>
                  </div>
                </Carousel>
              </Col>
            </Row>
          </Container>
          <Row className="white">
            <Container>
              <Row className="about-us-news">
                <Col className="about-us-news-heading">News & Insights</Col>
                <Col className="about-us-news-heading-right">
                  View all{" "}
                  <a href="/">
                    <i class="fa-solid fa-circle-chevron-right fa-2xl"></i>
                  </a>
                </Col>
                <hr className="about-us-news-line" />
              </Row>
              <Row className="news-content">
                <Col className="news-box">
                  <p className="news-headline">
                    Experienced advocates with exposure to global best practices
                  </p>
                  <p className="news-description">
                    SV&R Partners is a sleek new age law firm founded by
                    dedicated and experienced advocates with exposure to global
                    best practices. SV&R Partners is formed by the merger of S
                    and V Law Offices and Rajasekaran Associates. Before the
                    merger, for over 20 years the merged firms each have
                    represented a diverse list of clients from Fortune 500
                    companies to highly innovative startups, and small and
                    medium enterprises; ....
                  </p>
                  <p className="news-description">
                    <Button
                      variant="light"
                      size="lg">
                      Read more
                    </Button>
                  </p>
                </Col>
                <Col className="news-box">
                  <p className="news-headline">
                    Experienced advocates with exposure to global best practices
                  </p>
                  <p className="news-description">
                    SV&R Partners is a sleek new age law firm founded by
                    dedicated and experienced advocates with exposure to global
                    best practices. SV&R Partners is formed by the merger of S
                    and V Law Offices and Rajasekaran Associates. Before the
                    merger, for over 20 years the merged firms each have
                    represented a diverse list of clients from Fortune 500
                    companies to highly innovative startups, and small and
                    medium enterprises; ....
                  </p>
                  <p className="news-description">
                    <Button
                      variant="light"
                      size="lg">
                      Read more
                    </Button>
                  </p>
                </Col>
                <Col className="news-box">
                  <p className="news-headline">
                    Experienced advocates with exposure to global best practices
                  </p>
                  <p className="news-description">
                    SV&R Partners is a sleek new age law firm founded by
                    dedicated and experienced advocates with exposure to global
                    best practices. SV&R Partners is formed by the merger of S
                    and V Law Offices and Rajasekaran Associates. Before the
                    merger, for over 20 years the merged firms each have
                    represented a diverse list of clients from Fortune 500
                    companies to highly innovative startups, and small and
                    medium enterprises; ....
                  </p>
                  <p className="news-description">
                    <Button
                      variant="light"
                      size="lg">
                      Read more
                    </Button>
                  </p>
                </Col>
                <Col className="news-box">
                  <p className="news-headline">
                    Experienced advocates with exposure to global best practices
                  </p>
                  <p className="news-description">
                    SV&R Partners is a sleek new age law firm founded by
                    dedicated and experienced advocates with exposure to global
                    best practices. SV&R Partners is formed by the merger of S
                    and V Law Offices and Rajasekaran Associates. Before the
                    merger, for over 20 years the merged firms each have
                    represented a diverse list of clients from Fortune 500
                    companies to highly innovative startups, and small and
                    medium enterprises; ....
                  </p>
                  <p className="news-description">
                    <Button
                      variant="light"
                      size="lg">
                      Read more
                    </Button>
                  </p>
                </Col>
              </Row>
            </Container>
            <Container>
              <Row className="contact-us">
                <Col className="contact-us-heading">Contact Us</Col>
              </Row>
              <Row className="news-content">
                <Col className="news-box"></Col>
                <Col className="news-box"></Col>
                <Col className="news-box"></Col>
                <Col className="news-box"></Col>
              </Row>
            </Container>
          </Row>
        </div>
      </div>
    );
  }
}

export default Home;
