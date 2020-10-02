import React, { Component } from "react";
import "./index.scss";

class Card extends Component {
  render() {
    return (
      <div className="card">
        <h1 className="card-title">{this.props.title}</h1>
        <ul>
          {this.props.items.map(item => {
            return <li key={item.title}>{renderItem(item)}</li>;
          })}
        </ul>
      </div>
    );
  }
}

/**
 * If the provided item has both a title and a referenced link, render an anchor element.
 * Otherwise, just render the text of the title.
 */
function renderItem(item) {
  if (item.title && item.link) {
    return (
      <a href={item.link} className="card-item-link" target="_blank" rel="noopener noreferrer">
        {item.title}
      </a>
    );
  } else {
    return item.title;
  }
}

export default Card;
