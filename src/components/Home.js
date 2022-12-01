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
          "https://images.pexels.com/photos/263209/pexels-photo-263209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }></Image>
      <div></div>
    </div>
  );
}
