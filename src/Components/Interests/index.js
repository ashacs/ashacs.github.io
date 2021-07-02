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
          id: "serial",
          content: (
            <span>
              {this.linkify(
                "Serial - Season 3",
                "https://serialpodcast.org/season-three/about"
              )}{" "}
              (podcast)
            </span>
          ),
        },
        {
          id: "anderson",
          content: (
            <span>
              {this.linkify(
                "Anderson .Paak",
                "https://open.spotify.com/artist/3jK9MiCrA42lLAdMGUZpwa"
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
          id: "handmaids-tale",
          content: "The Handmaid's Tale",
        },
        {
          id: "mr-robot",
          content: "Mr. Robot",
        },
      ],
    },
    {
      title: "Reading",
      items: [
        {
          id: "dune",
          content: (
            <span>
              {this.linkify(
                "Dune",
                "https://www.goodreads.com/book/show/44767458-dune"
              )}{" "}
              by Frank Herbert
            </span>
          ),
        },
        {
          id: "righteous-mind",
          content: (
            <span>
              {this.linkify(
                "The Righteous Mind: Why Good People Are Divided by Politics and Religion",
                "https://www.goodreads.com/book/show/11324722-the-righteous-mind"
              )}{" "}
              by Jonathan Haidt
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
