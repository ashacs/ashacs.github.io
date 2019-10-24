import React, { Component } from "react";
import "./index.scss";
import Card from "../Card";

class Interests extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="interests">
        <Card
          title="Listening"
          items={[
            {
              title: "Reply All",
              link: "https://gimletmedia.com/shows/reply-all"
            }
          ]}
        />
        <Card
          title="Watching"
          items={[{ title: "The West Wing" }, { title: "Brooklyn 99" }]}
        />
        <Card title="Reading" items={[{ title: "Lord of the Flies" }]} />
      </div>
    );
  }
}

export default Interests;
