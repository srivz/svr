import React from "react";
import "./index.css";

export default function Nav1() {
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
        <span class="logo"></span>
        <div class="nav-links">
          <ul>
            <li>
              <a
                href="#d"
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
