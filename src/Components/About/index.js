import React, { Component } from "react";
import "./index.scss";
import Timeline from "../Timeline";

class About extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="page-content ">
        <Timeline />
      </div>
    );
  }
}

export default About;
