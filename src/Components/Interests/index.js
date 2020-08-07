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
          title: "Slow Burn (podcast)",
          link: "https://slate.com/podcasts/slow-burn/s4/david-duke"
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
        title: "Homegoing by Yaa Gyasi", 
        link: "https://www.goodreads.com/book/show/27071490-homegoing" 
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
