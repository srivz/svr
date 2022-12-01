import React from "react";
import { Nav, Navbar } from "react-bootstrap";

export default function Nav1() {
  return (
    <div className="nav-top">
      <Navbar
        variant="dark"
        expand="lg">
        <Nav
          className="justify-content-end"
          activeKey="/home">
          <Nav.Link
            className="links"
            href="/home">
            About Us
          </Nav.Link>
          <Nav.Link
            className="links"
            href="/home">
            Practice Area/Expertise
          </Nav.Link>
          <Nav.Link
            className="links"
            href="/home">
            Our Team
          </Nav.Link>
          <Nav.Link
            className="links"
            href="/home">
            News and Insights
          </Nav.Link>
          <Nav.Link
            className="links"
            href="/home">
            Join Us
          </Nav.Link>
          <div className="box">
            <Nav.Link
              className="contact-us"
              href="/home">
              Contact Us
            </Nav.Link>
          </div>
        </Nav>
      </Navbar>
    </div>
  );
}
