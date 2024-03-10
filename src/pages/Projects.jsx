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
import red_website from "../assets/projects/red_website.png";
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
              description="DALI art gallery, a captivating space where art comes to life. Our gallery is a testament to creativity, showcasing a diverse range of art that promises to inspire and engage. Step into a world where every brushstroke tells a story, and each piece invites you to explore the boundless realms of artistic expression. Join us on a journey through the extraordinary as we celebrate the power and beauty of visual art at DALI art gallery."
              ghLink="https://github.com/nihadishi/dali.az"
              demoLink="https://dali.az"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eventmind}
              isBlog={false}
              title="EventMind"
              description="Our movie streaming and viewing platform represents our passion for cinema and our desire to share it with movie lovers. Our aim is to provide our users with an enjoyable movie experience with quality content in various genres by offering a wide movie archive. We are here to present you the latest and unforgettable movies. Let's travel to fascinating worlds together!"
              ghLink="https://github.com/nihadishi/EventMind-website"
              demoLink="https://eventmind.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={red_website}
              isBlog={false}
              title="RED Team Site"
              description="Our mission is to provide a convenient online platform to provide access to high quality organic products while supporting local farmers. Our vision is to be a premium online organic store that leads to a more sustainable future, is known for our commitment to quality and allows our customers to make informed choices about their health."
              ghLink="hhttps://github.com/nihadishi/REDWebsite"
              demoLink="https://red-az.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bollo}
              isBlog={false}
              title="Bollo Landing Page"
              description="Our mission is to provide a convenient online platform to provide access to high quality organic products while supporting local farmers. Our vision is to be a premium online organic store that leads to a more sustainable future, is known for our commitment to quality and allows our customers to make informed choices about their health."
              ghLink="https://github.com/nihadishi/bollo.az-landing"
              demoLink="https://bollo.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={needme}
              isBlog={false}
              title="NEEDME App"
              description="NeedMe was created by a group of young people in Azerbaijan in 2023 to create accessibility for people, to collect their interests on one platform, for customers who want to find and use every service they want through one application, and for entrepreneurs who are looking for mass within Azerbaijan and elsewhere."
              ghLink="https://github.com/nihadishi/needme"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={techknow}
              isBlog={false}
              title="Admin Panel"
              description="Our admin panel is designed to facilitate the management of educational institutions and offer students a smooth registration process. Our system, which allows you to manage course applications quickly and effectively, optimizes the student acceptance and rejection processes. Our goal is to provide managers with a powerful tool to enable their institutions to operate more efficiently and to provide students with a seamless application experience."
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
