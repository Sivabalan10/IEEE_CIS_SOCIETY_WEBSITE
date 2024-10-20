import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import Founder from "./Founder";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
;

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Aboutcard />
        <Techstack />
        <Founder />
      </Container>
    </Container>
  );
}

export default About;
