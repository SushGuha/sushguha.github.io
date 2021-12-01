import React from "react";
import "./Component.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Skills = () => {
  return (
    <div>
      <Container>
        <Row>
          <h1 style={{ paddingBottom: "2%", color: "aqua", marginTop: "5%" }}>
            Skills
          </h1>
        </Row>
        <Row
          className="border-bottom border-info border-1"
          style={{ marginBottom: "2%" }}
        >
          <Col xs={{ order: "first" }}>
            <h2 className="job">Programming</h2>
          </Col>
          <Col
            style={{ textAlign: "center", fontSize: "85%" }}
            xs={{ order: "last" }}
          >
            C, C++, Python, Java, HTML, CSS, JavaScript, TypeScript, SQL, LaTeX
          </Col>
        </Row>
        <Row
          className="border-bottom border-info border-1"
          style={{ marginBottom: "2%" }}
        >
          <Col xs={{ order: "first" }}>
            <h2 className="job">Web Frameworks</h2>
          </Col>
          <Col
            style={{ textAlign: "center", fontSize: "85%" }}
            xs={{ order: "last" }}
          >
            ReactJS, Angular, .NET-5, Python Flask
          </Col>
        </Row>
        <Row
          className="border-bottom border-info border-1"
          style={{ marginBottom: "2%" }}
        >
          <Col xs={{ order: "first" }}>
            <h2 className="job">Software</h2>
          </Col>
          <Col
            style={{ textAlign: "center", fontSize: "85%" }}
            xs={{ order: "last" }}
          >
            PostgreSQL, Git, GitHub,VSCode, Autodesk Fusion 360, Office365
          </Col>
        </Row>
        <Row
          className="border-bottom border-info border-1"
          style={{ marginBottom: "2%" }}
        >
          <Col xs={{ order: "first" }}>
            <h2 className="job">Other</h2>
          </Col>
          <Col
            style={{ textAlign: "center", fontSize: "85%" }}
            xs={{ order: "last" }}
          >
            Engineering Documentation, Teamwork, Conflict Resolution
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skills;
