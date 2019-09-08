import React, { Component } from "react";
import "./index.scss";

class CareerItem extends Component {
  render() {
    return (
      <div className="career-item">
        <div className="career-item-title">
          <img src={this.props.imagePath} alt="" width="100px" height="100px" />
          <h2>{this.props.title}</h2>
        </div>
        <p className="career-item-description">{this.props.description}</p>
      </div>
    );
  }
}

export default CareerItem;
