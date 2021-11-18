import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Component.css";
const ExperienceModule = (props) => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={{ order: "first" }}>
            <h2 className="job">{props.task.job}</h2>
            <h5 style={{ fontStyle: "italic", color: "chartreuse" }}>
              {props.task.date}
            </h5>
          </Col>
        </Row>
        <Row>
          <Col xs={{ order: "first" }}></Col>
          <Col xs={{ order: "last" }}>
            <h4
              className="navText"
              style={{
                fontStyle: "italic",
                textAlign: "center",
                color: "chartreuse",
              }}
            >
              {props.task.company}
            </h4>
            <p
              className="points"
              style={{ fontStyle: "italic", color: "aqua" }}
            >
              {props.task.desc}
            </p>
          </Col>
        </Row>
        <hr />
      </Container>
      <br />
    </div>
  );
};

export default ExperienceModule;
