import React from "react";
import "./Component.css";
import { useState } from "react";
import * as ReactBootstrap from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
const MainNavbar = () => {
  const currentPath = useLocation.apply().pathname;
  const first = () => {
    if (currentPath === "/") {
      return true;
    } else {
      return false;
    }
  };
  console.log(currentPath);
  const [isHome, setIsHome] = useState(first());

  const numChange = () => {
    setIsHome(!isHome);
  };
  return (
    <ReactBootstrap.Navbar expand="lg">
      <ReactBootstrap.Container>
        {/* <ReactBootstrap.Navbar.Brand
          href="#home"
          className="navText"
          style={{ color: "red" }}
        >
          Welcome!
        </ReactBootstrap.Navbar.Brand> */}
        <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
        <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
          <ReactBootstrap.Nav className="me-auto">
            <Link
              onClick={numChange}
              className={`navText ${isHome ? "navText1" : "navText2"}`}
              style={{ marginRight: "10%" }}
              to="/"
            >
              Home
            </Link>

            <Link
              onClick={numChange}
              className={`navText ${isHome ? "navText2" : "navText1"}`}
              to="/contact"
            >
              Contact
            </Link>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar.Collapse>
      </ReactBootstrap.Container>
    </ReactBootstrap.Navbar>
  );
};

export default MainNavbar;
