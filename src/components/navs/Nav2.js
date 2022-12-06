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
          id="check1"
        />
        <label
          for="check1"
          class="checkbtn1">
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
                class="nav1-link">
                About Us
              </a>
            </li>
            <li>
              <a
                href="/practiceArea"
                class="nav1-link">
                Practice Area/ Expertise
              </a>
            </li>
            <li>
              <a
                href="/ourTeam"
                class="nav1-link">
                Our Team
              </a>
            </li>
            <li>
              <a
                href="#d"
                class="nav1-link">
                News and Insights
              </a>
            </li>
            <li>
              <a
                href="#d"
                class="nav1-link">
                Join Us
              </a>
            </li>
            <li class="nav1-box">
              <a
                href="#d"
                class="nav1-link">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
