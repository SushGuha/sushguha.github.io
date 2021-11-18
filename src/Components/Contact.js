import React from "react";
import Form from "./Form";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const Contact = () => {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          color: "aqua",
          marginTop: "7%",
          fontFamily: `"Shippori Antique", sans-serif`,
        }}
      >
        CONNECT WITH ME
      </h1>

      <div
        className="border-top border-info border-5"
        style={{
          textAlign: "center",
          paddingTop: "6px",
          marginLeft: "25%",
          marginRight: "25%",
        }}
      >
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
          href="https://www.instagram.com/sushant_guha/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className="fa-4x icons"
            icon={faInstagram}
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
          href="https://www.youtube.com/channel/UC5vDGwL7cZ2T0IPmjsHSLjQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className="fa-4x icons"
            icon={faYoutube}
          ></FontAwesomeIcon>
        </a>
      </div>
      <div style={{ marginTop: "3%", textAlign: "center" }}>
        <h3
          style={{
            marginBottom: "1%",
            fontFamily: `"Shippori Antique", sans-serif`,
            color: "aqua",
          }}
        >
          Email Me:{" "}
        </h3>
        <Form></Form>
      </div>
    </div>
  );
};

export default Contact;
