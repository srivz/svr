import React from "react";
import { Image } from "react-bootstrap";
import "./index.css";
import logo from "../assets/images/logo.png";

export default function Nav2() {
  return (
    <div>
      <nav class="nav1">
        <input
          type="checkbox"
          id="check"
        />
        <label
          for="check"
          class="checkbtn">
          <i class="fas fa-bars"></i>
        </label>
        <span class="logo">
          <Image
            width={120}
            src={logo}></Image>
        </span>
        <div class="nav1-links">
          <ul>
            <li>
              <a
                href="/"
                class="nav-link">
                About Us
              </a>
            </li>
            <li>
              <a
                href="/practiceArea"
                class="nav-link">
                Practice Area/ Expertise
              </a>
            </li>
            <li>
              <a
                href="/ourTeam"
                class="nav-link">
                Our Team
              </a>
            </li>
            <li>
              <a
                href="#d"
                class="nav-link">
                News and Insights
              </a>
            </li>
            <li>
              <a
                href="#d"
                class="nav-link">
                Join Us
              </a>
            </li>
            <li class="nav-box">
              <a
                href="#d"
                class="nav-link">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
