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
      <ul>
        <TimelineEvent
          title="My first event"
          body="Information about my first event."
        />
      </ul>
    );
  }
}

export default Timeline;
