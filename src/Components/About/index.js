import React, { Component } from "react";
import "./index.scss";
import Timeline from "../Timeline";


class About extends Component {
  constructor() {
    super();
    this.state = {};
  }

  events = [
    {
      title: "Sacramento",
      body: "Born and raised! Lady Bird really did capture everything you need to know."
    },
    {
      title: "San Diego",
      body: "I graduaced from UC San Diego with a Bachelors in Computer Science. While the sun was shining outside, I spent my time especially interested in computational theory, discrete mathematics, and cryptography. "
    },
    {
      title: "San Francisco",
      body: "From the sunniest place in California, to the foggiest place in California. I entered the software engineering industry, starting a full-time developer position at Salesforce."
    }];

  renderHeader() {
    return (
      <h1>
        <span role="img" aria-label="Map emoji">
          🗺️
          </span>{" "}
          My Journey
      </h1>
    )
  }

  render() {
    return (
      <div className="page-content ">
        <Timeline
          header={this.renderHeader()}
          events={this.events}
        />
      </div>
    );
  }
}

export default About;
