import React, { Component } from "react";
import "./index.scss";

class Avatar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="avatar">
        <img
          className="rounded"
          src="/resources/avatar.jpg"
          alt="profile avatar"
          width="25%"
        />
      </div>
    );
  }
}

export default Avatar;
