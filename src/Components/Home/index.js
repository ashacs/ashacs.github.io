import React, { Component } from "react";
import "./index.scss";

class Home extends Component {
  render() {
    return (
      <div className="page-content home">
        <p className="home-blurb">
          Hi, my name is <span className="home-blurb-emphasis">Asha</span>! I'm
          a software engineer by day and a puzzle-doer (puzzler?) by night.
        </p>
      </div>
    );
  }
}

export default Home;
