import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.scss";

class NavItem extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <li className="nav-link">
        <Link to={`/${this.props.title}`}>{this.props.title}</Link>
      </li>
    );
  }
}

export default NavItem;
