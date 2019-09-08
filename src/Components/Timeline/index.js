import React, { Component } from "react";
import "./index.scss";
import TimelineEvent from "../TimelineEvent";

class Timeline extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="timeline">
        <h1>
          <span role="img" aria-label="Map emoji">
            🗺️
          </span>{" "}
          My Journey
        </h1>
        <ul className="listBare timelineList">
          <TimelineEvent
            title="Sacramento"
            body="Born and raised! Lady Bird really did capture everything you need to know."
          />
          <TimelineEvent
            title="San Diego"
            body="UC San Diego class of 2016, with a Bachelors in Computer Science. While the sun was 
              shining outside, I spent my time especially interested in computational theory, discrete 
              mathematics, and cryptography. "
          />
          <TimelineEvent
            title="San Francisco"
            body="From the sunniest place in California, to the foggiest place in California. I entered the 
            software engineering industry, starting a full-time developer position at Salesforce."
          />
        </ul>
      </div>
    );
  }
}

export default Timeline;
