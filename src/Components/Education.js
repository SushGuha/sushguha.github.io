import React from "react";
import education from "./EducationList";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ExperienceModule from "./ExperienceModule";

const Education = () => {
  return (
    <div style={{ marginBottom: "4%" }}>
      <Container>
        <Row>
          <h1
            style={{
              paddingBottom: "2%",
              color: "aqua",
              textAlign: "center",
            }}
          >
            EDUCATION
          </h1>
        </Row>
      </Container>
      {education.map((task) => (
        <ExperienceModule key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Education;
