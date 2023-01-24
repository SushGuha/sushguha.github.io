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
            Java, Python, JavaScript, C/C++, HTML, CSS, CUDA, VHDL, Verilog
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
            NodeJS, React, Angular, ExpressJS, Bootstrap, Socket.io, SFML,
            OpenMP, MPI, Linux
          </Col>
        </Row>
        <Row
          className="border-bottom border-info border-1"
          style={{ marginBottom: "2%" }}
        >
          <Col xs={{ order: "first" }}>
            <h2 className="job">Databases</h2>
          </Col>
          <Col
            style={{ textAlign: "center", fontSize: "85%" }}
            xs={{ order: "last" }}
          >
            SQL, MongoDB, Firebase, Elasticsearch, PostgreSQL, InfluxDB{" "}
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
            Git, GitHub, VSCode, Microsoft Office Suite and Libre Office Suite{" "}
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
