import React from "react";
import Form from "./Form";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import foto from "./cropped.png"; // with import
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const Contact = () => {
  return (
    <div>
      <div
        style={{
          marginLeft: "15%",
          marginRight: "15%",
          marginTop: "4.5%",
          fontFamily: `"Shippori Antique", sans-serif`,
          textAlign: "center",
          minHeight: "87vh",
        }}
      >
        <img className="image" style={{ marginBottom: "5%" }} src={foto} />
        <p>
          I'm Sushant Guha, a student of Computer Engineering passionate about
          Software and Web technologies. I am a sophomore currently pursuing a
          bachelor's degree at Georgia Institute of Technology having completed
          my first year at the University of Toronto. I have past work
          experience in web development, and have gained skills across multiple
          front-end frameworks, and middleware and backend technologies. If you
          would like to work on a project together, you can connect with me
          using the information below!
        </p>
      </div>
      <Container
        style={{
          fontFamily: `"Shippori Antique", sans-serif`,
          textAlign: "center",
          marginBottom: "5%",
        }}
      >
        <Row>
          <h1 style={{ paddingBottom: "2%", color: "aqua" }}>Career Goals</h1>
        </Row>
        <Row>
          <p>
            I have always been passionate about software development. My
            internship at Ernst & Young helped me gain real-world experience on
            this front, and I have explored the subject since then. I have
            undertaken projects including developing a portfolio for a stock
            trading bot, and this website. I have also explored new web
            technologies including EmailJS, ReactJS, and Bootstrap-5.
            <span style={{ color: "green" }}>
              {" "}
              I am looking to take part in an internship this summer (Summer of
              2022) to further explore Software development
            </span>
            . I hope to use my knowledge and experience to help both develop new
            applications and improve software currently used worldwide. I am
            also looking to learn more about hardware and software systems
            through my threads at aTech. Over the following term (Spring 2022),
            I will be taking courses on Java data structures and algorithms,
            discrete math, programming HW/SW systems, and Digital System Design.
            Throughout my junior and senior years (Fall '22 - Spring '24), I
            will continue to explore these concepts with coursework in Very
            Large Scale Integration (VLSI), Cloud Computing, GPU Programming,
            Mobile Computing, and Embedded Systems Design.
          </p>
        </Row>
      </Container>

      <Container
        style={{
          fontFamily: `"Shippori Antique", sans-serif`,
          textAlign: "center",
          marginBottom: "5%",
        }}
      >
        <Row>
          <h1 style={{ paddingBottom: "2%", color: "aqua" }}>
            About This Website
          </h1>
        </Row>
        <Row>
          <p>
            I developed this site using the ReactJS front-end framework. Given
            my past experience with Web development in Angular, I decided to
            explore other frameworks and apply my knowledge of web development
            for a different type of website. I gained knowledge on React
            concepts including React Components, React Router, State, and Hooks.
            I used React Components to increase the utilization of existing code
            to improve modularity. Furthermore, I used the React Router to more
            efficiently route between pages without having to refresh the entire
            webpage. This improves the loading time and responsiveness of the
            webpage. I used Bootstrap, an open-source CSS framework to better
            improve the user interface of the site, and provide better
            maintainability over time. This allowed me to explore the newer
            Bootstrap version of Bootstrap-5. I learnt to better style my
            components both for functionality and aesthetics. The use of
            Bootstrap styles also taught me the importance of website
            scaleability (The design of the website in different viewing
            frames). I learnt to design a responsive site that could be viewed
            across multiple devices and platforms. I also learnt to incorporate
            FontAwesome icon packages to further improve the website's user
            interface. FontAwesome is a library of fonts and icons for web
            development. I used Font Awesome to provide a better way for users
            to reach out to me. This includes Icons for social media, GitHub,
            and LinkedIn. I used Figma, an interface design tool to better
            visualise my website prior to development. This helped me design a
            more user-friendly interface through better layout, colour and font
            choices, and component design. Through this process, I also learnt
            to better use colours to draw user attention to specific components,
            and provide the user with a better overall experience. I managed to
            incorporate Google Fonts, an open-source project with font families.
            It is the most widely used font service. I learnt to incorporate
            Google Fonts into my React application to build a better user
            interface and provide users with a better reading experience. I
            learnt to use EmailJS, a lightweight email service to send emails
            directly from JavaScript. I learnt to integrate the service with
            React without the use of a backend, vastly improving the performance
            of the website. I gained experience with the use of Git, a version
            control system that tracks previous versions of the file. Using Git,
            I was able to more effectively make and revert to changes in my
            file. This helped me reduce debugging time and more efficiently
            develop the webpage. Finally, I researched how to deploy and host a
            React website on GitHub. I learnt to build a react app to generate a
            more efficient webpage and to deploy that site using GitHub pages.
          </p>
        </Row>
      </Container>
      <h1
        style={{
          textAlign: "center",
          color: "aqua",
          fontFamily: `"Shippori Antique", sans-serif`,
        }}
      >
        CONNECT WITH ME
      </h1>
      <div
        className="border-top border-info border-5"
        style={{
          textAlign: "center",

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
