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
            title="My first event"
            body="Information about my first event."
          />
          <TimelineEvent
            title="My second event"
            body="Information about my second event."
          />
        </ul>
      </div>
    );
  }
}

export default Timeline;
