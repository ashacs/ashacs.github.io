import React, { Component } from "react";
import "./index.scss";

class Nav extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <nav>
        <ul className="listBare navList">
          <li className="padding-small navLink">
            <a href="/about">About me</a>
          </li>
          <li className="padding-small navLink">
            <a href="/career">Career</a>
          </li>
          <li className="padding-small navLink">
            <a href="/interests">Values</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
