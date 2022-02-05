import React, { Component } from "react";
import "./index.scss";
import Card from "../Card";

class Interests extends Component {
  constructor() {
    super();
    this.state = {};
  }

  interests = [
    {
      title: "Listening",
      items: [
        {
          id: "italian",
          content: (
            <span>
              {this.linkify(
                "Coffee Break Italian",
                "https://coffeebreaklanguages.com/coffeebreakitalian/"
              )}{" "}
              (podcast)
            </span>
          ),
        },
        {
          id: "silksonic",
          content: (
            <span>
              {this.linkify(
                "Silk Sonic",
                "https://open.spotify.com/artist/6PvvGcCY2XtUcSRld1Wilr"
              )}
            </span>
          ),
        },
        {
          id: "vulfpeck",
          content: (
            <span>
              {this.linkify(
                "Vulfpeck",
                "https://open.spotify.com/artist/7pXu47GoqSYRajmBCjxdD6"
              )}
            </span>
          ),
        },
      ],
    },
    {
      title: "Watching",
      items: [
        {
          id: "succession",
          content: "Succession",
        },
        {
          id: "insecure",
          content: "Insecure",
        },
      ],
    },
    {
      title: "Reading",
      items: [
        {
          id: "between",
          content: (
            <span>
              {this.linkify(
                "Between the World and Me",
                "https://www.goodreads.com/book/show/25489625-between-the-world-and-me"
              )}{" "}
              by Ta-Nehisi Coates
            </span>
          ),
        },
      ],
    },
  ];

  linkify(content, href) {
    return (
      <a
        href={href}
        className="link-underline card-item-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  render() {
    return (
      <div className="page-content interests">
        {this.interests.map((interest) => (
          <Card
            key={interest.title}
            title={interest.title}
            items={interest.items}
          />
        ))}
      </div>
    );
  }
}

export default Interests;
