import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import dali from "../assets/projects/dali.png";
import bollo from "../assets/projects/bollo.png";
import eventmind from "../assets/projects/eventmind.png";
import techknow from "../assets/projects/techknow.png";
import needme from "../assets/projects/needme.png";
import red from "../assets/projects/red.png";
import moch from "../assets/projects/moch.png";
import mineop from "../assets/projects/mineop.png";
import newware from "../assets/projects/newware.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dali}
              isBlog={false}
              title="Art Gallery Website"
              description=""
              ghLink="https://github.com/nihadishi/dali.az"
              demoLink="https://dali.az"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eventmind}
              isBlog={false}
              title="EventMind"
              description="."
              ghLink="https://github.com/nihadishi/EventMind-website"
              demoLink="https://eventmind.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bollo}
              isBlog={false}
              title="Bollo Landing Page"
              description=""
              ghLink="https://github.com/nihadishi/bollo.az-landing"
              demoLink="https://bollo.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={needme}
              isBlog={false}
              title="NEEDME App"
              description=""
              ghLink="https://github.com/nihadishi/needme"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={techknow}
              isBlog={false}
              title="Admin Panel"
              description=""
              ghLink="https://github.com/nihadishi/TechNoRisk-Code8Hackathon"
              demoLink="https://techknow.vercel.app/dashboard"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={red}
              isBlog={false}
              title="RED Team App"
              description=""
              ghLink="https://github.com/nihadishi/RedApp"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moch}
              isBlog={false}
              title="Moch Film App"
              description=""
              ghLink="https://github.com/nihadishi/MochApp"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mineop}
              isBlog={false}
              title="MineOP App"
              description=""
              ghLink="https://github.com/nihadishi/AgriAI-HeydarAliyevHackathon"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newware}
              isBlog={false}
              title="NewWare WareHouse App"
              description=""
              ghLink="https://github.com/nihadishi/NewWareApp"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
