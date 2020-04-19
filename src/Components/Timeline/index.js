import React, { Component } from "react";
import "./index.scss";
import TimelineEvent from "../TimelineEvent";

class Timeline extends Component {
  constructor() {
    super();
    this.state = {};
  }

  renderEvents() {
    return (
      <ul className="listBare timelineList">
        {this.props.events.map((event) => (
          <TimelineEvent
            key={event.title}
            title={event.title}
            body={event.body}
          />
        ))}
      </ul>
    )
  }

  render() {
    return (
      <div className="timeline">
        {this.props.header}
        {this.renderEvents()}
      </div>
    );
  }
}

export default Timeline;
