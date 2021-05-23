import React, { Component } from "react";
import "./index.scss";
import Icon from "../Icon";

class Footer extends Component {
  icons = [
    {
      src: "/resources/linked-in.svg",
      url: "https://www.linkedin.com/in/asha-cs/",
      alt: "LinkedIn icon",
    },
    {
      src: "/resources/email.svg",
      url: "mailto:hello@ashacs.me",
      alt: "Email icon",
    },
  ];

  renderIcons() {
    return (
      <ul className="footer-icon-list">
        {this.icons.map((icon) => (
          <li key={icon.alt} className="footer-icon">
            <Icon src={icon.src} url={icon.url} alt={icon.alt} />
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return <div className="footer">{this.renderIcons()}</div>;
  }
}

export default Footer;
