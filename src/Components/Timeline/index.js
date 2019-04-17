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
        <ul className="listBare timelineList">
          <TimelineEvent
            title="Sacramento"
            body="Born and raised! Lady Bird really did capture everything you need to know."
          />
          <TimelineEvent
            title="San Diego"
            body="UC San Diego class of 2016, Bachelors in Computer Science. While the sun was perpetually shining outside,
              I spent my time especially interested in the theory of computation, discrete mathematics, 
              and cryptography. "
          />
          <TimelineEvent
            title="San Francisco"
            body="From the sunniest place in California, to the foggiest place in California. I entered the 'real world'
              (though I would say all those school assignments felt pretty darn real), starting a full-time 
              software engineering role at Salesforce."
          />
        </ul>
      </div>
    );
  }
}

export default Timeline;
