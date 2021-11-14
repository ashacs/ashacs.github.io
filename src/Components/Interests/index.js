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
          id: "ted-lasso",
          content: "Ted Lasso",
        },
      ],
    },
    {
      title: "Reading",
      items: [
        {
          id: "achilles",
          content: (
            <span>
              {this.linkify(
                "The Song of Achilles",
                "https://www.goodreads.com/book/show/13623848-the-song-of-achilles"
              )}{" "}
              by Madeline Miller
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
