import React, { Component } from "react";
import { Link } from "react-router-dom";
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
            <Link to="/about">About me</Link>
          </li>
          <li className="padding-small navLink">
            <Link to="/career">Career</Link>
          </li>
          <li className="padding-small navLink">
            <Link to="/interests">Values</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
