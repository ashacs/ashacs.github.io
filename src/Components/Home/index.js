import React, { Component } from "react";
import "./index.scss";

class Home extends Component {
  render() {
    return (
      <div className="page-content home">
        <p className="home-blurb">
          Hi, my name is <span className="home-blurb-emphasis">Asha</span>! I'm
          a lover of puzzles. Sometimes it's your traditional jigsaw, and
          sometimes it's using every last inch of storage space in a San Francisco
          apartment.
        </p>
      </div>
    );
  }
}

export default Home;
