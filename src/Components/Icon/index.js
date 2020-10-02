import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.scss";

class Icon extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.url) {
      return (
        <a href="url" target="_blank" rel="noopener noreferrer">
          <img src={this.props.src} className="icon-img" alt={this.props.alt} />
        </a>
      );
    }
    return (
      <img src={this.props.src} className="icon-img" alt={this.props.alt} />
    );
  }
}

export default Icon;

Icon.propTypes = {
  url: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};
