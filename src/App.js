import "./App.css";
import React from "react";
import MainNavbar from "./Components/MainNavbar";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import Contact from "./Components/Contact";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// const experience = [
//   {
//     id: 5,
//     job: "Software Development Intern",
//     date: "May – August 2022",
//     company: "Sprinklr",
//     desc: `I built an API failure anomaly detection system to determine anomalous failure rates of Sprinklr’s high volume API. I built a full-stack web app to write Sprinklr’s API failure data to analyze Sprinklr’s failure data from Influx DB and alert the API team and clients of high failure periods of API callers. I used Influx DB to store the API data and Express, React, and NodeJS for the frontend and backend.`,
//   },
//   {
//     id: 1,
//     job: "Full Stack Web Developer",
//     date: "June – August 2021",
//     company: "Ernst & Young",
//     desc: `I built a component suite to display and store 15 internal AI
//     projects with AngularJS. I generated the front end with Bootstrap5 and
//     integrated a PostgreSQL database with .NET5 middleware.`,
//   },
//   {
//     id: 2,
//     job: "CANBUS Lead & Discharge Team",
//     date: "August '20 – July '21",
//     company: "University Of Toronto Formula Racing",
//     desc: `I managed a team to collect telemetry data from the CANBUS to
//     improve performance of a formula racing car. I developed a C++ embedded
//     systems framework, programming microprocessor boards
//     to transmit this data via Bluetooth to a telemetry monitoring team.
//     I designed a safety system to discharge the HVDC accumulator in under 6 seconds.`,
//   },
//   {
//     id: 3,
//     job: "Stock Manager Dashboard",
//     date: "June '21 - Present",
//     company: "Personal Project",
//     desc: `I am implementing a full stack stock bot dashboard that manages
//     portfolio value and stock options. I am programming a system to display
//     historical stock trends, portfolio valuation and suggest valuable stock to purchase.`,
//   },
//   {
//     id: 4,
//     job: "Data Analyst",
//     date: "June – July 2018",
//     company: "Mu Sigma",
//     desc: `I was trained in the methods of Big Data Analytics covering
//     exploratory data analysis and predictive modelling. I compiled a
//     model to recommend merchants to customers for a bank based on spending
//     patterns using python to enhance margins.`,
//   },
// ];
function App() {
  return (
    <Router>
      <div className="App, App-header">
        <MainNavbar />
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
