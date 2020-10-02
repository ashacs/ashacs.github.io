import React, { Component } from "react";
import "./index.scss";
import Timeline from "../Timeline";

class Career extends Component {
  constructor() {
    super();
    this.state = {};
  }

  events = [
    {
      title: "Transaction Security",
      body: "On my first team at the company, I worked on a security feature that intercepts Salesforce events and applies security policies to them. Our code lived in some pretty important parts of the application, so I learned a lot about quality."
    },
    {
      title: "Event Monitoring",
      body: "My second team continued to support Transaction Security, but also had the expanded scope of providing information about the events to the customer. We stored events in HBase and streamed them through Kafka."
    },
    {
      title: "Trailhead",
      body: "Third time's the charm! This move to work on Salesforce's free learning platform was inspired by my passion for education. It also gave me the opportunity to do full stack development with technologies like TypeScript, GraphQL, and web components."
    }
  ];

  renderHeader() {
    return (
      <div className="heading">
          <img src="/resources/sfdc-cloud.svg" alt="" className="heading-icon" />
        <h1>
          {" "}
        Salesforce
        </h1>
      </div>
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

export default Career;
