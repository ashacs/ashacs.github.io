import React, { Component } from "react";
import "./index.scss";

class TimelineEvent extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <li>
        <h2>{this.props.title}</h2>
        <p>{this.props.body}</p>
      </li>
    );
  }
}

export default TimelineEvent;
