import React, { Component } from "react";
import "./index.scss";
import Nav from "../Nav";
import Avatar from "../Avatar";
import Footer from "../Footer";

class Panel extends Component {
  render() {
    return (
      <div className="panel">
        <a href="/">
          <h1 className="panelTitle">
            Asha
            <br />
            Camper
            <br />
            Singh
          </h1>
        </a>
        <Avatar imagePath="/resources/avatar.jpg" />
        <Nav navItemsList={["about", "career", "interests"]} />
        <div className="panel-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Panel;
