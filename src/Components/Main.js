import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Component.css";
import Experiences from "./Experiences";
const experience = [
  {
    id: 1,
    job: "Full Stack Web Developer",
    date: "June – August 2021",
    company: "Ernst & Young",
    desc: `I built a component suite to display and store 15 internal AI 
    projects with AngularJS. I generated the front end with Bootstrap5 and
    integrated a PostgreSQL database with .NET5 middleware.`,
  },
  {
    id: 2,
    job: "CANBUS Lead & Discharge Team",
    date: "August '20 – July '21",
    company: "University Of Toronto Formula Racing",
    desc: `I managed a team to collect telemetry data from the CANBUS to 
    improve performance of a formula racing car. I developed a C++ embedded
    systems framework, programming microprocessor boards 
    to transmit this data via Bluetooth to a telemetry monitoring team. 
    I designed a safety system to discharge the HVDC accumulator in under 6 seconds.`,
  },
  {
    id: 3,
    job: "Stock Manager Dashboard",
    date: "June '21 - Present",
    company: "Personal Project",
    desc: `I am implementing a full stack stock bot dashboard that manages 
    portfolio value and stock options. I am programming a system to display
    historical stock trends, portfolio valuation and suggest valuable stock to purchase.`,
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
            I'm Sushant Guha, a methodical and team-minded second year CmpE
            major with strong foundations in programming and software, web
            development specializing in Distributed systems and software design.
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
                margin: "6% 0px 0px 0px",
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
      <Experiences style={{ minHeight: "100vh" }} tasks={experience} />
    </div>
  );
};

export default Main;

// <Container style={{ minHeight: "100vh" }}>
//   <Row>
//     <Col xs={{ order: "first" }}>
//       {/* image */}
//       <img
//         src={`https://www.aperturebuzz.com/wp-content/uploads/2018/04/windows_xp_bliss-wide.jpg`}
//         width={"40%"}
//         height={"50%"}
//         alt="My 'Wonderful' face"
//       />
//     </Col>
//   </Row>
//   <Row>
//     <Col xs={{ order: "first" }}></Col>
//     <Col>
//       {/* <a
//         className="col btn btn-outline-info content-first align-self-center"
//         style={{ margin: "40px 0px 0px 0px", borderRadius: "40px" }}
//         href="https://drive.google.com/file/d/1PBpbGg16tc4UA38jxAxY-J4Lyx-xvxf0/view?usp=sharing"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <p style={{ paddingTop: "9%", fontSize: "90%" }}>My Resume!</p>
//       </a> */}
//       <a
//         className="col btn btn-outline-info content-first align-self-center"
//         style={{
//           margin: "40px 0px 0px 0px",
//           width: "40%",
//           borderRadius: "40px",
//         }}
//         href="https://drive.google.com/file/d/1PBpbGg16tc4UA38jxAxY-J4Lyx-xvxf0/view?usp=sharing"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         My Resume!
//       </a>
//     </Col>
//     <Col xs={{ order: "last" }}></Col>
//   </Row>
//   <Row>
//     <Col xs={{ order: "first" }}></Col>
//     <Col
//       className="rounded border-3 border border-info"
//       xs={{ order: "last" }}
//     >
//       <p
//         className="points"
//         style={{ textAlign: "center", fontSize: "105%" }}
//       >
//         Hi!
//       </p>
//       <p
//         className="points rounded border-3 border border-info"
//         style={{
//           textAlign: "center",
//           fontSize: "80%",
//           marginRight: "15%",
//           marginLeft: "15%",
//           paddingRight: "5%",
//           paddingLeft: "5%",
//           paddingBottom: "2%",
//         }}
//       >
//         I'm Sushant Guha, a methodical and team-minded second year CmpE
//         major with strong foundations in programming and software and web
//         development specializing in Distributed systems and software design.
//       </p>
//     </Col>
//   </Row>
// </Container>
