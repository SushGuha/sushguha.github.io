import React from "react";
import ExperienceModule from "./ExperienceModule";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
const Experiences = (props) => {
  return (
    <div>
      <Container>
        <Row>
          <h1
            style={{
              paddingTop: "1%",
              paddingBottom: "2%",
              color: "aqua",
              textAlign: "center",
            }}
          >
            WORK EXPERIENCE
          </h1>
        </Row>
      </Container>
      {props.tasks.map((task) => (
        <ExperienceModule key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Experiences;
