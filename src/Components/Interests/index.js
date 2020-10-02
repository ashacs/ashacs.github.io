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
          title: "Reply All (podcast)",
          link: "https://gimletmedia.com/shows/reply-all"
        },
        {
          title: "Serial - Season 3 (podcast)",
          link: "https://serialpodcast.org/season-three/about"
        },
        {
          title: 'Tennis (band)',
          link: "https://open.spotify.com/artist/1ybAN3utgdoUL1MUCtH4QM"
        },
        {
          title: 'Papooz (band)',
          link: 'https://open.spotify.com/artist/2gaCpvhi31OZtozJKsr5gm'
        }
      ]
    },
    {
      title: "Watching",
      items: [{ title: "The West Wing" }, { title: "Buffy the Vampire Slayer" }]
    },
    {
      title: "Reading",
      items: [{ 
        title: "Sapiens by Yuval Noah Harari", 
        link: "https://www.goodreads.com/book/show/23692271-sapiens" 
      }]
    }
  ];

  render() {
    return (
      <div className="page-content interests">
        {this.interests.map((interest) => (
            <Card
              title={interest.title}
              items={interest.items}
            />
        ))}        
      </div>
    );
  }
}

export default Interests;
