import React from "react";
import { Image } from "react-bootstrap";
import Nav1 from "./navs/Nav1";

export default function Home() {
  return (
    <div className="whole">
      <Nav1 />
      <Image
        width={700}
        height={600}
        src={
          "https://images.pexels.com/photos/159213/hall-congress-architecture-building-159213.jpeg"
        }></Image>
      <div></div>
    </div>
  );
}
