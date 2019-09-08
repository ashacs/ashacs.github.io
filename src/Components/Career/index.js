import React, { Component } from "react";
import "./index.scss";
import CareerItem from "../CareerItem";

class Career extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="page-content career">
        <CareerItem
          imagePath="/resources/th-logo.png"
          title="Trailhead"
          description="Full stack software engineering role for Salesforce's learning platform."
        />
        <CareerItem
          imagePath="/resources/em-logo.png"
          title="Event Monitoring"
          description="Full stack software engineering role for a Salesforce security add-on."
        />
      </div>
    );
  }
}

export default Career;
