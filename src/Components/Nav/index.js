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
            <a href="/about">Who am I?</a>
          </li>
          <li className="padding-small navLink">
            <a href="/career">What do I do?</a>
          </li>
          <li className="padding-small navLink">
            <a href="/interests">What matters to me?</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
