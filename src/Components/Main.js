import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Component.css";
import Experiences from "./Experiences";
import Skills from "./Skills";
const experience = [
  {
    id: 1,
    job: "Full Stack Web Developer",
    date: "June – August 2021",
    company: "Ernst & Young",
    desc: `I built a component suite to display and store 15 internal
     AI projects. The AngularJS framework was used for the frontend, 
     with angular routing, modules, and lazy loading used to optimize 
     website load times. Bootstrap-4 was used to improve styling, provide 
     a better user experience, and to ensure consistency in the website. 
     .NET-5 middleware was used to connect the frontend with the database. 
     JSON Web Tokens were incorporated into the middleware to improve user 
     experience. PostgreSQL was used for the backend to store login information, 
     and to control user access to the Artificial Intelligence projects.`,
  },
  {
    id: 2,
    job: "CANBUS Lead & Discharge Team",
    date: "August '20 – July '21",
    company: "University Of Toronto Formula Racing",
    desc: `I managed a team to collect telemetry data from the 
    CANBUS to improve the performance of a formula racing car. 
    The CANBUS and a Wifi module were connected to an Arduino board. 
    The Arduino was programmed to transmit this data to the telemetry 
    monitoring team. A a part of the electric FSAE team, I also designed 
    a safety system to discharge the car's accumulator from over 550VDC in 
    under 6 seconds.`,
  },
  {
    id: 3,
    job: "Stock Manager Dashboard",
    date: "June '21 - Present",
    company: "Personal Project",
    desc: `I am implementing a full-stack stock bot dashboard that manages 
    portfolio value and stock options. I am programming a system to display 
    historical stock trends, portfolio valuation and suggest valuable stock 
    to purchase. ReactJS is used for the frontend of the site along with plotly, 
    and PostgreSQL is used as the database.`,
  },
  {
    id: 4,
    job: "Data Analyst",
    date: "June – July 2018",
    company: "Mu Sigma",
    desc: `I was trained in the methods of Big Data Analytics covering
    exploratory data analysis and predictive modelling. I compiled a 
    model to recommend merchants to customers for a bank based on spending
    patterns using python to enhance margins.`,
  },
];
// import Col from "react-bootstrap/Col";

const Main = () => {
  return (
    <div>
      <Container style={{ minHeight: "100vh" }}>
        <Row
          className="bio"
          style={{
            fontSize: "40px",
            // marginLeft: "48%",
            marginTop: "6%",
            textAlign: "center",
          }}
        >
          <p style={{ textAlign: "center", color: "red" }}>Hi!</p>
        </Row>

        <Row
          className="bio border-bottom border-info border-5"
          style={{ marginLeft: "10%", marginRight: "10%", marginTop: "1%" }}
        >
          <p style={{ marginBottom: "15px" }}>
            I'm Sushant Guha, a methodical and team-minded second-year CmpE
            major with strong foundations in programming and software, web
            development specializing in Distributed systems and software design.
            Welcome to my website! This site highlights my work experience,
            projects I have completed, the skills I have gained over time, and
            how you can reach out to me!
          </p>
        </Row>
        <Row>
          <div style={{ textAlign: "center", paddingTop: "6px" }}>
            <a
              style={{ color: "green" }}
              href="https://github.com/SushGuha"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="fa-4x icons"
                icon={faGithub}
              ></FontAwesomeIcon>
            </a>
            <a
              style={{ color: "green" }}
              href="https://www.linkedin.com/in/sushantguha"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="fa-4x icons"
                icon={faLinkedin}
              ></FontAwesomeIcon>
            </a>
            <a
              style={{ color: "green" }}
              href="mailto:sguha38@gatech.edu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="fa-4x icons"
                icon={faEnvelope}
              ></FontAwesomeIcon>
            </a>
          </div>
        </Row>
        <Row>
          <p style={{ textAlign: "center" }}>
            <a
              className="btn btn-outline-info align-self-center"
              style={{
                margin: "4.5% 0px 0px 0px",
                // width: "15%",
                borderRadius: "40px",
                fontFamily: `"Shippori Antique", sans-serif`,
                fontSize: "medium",
                textAlign: "center",
              }}
              href="https://drive.google.com/file/d/10vpdnDxOcLag4Qg1y5-VOz1TBqAAzxrq/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Resume!
            </a>
          </p>
        </Row>
      </Container>
      <Experiences tasks={experience} />
      <Skills />
    </div>
  );
};

export default Main;
