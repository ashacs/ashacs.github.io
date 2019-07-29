import React, { Component } from "react";
import "./index.scss";
import Nav from "../Nav";
import Avatar from "../Avatar";

class Panel extends Component {
  render() {
    return (
      <div className="panel">
        <h1 className="panelTitle">Asha C.S.</h1>
        <Avatar />
        <Nav navItemsList={["about", "career", "interests"]} />
      </div>
    );
  }
}

export default Panel;
