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
          title: "Coffee Break Italian (podcast)",
          link: "https://coffeebreaklanguages.com/coffeebreakitalian/",
        },
        {
          title: "Serial - Season 3 (podcast)",
          link: "https://serialpodcast.org/season-three/about",
        },
        {
          title: "Anderson .Paak",
          link: "https://open.spotify.com/artist/3jK9MiCrA42lLAdMGUZpwa",
        },
        {
          title: "Vulfpeck",
          link: "https://open.spotify.com/artist/7pXu47GoqSYRajmBCjxdD6",
        },
        {
          title: "St. Vincent",
          link: "https://open.spotify.com/artist/7bcbShaqKdcyjnmv4Ix8j6",
        },
      ],
    },
    {
      title: "Watching",
      items: [{ title: "The Handmaid's Tale" }, { title: "Mr. Robot" }],
    },
    {
      title: "Reading",
      items: [
        {
          title:
            "The Righteous Mind: Why Good People Are Divided by Politics and Religion by Jonathan Haidt",
          link:
            "https://www.goodreads.com/book/show/11324722-the-righteous-mind",
        },
      ],
    },
  ];

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
