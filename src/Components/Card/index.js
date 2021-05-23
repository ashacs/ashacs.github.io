import React, { Component } from "react";
import "./index.scss";

class Card extends Component {
  render() {
    return (
      <div className="card">
        <h1 className="card-title">{this.props.title}</h1>
        <ul>
          {this.props.items.map((item) => {
            return <li key={item.id}>{item.content}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Card;
